import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import "./styles.css";

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <button className="slider-button prev" onClick={goToPrevious}>
        <MdKeyboardArrowLeft />
      </button>{" "}
      <div className="image-slider">
        {" "}
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={image.src} alt={image.title} className="slider-image" />
            <div className="slider-content">
              <h3 className="slider-title"> {image.title} </h3>{" "}
              <p className="slider-description"> {image.description} </p>{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
      <button className="slider-button next" onClick={goToNext}>
        <MdKeyboardArrowRight />
      </button>{" "}
      <div className="slider-dots">
        {" "}
        {images.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}{" "}
      </div>{" "}
    </div>
  );
}

export default ImageSlider;
