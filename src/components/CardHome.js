import React from 'react';
import './CardHome.css';
import CardItem from './CardItem';

function CardHome() {
  return (
    <div className='card'>
      <div className='cards__containers'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/b.jpg'
              
              
              text=' xylem '
              label='ePro'
              
              //path='/services'
            >
            
            </CardItem>
          </ul>
        </div>
      </div>
    </div>
    );

  }
export default CardHome;
