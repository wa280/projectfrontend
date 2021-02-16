import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import CardHome from './CardHome'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/earth.mp4' autoPlay loop muted />
      <CardHome/>
     
      <h1>eLOGISTICSpro</h1>
      <h2></h2>
      
      <p>Your Online Suply Chain Solution </p>
      
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
        
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Register Now <i className='far fa-play-circle' />
        </Button>
        
      </div>
      
    </div>
    
  );
}

export default HeroSection;
