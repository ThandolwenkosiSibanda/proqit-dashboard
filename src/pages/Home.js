import React from 'react';
import BestSellers from '../components/product/BestSellers';
import Brands from '../components/product/Brands';
import Story from '../components/product/Story';
import Hero from '../components/hero/Hero';
import SmallBanner from '../components/smallBanner/SmallBanner';
import NavBannerTop from '../components/navBannerTop/NavBannerTop';
import NavBar from '../components/navBar/NavBar';



const  Home= ()=> {
  return (
    <>

    <NavBar/>

    <NavBannerTop />

   <div className="container">
    <SmallBanner/>

    <Hero/>

    <BestSellers/>

    <Brands />

    <Story /> 

    </div>


    </>
  )
}

export default Home