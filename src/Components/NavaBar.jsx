import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/componentstyles/Navbar.css';
import logo from '../assets/bpsheights.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <> 
      <nav className="navbar">
        <div className="navbar-left"> 
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="logo-text">Real State</h1>
        </div>

        <div className={`navbar-center ${menuOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/property">Properties</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
          <a href="tel:+919871934288" className="phone-link">
            📞 +91-9871934288
          </a>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✖' : '☰'}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
