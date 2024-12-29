import React, { useState } from "react";
import PropTypes from "prop-types";
import { HiPaperAirplane, HiCheckCircle } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import "../styles/contactForm.css";

const ContactForm = ({
  title = "Send us a Message",
  subtitle = "Fill out the form below and we'll get back to you shortly",
  emailjsConfig = {
    serviceId: "service_52v28ej",
    templateId: "template_vhabdap",
    publicKey: "Hns0gNZywQPfUiCOT",
  },
  onSubmitSuccess,
  onSubmitError,
  customFields,
  className = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    ...(customFields || {}),
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
        ...formData, // Include any custom fields
      };

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        ...(customFields || {}),
      });

      if (onSubmitSuccess) {
        onSubmitSuccess(templateParams);
      }

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      const errorMessage = "Failed to send message. Please try again later.";
      setError(errorMessage);
      if (onSubmitError) {
        onSubmitError(err);
      }
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
    <form
      className={`contact-form animate-on-load ${className}`}
      onSubmit={handleSubmit}
    >
      <div className="form-header">
        <h2> {title} </h2> <p> {subtitle} </p>{" "}
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

ContactForm.propTypes = {
  // Text content props
  title: PropTypes.string,
  subtitle: PropTypes.string,

  // EmailJS configuration
  emailjsConfig: PropTypes.shape({
    serviceId: PropTypes.string.isRequired,
    templateId: PropTypes.string.isRequired,
    publicKey: PropTypes.string.isRequired,
  }),

  // Callback functions
  onSubmitSuccess: PropTypes.func,
  onSubmitError: PropTypes.func,

  // Custom fields and styling
  customFields: PropTypes.object,
  className: PropTypes.string,
};

ContactForm.defaultProps = {
  title: "Send us a Message",
  subtitle: "Fill out the form below and we'll get back to you shortly",
  emailjsConfig: {
    serviceId: "service_52v28ej",
    templateId: "template_vhabdap",
    publicKey: "Hns0gNZywQPfUiCOT",
  },
  onSubmitSuccess: undefined,
  onSubmitError: undefined,
  customFields: undefined,
  className: "",
};

export default ContactForm;
