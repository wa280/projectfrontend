import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
import Footer from '../Footer';

function Services() {
  return (
    <div className='cards'>
      <h1>Your Online Suply Chain Solution Hub!</h1>
      <h1>page under construction!!!!!!!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='To be the best Logistics Application that drives agility by offering smart logistics solutions' 
              label='Vision'
              //path='/services'
            />
            </ul>
          <ul 
          
          className='cards__items'>

            <CardItem
              src='images/img-3.jpg'
              text='Our Mission is to be a platform that brings suppliers, 
              transporters and other supply chain players together to work 
              in a direct engagement with each other so as to achieve smooth 
              flow of goods. Logisticspro shall work to provide online logistics 
              solutions from Loading, in transit, delivery and storage ' 
              label='Mission'
              //path='/services'
            />
            
          </ul>
          <div>
          
          <h5>Your Online Suply Chain Solution Hub!</h5>
          </div>
          <ul className='cards__items'>
          
          <CardItem
              src='images/b.jpg'
              
              text='Provide return loads and less than truck loads  
               ,Provide a strong link between suppliers, transporters
               and other players in supply chain industry, enter the world 
               of digital products and services and Manage Fleet appropriately,    
              '
              label='Service '
              
              
              //path='/services'
            />
            
            
            
            
          </ul>
        
          
        </div>
      </div>
      
    </div>
    
  );
 
}
<Footer/>
export default Services;
