import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import "../styles/contactInfo.css";

const ContactUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    });

    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div id="contact" className="contact-section">
      <div className="contact-header animate-on-load">
        <h1> Get in Touch </h1> <div className="header-underline"> </div>{" "}
        <p className="header-description">
          We 're here to help and answer any questions you might have. We look
          forward to hearing from you.{" "}
        </p>{" "}
      </div>{" "}
      <div className="contact-container">
        <ContactInfo />
        <ContactForm />
      </div>{" "}
    </div>
  );
};

export default ContactUs;
