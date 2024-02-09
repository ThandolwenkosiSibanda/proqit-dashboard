
import React from 'react';
import './index.css';

import {Routes, Route, Outlet} from 'react-router-dom';
import Home from './pages/Home';



const App = ()=> {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* <Route path="/upload" element={<Upload />}/>
          <Route path="/review" element={<Review/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/analysis" element={<Analysis/>}/> */}

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


