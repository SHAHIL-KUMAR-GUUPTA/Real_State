import React from 'react';
import '../Styles/componentstyles/Expressway.css';
import Expresswayimag from '../assets/Expressway.jpg'; // Replace with your local image file

const Expressway = () => {
  return (
    <div className="news-container">
      
      <div className="single-news-image">
        <img src={Expresswayimag} alt="News Glimpse" />
      </div>
    </div>
  );
};

export default Expressway;
