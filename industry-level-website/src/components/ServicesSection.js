import React, { useEffect, useRef } from "react";
import service_image1 from "../images/services/service_image1.jpg";
import service_image2 from "../images/services/service_image2.jpg";
import service_image3 from "../images/services/service_image3.jpg";
import HeaderContent from "./HeaderContent";

function ServicesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-enter-active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Packaged Equipment Engineering",
      image: service_image1,
      description:
        "Chemical Injection Skids, Filter skids, Lube Oil Systems and other skid mounted packages.",
      features: [
        // "Custom design solutions",
        // "Optimization for efficiency",
        // "Industry-standard compliance",
        // "Quality assurance testing",
      ],
    },
    {
      title: "Piping Engineering",
      image: service_image2,
      description:
        "Comprehensive piping solutions with advanced analysis and modeling capabilities.",
      features: [
        // "Surge Analysis",
        // "Pipe Stress Analysis (CAESAR II)",
        // "Analysis of Jacketed Piping",
        // "3D Modeling (PDMS/PDS/CADWORKS)",
        // "Thermal Bowing Analysis",
      ],
    },
    {
      title: "Civil and Structural Engineering",
      image: service_image3,
      description:
        "Complete structural engineering solutions for industrial and commercial projects.",
      features: [
        // "Fabrication drawings for various structures",
        // "Building design (Concrete/Brick)",
        // "Storage tank platforms",
        // "Technological structures",
        // "Heavy/Medium/Light structures",
      ],
    },
    {
      title: "Process Engineering",
      image: service_image1,
      description:
        "Comprehensive process engineering solutions for industrial applications.",
      features: [
        // "Process flow diagrams",
        // "Equipment sizing and selection",
        // "Process optimization",
        // "Safety system design",
        // "Process control systems",
      ],
    },
    {
      title: "Mechanical Engineering",
      image: service_image2,
      description:
        "Advanced mechanical engineering services for industrial equipment and systems.",
      features: [
        // "Equipment design",
        // "Mechanical system analysis",
        // "3D modeling and simulation",
        // "Thermal analysis",
        // "Vibration analysis",
      ],
    },
  ];

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <HeaderContent
        title="Our Services"
        tagline="Static Equipment Design and Engineering Validation with a team of expert engineers and combined experience of 63+ years."
      />
      <div className="services-description">
        <p>
          We specialize in pressure vessels, heat exchangers, and storage tanks
          using industry - leading PV Elite software.{" "}
        </p>{" "}
      </div>{" "}
      <div className="services-grid">
        {" "}
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card section-enter"
            style={{
              animationDelay: `${(index % 3) * 0.2}s`,
              gridColumn: services.length === 4 ? "span 6" : "auto",
            }}
          >
            <div className="service-card-image">
              <img src={service.image} alt={service.title} />{" "}
              <div className="service-card-overlay">
                <h3> {service.title} </h3>{" "}
              </div>{" "}
            </div>{" "}
            <div className="service-card-content">
              <p className="service-description"> {service.description} </p>{" "}
              <ul className="service-features">
                {" "}
                {service.features.map((feature, idx) => (
                  <li key={idx}> {feature} </li>
                ))}{" "}
              </ul>{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </section>
  );
}

export default ServicesSection;
