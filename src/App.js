import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './Component/Header/Header';
import Contact from "./Component/Contact/Contact";
import Footer from './Component/Footer/Footer';

import Home from './Pages/Home';
import Chef from './Pages/Chef'


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Chef" element={<Chef/>} />

        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
      </Routes>
      <Contact/>
      <Footer/>
    </Router>
  );
};



export default App;
