import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Courses!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the peer to peer network sysytem using blockchain'
              label='Course-1'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Explore the peer to peer network sysytem using blockchain'
              label='Course-2'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Explore the peer to peer network sysytem using blockchain'
              label='Course-3'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Explore the peer to peer network sysytem using blockchain'
              label='Course-4'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Explore the peer to peer network sysytem using blockchain'
              label='Course-5'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;