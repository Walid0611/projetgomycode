import React from 'react'
import './Navbar.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Navbar = (auth, logout) => {
  return (
    <div className='navMenu'>
      <span>{auth.name}</span>
      
      <nav className='navbar '>
       <a href='#Home'>home</a>
       <a href='#vehicles'></a>
       <a href='#services'>services</a>
       <a href='#featured'>featured</a>
       <a href='#reviews'>reviews</a>
       <a href='#contact'>contact</a>
      </nav>
      <div id="login-btn" >
      <i className='far fa-user'></i>
      
      </div>
    </div>
  )
}

export default Navbar
