import React from "react";
import TrendingSlider from "./components/TrendingSlider";
import CircularImageSlider from "./components/CircularImageSlider";
import CircularImageSliderVisible from "./components/CircularImageSliderVisibleLevel";
import AutoPlaySlider from './components/AutoPlaySlider'

    import Head from "next/head";
    import BootstrapCarousel from "./components/carousels/BootStrap";


const Home = () => {

  const images = [
    'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/12753820/pexels-photo-12753820.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

  const slides = [
    <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 1" />,
    <img src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 2" />,
    <img src="https://images.pexels.com/photos/12753820/pexels-photo-12753820.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 3" />,
    <img src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 4" />,
    <img src="https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 5" />,
    <img src="https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 6" />,
    // Add more slides as needed
  ];


  return (
    <div>
      <h1>Auto-play Slider</h1>
      <AutoPlaySlider slides={slides} interval={3000} />

      <h3>Circular Image Slider Visible</h3>
      <CircularImageSliderVisible images={images} visibleImages={3} />
      <h3>Circular Image Slider</h3>
      <CircularImageSlider images={images} />
      <TrendingSlider />
      {/* <BootstrapCarousel /> */}

    </div>
  );
};

export default Home;