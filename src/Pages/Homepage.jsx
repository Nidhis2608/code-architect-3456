

import React from 'react';
import ImageCarousel from '../Components/Carousel';
import PopularPlaces from '../Components/PopularDresses';
import FirstDiv from '../Components/FirstDiv';
import Footer from '../Components/Footer';
import { Navbar } from '../Components/Navbar';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <FirstDiv/>
      <PopularPlaces />
      <ImageCarousel />
      <Footer />

    </div>
  )
}

export default Homepage