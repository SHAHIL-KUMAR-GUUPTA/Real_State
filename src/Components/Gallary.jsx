import React, { useState } from 'react';
import '../Styles/componentstyles/Gallary.css';

import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image4.jpg';
import img5 from '../assets/image5.jpg';
import img6 from '../assets/image6.jpg';
import img7 from '../assets/image7.jpg';
import img8 from '../assets/image8.jpg';
import img9 from '../assets/image9.jpg';
import img10 from '../assets/image10.jpg';
import img11 from '../assets/image11.jpg';
import img12 from '../assets/image12.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedImages = showAll ? images : images.slice(0, 4);

  return (
    <>
      <div className="gallery-container">
        <h2 className="gallery-heading">Our Project Gallery</h2>
        <div className="gallery-grid">
          {displayedImages.map((src, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="gallery-img"
                onClick={() => setSelectedImg(src)}
              />
            </div>
          ))}
        </div>

        <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>

        {selectedImg && (
          <div className="overlay" onClick={() => setSelectedImg(null)}>
            <img src={selectedImg} alt="Full View" className="overlay-img" />
            <button className="close-btn" onClick={() => setSelectedImg(null)}>✖</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
