import React from 'react';
import '../Styles/componentstyles/newsglimpse.css';
import newsImage from '../assets/news.jpg'; // Replace with your local image file

const NewsGlimpse = () => {
  return (
    <div className="news-container">
      
      <div className="single-news-image">
        <img src={newsImage} alt="News Glimpse" />
      </div>
    </div>
  );
};

export default NewsGlimpse;
