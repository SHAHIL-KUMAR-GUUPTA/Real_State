import React from 'react';
import '../Styles/componentstyles/FacilitiesAmenities.css';
import {
  FaLightbulb,
  FaRoad,
  FaShieldAlt,
  FaStore,
  FaTint,
  FaLock,
  FaShoppingCart,
  FaTree,
  FaSchool,
  FaWater,
  FaBolt,
} from 'react-icons/fa';

const amenities = [
  { icon: <FaLightbulb />, name: 'STREET LIGHTS', color: '#fbc02d' },
  { icon: <FaRoad />, name: 'WIDE ROADS', color: '#8d6e63' },
  { icon: <FaShieldAlt />, name: '24 X 7 SECURITY', color: '#d32f2f' },
  { icon: <FaStore />, name: 'STORE', color: '#6a1b9a' },
  { icon: <FaTint />, name: 'WATER SUPPLY', color: '#0288d1' },
  { icon: <FaLock />, name: 'GATED SECURITY', color: '#37474f' },
  { icon: <FaShoppingCart />, name: 'COMMERCIAL AREA', color: '#00796b' },
  { icon: <FaTree />, name: 'PARKS', color: '#388e3c' },
  { icon: <FaSchool />, name: 'SCHOOL', color: '#f57c00' },
  { icon: <FaWater />, name: 'DRAINAGE SYSTEM', color: '#00acc1' },
  { icon: <FaBolt />, name: 'ELECTRICITY', color: '#ffeb3b' },
];

const FacilitiesAmenities = () => {
  return (
    <div className="facilities-container">
      <h2 className="facilities-heading">Facilities & Amenities</h2>
      <div className="amenities-grid">
        {amenities.map((item, index) => (
          <div className="amenity-item" key={index}>
            <div className="icon" style={{ color: item.color }}>{item.icon}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesAmenities;
