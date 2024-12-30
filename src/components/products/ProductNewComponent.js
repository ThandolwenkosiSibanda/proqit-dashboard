import React, { useEffect, useState } from "react";
import "./index.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_PRODUCT_MUTATION,
  DELETE_PROMOTION_MUTATION,
} from "../../gql/Mutation";
import {
  CATEGORIES_QUERY,
  PROMOTION_EDIT_QUERY,
  SUB_CATEGORIES_QUERY,
  SUB_SUB_CATEGORIES_QUERY,
} from "../../gql/Query";
import { useParams } from "react-router-dom";
import DraftEditor from "./DraftEditor";
import { EditorState, convertToRaw } from "draft-js";

import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

// // replace with database
// const allTags = [
// //   { name: 'chocolate', label: 'Chocolate' },
// //   { name: 'strawberry', label: 'Strawberry' },
// //   { name: 'vanilla', label: 'Vanilla' },
// // ];

const types = [
  { name: "Basic", label: "Basic" },
  { name: "Premium", label: "Premium" },
];

const ProductNewComponent = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const { id } = useParams();

  const dataToBeSaved = JSON.stringify(
    convertToRaw(editorState.getCurrentContent())
  );

  const { data, loading } = useQuery(PROMOTION_EDIT_QUERY, {
    fetchPolicy: "network-only",
    pollInterval: 500,
    variables: {
      _id: id,
    },
  });

  const { data: categories } = useQuery(CATEGORIES_QUERY, {
    fetchPolicy: "network-only",
    pollInterval: 500,
  });

  const { data: subCategories } = useQuery(SUB_CATEGORIES_QUERY, {
    fetchPolicy: "network-only",
    pollInterval: 500,
  });

  const { data: subSubCategories } = useQuery(SUB_SUB_CATEGORIES_QUERY, {
    fetchPolicy: "network-only",
    pollInterval: 500,
  });

  const [form, setForm] = useState({});

  useEffect(() => {
    setForm(data?.promotionEdit);
    if (data?.promotion?.expiryDate) {
      setExpiryDate(parseInt(data?.promotion?.expiryDate));
    }
  }, [loading]);

  console.log("form", form);

  const [images, setImages] = useState([]);
  const [imagesUrls, setImagesUrls] = useState([]);
  const [docs, setDocs] = useState([]);
  const [docsUrls, setDocsUrls] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [selectedSubSubCategories, setSelectedSubSubCategories] = useState([]);

  const [expiryDate, setExpiryDate] = useState(new Date());

  const [active, setActive] = useState({});

  const [showDelete, setShowDelete] = useState(false);

  console.log("selectedCategories", selectedCategories);
  console.log("selectedSubCategories", selectedSubCategories);
  console.log("selectedSubSubCategories", selectedSubSubCategories);

  useEffect(() => {
    console.log("fire");
  }, [selectedCategories]);

  const handleDelete = (promotion) => {
    deletePromotion();
    setShowDelete(false);
  };

  const handleCancelDelete = (promotion) => {
    setActive({});
    setShowDelete(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelect = (name, value) => {
    setForm({ ...form, [name]: value.name });
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      setImages(e.target.files);
    }
  };

  const handleDocChange = (e) => {
    if (e.target.files) {
      setDocs(e.target.files);
    }
  };

  const [submit, { data: addData, loading: addLoading, error: addError }] =
    useMutation(CREATE_PRODUCT_MUTATION, {
      variables: {
        name: form?.name,
        guestPrice: parseFloat(form?.guestPrice),
        tradeAccountPrice: parseFloat(form?.tradeAccountPrice),
        bulkPrice: parseFloat(form?.bulkPrice),
        shortDescription: form?.shortDescription,
        longDescription: form?.longDescription,
        content: dataToBeSaved,
        images: imagesUrls.length > 0 ? imagesUrls : "",
        technicalDownLoads: docsUrls.length > 0 ? docsUrls : "",
        tags: selectedTags,
        categories: selectedCategories.map((category) => category._id),
        subCategories: selectedSubCategories.map((category) => category._id),
        subSubCategories: selectedSubSubCategories.map(
          (category) => category._id
        ),
        type: form?.type,
      },
    });

  console.log("addData", addData);

  console.log("addLoading", addLoading);

  console.log("addError on add", JSON.stringify(addError, null, 2));

  const [deletePromotion, { data: deleteData, error: deleteError }] =
    useMutation(DELETE_PROMOTION_MUTATION, {
      variables: {
        _id: active._id,
      },
    });

  console.log("deleteData", deleteData);

  console.log("deleteError", JSON.stringify(deleteError, null, 2));

  const handleSubmit = () => {
    // Push all the axios request promise into a single array

    let urls = [];
    const uploaders = [...images].map((file) => {
      const url = "https://api.cloudinary.com/v1_1/molowehou/upload";
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "y1t423pb");

      return axios
        .post(url, formData, {
          headers: { "X-Requested-With": "XMLHttpRequest" },
        })
        .then((response) => {
          const data = response.data;
          const fileURL = data.secure_url;
          urls.push(fileURL);
        });
    });

    let docUrls = [];
    const docUploaders = [...images].map((file) => {
      const url = "https://api.cloudinary.com/v1_1/molowehou/upload";
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "y1t423pb");

      return axios
        .post(url, formData, {
          headers: { "X-Requested-With": "XMLHttpRequest" },
        })
        .then((response) => {
          const data = response.data;
          const fileURL = data.secure_url;
          docUrls.push(fileURL);
        });
    });

    // Once all the files are uploaded
    axios.all([uploaders, docUploaders]).then(() => {
      if (urls.length > 0 && docUrls.length > 0) {
        setImagesUrls(urls);
        setDocsUrls(docUrls);
        submit();
      } else {
        submit();
      }
    });
  };

  const getLastTagId = () => {
    return selectedTags.reduce(
      (prev, current) => (prev.y > current.y ? prev : current),
      0
    );
  };

  const getLastCategoryId = () => {
    return selectedCategories.reduce(
      (prev, current) => (prev.y > current.y ? prev : current),
      0
    );
  };

  const getLastId = (data) => {
    return data.reduce(
      (prev, current) => (prev.y > current.y ? prev : current),
      0
    );
  };

  const addTag = () => {
    const newTags = [
      ...selectedTags,
      { id: selectedTags.length > 0 ? getLastTagId().id + 1 : 0 },
    ];
    setSelectedTags(newTags);
  };

  const updateTag = (id, value) => {
    const updatedArr = selectedTags.map((obj) => {
      if (obj.id === id) {
        return { ...obj, value: value?.name };
      }
      return obj;
    });
    setSelectedTags(updatedArr);
  };

  const updateCategory = (id, value) => {
    const updatedArr = selectedCategories.map((obj) => {
      if (obj.id === id) {
        return { ...obj, value: value?.name, _id: value?._id };
      }
      return obj;
    });
    setSelectedCategories(updatedArr);
  };

  const updateSubCategory = (id, value) => {
    const updatedArr = selectedSubCategories.map((obj) => {
      if (obj.id === id) {
        return { ...obj, value: value?.name, _id: value?._id };
      }
      return obj;
    });
    setSelectedSubCategories(updatedArr);
  };

  const updateSubSubCategory = (id, value) => {
    const updatedArr = selectedSubSubCategories.map((obj) => {
      if (obj.id === id) {
        return { ...obj, value: value?.name, _id: value?._id };
      }
      return obj;
    });
    setSelectedSubSubCategories(updatedArr);
  };

  const updateType = (id, value) => {
    const updatedArr = selectedCategories.map((obj) => {
      if (obj.id === id) {
        return { ...obj, value: value?.name };
      }
      return obj;
    });
    setSelectedCategories(updatedArr);
  };

  const addCategory = () => {
    const newCategories = [
      ...selectedCategories,
      {
        id:
          selectedCategories.length > 0
            ? getLastId(selectedCategories).id + 1
            : 0,
      },
    ];
    setSelectedCategories(newCategories);
  };

  const addSubCategory = () => {
    const newCategories = [
      ...selectedSubCategories,
      {
        id:
          selectedSubCategories.length > 0
            ? getLastId(selectedSubCategories).id + 1
            : 0,
      },
    ];
    setSelectedSubCategories(newCategories);
  };

  const addSubSubCategory = () => {
    const newCategories = [
      ...selectedSubSubCategories,
      {
        id:
          selectedSubSubCategories.length > 0
            ? getLastId(selectedSubSubCategories).id + 1
            : 0,
      },
    ];
    setSelectedSubSubCategories(newCategories);
  };

  return (
    <>
      <div className="" style={{ padding: "10px" }}>
        <div style={{ display: "flex", padding: "20px" }}>
          <h5>Add Product</h5>
        </div>

        <Modal show={showDelete} onHide={handleCancelDelete}>
          <Modal.Header closeButton>
            Are you sure you want to delete this promotion
          </Modal.Header>
          <Modal.Body>
            <Form>
              <div>{active.title}</div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCancelDelete}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete Promotion
            </Button>
          </Modal.Footer>
        </Modal>

        <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Type </Form.Label>

                <Select
                  defaultValue={"Basic"}
                  onChange={(e) => handleSelect("type", e)}
                  options={types}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  name={"name"}
                  value={form?.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Guest Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  name={"guestPrice"}
                  value={form?.guestPrice}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Trade Account Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  name={"tradeAccountPrice"}
                  value={form?.tradeAccountPrice}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Bulk Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  name={"bulkPrice"}
                  value={form?.bulkPrice}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Short Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  name={"shortDescription"}
                  value={form?.shortDescription}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="">
                <Form.Label>Long Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  name={"longDescription"}
                  value={form?.longDescription}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* <Button variant="outline-primary" onClick={() => addTag()}>Add Tag</Button> */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  width: "250px",
                  flexWrap: "wrap",
                  marginTop: "10px",
                  marginBottom: "50px",
                }}
              >
                {/* {selectedTags.map((tag, index)=> 
               <Select
               
                onChange={()=>updateTag(index, allTags[index + 1])}
                options={allTags}
              />
    )  
    } */}
              </div>

              <Button variant="outline-primary" onClick={() => addCategory()}>
                Add Category
              </Button>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  width: "250px",
                  flexWrap: "wrap",
                  marginTop: "10px",
                  marginBottom: "50px",
                }}
              >
                {selectedCategories.map((category, index) => (
                  <Select
                    onChange={() =>
                      updateCategory(index, categories?.categories[index + 1])
                    }
                    options={categories?.categories.map((guest, index) => {
                      return {
                        label: guest.name,
                        value: guest,
                        key: index,
                      };
                    })}
                  />
                ))}
              </div>

              <Button
                variant="outline-primary"
                onClick={() => addSubCategory()}
              >
                Add Sub Category
              </Button>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  width: "250px",
                  flexWrap: "wrap",
                  marginTop: "10px",
                  marginBottom: "50px",
                }}
              >
                {selectedSubCategories.map((category, index) => (
                  <Select
                    onChange={() =>
                      updateSubCategory(
                        index,
                        subCategories?.subCategories[index + 1]
                      )
                    }
                    options={subCategories?.subCategories.map(
                      (guest, index) => {
                        return {
                          label: guest.name,
                          value: guest,
                          key: index,
                        };
                      }
                    )}
                  />
                ))}
              </div>

              <Button
                variant="outline-primary"
                onClick={() => addSubSubCategory()}
              >
                Add Sub SubCategory
              </Button>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  width: "250px",
                  flexWrap: "wrap",
                  marginTop: "10px",
                  marginBottom: "50px",
                }}
              >
                {selectedSubSubCategories.map((category, index) => (
                  <Select
                    onChange={() =>
                      updateSubSubCategory(
                        index,
                        subSubCategories?.subSubCategories[index + 1]
                      )
                    }
                    options={subSubCategories?.subSubCategories.map(
                      (guest, index) => {
                        return {
                          label: guest.name,
                          value: guest,
                          key: index,
                        };
                      }
                    )}
                  />
                ))}
              </div>
            </Form>
          </div>

          <div style={{ display: "flex", flexDirection: "column", flex: 4 }}>
            <DraftEditor
              editorState={editorState}
              setEditorState={setEditorState}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>Images</Form.Label>
              <Form.Control
                type="file"
                size="lg"
                multiple
                onChange={handleImageChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Images</Form.Label>
            </Form.Group>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {[...images].map((image, index) => (
                <div
                  key={index}
                  style={{
                    padding: "4px",
                    borderRadius: "10px",
                    height: "140px",
                  }}
                >
                  <img
                    src={URL.createObjectURL(image)}
                    style={{ height: "130px" }}
                    alt={"name of the"}
                  />
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>Technical DownLoads</Form.Label>
              <Form.Control
                type="file"
                size="lg"
                multiple
                onChange={handleDocChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Technical DownLoads</Form.Label>
            </Form.Group>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {[...docs].map((image, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    backgroundColor: "grey",
                    padding: "4px",
                    borderRadius: "10px",
                    height: "140px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faFileLines}
                    style={{ fontSize: "50px" }}
                    color={"white"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Add Product
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductNewComponent;
