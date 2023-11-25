"use client"
import React, { useState } from 'react';
import './Ts.css';

const CircularImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="circular-image-slider">
      <button onClick={prevImage}>Previous</button>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="slider-image"
      />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default CircularImageSlider;
