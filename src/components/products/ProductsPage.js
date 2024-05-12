import React, {useState} from 'react';
import './index.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_PROMOTION_MUTATION, DELETE_PROMOTION_MUTATION } from '../../gql/Mutation';
import { PRODUCTS_QUERY, SHOPS_QUERY } from '../../gql/Query';

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



const ProductsPage = () => {
    const [form, setForm] = useState({});
    const [images, setImages] = useState([]);
    const [imagesUrls, setImagesUrls] = useState([]);
    const [expiryDate, setExpiryDate] = useState(new Date());

    const [active, setActive] = useState({});


    const [shopFilter, setShopFilter] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [titleFilter, setTitleFilter] = useState("");

    const [show, setShow] = useState(false);

    const [showDelete, setShowDelete] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDeleteClick = (promotion) => {
        setActive(promotion);
        setShowDelete(true)
    };

    const handleDelete = (promotion) => {
        deletePromotion();
        setShowDelete(false);
    };

    const handleCancelDelete = (promotion) => {
        setActive({});
        setShowDelete(false)
    };


    const handleChange = (e) => {
       setForm({...form, [e.target.name]: e.target.value})
      };


    const handleImageChange = (e) => {
        if (e.target.files) {
          setImages(e.target.files);
        }
      };


      const {data, loading, error} = useQuery(PRODUCTS_QUERY, {
        fetchPolicy: 'network-only',
        pollInterval: 500,
      });


      console.log('data', data)

      console.log('loading', loading)

      console.log('prodcuts error', error)

      const {data: shops} = useQuery(SHOPS_QUERY, {
        fetchPolicy: 'network-only',
        pollInterval: 500,
      });


      console.log('shops', shops?.shops)

      console.log('data', data);

      console.log('active', active)


    const [submit, {data: createData, error: createError}] = useMutation(CREATE_PROMOTION_MUTATION, {
        variables: {
          shop: form.shop,
          type: form.type,
          title: form.title,
          price: parseFloat(form.price),
          promoPrice: parseFloat(form.promoPrice),
          numberOfVoucherCodes: parseFloat(form.numberOfVoucherCodes),
          expiryDate: expiryDate,
          images: imagesUrls
        },
      });

      console.log('createData', createData);
    //   console.log('createError', createError);

      console.log('createError', JSON.stringify(createError, null, 2));


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
        
          setImagesUrls(urls)
      
          submit();
          setShow(false);

        });
      }

      
 






    
      const [modalIsOpen, setIsOpen] = useState(false);

      function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    


      

      
    

	return (
		<>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          
        
          
        </form>
      </Modal>


			<div className="" style={{padding: '10px'}}>




<div style={{display: 'flex', justifyContent: 'flex-end', padding: '50px'}}>

      <Link to={`/product/new`} className="btn btn-primary">Add New Product</Link>

      </div>

<div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>

<Form.Group className="mb-3" controlId="">
              <Form.Label>Search By Shop</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name ={'title'}
                onChange={(e)=>setShopFilter(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Search By Type</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name ={'title'}
                onChange={(e)=>setTypeFilter(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Search By Title</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name ={'title'}
                onChange={(e)=>setTitleFilter(e.target.value)}
              />
            </Form.Group>





</div>



<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          
          <th>Categories</th>
       
          <th>Guest Price</th>
          <th>Trade Account Price</th>
          <th>Bulk Price</th>
          <th>Availability</th>
          <th></th>
          <th></th>


        </tr>
      </thead>
      <tbody>
{data?.products?.map((product, index)=><tr key ={index}>
   <td>{index + 1}</td>
   <td>{product?.name}</td>
  
          
        
          <td>{product?.categories?.map((category)=><p>{category.name}</p>)}</td>
          <td>{product.guestPrice}</td>
          <td>{product.tradeAccountPrice}</td>
          <td>{product.bulkPrice}</td>
          <td>{product.availability}</td>



        
          <td>
            <Link to={`/products/${product._id}`} className="btn btn-primary">View</Link>
          </td>

          <td>
            <Link to={`/products/${product._id}/edit`} className='btn btn-warning'> Edit</Link>
          </td>

          <td>
             <button className='btn btn-danger' onClick={openModal} >Delete</button>
          </td>

        </tr>)}




      </tbody>
    </Table>

			</div>
		</>
	);
};



export default ProductsPage;
