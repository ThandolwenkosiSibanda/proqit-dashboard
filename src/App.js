
import React from 'react';
import './index.css';

import {Routes, Route, Outlet} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductNew from './pages/ProductNew';
// import Products from './pages/Products';



const App = ()=> {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/new" element={<ProductNew />} />

          {/* <Route path="/upload" element={<Upload />}/>
          <Route path="/review" element={<Review/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/analysis" element={<Analysis/>}/> */}


                   {/* <Route path="/products/:id" component={ProductViewPage} exact={true} />
				<Route path="/login" component={LoginPage} exact={true} />
				<Route path="/signup" component={SignupPage} exact={true} />
				<Route path="/shops" component={ShopsPage} exact={true} />
				<Route path="/shops/:id" component={ShopPage} exact={true} />
				<Route path="/banners" component={BannersPage} exact={true} />
				<Route path="/banners/:id" component={BannerPage} exact={true} /> */}

        </Route>
      </Routes>
    </div>
  );
};

export default App;

const Layout = ()=> {
  return (
    <div>
      <Outlet />
    </div>
  );
};


