import React, { useState } from 'react';
import '../Styles/componentstyles/location.css';
import mapImage from '../assets/location.jpg'; // Your local image

const MapSection = () => {
  const [imageFull, setImageFull] = useState(false);
  const [mapFull, setMapFull] = useState(false);

  // Replace with your actual coordinates
  const latitude = 27.987667;
  const longitude =77.609472;
  const mapSrc = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

 
  return (
    <section className="location-section">
      <h2 className="location-heading">Plot Location</h2>

      <div className="map-section-container">
        <div
          className={`map-image ${imageFull ? 'fullscreen' : ''}`}
          onClick={() => setImageFull(!imageFull)}
        >
          <img src={mapImage} alt="Plot Map Layout" />
        </div>

        <div
          className={`map-frame ${mapFull ? 'fullscreen' : ''}`}
          onClick={() => setMapFull(!mapFull)}
        >
          <iframe
            src={mapSrc}
            allowFullScreen
            loading="lazy"
            title="Plot Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
