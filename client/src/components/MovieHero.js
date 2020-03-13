import './MovieHero.css';
import Card from './Card.js';

import React from 'react';

export default function MovieHero({ heroData }) {
  const imgUrl = 'https://image.tmdb.org/t/p/w1280' + heroData.backdrop_path;
  const heroStyle = {
    color: 'blue',
    background: 'url(' + imgUrl + ')'
  };
  return (
    <div className='movieHero' style={heroStyle}>
      <div class='movieHeroimage-content'>
        <Card cardInfo={heroData} />
        <div class='movieHeroimage-text'>
          <h1>{heroData.title}</h1>
          <h3>PLOT</h3>
          <p>{heroData.overview}</p>

          <div class='rating-director'>
            <div>
              <h3>IMDB RATING</h3>
              <div class='score'>7.2</div>
            </div>
            <div class='director'>
              <h3>DIRECTOR</h3>
              <p>Jeff_Fowler</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
