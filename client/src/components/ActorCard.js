import React from 'react';
import './ActorCard.css';

export default function ActorCard({ castInfo }) {
  return (
    <div className='ActorCard'>
      <div class='sc-jTzLTM iGTpaZ'>
        <img
          src='http://image.tmdb.org/t/p/w500/Ag3YMvWtDbFITxZdc1lk1bPsR6K.jpg'
          alt='actorthumb'
        />
        <span class='actor-name'>{castInfo.name}</span>
        <span class='actor-character'>{castInfo.character}</span>
      </div>
    </div>
  );
}
