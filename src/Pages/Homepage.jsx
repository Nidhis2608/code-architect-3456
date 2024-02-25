

import React from 'react';
import ImageCarousel from '../Components/Carousel';
import PopularPlaces from '../Components/PopularDresses';
import FirstDiv from '../Components/FirstDiv';
import { Navbar } from '../Components/Navbar';
import Reviews from '../Components/Reviews';

const Homepage = () => {
  return (
    <div>
      <FirstDiv />
      <PopularPlaces />
      <ImageCarousel />
      <Reviews />

    </div>
  )
  }

export default Homepage;
