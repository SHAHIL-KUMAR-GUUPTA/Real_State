import React from "react";
import '../Styles/componentstyles/footer.css';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand & Socials */}
        <div className="footer-section brand">
          <h2>BPS Heights</h2>
          <p>Your trusted partner in finding the perfect home.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/bpsgroup01/" aria-label="Facebook"><FaFacebookF /></a>
            <a href="http://wa.link/fdkqxk" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/bpsgr.oup/" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/@Bpsgroupproperty" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/property">Properties</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: bpsgroup2025@gmail.com</p>
          <p>Phone: 📞 +91-9871934288</p>
        </div>
      </div>

      {/* Disclaimer & Copyright */}
      <div className="footer-disclaimer">
        <p>
          BPS Group Realty Services Limited is an intermediary platform for
          advertising properties and offers from Sellers. It is not involved in
          transactions between Sellers and Buyers and makes no representations
          or warranties regarding the offers. BPS Group is not responsible for
          resolving any disputes between Sellers and Buyers.
        </p>
        <p>
          All trademarks, logos and names are properties of their respective owners.
          All Rights Reserved. © Copyright 2025 BPS Group Realty Services Limited.
        </p>
      </div>

      <div className="footer-bottom">
        <p style={{backgroundColor:'black'}}>© {new Date().getFullYear()} BPS Heights. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
