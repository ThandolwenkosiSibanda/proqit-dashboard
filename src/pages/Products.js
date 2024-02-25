import React from 'react';

import NavBar from '../components/navBar/NavBar';
import ProductsPage from '../components/products/ProductsPage';



const  Products= ()=> {
  return (
    <>

    <NavBar/>

   <div className="container">

    <ProductsPage />
   
    </div>


    </>
  )
}

export default Products;