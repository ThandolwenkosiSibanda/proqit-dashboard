import React, {useEffect, useState} from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


import axios from 'axios';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_PRODUCT_MUTATION, DELETE_PROMOTION_MUTATION } from '../../gql/Mutation';
import {  PROMOTION_EDIT_QUERY, SHOPS_QUERY } from '../../gql/Query';
import {useParams} from 'react-router-dom';
import DraftEditor from './DraftEditor';
import { EditorState, convertToRaw } from 'draft-js';


import Select from 'react-select';


// replace with database
const allTags = [
  { name: 'chocolate', label: 'Chocolate' },
  { name: 'strawberry', label: 'Strawberry' },
  { name: 'vanilla', label: 'Vanilla' },
];

const allCategories = [
  { name: 'chocolate', label: 'Chocolate' },
  { name: 'strawberry', label: 'Strawberry' },
  { name: 'vanilla', label: 'Vanilla' },
];



const CategoryNewComponent = () => {

  
  const [selectedOption, setSelectedOption] = useState(null);

  console.log("selectedOption", selectedOption);


  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),  
);

  const {id} = useParams();

  

  const dataToBeSaved = JSON.stringify(convertToRaw(editorState.getCurrentContent()));


  console.log('dataToBeSaved', dataToBeSaved)



 

  const {data, loading} = useQuery(PROMOTION_EDIT_QUERY, {
    fetchPolicy: 'network-only',
    pollInterval: 500,
    variables: {
       _id: id
    },
  });

  const {data: shops} = useQuery(SHOPS_QUERY, {
    fetchPolicy: 'network-only',
    pollInterval: 500,
  });



  console.log('data', data?.promotion)
  

  console.log('id', id)





    const [form, setForm] = useState({});



    useEffect(()=> {
     setForm(data?.promotionEdit);
     if(data?.promotion?.expiryDate){
      setExpiryDate(parseInt(data?.promotion?.expiryDate));
     
     }

     

    }, [loading]);



    console.log('form', form)


    const [images, setImages] = useState([]);
    const [imagesUrls, setImagesUrls] = useState([]);
    const [expiryDate, setExpiryDate] = useState(new Date());

    const [active, setActive] = useState({});




