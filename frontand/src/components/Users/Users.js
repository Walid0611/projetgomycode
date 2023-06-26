import React from 'react'
import './User.css'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'







const Users = ({auth ,logout}) => {
  return (
    <div className="container">
 <Navbar/>
  <div className="popover" id="menu">
    <div className="content">
      <a href="#" className="close" />
      <div className="nav">
        <ul className="nav_list">
          <div className="nav_list_item">
            <li>
              <a href="#">Home</a>
            </li>
          </div>
          <div className="nav_list_item">
            <li>
              <a href="#">About</a>
            </li>
          </div>
          <div className="nav_list_item">
            <li>
              <a href="#">Products</a>
            </li>
          </div>
          <div className="nav_list_item">
            <li>
              <a href="#">Services</a>
            </li>
          </div>
          <div className="nav_list_item">
            <li>
              <a href="#">Contact </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</div>

   

  )
}

export default Users