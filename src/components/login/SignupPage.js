import React, {useEffect, useState} from 'react';
import './index.css';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { loginAction} from '../../actions/login';
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css'
import { useMutation } from '@apollo/client';
import { LOGIN_ADMIN_MUTATION} from '../../gql/Mutation';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input'




const SignupPage = (props) => {
    const [form, setForm] = useState({});
    const [value, setValue] = useState()


    const [errorMessage, setErrorMessage] = useState('');


    console.log('errorMessage', errorMessage)



    const [login, {data, error, loading }] = useMutation(LOGIN_ADMIN_MUTATION, {
        variables: {
          email: form.email,
          password: form.password,
        },
      });

      console.log('login', login)


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

        console.log('form', form);
        
        setForm({...form, [e.target.name]: e.target.value})
    };






  

	return (
		
<main class="main">
    <div class="container">
        <div class="c-page-banner">
            <div class="sign-up-banner c-page-banner__header row background-primary" data-stretch-type="full">
                <div class="col l9 offset-l1 s9">
                    <h4 class=" ">Sign up for an Account</h4>
                    <h5 class="c-page-banner__subheading">Benefits of creating an account</h5>
                    <div className="c-page-banner__icons banner_icons">
                        <div class="c-page-banner__icon">
                            <span class="material-icons">&#xeaf1;</span>
                            <span>Trade discounts</span>
                        </div>
                        <div class="c-page-banner__icon">
                            <span class="material-icons">&#xe7fd;</span>
                            <span>Dedicated account manager</span>
                        </div>
                        <div class="c-page-banner__icon">
                            <span class="material-icons">&#xe0ee;</span>
                            <span>Keep track of all orders</span>
                        </div>
                    </div>
                </div>
                <div class="c-page-banner__header-background"></div>
            </div>
            <div class="c-page-banner__content row">
                <div class="col l7 offset-l1 background-greyscale-10">
                    <div class="c-trade-credit__text">
                        <p>
                            In order to get access to trade prices, all you need to do is create an account and one of our Key Accounts Managers will be in touch.
                        </p>
                    </div>
                    <div class="c-page-banner__form">
                        <div class="account--log-in">
                            <div class="row">
                                <div class="col l12 s12">
                                    <span class="text--highlighter">Already have an account? <Link to={`/login`}>Login</Link></span>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col s12">
                                    <h5>Your details</h5>
                                </div>
                            </div>
                            <div data-name="account-registered-form">
                            <Form.Group className="mb-3" controlId="">
                              <Form.Label>Email<sup>*</sup></Form.Label>
                                <Form.Control
                                 type="text"
                                 placeholder=""
                                 name ={'email'}
                                 onChange={handleChange}
                                />
                            </Form.Group>


                                    <div class="row">
                                        <div class="col s12 m6">
                                        <Form.Group className="mb-3" controlId="">
                              <Form.Label>Name<sup>*</sup></Form.Label>
                                <Form.Control
                                 type="text"
                                 placeholder=""
                                 name ={'name'}
                                 onChange={handleChange}
                                />
                            </Form.Group>
                                        </div>
                                        <div class="col s12 m6">
                                        <Form.Group className="mb-3" controlId="">
                              <Form.Label>Surname<sup>*</sup></Form.Label>
                                <Form.Control
                                 type="text"
                                 placeholder=""
                                 name ={'surname'}
                                 onChange={handleChange}
                                />
                            </Form.Group>
                                        </div>

                                        
                                    </div>
                                    <div class="row">
                                        <div class="col l12 s12">
                                        <Form.Label>Phone<sup>*</sup></Form.Label>
                                        
                                            <PhoneInput
      country="US"
      value={value}
      onChange={setValue} />
    
      <sub>In case we need to contact you regarding your delivery</sub>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col s12">
                                        <Form.Label>Company Name (Optional)</Form.Label>
                                <Form.Control
                                 type="text"
                                 placeholder=""
                                 name ={'password'}
                                 onChange={handleChange}
                                />
                                        </div>
                                    </div>
                                    <div class="row" data-name="buying-as-options">
                                        <div class="col s12">
                                            <div class="form-control">
                                                <strong class="label">Buying as<sup>*</sup></strong>
                                            </div>
                                        </div>
                                        <div class="col s6">
                                          
                                                <button class="btn btn-small btn-hollow" >Individual/Home Owner</button>
                                      
                                        </div>
                                        <div class="col s6">
                                            
                                               
                                                <button class="btn btn-small btn-hollow" >Contractor/Company</button>
                                          
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col s12">
                                            {/* <div class="form-control">
                                                <label for="user_password">Password<sup>*</sup></label>
                                                <div class="password-container">
                                                    <input placeholder="Pa$$word123" type="password" name="user[password]" id="user_password" />
                                                  
                                                </div>
                                                <sub>Must contain at least 1 uppercase letter, 1 number and be at least 8 characters long.</sub>
                                            </div> */}

<Form.Label>Password<sup>*</sup></Form.Label>
                                <Form.Control
                                 type="text"
                                 placeholder=""
                                 name ={'password'}
                                 onChange={handleChange}
                                />
                               <sup>*</sup> <sub>Must contain at least 1 uppercase letter, 1 number and be at least 8 characters long.</sub>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col s12">
                                        <Form.Label>Password Confirmation<sup>*</sup></Form.Label>
                                <Form.Control
                                 type="text"
                                 placeholder=""
                                 name ={'password'}
                                 onChange={handleChange}
                                />
                              
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col s12">
                                            <div class="form-control">
                                                <label for="user_mailing_list">
<input name="user[mailing_list]" type="hidden" value="0" /><input type="checkbox" value="1" checked="checked" name="user[mailing_list]" id="user_mailing_list" />
<span>I would like to receive updates from Proqit Market. See <Link to={`/privacy`}>Privacy Policy</Link></span>
</label> </div>
                                        </div>
                                        <div class="col s12">
                                            <div class="form-control">
                                                <label for="user_terms_and_conditions">
<input name="user[terms_and_conditions]" type="hidden" value="0" /><input data-name="terms-and-conditions" type="checkbox" value="1" name="user[terms_and_conditions]" id="user_terms_and_conditions" />
<span>I have read and accept the Proqit Market <Link to={`/terms`}>Terms and Conditions</Link></span>
</label> </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col s12">
                                            <div class="form-control__actions">
                                                <input type="submit" name="commit" value="Sign up" class="btn submit-customer-registration" data-disable-with="Sign up" />
                                            </div>
                                        </div>
                                    </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-target="nudge-modals-container"></div>
        <div data-target="modals-container"></div>
    </div>
</main>
    


	);
};

const mapStateToProps = (state) => {

  console.log('state', state);

	return {
		user: state.user
	};
};

export default connect(mapStateToProps, {loginAction})(SignupPage);
