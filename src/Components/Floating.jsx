import React from 'react';
import '../Styles/componentstyles/floating.css';
import { FaWhatsapp, FaTelegramPlane, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function FloatingSocial() {
  return (
    <div className="floating-social">
      <a
        href="http://wa.link/fdkqxk"  // Replace with your WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp blink"
      >
        <FaWhatsapp size={18} />
      </a>
      <a
        href="https://www.instagram.com/bpsgr.oup/"  // Replace with your Telegram link
        target="_blank"
        rel="noopener noreferrer"
        className="insta blink"
      >
        <FaInstagram size={18} />
      </a>
      <a
        href="https://www.facebook.com/bpsgroup01/"  // Replace with your Telegram link
        target="_blank"
        rel="noopener noreferrer"
        className="telegram blink"
      >
        <FaFacebook size={18} />
      </a>
      <a
        href="#"  // Replace with your Telegram link
        target="_blank"
        rel="noopener noreferrer"
        className="telegram blink"
      >
        <FaLinkedin size={18} />
      </a>
      <a
        href="https://www.youtube.com/@Bpsgroupproperty"  // Replace with your Telegram link
        target="_blank"
        rel="noopener noreferrer"
        className="youtube blink"
      >
        <FaYoutube size={18} />
      </a>
    </div>
  );
}
