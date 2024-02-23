
import React from 'react';
import ImageCarousel from '../Components/Carousel';
import PopularPlaces from '../Components/PopularDresses';
import FirstDiv from '../Components/FirstDiv';
import Footer from '../Components/Footer';

const Homepage = () => {
  return (
    <div>Homepage
      <FirstDiv/>
      <PopularPlaces />
      <ImageCarousel />
      <Footer />

    </div>
  )
  }

export default Homepage;