console.log('images to be uploaded', images);

    const [showDelete, setShowDelete] = useState(false);


    const [showAdd, setShowAdd] = useState(false);


    const handleDelete = (promotion) => {
        deletePromotion();
        setShowDelete(false);
    };

    const handleCancelDelete = (promotion) => {
        setActive({});
        setShowDelete(false)
    };


    const handleChange = (e) => {
console.log('handle change', e.target.name)

       console.log('form', form)

       setForm({...form, [e.target.name]: e.target.value})
      };


    const handleImageChange = (e) => {

        if (e.target.files) {
          setImages(e.target.files);
        }
      };




      console.log('data', data);

      console.log('active', active)


    const [submit, {data: addData,loading: addLoading, error: addError}] = useMutation(CREATE_PRODUCT_MUTATION, {
        variables: {
          name: form?.name,
          guestPrice: parseFloat(form?.guestPrice),
          tradeAccountPrice: parseFloat(form?.tradeAccountPrice),
          bulkPrice: parseFloat(form?.bulkPrice),
          shortDescription: form?.shortDescription,
          longDescription: form?.longDescription,
          content: dataToBeSaved,
          // name: form?.name,
          // name: form?.name,
          // name: form?.name,
          // name: form?.name,
          // name: form?.name,
          // name: form?.name,
          // type: form?.type,
          // title: form?.title,
          // price: parseFloat(form?.price),
          // promoPrice: parseFloat(form?.promoPrice),
          // expiryDate: expiryDate.toString(),
          images: imagesUrls.length > 0 ? imagesUrls : ''
        },
      });

      console.log('updateData', addData);

      console.log('addLoading', addLoading);

      console.log('addError', JSON.stringify(addError, null, 2));


      const [deletePromotion, {data: deleteData, error: deleteError}] = useMutation(DELETE_PROMOTION_MUTATION, {
        variables: {
          _id: active._id
        },
      });

      console.log('deleteData', deleteData);

      console.log('deleteError', JSON.stringify(deleteError, null, 2));
      

     const  handleSubmit = () => {
        // Push all the axios request promise into a single array

        let urls = [];
        const uploaders = [...images].map(file => {

            const url = 'https://api.cloudinary.com/v1_1/molowehou/upload';
          // Initial FormData
          const formData = new FormData();
          formData.append("file", file);
          formData.append('upload_preset', 'y1t423pb');
          
    
          return axios.post(url, formData, {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }).then(response => {
            const data = response.data;
            const fileURL = data.secure_url;
            urls.push(fileURL)

          })
        });
      
        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {


          if(urls.length > 0){
            setImagesUrls(urls);
            submit();

            // console.log('updated')
           
          }
          else {
            submit();
            
          }


        });
      }


      const [selectedTags, setSelectedTags] = useState([]);
      const [selectedCategories, setSelectedCategories] = useState([]);

      const getLastTagId =()=>{
        return selectedTags.reduce((prev, current) => (prev.y > current.y) ? prev : current, 0);
      };

      const getLastCategoryId =()=>{
        return selectedCategories.reduce((prev, current) => (prev.y > current.y) ? prev : current, 0);
      };


   


      const addTag =()=>{
        const newTags = [...selectedTags,
          {id: selectedTags.length > 0 ? getLastTagId().id + 1 : 0}];
            setSelectedTags(newTags);
      };


      const updateTag =(id, value)=>{

        const updatedArr = selectedTags.map((obj) => {
          if (obj.id === id) {
            return {...obj, value: value?.name};
          }
          return obj;
        });
        setSelectedTags(updatedArr);
      };

      const updateCategory =(id, value)=>{
        const updatedArr = selectedCategories.map((obj) => {
          if (obj.id === id) {
            return {...obj, value: value?.name};
          }
          return obj;
        });
        setSelectedCategories(updatedArr);
      };


      const addCategory =()=>{
        const newCategories = [...selectedCategories,
          {id: selectedCategories.length > 0 ? getLastCategoryId().id + 1 : 0}];
            setSelectedCategories(newCategories);
      };
 

      console.log('selectedTags', selectedTags)

      console.log('selectedCategories', selectedCategories)
    
     
    


      

      
    

	return (
		<>
			<div className="" style={{padding: '10px'}}>


<div style={{display: 'flex',  padding: '10px', marginTop: '50px'}}>
     <h5>
        Categories
      </h5>

  </div>



      <Modal show={showAdd} onHide={()=>setShowAdd(false)}>
        <Modal.Header closeButton>
          Add Category
        </Modal.Header>
        <Modal.Body>
        <Form>
  

  <Form.Group className="mb-3" controlId="">
    <Form.Label>Name</Form.Label>
    <Form.Control
      type="text"
      placeholder=""
      name ={'name'}
      value ={form?.name}
      onChange={handleChange}
    />
  </Form.Group>

</Form>
        </Modal.Body>
        <Modal.Footer>

        <Button variant="danger" onClick={handleSubmit}>
            Add Category
          </Button>

          <Button variant="primary" onClick={()=>setShowAdd(false)}>
            Cancel
          </Button>

        </Modal.Footer>
      </Modal>


      <div style={{display: 'flex', flexDirection: 'row', flex: 1 }}>

      <div style={{display: 'flex', flexDirection: 'column', width: '300px'}}>



       <div style={{display: 'flex', justifyContent: 'center'}}>
           <button className='btn btn-primary'  onClick={()=>setShowAdd(true)} >Add Category</button>
       </div>

      </div>








     </div>













			</div>
		</>
	);
};



export default CategoryNewComponent;
