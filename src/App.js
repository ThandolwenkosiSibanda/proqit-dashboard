
import React from 'react';
import './index.css';

import {Routes, Route, Outlet} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductNew from './pages/ProductNew';
import Payments from './pages/Payments';
import Orders from './pages/Orders';
import Enquiries from './pages/Enquiries';
import Suppliers from './pages/Suppliers';
import Accounts from './pages/Accounts';
import Returns from './pages/Returns';
import Deliveries from './pages/Deliveries';
import Guides from './pages/Guides';
import Documentation from './pages/Documentation';
import Plans from './pages/Plans';
// import Products from './pages/Products';



const App = ()=> {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/new" element={<ProductNew />} />

				  <Route path="/payments" element={<Payments />}/>
			  	<Route path="/orders" element={<Orders />}  />
			  	<Route path="/enquiries" element={<Enquiries />}  />
				  <Route path="/suppliers" element={<Suppliers />}  />
				  <Route path="/accounts" element={<Accounts />}/>
				  <Route path="/returns" element={<Returns />} />
				  <Route path="/deliveries" element={<Deliveries />}  />
				  <Route path="/guides" element={<Guides />}  />
				  <Route path="/documentation" element={<Documentation />} />
				  <Route path="/plans" element={<Plans />}  />

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


