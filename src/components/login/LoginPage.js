import React, {useEffect, useState} from 'react';
import './index.css';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { loginAction} from '../../actions/login';
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from '@apollo/client';
import { LOGIN_ADMIN_MUTATION,} from '../../gql/Mutation';
import { Link } from 'react-router-dom';




const LoginPage = (props) => {
    const [form, setForm] = useState({});


    const [errorMessage, setErrorMessage] = useState('');



    const [login, {data, error, loading }] = useMutation(LOGIN_ADMIN_MUTATION, {
        variables: {
          email: form.email,
          password: form.password,
        },
      });


      useEffect(()=> {
     
        if(data?.loginAdmin?.email){
          props.loginAction(data?.loginAdmin);
        }

        if(error?.message){
          setErrorMessage(error?.message)
        }
  
        
       }, [data.loginAdmin, error.message, loading, props]);
  


      console.log('data', data);

      console.log('error', error);

      console.log('Error', JSON.stringify(error, null, 2));


      const handleChange = (e) => {
        console.log('handle change', e.target.name)

        setErrorMessage('')

        console.log('form', form)
        
               setForm({...form, [e.target.name]: e.target.value})
              };




  

	return (
		<>

    
			<div className="" style={{padding: '10px'}}>



   <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
    
    <div style={{width: '500px'}}>

      <p style={{textAlign: 'center', color: 'red'}}>{errorMessage}</p>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name ={'email'}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                name ={'password'}
                onChange={handleChange}
              />
            </Form.Group>

            <div >
               <Link to={`/forgotpassword`}>Forgot password?</Link>
            </div>

            <button style={{width: '100%'}} className='btn btn-primary' onClick={()=> login()} >Login</button>

            </div>
</div>

<div class="text--center">
Want to create a new account? 			<Link to={`/signup`} >Sign Up</Link> <br/>
</div>

			</div>
		</>
	);
};

const mapStateToProps = (state) => {

  console.log('state', state);

	return {
		user: state.user
	};
};

export default connect(mapStateToProps, {loginAction})(LoginPage);
