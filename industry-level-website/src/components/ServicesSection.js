import React from "react";
import service_image1 from "../images/services/service_image1.jpg";
import service_image2 from "../images/services/service_image2.jpg";
import service_image3 from "../images/services/service_image3.jpg";
import HeaderContent from "./HeaderContent";

function ServicesSection() {
  const services = [
    {
      title: "Packaged Equipment Engineering",
      image: service_image1,
      description:
        "Chemical Injection Skids, Filter skids,Lube Oil Systems and other skid mounted packages.",
    },
    {
      title: "Piping Engineering",
      image: service_image2,
      description:
        "Surge Analysis, Pipe Stress Analysis on CAESAR II, Analysis of Jacketed Piping, Duct Piping, etc., 3D Modeling using PDMS/PDS/CADWORKS, Thermal Bowing Analysis.",
    },
    {
      title: "Civil and Structural Engineering",
      image: service_image3,
      description:
        "Fabrication drawing for Shed / Shelter, Pipe rack,Technological structure,Building(Concrete / Brick),Heavy structure,Light structure, Medium structure, Storage tank platform and stairway. ",
    },
  ];

  return (
    <section id="services" className="services-section">
      <HeaderContent
      title="Our Services"
          tagline="Static Equipment Design and Engineering Validation We have design
        capabilities for pressure vessels, S & T heat exchanger, Air fin
        coolers, storage tanks etc.with a team of 5 static equipment design
        engineer and a combined experience of 63 years.(Using PV Elite
        software)"
       />
     
      <div className="services-grid">
        {" "}
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />{" "}
            <h3> {service.title} </h3> <p> {service.description} </p>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </section>
  );
}

export default ServicesSection;
