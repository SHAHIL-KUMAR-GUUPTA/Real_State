import React from "react";
import "../Styles/componentstyles/property.css";
import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    title: "1 Gaj Land",
    price: "₹16,000",
    image: "https://img.freepik.com/free-photo/land-plot-with-nature-landscape-location-pin_23-2149937918.jpg",
  },
  {
    id: 2,
    title: "100 Gaj Land",
    price: "₹16,000,00",
    image: "https://image.shutterstock.com/image-photo/land-plot-aerial-view-gps-260nw-1767957764.jpg",
  },
  {
    id: 3,
    title: "200 Gaj Land",
    price: "₹32,000,00",
    image: "https://t3.ftcdn.net/jpg/05/46/72/68/360_F_546726830_Hi8kZ2ssIIIiaPD0ipI6l0OU3EaJ0SkQ.jpg",
  },
];

const PropertyPage = () => {
  return (
    <div className="property-page">
      <h1>Available Properties</h1>
      <div className="property-grid">
        {properties.map((property) => (
          <div className="property-card" key={property.id}>
            <img src={property.image} alt={property.title} />
            <h2>{property.title}</h2>
            <p>Price: {property.price}</p>
            <button><Link to="/contact" className="contact">Contact</Link></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyPage;
