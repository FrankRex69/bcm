import React from 'react';
import './App-router.css';

import { Link } from "react-router-dom";


const Navbar = () => {  
  return (
    <div className='Navbar'>
        <h1>Logo</h1>
        <ul className='Links'>
        <Link style={{color: 'white'}} to="/">          
          <li>Home</li>
        </Link>
        <Link style={{color: 'white'}} to="/about">
          <li>About</li>
        </Link>
        <Link style={{color: 'white'}} to="/contact">
          <li>Contact</li>
        </Link>
        <Link style={{color: 'white'}} to="/nodb">
          <li>NoDb</li>
        </Link>
        <Link style={{color: 'white'}} to="/getusers">
          <li>GetUsers</li>
        </Link>
        </ul>        
    </div>
  )
}

export default Navbar;