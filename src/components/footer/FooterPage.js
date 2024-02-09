import React from 'react';

import { connect } from 'react-redux';






const FooterPage = () => {


	return (
		<>
                                            <div class="c-page-footer">
                                              <div class="c-page-footer__container">
                                                <nav class="c-page-footer__container__links">
                                                  <ul class="menu">
                                                    <li class="menu-item">
                                                      <strong class="menu-item__heading">Our Company</strong>
                                                    </li>
                                                    <li class="menu-item">
                                                      <a href="about/index.html">About Us</a>
                                                    </li>
                                                    <li class="menu-item">
                                                      <a href="articles/index.html">Articles</a>
                                                    </li>
                                         
                                                    <li class="menu-item">
                                                      <a href="faqs/index.html">FAQs</a>
                                                    </li>
                                                    <li class="menu-item">
                                                      <a href="contact-us/index.html">Contact Us</a>
                                                    </li>
                                                    <li class="menu-item">
                                                      <a href="map.html">Site Map</a>
                                                    </li>
                                          
                                                  </ul>
                                                  <ul class="menu">
                                                    <li class="menu-item">
                                                      <strong class="menu-item__heading">Services</strong>
                                                    </li>
                                                    <li class="menu-item">
                                                      <a href="delivery/index.html">Delivery Information</a>
                                                    </li>
                                                    <li class="menu-item">
                                                      <a href="returns/index.html">Returns</a>
                                                    </li>
                                                    <li class="menu-item">
                                                      <a href="product_price_lists/index.html">Price List</a>
                                                    </li>
                                            
                                                  </ul>
                                                  <ul class="menu">
                                                    <li class="menu-item">
                                                      <strong class="menu-item__heading">Policies</strong>
                                                    </li>
                                                    <li class="menu-item">
                                                      <a href="privacy/index.html">Privacy Policy</a>
                                                    </li>
                                              
                                                    <li class="menu-item">
                                                      <a href="terms/index.html">Terms of Use</a>
                                                    </li>
                                                    <li class="menu-item">
                                                      <a href="terms-of-sale/index.html">Terms of Sale</a>
                                                    </li>
                                                  </ul>
                                                  <ul class="menu">
                                                    <li class="menu-item">
                                                      <strong class="menu-item__heading">Join Us</strong>
                                                    </li>
                                             
                                                    <li class="menu-item">
                                                      <a href="supplier_applications/new.html">Suppliers</a>
                                                    </li>
                                                  </ul>
                                                  <ul class="menu">
                                                    <li class="menu-item">
                                                      <strong class="menu-item__heading">Follow Us</strong>
                                                    </li>
                              
                                                    <li class="menu-item">
                                                      <a target="_blank" title="Facebook Page" rel="noopener" href="https://www.facebook.com/materialsmarket/">Facebook</a>
                                                    </li>
                                                    <li class="menu-item">
                                                      <a target="_blank" title="Twitter Page" rel="noopener" href="https://twitter.com/materialsmarket/">Twitter</a>
                                                    </li>
                                                    <li class="menu-item">
                                                      <a target="_blank" title="LinkedIn Page" rel="noopener" href="https://www.linkedin.com/company/materials-market/">LinkedIn</a>
                                                    </li>
                                              
                                                  </ul>
                                                </nav>
                                                <div class="c-page-footer__container__logo">
                                                  <a class="c-page-logo" href="index.html">
                                                 <img loading="lazy" width="162" height="38" alt="" src="" /> 
                                                  </a>
                                                </div>
                                              </div>
                                              <div class="row footer-background">
                                                <div class="col s12">
                                                  <div class="container c-page-footer__company-details">
                                                    <div class="row">
                                                      <div class="col m6 s12 c-page-footer__company-details--address">
                                                        <p>
                                                          Proqit &copy; 2023.<br/>
                                                          Proqit
                                                        </p>
                                                        <p>
                                                          23 Fake Addresss, 4th Floor,<br/>
                                                          45 5th Street, Bulawayo
                                                        </p>
                                                        <p>
                                                          Tel:
                                                          <a href="tel:02074594574" class="prevent_tel_styling">020 7459 4574</a>
                                                        </p>
                                                      </div>
                                                      <div class="col m6 s12 c-page-footer__company-details--company-numbers">
                                                        <p>
                                                          Registered in Zimbabwe: 13071066<br/>
                                                          VAT: 365566073990
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps, {})(FooterPage);
