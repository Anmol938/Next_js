"use client"
import React, { useState, useEffect } from 'react';
import './autoPlay.css';

const AutoPlaySlider = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the index to show the next slide
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex, interval, slides.length]);

  return (
    <div className="auto-play-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          {slide}
        </div>
      ))}
    </div>
  );
};

export default AutoPlaySlider;
