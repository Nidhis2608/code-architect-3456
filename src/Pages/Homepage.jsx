

import React, { useEffect } from 'react';
import ImageCarousel from '../Components/Carousel';
import PopularPlaces from '../Components/PopularDresses';
import FirstDiv from '../Components/FirstDiv';
import Reviews from '../Components/Reviews';

const Homepage = () => {
  useEffect(()=> {
    document.title = "Foggy | Home";
    },[]);
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
