"use client"

import React, { useState } from 'react';
import './circleVisible.css';



const CircularImageSliderVisible = ({ images, visibleImages = 3 }) => {
  const [startImageIndex, setStartImageIndex] = useState(0);

  const nextImages = () => {
    setStartImageIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  const prevImages = () => {
    setStartImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="circular-image-slider-visible">
      <button onClick={prevImages}>Previous</button>
      <div className="image-container-visible">
        {images.slice(startImageIndex, startImageIndex + visibleImages).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${startImageIndex + index + 1}`}
            className="slider-image-visible"
          />
        ))}
      </div>
      <button className = "button-visible" onClick={nextImages}>Next</button>
    </div>
  );
};

export default CircularImageSliderVisible;
