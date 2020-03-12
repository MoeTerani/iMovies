import './Hero.css';

import React from 'react';

export default function Hero({ heroData }) {
  const imgUrl = 'https://image.tmdb.org/t/p/w1280' + heroData.backdrop_path;
  const heroStyle = {
    color: 'blue',
    background: 'url(' + imgUrl + ')'
  };
  return (
    <div className='hero' style={heroStyle}>
      <div class='heroimage-content'>
        <div class='heroimage-text'>
          <h1>{heroData.title}</h1>
          <p>{heroData.overview}</p>
        </div>
      </div>
    </div>
  );
}
