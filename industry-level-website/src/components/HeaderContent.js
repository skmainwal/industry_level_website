import React from "react";

const HeaderContent = ({ title, tagline }) => {
  return (
    <div className="header-content">
      <h2 className="about-title"> {title} </h2>{" "}
      <div className="title-underline"> </div>{" "}
      <h4 className="services-tagline"> {tagline} </h4>{" "}
    </div>
  );
};

export default HeaderContent;
