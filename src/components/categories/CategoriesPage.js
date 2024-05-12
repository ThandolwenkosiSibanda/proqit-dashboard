import React, {useState} from 'react';
import './index.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
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




const CategoriesPage = () => {
    const [form, setForm] = useState({});

    const [categoryOpen, setCategoryOpen] = useState(false);
    const [subCategoryOpen, setSubCategoryOpen] = useState(false);
    const [subSubCategoryOpen, setSubSubCategoryOpen] = useState(false);
  

    const [category, setCategory] = useState("");

    const [subCategory, setSubCategory] = useState("");

    const [subSubCategory, setSubSubCategory] = useState("");


    const [images, setImages] = useState([]);
    const [imagesUrls, setImagesUrls] = useState([]);
    const [expiryDate, setExpiryDate] = useState(new Date());

    const [active, setActive] = useState({});

    const [showAdd, setShowAdd] = useState(false);


  
    const [show, setShow] = useState(false);



 





    const handleChange = (e) => {
       setForm({...form, [e.target.name]: e.target.value})
      };



      const {data, loading, error} = useQuery(PRODUCTS_QUERY, {
        fetchPolicy: 'network-only',
        pollInterval: 500,
      });


      const {data: shops} = useQuery(SHOPS_QUERY, {
        fetchPolicy: 'network-only',
        pollInterval: 500,
      });


      console.log('shops', shops?.shops)

      console.log('data', data);

      console.log('active', active)


    const [submitCategory, {data: createCategoryData}] = useMutation(CREATE_PROMOTION_MUTATION, {
        variables: {
          name: form.name,
        },
      });


      const [submitSubCategory, {data: createSubCategoryData}] = useMutation(CREATE_PROMOTION_MUTATION, {
        variables: {
          name: form.name,
        },
      });

      const [submitSubSubCategory, {data: createSubSubCategoryData}] = useMutation(CREATE_PROMOTION_MUTATION, {
        variables: {
          name: form.name,
        },
      });







      // console.log('createData', createData);
    //   console.log('createError', createError);

      // console.log('createError', JSON.stringify(createError, null, 2));


 

    
     const  handleSubmitCategory = () => {
          submitCategory();
          setShow(false);
      }

      const  handleSubmitSubCategory = () => {
        submitSubCategory();
        setShow(false);

    }

    const  handleSubmitSubSubCategory = () => {
      submitSubSubCategory();
      setShow(false);

  }
 




    
     
    


      

      
    

	return (
		<div className='container'>
			<div className="" style={{padding: '10px'}}>



      <Modal
        isOpen={categoryOpen}
        onRequestClose={()=>setCategoryOpen(false)}
        style={customStyles}
      >
        
        
        <div> Add New Category</div>
        <Form>
  

  <Form.Group className="mb-3" controlId="">
    <Form.Label>Name</Form.Label>
    <Form.Control
      type="text"
      placeholder=""
      name ={'name'}
      value ={category}
      onChange={(e)=>setCategory(e.target.value)}
    />
  </Form.Group>

</Form>




<div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
<Button variant="danger" onClick={handleSubmitCategory}>
            Add Category
          </Button>

          <Button variant="primary" onClick={()=>setCategoryOpen(false)}>
            Cancel
          </Button>
</div>
      </Modal>

      <Modal
        isOpen={subCategoryOpen}
        onRequestClose={()=>setSubCategoryOpen(false)}
        style={customStyles}
      >
        
        
        <div>Add New sub Category</div>
        <Form>
  

  <Form.Group className="mb-3" controlId="">
    <Form.Label>Name</Form.Label>
    <Form.Control
      type="text"
      placeholder=""
      name ={'name'}
      value ={subCategory}
      onChange={(e)=>setSubCategory(e.target.value)}
    />
  </Form.Group>

</Form>




<div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
<Button variant="danger" onClick={handleSubmitSubCategory}>
            Add Sub Category
          </Button>

          <Button variant="primary" onClick={()=>setSubCategoryOpen(false)}>
            Cancel
          </Button>
</div>
      </Modal>

      <Modal
        isOpen={subSubCategoryOpen}
        onRequestClose={()=>setSubSubCategoryOpen(false)}
        style={customStyles}
      >
        <div>Add Sub Sub Category</div>
        <Form>
  

  <Form.Group className="mb-3" controlId="">
    <Form.Label>Name</Form.Label>
    <Form.Control
      type="text"
      placeholder=""
      name ={'name'}
      value ={subSubCategory}
      onChange={(e)=>setSubSubCategory(e.target.value)}
    />
  </Form.Group>

</Form>




<div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
<Button variant="danger" onClick={handleSubmitSubSubCategory}>
            Add Sub Sub Category
          </Button>

          <Button variant="primary" onClick={()=>setSubSubCategoryOpen(false)}>
            Cancel
          </Button>
</div>
      </Modal>
        


      {/* <Modal show={showAdd} onHide={()=>setShowAdd(false)}>
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

        <Button variant="danger" onClick={handleSubmitCategory}>
            Add Category
          </Button>

          <Button variant="primary" onClick={()=>setShowAdd(false)}>
            Cancel
          </Button>

        </Modal.Footer>
      </Modal>

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

        <Button variant="danger" onClick={handleSubmitSubCategory}>
            Add Category
          </Button>

          <Button variant="primary" onClick={()=>setShowAdd(false)}>
            Cancel
          </Button>

        </Modal.Footer>
      </Modal>

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

        <Button variant="danger" onClick={handleSubmitSubSubCategory}>
            Add Category
          </Button>

          <Button variant="primary" onClick={()=>setShowAdd(false)}>
            Cancel
          </Button>

        </Modal.Footer>
      </Modal> */}


<div style={{display: 'flex', justifyContent: 'flex-end', padding: '50px' , gap: '10px'}}>

     

      <button className='btn btn-primary'  onClick={()=>setCategoryOpen(true)} >Add Category</button>
      <button className='btn btn-primary'  onClick={()=>setSubCategoryOpen(true)} >Add SubCategory</button>
      <button className='btn btn-primary'  onClick={()=>setSubSubCategoryOpen(true)} >Add Sub SubCategory</button>

      </div>

<div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>



</div>



<div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>

  <div style={{flex: 1}}>

   <div>Categories</div>

   <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
     
          <th></th>
          <th></th>


        </tr>
      </thead>
      <tbody>
{data?.products?.map((product, index)=><tr key ={index}>
   <td>{index + 1}</td>
   <td>{product?.name}</td>

          
      
          <td>
            <Link to={`/products/${product._id}`} className="btn btn-primary">View</Link>
          </td>

          <td>
            <Link to={`/products/${product._id}/edit`} className='btn btn-warning'> Edit</Link>
          </td>


        </tr>)}




      </tbody>
    </Table>
  </div>

  <div style={{flex: 1}}>

<div>Sub Categories</div>

<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
     
          <th></th>
          <th></th>


        </tr>
      </thead>
      <tbody>
{data?.products?.map((product, index)=><tr key ={index}>
   <td>{index + 1}</td>
   <td>{product?.name}</td>

          
      
          <td>
            <Link to={`/products/${product._id}`} className="btn btn-primary">View</Link>
          </td>

          <td>
            <Link to={`/products/${product._id}/edit`} className='btn btn-warning'> Edit</Link>
          </td>


        </tr>)}




      </tbody>
    </Table>
</div>

<div style={{flex: 1}}>

<div>Sub SubCategories</div>

<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
     
          <th></th>
          <th></th>


        </tr>
      </thead>
      <tbody>
{data?.products?.map((product, index)=><tr key ={index}>
   <td>{index + 1}</td>
   <td>{product?.name}</td>

          
      
          <td>
            <Link to={`/products/${product._id}`} className="btn btn-primary">View</Link>
          </td>

          <td>
            <Link to={`/products/${product._id}/edit`} className='btn btn-warning'> Edit</Link>
          </td>


        </tr>)}




      </tbody>
    </Table>
</div>
</div>














			</div>
		</div>
	);
};



export default CategoriesPage;
