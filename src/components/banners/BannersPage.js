import React, {useState} from 'react';
import './index.css';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

import axios from 'axios';
import DatePicker from "react-datepicker";



import "react-datepicker/dist/react-datepicker.css";
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_BANNER_MUTATION, CREATE_PROMOTION_MUTATION, DELETE_BANNER_MUTATION, DELETE_PROMOTION_MUTATION } from '../../gql/Mutation';
import { ADMIN_PROMOTIONS_QUERY, GET_BANNERS_QUERY, SHOPS_QUERY } from '../../gql/Query';
import moment from 'moment/moment';


const BannersPage = () => {
    const [form, setForm] = useState({});
    const [images, setImages] = useState([]);
    const [imagesUrls, setImagesUrls] = useState([]);
    const [expiryDate, setExpiryDate] = useState(new Date());

    const [active, setActive] = useState({});

    console.log('form', form)


    const [shopFilter, setShopFilter] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [titleFilter, setTitleFilter] = useState("");

    const [show, setShow] = useState(false);

    const [showDelete, setShowDelete] = useState(false);
    const [showView, setShowView] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDeleteClick = (promotion) => {
        setActive(promotion);
        setShowDelete(true)
    };


    const handleViewClick = (promotion) => {
      setActive(promotion);
      setShowView(true)
  };

    const handleDelete = (promotion) => {
        deleteBanner();
        setShowDelete(false);
    };

    const handleCancelDelete = (promotion) => {
        setActive({});
        setShowDelete(false)
    };

    const handleCancelView = (promotion) => {
      setActive({});
      setShowView(false)
  };


    const handleChange = (e) => {
       setForm({...form, [e.target.name]: e.target.value})
      };


    const handleImageChange = (e) => {
        if (e.target.files) {
          setImages(e.target.files);
        }
      };


      const {data, loading, error} = useQuery(GET_BANNERS_QUERY, {
        fetchPolicy: 'network-only',
        pollInterval: 500,
      });


      const {data: promotions} = useQuery(ADMIN_PROMOTIONS_QUERY, {
        fetchPolicy: 'network-only',
        pollInterval: 500,
      });

      console.log('banners', data)

      console.log('promotions', promotions)

      const {data: shops} = useQuery(SHOPS_QUERY, {
        fetchPolicy: 'network-only',
        pollInterval: 500,
      });


      console.log('shops', shops?.shops)

      console.log('data', data);

      console.log('active', active)


    const [submit, {data: createData, error: createError}] = useMutation(CREATE_BANNER_MUTATION, {
        variables: {
          name: form.name,
          expiryDate: expiryDate,
          image: imagesUrls[0],
          type: form.type,
          promotion: form.promotion,
        },
      });

      console.log('createData', createData);
    //   console.log('createError', createError);

      console.log('createError', JSON.stringify(createError, null, 2));


      const [deleteBanner, {data: deleteData, error: deleteError}] = useMutation(DELETE_BANNER_MUTATION, {
        variables: {
          _id: active._id
        },
      });

      console.log('deleteData', deleteData);

      console.log('deleteError', JSON.stringify(deleteError, null, 2));
      

     const  handleSubmit = () => {
        // Push all the axios request promise into a single array
        setShow(false);

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
        
          setImagesUrls(urls);
          setShow(false);
      
          submit()

        });
      }
 




    
     
    


      

      
    

	return (
		<>
			<div className="" style={{padding: '10px'}}>


<div style={{display: 'flex', justifyContent: 'flex-end', padding: '10px'}}>
     <Button variant="primary" onClick={handleShow}>
Add New Banner
      </Button>

      </div>

<div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>

<Form.Group className="mb-3" controlId="">
              <Form.Label>Search By Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name ={'title'}
                onChange={(e)=>setShopFilter(e.target.value)}
              />
            </Form.Group>








</div>




      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          Add New Banner
        </Modal.Header>
        <Modal.Body>
          <Form>


          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Type</Form.Label>
          <Form.Select aria-label="select" name ={'type'} onChange={handleChange}>
            
          <option value="Select">Select</option>
            <option value="Promotion">Promotion</option>
            <option value="Loan">Loan</option>
          </Form.Select>
        </Form.Group>


        { form.type === 'Promotion' && <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Promotion</Form.Label>
          <Form.Select aria-label="select" name ={'promotion'} onChange={handleChange}>

            {promotions?.admin_promotions?.map((promotion, index)=> <option key ={index} value={promotion._id}>{promotion.title}</option>)}
            
          </Form.Select>
        </Form.Group>}


            <Form.Group className="mb-3" controlId="">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name ={'name'}
                onChange={handleChange}
              />
            </Form.Group>


            <Form.Group className="mb-3" controlId="">
              <Form.Label>Expiry Date</Form.Label>
              <div>
              <DatePicker selected={expiryDate} onChange={(date) => setExpiryDate(date)} />
              </div>
            </Form.Group>

            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label>Images</Form.Label>
              <Form.Control type="file" size="lg"  multiple onChange={handleImageChange} />
           </Form.Group>
  
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Banner
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDelete} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          Are you sure you want to delete this banner
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div>
                {active.name}
            </div>
  
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete Banner
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showView} onHide={handleCancelView} size='lg'>
        <Modal.Header closeButton>
          View Banner
        </Modal.Header>
        <Modal.Body>
          <Form>


            <img src={active.image} style={{height: '430px'}} />
  
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCancelView}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Type</th>
          <th>Expiry Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
{data?.banners?.map((promotion, index)=><tr key ={index}>
          <td>{index + 1}</td>
          <td>{promotion?.name}</td>
          <td>{promotion?.type}</td>
          <td>{moment(parseInt(promotion.expiryDate)).format('DD/MMM/YYYY')}</td>
          <td>{moment(parseInt(promotion.expiryDate)).isAfter(moment())? 'Active' : 'Expired'}</td> 

        
          <td>
            <button className='btn btn-primary' onClick={()=> handleViewClick(promotion)} >View</button>
          </td>


          <td>
             <button className='btn btn-danger' onClick={()=> handleDeleteClick(promotion)} >Delete</button>
          </td>

        </tr>)}




      </tbody>
    </Table>

			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps, {})(BannersPage);
