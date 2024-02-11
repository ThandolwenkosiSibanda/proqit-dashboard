import React, { useEffect }  from 'react';
import { CATEGORIES_QUERY } from '../../gql/Query';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import {GoChecklist} from 'react-icons/go';
import SmallCart from '../cart/SmallCart';


const NavBar = (props) => {
	const  isSignedIn  = true;

  


  useEffect(()=> {
     
console.log('changed')

    
   }, [isSignedIn])


   const {data: categoriesData, error: categoriesError} = useQuery(CATEGORIES_QUERY, {
    fetchPolicy: 'network-only',
    // pollInterval: 500,
  });

  console.log('categoriesData', categoriesData?.categories);
  console.log('categoriesError', categoriesError);



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
                  <form role="search" className="c-site-search navbar-form desktop" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
                  <div className="input-field">
                    <label className="screen-reader-text" htmlFor="query">Search for:</label>
                    <input data-name="site-search" autocomplete="off" className="product-search-input search-lg search-sm fa-fa-search form-control" name="query" placeholder="What are you looking for?" type="search" />
                  </div>
                  <input className="c-button no-variation" type="submit" value="Search" />
                </form>

                <a className="c-page-logo mobile" href="index.html">
                  <img alt="" src="" />
                </a>
              </div>
              <div className="col l3 s4">
                <nav className="c-nav-account">
                  <ul className="menu">
                    <li className="menu-item menu-item--enquiries">
                      <Link to={`/inquires`} >
                      <span class="badge badge--circle">3</span>
                        <GoChecklist  size={30}/>
                      </Link>
                     
                    </li>
                      <li className="menu-item menu-item--cart">
                    
                      {/* <Link to={`/cart`}>
                       <span class="badge badge--circle">8</span>
                        <IoMdBasket  size={35}/>
                        <span>$10</span>
                      </Link> */}

                      <Link to={`/cart`}>
                        <SmallCart />
                      </Link>
                          
   
                          </li>
                          <li className="menu-item menu-item--account hide-on-med-and-down">




                          <ul class="c-nav-primary__menu" style={{backgroundColor: 'red'}}>
                    <li class="c-nav-primary__menu-item" style={{backgroundColor: 'red'}}>
                      <span>My Account</span>
                      <div class="c-nav-primary__subcategory-nav " style={{backgroundColor: 'red'}}>
                      <p>Welcome to Proqit!</p> 
                        <div class="c-nav-primary__subcategory-nav__layout" >

                      
                          <div >

                          <Link to={`/login`} >Login</Link>
                          <Link to={`/signup`} >Sign Up</Link>
                          <Link to={`/login`} >My Account</Link>
                          
                          </div>
                        </div>
                      </div>
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
                    {categoriesData?.categories?.map((category, index)=>(
                      <React.Fragment key ={index}>
                    <li className="c-nav-primary__menu-item" >
                    <a href="insulation.html"><span>{category.name}</span></a>
                    <div className="c-nav-primary__subcategory-nav menu--tier-2" data-parent="insulation" id="insulation-nav-height">
                      <div className="c-nav-primary__subcategory-nav__layout">

                       {category?.subCategories?.map((subCategory,index)=>(
                         <React.Fragment key ={index}>
                          <div className="c-nav-primary__category-subnav-container" data-grid="insulation boards">
                          <div className="c-nav-primary__subcategory-nav__content">
                            <a className="c-nav-primary__subcategory-nav__category-name" href="insulation/insulation-boards.html">{subCategory.name}</a>
                            <ul className="menu--tier-3">

                              {subCategory?.products?.map((product, index)=> (<li key ={index} ><a className="c-nav-primary__subcategory-nav__subcategory-name" href="insulation/insulation-boards/celotex-insulation-board.html">{product.name}</a></li>) )}

                              <li><button className="btn btn-unstyled" data-action="revealContent#show" data-target="hidden-insulation-boards"><span className="button__text">Show More</span> <span className="menu__expander"></span></button></li>
                            </ul>
                          </div>
                        </div>
                        </React.Fragment>
                        ))}



                      </div>
                    </div>
                  </li>
                  </React.Fragment>
                    ))}




                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>




    </React.Fragment>)
};



export default NavBar;
