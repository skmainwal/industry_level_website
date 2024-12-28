import React from "react";
import ImageSlider from "./imageSlider/ImageSlider";
import industry_image1 from "../images/services/service_image1.jpg";
import industry_image2 from "../images/services/service_image2.jpg";
import industry_image3 from "../images/services/service_image3.jpg";
import HeaderContent from "./HeaderContent";

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
    <section id="serviced" className="industries-section">
      <HeaderContent
        title="Industries We Serve"
        tagline="Delivering Excellence Across Multiple Sectors"
      />
      <ImageSlider images={industries} />{" "}
    </section>
  );
};

export default ServedIndustry;
