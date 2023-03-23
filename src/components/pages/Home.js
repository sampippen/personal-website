import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';

//renders HeroSection and Cards components
function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;

//code used from https://github.com/briancodex/react-website-v1