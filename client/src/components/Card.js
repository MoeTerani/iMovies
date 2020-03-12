import React from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';

export default function Card(props) {
  // console.log(`movies/${props.cardInfo.id}`)
  const cardStyle = {
    color: 'blue'
    // backgroundImage: 'url(' + 'https://image.tmdb.org/t/p/w500' + props.cardInfo.poster_path + ')',
  };
  return (
    <div className='card' style={cardStyle}>
      <NavLink to={`movies/${props.cardInfo.id}`}>
        <img
          className='card__img'
          src={'https://image.tmdb.org/t/p/w500' + props.cardInfo.poster_path}
        ></img>
      </NavLink>
    </div>
  );
}
