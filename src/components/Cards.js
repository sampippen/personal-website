import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

//component for displaying clickable cards with images and tags
//cards use background images, labels with text on them, and links to other pages
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
              text='Longhorn Powerlifting'
              label='Sports'
              path='/'
            />
            <CardItem
              src='images/Resume.png'
              text='Resume'
              label='Professional'
              path='/'
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