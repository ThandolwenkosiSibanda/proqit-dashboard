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


const ProductNewComponent = () => {



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
 




    
     
    


      

      
    

	return (
		<>
			<div className="" style={{padding: '10px'}}>


<div style={{display: 'flex',  padding: '10px'}}>
     <h5>
        Add Product
      </h5>

  </div>



      <Modal show={showDelete} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          Are you sure you want to delete this promotion
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div>
                {active.title}
            </div>
  
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


      <div style={{display: 'flex', flexDirection: 'row', flex: 1 }}>

      <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>

      <Form>
  


  <Form.Group className="mb-3" controlId="">
      <Form.Label>Shop</Form.Label>
  <Form.Select aria-label="select" name ={'shop'} 
  value ={form?.shop} 
  onChange={handleChange}
  
  >
  
  
  
  {shops?.shops.map((shop, index)=> <option key ={index} value={shop._id}>{shop.name}</option>)}
              
    
  </Form.Select>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Type </Form.Label>
  <Form.Select aria-label="select" name ={'type'} value ={form?.type} onChange={handleChange}>
  
    
    <option selected={form?.type === "Basic" && true} value="Basic">Basic</option>
    <option  selected={form?.type === "Premium" && true} value="Premium">Premium</option>
  </Form.Select>
  </Form.Group>
  
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
  
    <Form.Group className="mb-3" controlId="">
      <Form.Label>guestPrice</Form.Label>
      <Form.Control
        type="text"
        placeholder=""
        name ={'guestPrice'}
        value ={form?.guestPrice}
        onChange={handleChange}
      />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="">
      <Form.Label>tradeAccountPrice</Form.Label>
      <Form.Control
        type="text"
        placeholder=""
        name ={'tradeAccountPrice'}
        value ={form?.tradeAccountPrice}
        onChange={handleChange}
      />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="">
      <Form.Label>bulkPrice</Form.Label>
      <Form.Control
        type="text"
        placeholder=""
        name ={'bulkPrice'}
        value ={form?.bulkPrice}
        onChange={handleChange}
      />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="">
      <Form.Label>shortDescription</Form.Label>
      <Form.Control
        type="text"
        placeholder=""
        name ={'shortDescription'}
        value ={form?.shortDescription}
        onChange={handleChange}
      />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="">
      <Form.Label>longDescription</Form.Label>
      <Form.Control
        type="text"
        placeholder=""
        name ={'longDescription'}
        value ={form?.longDescription}
        onChange={handleChange}
      />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="">
      <Form.Label>tags</Form.Label>
      <Form.Control
        type="text"
        placeholder=""
        name ={'tags'}
        value ={form?.tags}
        onChange={handleChange}
      />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="">
      <Form.Label>categories</Form.Label>
      <Form.Control
        type="text"
        placeholder=""
        name ={'categories'}
        value ={form?.categories}
        onChange={handleChange}
      />
    </Form.Group>
  
  
  
  </Form>

      </div>



      <div style={{display: 'flex', flexDirection: 'column', flex: 4}}>

      <DraftEditor editorState ={editorState} setEditorState={setEditorState}/>
        
      </div>


      <div style={{display: 'flex', flexDirection: 'column', flex: 1, }}>

      <Form.Group controlId="formFileLg" className="mb-3">
    <Form.Label>Images</Form.Label>
    <Form.Control type="file" size="lg"  multiple onChange={handleImageChange} />
 </Form.Group>

  <Form.Group className="mb-3" controlId="">
    <Form.Label>Images</Form.Label>
    
  </Form.Group>
  <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>

  {form?.images && form?.images.map((image, index)=>   <div key ={index} style={{backgroundColor: 'grey', padding: '4px', borderRadius:'10px', height: '100px'}}>
    <img src={image} style={{height: '130px'}} alt={'name of the'} />
  </div>)}

  </div>
        
     </div>

     <div style={{display: 'flex', flexDirection: 'column', flex: 1, }}>

<Form.Group controlId="formFileLg" className="mb-3">
<Form.Label>technicalDownLoads</Form.Label>
<Form.Control type="file" size="lg"  multiple onChange={handleImageChange} />
</Form.Group>

<Form.Group className="mb-3" controlId="">
<Form.Label>technicalDownLoads</Form.Label>

</Form.Group>
<div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>

{form?.images && form?.images.map((image, index)=>   <div key ={index} style={{backgroundColor: 'grey', padding: '4px', borderRadius:'10px', height: '100px'}}>
<img src={image} style={{height: '130px'}} alt={'name of the'} />
</div>)}

</div>
  
</div>

     </div>


<div style={{display: 'flex', flexDirection: 'row', width: '100%', gap: '20px', backgroundColor: 'red'}}>

<div style={{display: 'flex', flexDirection: 'row', gap: '10px', flex: 4}}>




  












</div>

<div style={{flex: 1}}>






  {/* <image src={form?.images[0]}></image> */}
</div>



</div>




<div style={{display: 'flex', justifyContent: 'center'}}>
<button className='btn btn-primary'  onClick={handleSubmit} >Add Product</button>
</div>





			</div>
		</>
	);
};



export default ProductNewComponent;
