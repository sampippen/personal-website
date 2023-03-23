import React from 'react';
import '../App.css';
import './HeroSection.css';

//dispays background video in infinite loop and my name
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/Sam Pippen.mp4' autoPlay loop muted />
      <h1>Samuel Pippen</h1>
    </div>
  );
}

export default HeroSection;

//code used from https://github.com/briancodex/react-website-v1