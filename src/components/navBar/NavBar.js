import React from 'react';
import { Link } from 'react-router-dom';




const NavBar = (props) => {




   return (
    <React.Fragment>

<div className="c-page-header">
        <div className="c-page-header__wrapper">
        <div className="row">
          <div className="col s12 logo-search-account">
            <div className="container">
              <div className="row">
                <div className="col l3 s4">
                  <a className="c-page-logo desktop" href="index.html">
                    {/* <!-- <img alt="Proqit" src="" /> --> */}
                  </a>
                  <button id="main-nav-toggle" className="c-navicon c-navicon--spin mobile" aria-label="Menu" >
                  <div className="c-navicon__box">
                    <div className="c-navicon__inner"></div>
                  </div>
                  </button>
                </div>
                <div className="col l6 s4 no-spacing">


                <a className="c-page-logo mobile" href="index.html">
                  <img alt="" src="" />
                </a>
              </div>
              <div className="col l3 s4">
                <nav className="c-nav-account">
                  <ul className="menu">

                      <li className="menu-item menu-item--cart">
                          
                          </li>
                          <li className="menu-item menu-item--account hide-on-med-and-down">




                          <ul class="c-nav-primary__menu" >
                    <li class="c-nav-primary__menu-item">
                      <span>My Account</span>
                    </li>

                    </ul>


                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 navigation">
                <nav className="c-nav-primary desktop">
                  <ul className="c-nav-primary__menu">

                   <li className="c-nav-primary__menu-item" >
                     <Link to={`/products`} ><span>Products</span></Link>
                   </li>
                   <li className="c-nav-primary__menu-item" >
                    <Link to={`/payments`} ><span>Payments</span></Link>
                   </li>

                   <li className="c-nav-primary__menu-item" >
                    <Link to={`/orders`} ><span>Orders</span></Link>
                   </li>

                   <li className="c-nav-primary__menu-item" >
                    <Link to={`/enquiries`} ><span>Enquiries</span></Link>
                   </li>

                   <li className="c-nav-primary__menu-item" >
                    <Link to={`/suppliers`} ><span>Suppliers</span></Link>
                   </li>

                   <li className="c-nav-primary__menu-item" >
                    <Link to={`/accounts`} ><span>Accounts</span></Link>
                   </li>


                   <li className="c-nav-primary__menu-item" >
                    <Link to={`/returns`} ><span>Returns</span></Link>
                   </li>

                   <li className="c-nav-primary__menu-item" >
                    <Link to={`/deliveries`} ><span>Deliveries</span></Link>
                   </li>

                   <li className="c-nav-primary__menu-item" >
                    <Link to={`/guides`} ><span>Buyer's Guides</span></Link>
                   </li>

                   <li className="c-nav-primary__menu-item" >
                     <Link to={`/documentation`} ><span>Documentation</span></Link>
                   </li>

                   <li className="c-nav-primary__menu-item" >
                   <Link to={`/plans`} ><span>Blue Prints and Quantity Surveying</span></Link>
                   </li>

                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>




    </React.Fragment>)
};



export default NavBar;
