import React from 'react'
import './Card.css'

export default function Card(props) {
    const cardStyle = {
        color: 'blue',
        backgroundImage: 'url(' + 'https://image.tmdb.org/t/p/w500' + props.cardInfo.poster_path + ')',

    };
    return (
        <div className="card" style={cardStyle}>
            img

            
        </div>
    )
}
