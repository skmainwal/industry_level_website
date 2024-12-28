import React from "react";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "../styles/contactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info animate-on-load">
      <div className="info-card">
        <div className="contact-details">
          <div className="contact-item">
            <div className="icon-wrapper">
              <HiLocationMarker size={18} />{" "}
            </div>{" "}
            <div className="contact-text">
              <h3> Visit Us </h3>{" "}
              <p>
                123 Business Street, Suite 100 <br /> New York, NY 10001{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="contact-item">
            <div className="icon-wrapper">
              <HiPhone size={18} />{" "}
            </div>{" "}
            <div className="contact-text">
              <h3> Call Us </h3> <p> +1(555) 123 - 4567 </p>{" "}
              <p className="availability"> Mon - Fri: 9: 00 AM - 6: 00 PM </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="contact-item">
            <div className="icon-wrapper">
              <HiMail size={18} />{" "}
            </div>{" "}
            <div className="contact-text">
              <h3> Email Us </h3> <p> info @yourcompany.com </p>{" "}
              <p className="response-time"> We respond within 24 hours </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/shubhamkumar1997/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin size={16} />{" "}
          </a>{" "}
          {/* <a href="#" className="social-icon">
                                                                        <FaTwitter size={16} />{" "}
                                                                      </a>{" "}
                                                                      <a href="#" className="social-icon">
                                                                        <FaFacebook size={16} />{" "}
                                                                      </a>{" "}
                                                                      <a href="#" className="social-icon">
                                                                        <FaInstagram size={16} />{" "}
                                                                      </a>{" "} */}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default ContactInfo;
