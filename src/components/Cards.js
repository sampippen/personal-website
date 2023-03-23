import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

// TODO: make images fit card better

// Component for displaying clickable cards with images and tags cards
// use background images, labels with text on them, and links to other pages
class Cards extends React.Component {
  render() {
    return (
      <div className='cards'>
        <h1>Skills/Facts About Me</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/LPL-logo.jpeg'
                text='Multisport Athlete'
                label='Sports'
                path='/sports'
              />
              <CardItem
                src='images/Visa-Logo.jpg'
                text='Work'
                label='Professional'
                path='/professional'
              />
              <CardItem
                src='images/UT-Austin-Seal.png'
                text='Academics'
                label='Education'
                path='/education'
              />
              <CardItem
                src='images/code.jpg'
                text='Personal Projects'
                label='Projects'
                path='/projects'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;

//code used from https://github.com/briancodex/react-website-v1