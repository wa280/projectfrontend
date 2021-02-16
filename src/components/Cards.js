import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Your Online Suply Chain Solution Hub!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/road.jpg'
              
              text=' 
              Road................................................................
              .....................................................?'
              label='Road'
              
              //path='/services'
            />
            <CardItem
              src='images/ship.jpg'
              text='Water..............................................................
              ..........................................................?'
              label='Water'
              //path='/services'
            />
            
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/rail2.jpg'
              
              text=' 
              Rail................................................................
              .....................................................?'
              label='Rail'
              
              //path='/services'
            />
            <CardItem
              src='images/air1.jpg'
              text='Air..............................................................
              ..........................................................?'
              label='Air'
              //path='/services'
            />
            
            
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
