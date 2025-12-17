import React from "react";
import { FaMobileAlt, FaHome, FaUsers, FaMapMarkedAlt, FaBolt, FaTag, FaCheckCircle, FaLocationArrow,FaEye } from "react-icons/fa";
import "../Styles/componentstyles/About.css"; 
import {motion} from "framer-motion";
const About = () => {
  return (
    <div>
      {/* App Promotion */}
      <h1 style={{ textAlign: 'center', marginTop: '40px', fontSize: '1.8rem' }}>About Us</h1>

      
 
      {/* Vision */}
      <motion.section className="section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

      <section className="section vision-section">
        <div className="text-box slide-left">
          <h2><FaEye /> Our Vision</h2>
          <p>The mission of our company is that all the poor person should have their own home. We aim to enable all tenants to become landlords. We have already helped approximately 1000 families in Noida, Greater Noida, and Jewar to own homes and aim to build a vast empire in Greater Noida.</p>
        </div>
        <div className="image-box slide-right">
          <img src="https://t4.ftcdn.net/jpg/03/30/28/45/360_F_330284507_zWMKJuSAPN2VyomK4et4dTdHi2P8lmHb.jpg" alt="Vision" />
        </div>
      </section>
      </motion.section>
      {/* Mission */}
      <motion.section className="section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

      <section className="section mission-section">
        <div className="text-box slide-left">
          <h2><FaHome /> Our Mission</h2>
          <p>BPS GROUP wants to provide plots to 50,000 people. Our mission is to help everyone own a dream home at the right price and live happily without pressure. We provide a unique opportunity for those who dream of buying land but haven’t yet been able to do so.</p>
        </div>
        <div className="image-box slide-right">
          <img src="https://thumbs.dreamstime.com/b/our-mission-message-blue-billboard-city-background-our-mission-message-blue-billboard-364199777.jpg" alt="Mission" />
        </div>
      </section>
 </motion.section>
      {/* About Us */}
      <motion.section className="section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

      <section className="section aboutus-section">
        <div className="text-box slide-left">
          <h2><FaUsers /> About Us</h2>
          <p>Our expanding market presence brings us closer to our local and regional customers. We serve with a global workforce dedicated to building lasting partnerships. We bring insights and expertise to create belief and meet consumers’ changing desires.</p>
        </div>
        <div className="image-box slide-right">
          <img src="https://img.freepik.com/free-photo/about-as-service-contact-information-concept_53876-138509.jpg?semt=ais_hybrid&w=740" alt="About Us" />
        </div>
      </section>
 </motion.section>

      {/* Responsibility */}
      <motion.section className="section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

      <section className="section responsibility-section">
        <div className="text-box slide-left">
          <h2><FaCheckCircle /> Responsibility</h2>
          <p>BPS GROUP ensures transparency in property transfer and abides by RERA regulations. The builder-buyer agreement includes clauses outlining acceptable deviations from delivery timelines and plans.</p>
        </div>
        <div className="image-box slide-right">
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*hWwvgS1m9DzoYZSixvn1Ug.jpeg" alt="Responsibility" />
        </div>
      </section>
 {/* </motion.section> */}
      {/* Explore Sections */}
      
      <section className="section explore-section">
        <div className="text-box slide-left">
          <h2><FaMapMarkedAlt /> Search your favorite Plot</h2>
          <p>Find your perfect home in your desired location with ease and convenience!</p>
        </div>
        <div className="image-box slide-right">
          <img src="https://img.freepik.com/free-photo/delimitation-land-with-clear-sky_23-2149721839.jpg?semt=ais_hybrid&w=740" alt="Search" />
        </div>
      </section>
 </motion.section>
 <motion.section className="section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

      <section className="section explore-section">
        <div className="text-box slide-left">
          <h2><FaUsers /> Visit Appointment</h2>
          <p>Schedule a visit with our expert agents for a seamless property tour!</p>
        </div>
        <div className="image-box slide-right">
          <img src="https://realty-cards.com/wp-content/uploads/2023/07/real-estate-agent-client-meeting-1080x445.png" alt="Visit" />
        </div>
      </section>
 </motion.section>
      {/* Why Choose Us */}
      <motion.section className="section" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

      <section className="section whychoose-section">
        <div className="text-box slide-left">
          <h2><FaBolt /> Why Choose Us</h2>
          <ul>
            <li><FaUsers /> Experienced Team: Our skilled professionals guide you through every step.</li>
            <li><FaCheckCircle /> Certified Properties: Verified and legally approved listings.</li>
            <li><FaBolt /> Fast Process: Quick and efficient transactions.</li>
            <li><FaTag /> Discount Properties: Great deals within your budget.</li>
            <li><FaHome /> Modern Design: Explore contemporary styled homes.</li>
            <li><FaLocationArrow /> Convenient Location: Prime, connected localities.</li>
          </ul>
        </div>
        <div className="image-box slide-right">
          <img src="https://kamtrainingservices.com/wp-content/uploads/2024/07/businessman-hand-holding-why-choose-us-sign-isolated-grey-ba-background-business-concept-stock-photo-95386756.jpg" alt="Why Choose Us" />
        </div>
      </section>
       </motion.section>
    </div>
  );
};

export default About;
