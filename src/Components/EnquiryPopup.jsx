import React, { useState, useEffect, useRef } from "react";
import "../Styles/componentstyles/EnquiryPopup.css";
import { MdClose } from "react-icons/md";
import emailjs from "@emailjs/browser";

const EnquiryPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupCount, setPopupCount] = useState(0);
  const formRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
      setPopupCount(prevCount => {
        const newCount = prevCount + 1;
        if (newCount >= 3) {
          clearInterval(interval); // Stop after 3 popups
        }
        return newCount;
      });
    }, 20000); // every 20 seconds

    return () => clearInterval(interval);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_oe75iea",     // Replace with your service ID
      "template_mhbbxup",    // Replace with your template ID
      formRef.current,
      "kW2JRtq3YKcdFCuJ0"      // Replace with your public key
    ).then(() => {
      alert("Enquiry submitted successfully!");
      formRef.current.reset();
      setShowPopup(false);
    }).catch((error) => {
      console.error("Email error:", error);
      alert("Failed to send enquiry. Please try again.");
    });
  };

  return (
    showPopup && (
      <div className="popup-overlay">
        <div className="popup-content">
          <div className="popup-image">
            <img
              src="https://t3.ftcdn.net/jpg/07/75/62/70/360_F_775627009_gs1mFbknZqtkjaIXI44mPLp38NAurxLa.jpg"
              alt="Plot"
            />
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="popup-form">
            <h2>Enquire Now</h2>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="tel" name="user_mobile" placeholder="Mobile Number" required />
            <textarea name="message" placeholder="Your Message" required />
            <input type="hidden" name="date" value={new Date().toLocaleString()} />
            <button type="submit">Submit</button>
          </form>

          <button className="close-btn" onClick={closePopup}>
            <MdClose />
          </button>
        </div>
      </div>
    )
  );
};

export default EnquiryPopup;
