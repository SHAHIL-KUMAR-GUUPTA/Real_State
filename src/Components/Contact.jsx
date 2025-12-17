import React, { useRef } from 'react';
import '../Styles/componentstyles/Contact.css';
import { FaPhoneAlt, FaEnvelope, FaUser, FaRegCommentDots } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_oe75iea',
      'template_mhbbxup',
      form.current,
      'kW2JRtq3YKcdFCuJ0'
    ).then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    }).catch((error) => {
      console.error(error.text);
      alert("Failed to send message. Please try again.");
    });
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-left">
          <h2>Contact Info</h2>
          <div className="info-box">
            <p>📍 BPS Heights, D-33 Sector-2, Noida - 201301</p>
            <p><FaPhoneAlt /> +91 98719 34288</p>
            <p><FaEnvelope /> bpsgroup2025@gmail.com</p>
          </div>
        </div>

        <div className="contact-right">
          <h2>Send a Message for Enquiry</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name"><FaUser /> Name</label>
            <input type="text" name="user_name" id="name" required />

            <label htmlFor="phone"><FaPhoneAlt /> Mobile Number</label>
            <input type="tel" name="user_mobile" id="phone" required />

            <label htmlFor="message"><FaRegCommentDots /> Message</label>
            <textarea name="message" id="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Map Location"
          src="https://maps.google.com/maps?q=28.58275,77.31586&z=13&output=embed"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
 