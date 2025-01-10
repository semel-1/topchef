import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './Component/Header/Header';

import Home from './Pages/Home';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
      </Routes>
    </Router>
  );
};



export default App;
