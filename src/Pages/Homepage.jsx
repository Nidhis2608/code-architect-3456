

import React from 'react';
import ImageCarousel from '../Components/Carousel';
import PopularPlaces from '../Components/PopularDresses';
import FirstDiv from '../Components/FirstDiv';
import { Navbar } from '../Components/Navbar';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <FirstDiv />
      <PopularPlaces />
      <ImageCarousel />
      

    </div>
  )
  }

export default Homepage;
