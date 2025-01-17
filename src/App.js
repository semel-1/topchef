import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './Component/Header/Header';
import Contact from "./Component/Contact/Contact";
import Footer from './Component/Footer/Footer';

import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Chef from './Pages/Chef';
import Reservation from './Pages/Reservation'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/Chef" element={<Chef/>} />
        <Route path="/Reservation" element={<Reservation/>} />
      </Routes>
      <Contact/>
      <Footer/>
    </Router>
  );
};



export default App;
