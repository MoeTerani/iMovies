import React, { useState, useEffect } from 'react'
import './Movie.css'
import { useParams } from 'react-router-dom'

export default function Movie(props) {
    const id = useParams().id;
    // console.log('id:   ' + id);
    useEffect(() => {
        // localStorageData = JSON.parse(localStorage.getItem('popularMoviesData'));

        return () => console.log('unmounting...');
    }, [])
    const popularMoviesData = JSON.parse(localStorage.getItem('popularMoviesData'))
    const movie = popularMoviesData.find(item => item.id == id);

    // console.log(movie.title)
    return (
        <div className="movie">
            <h1>NAME: {movie.title}</h1>
        </div>
    )
}
