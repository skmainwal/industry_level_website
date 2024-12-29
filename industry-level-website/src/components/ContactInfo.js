import React from "react";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "../styles/contactInfo.css";

const ContactInfo = ({
  address = {
    street: "123 Business Street, Suite 100",
    city: "New York, NY 10001",
  },
  phone = {
    number: "+1(555) 123-4567",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
  },
  email = {
    address: "info@yourcompany.com",
    responseTime: "We respond within 24 hours",
  },
  socialLinks = [
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/shubhamkumar1997/",
      icon: FaLinkedin,
    },
    // Add more social links as needed
  ],
}) => {
  const getSocialIcon = (platform) => {
    switch (platform) {
      case "linkedin":
        return FaLinkedin;
      case "twitter":
        return FaTwitter;
      case "facebook":
        return FaFacebook;
      case "instagram":
        return FaInstagram;
      default:
        return FaLinkedin;
    }
  };

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
                {" "}
                {address.street} <br /> {address.city}{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="contact-item">
            <div className="icon-wrapper">
              <HiPhone size={18} />{" "}
            </div>{" "}
            <div className="contact-text">
              <h3> Call Us </h3> <p> {phone.number} </p>{" "}
              <p className="availability"> {phone.hours} </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="contact-item">
            <div className="icon-wrapper">
              <HiMail size={18} />{" "}
            </div>{" "}
            <div className="contact-text">
              <h3> Email Us </h3> <p> {email.address} </p>{" "}
              <p className="response-time"> {email.responseTime} </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="social-links">
          {" "}
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              {React.createElement(link.icon, { size: 16 })}{" "}
            </a>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default ContactInfo;
