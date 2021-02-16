
import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Help() {
  return (
    <div className='cards'>
      <h1>Your Online Suply Chain Solution Hub!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='how our app works' 
              label='help'
              //path='/services'
            />
            </ul>
          
          <div>
          <h5>under construction!!!!!!!!!!!!!!!!!!!!!!!!!!</h5>
          </div>
        
          
        
          
        </div>
      </div>
    </div>
  );
}

export default Help;
