import React from 'react';
import './CardNav.css';
import CardItem from './CardItem';

function CardNav() {
  return (
    <div className='card'>
      <div className='cards__containers'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/a.jpg'
              
              path='/services'
              
              label='ePro'
            >
            
            </CardItem>
          </ul>
        </div>
      </div>
    </div>
    );

  }
export default CardNav;
