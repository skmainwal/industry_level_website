import React from "react";
import ImageSlider from "./imageSlider/ImageSlider";
import industry_image1 from "../images/services/service_image1.jpg";
import industry_image2 from "../images/services/service_image2.jpg";
import industry_image3 from "../images/services/service_image3.jpg";

const ServedIndustry = () => {
  const industries = [
    {
      title: "Petrochemical Complex",
      src: industry_image1,
      description:
        "Comprehensive engineering solutions for upstream, midstream, and downstream operations.",
    },
    {
      title: "Oil And Gas Industry",
      src: industry_image2,
      description:
        "Design and engineering services for chemical processing and manufacturing facilities.",
    },
    {
      title: "Power Plant",
      src: industry_image3,
      description:
        "Engineering expertise for conventional and renewable power generation plants.",
    },
  ];

  return (
    <section id="industries" className="industries-section">
      <h2> Industries We Serve! </h2>{" "}
      <p className="industries-description">
        We provide comprehensive engineering solutions across various industrial
        sectors, leveraging our expertise to deliver innovative and efficient
        solutions.{" "}
      </p>{" "}
      <ImageSlider images={industries} />{" "}
    </section>
  );
};

export default ServedIndustry;
