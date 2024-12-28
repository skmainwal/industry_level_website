import React, { useState } from "react";
import { HiPaperAirplane, HiCheckCircle } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import "../styles/contactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        "service_52v28ej", // Replace with your EmailJS service ID
        "template_vhabdap", // Replace with your EmailJS template ID
        templateParams,
        "Hns0gNZywQPfUiCOT" // Replace with your EmailJS public key
      );

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      console.error("EmailJS Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFocus = (field) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused("");
  };

  return (
    <form className="contact-form animate-on-load" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2> Send us a Message </h2>{" "}
        <p> Fill out the form below and we 'll get back to you shortly.</p>{" "}
      </div>{" "}
      <div className="form-content">
        <div className={`form-group ${focused === "name" ? "focused" : ""}`}>
          <label htmlFor="name"> Your Name </label>{" "}
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
            required
          />
        </div>{" "}
        <div className={`form-group ${focused === "email" ? "focused" : ""}`}>
          <label htmlFor="email"> Your Email </label>{" "}
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
            required
          />
        </div>{" "}
        <div className={`form-group ${focused === "subject" ? "focused" : ""}`}>
          <label htmlFor="subject"> Subject </label>{" "}
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onFocus={() => handleFocus("subject")}
            onBlur={handleBlur}
            required
          />
        </div>{" "}
        <div
          className={`form-group message-group ${
            focused === "message" ? "focused" : ""
          }`}
        >
          <label htmlFor="message"> Your Message </label>{" "}
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => handleFocus("message")}
            onBlur={handleBlur}
            required
          />
        </div>{" "}
        <div className="form-group">
          <button type="submit" className="submit-btn" disabled={loading}>
            <span> {loading ? "Sending..." : "Send Message"} </span>{" "}
            <HiPaperAirplane size={16} />{" "}
          </button>{" "}
          {submitted && (
            <div className="success-message">
              <HiCheckCircle size={16} />{" "}
              <p> Thank you for your message!We 'll get back to you soon.</p>{" "}
            </div>
          )}{" "}
          {error && (
            <div className="error-message">
              <p> {error} </p>{" "}
            </div>
          )}{" "}
        </div>{" "}
      </div>{" "}
    </form>
  );
};

export default ContactForm;
