import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  return (
    <nav class="navbar">
      
        <div class="left-group">
            <div class="logo">
                <div class="logo-icon"><i class="fas fa-gem"></i></div>
                <div class="logo-text">BLUE<span>STONE</span></div>
            </div>
            
        
            <div className="page-links">
          <Link to="/">Home</Link>
          <Link to="/aboutus">AboutUs</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/new">New</Link>
        </div>
        </div>

        
        <div class="right-group">
            <div class="search-wrapper">
                <div class="search-box">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search jewellery..."/>
                </div>
            </div>
            
            <div class="divider"></div>
            <button class="login-btn"><i class="fas fa-user-circle"></i> Login</button>
        </div>
    </nav>
  )
}

export default Navbar