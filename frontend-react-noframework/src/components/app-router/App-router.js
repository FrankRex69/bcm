import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App-router.css';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';


const AppRouter = () => {  
  return (
    <BrowserRouter>
      <div className='app-router'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />         
        </Routes>        
      </div>
    </BrowserRouter>
  )
}

export default AppRouter;