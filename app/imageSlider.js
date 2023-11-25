"use client"
import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
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
    <div className="image-slider">
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />

      <button onClick={prevImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default ImageSlider;
