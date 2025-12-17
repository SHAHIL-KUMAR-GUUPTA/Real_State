import React from 'react';
import '../Styles/componentstyles/section.css';
import bgImage from '../assets/plotsss.png'; 
import Gallery from './Gallary';
import Contact from './Contact';  
import Property from './Properties';
import About from './About';  
import { Link } from 'react-router-dom';
import JewarDevelopment from './JewarDevelopment';
import FacilitiesAmenities from './FacilitiesAmenities';
import NewsGlimpse from './NewsGlimpse';
import Location from './Location';
import Expressway from './Expressway';

const HeroSection = () => {
  return (
    <>
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Build Your Dream Home with Us</h1>
          <p>Premium residential plots available in prime locations. Invest today for a better tomorrow.</p>
          <Link to="/contact" className="hero-button">Enquire Now</Link>
        </div>
      </div>
    </section>
    <Property/>
    <Expressway/>
    <Gallery/>
    <JewarDevelopment/>
    <FacilitiesAmenities/>
    <NewsGlimpse/> 
    <Location/>
    <About/>
    <Contact/>
    </>
  );
};

export default HeroSection;
