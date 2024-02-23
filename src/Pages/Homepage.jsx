

import React from 'react';
import ImageCarousel from '../Components/Carousel';
import PopularPlaces from '../Components/PopularDresses';
import FirstDiv from '../Components/FirstDiv';
import Footer from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import Reviews from '../Components/Reviews';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <FirstDiv />
      <PopularPlaces />
      <ImageCarousel />
      <Reviews />
      <Footer />

    </div>
  )
  }

export default Homepage;
