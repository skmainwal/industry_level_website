import React, { useEffect, useRef } from "react";
import { ABOUT_US_DESCRIPTION } from "./utils/constant";
import HeaderContent from "./HeaderContent";
import {
  FaIndustry,
  FaHandshake,
  FaBullseye,
  FaUserCheck,
  FaCogs,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaTools,
} from "react-icons/fa";

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="services-section" ref={sectionRef}>
      <div className="about-header animate-on-scroll fade-in">
        <HeaderContent
          title="About us"
          tagline="Years Of Engineering Excellence With Quality At Its Best!"
        />
        <div className="header-background"> </div>{" "}
      </div>{" "}
      <div className="about-content">
        <div className="about-description">
          <div className="company-intro animate-on-scroll slide-up">
            <div className="intro-icon">
              <FaIndustry className="rotating-icon" />
            </div>{" "}
            <p className="highlight-text">
              Started by Oil and Gas professionals,{" "}
              <strong> Team Process and Mechanical Design </strong> is an Indian
              company that provides Basic Detail Engineering in the field of Oil
              & gas, Refinery & Petrochemical Plant, Process & Chemical Plant,
              Fertilizer, Power Plant, etc.{" "}
            </p>{" "}
            <p className="highlight-text">
              Over the past years <strong> TPMD </strong> has earned the trust
              of their clients through their quality work delivered on time with
              cost effectiveness.{" "}
            </p>{" "}
            <p className="highlight-text">
              Our Motto is to provide Design engineering services / solutions in
              an organized way to satisfy the customer’ s demand in all aspects
              with cost effectiveness.{" "}
            </p>{" "}
            <p className="highlight-text">
              Our accountability is our biggest strength and it makes our
              clients trust us.We also believe in going the extra mile for them,
              right from the first interaction to the last, we work closely with
              them to fulfill their requirements.{" "}
            </p>{" "}
            <p className="highlight-text">
              <strong> TPMD </strong> provides wide range of design and
              engineering services for petroleum refineries, Petrochemical
              plant, Chemical plant, Pharmaceutical plants, Food processing
              plant, Pulp & paper plants and cement plants with a mission to
              achieve engineering excellence, Customer satisfaction, Employee
              motivation & satisfaction and innovative approach.{" "}
            </p>{" "}
            <p className="highlight-text">
              We have engineering capability in thermal design, Mechanical
              design, Thermal Bowing Analysis, Piping Stress Analysis, including
              finite element analysis, Nozzle Pro Analysis and detail
              fabrication drawings.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default AboutUs;
