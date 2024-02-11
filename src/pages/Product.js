import React from 'react';
import NavBannerTop from '../components/navBannerTop/NavBannerTop';
import NavBar from '../components/navBar/NavBar';
import ProductComponent from '../components/product/ProductComponent';



const  Product= ()=> {
  return (
    <>

    <NavBar/>

    <NavBannerTop />



  

   <div className="container">
   <ProductComponent/>
 

    </div>


    </>
  )
}

export default Product