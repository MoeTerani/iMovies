import React, { useState, useEffect } from 'react'
import './Movie.css'
import { useParams } from 'react-router-dom'

export default function Movie(props) {
    const id = useParams().id;
    console.log(id)
    let localStorageData;
    let movie;
    // console.log('id:   ' + id);
    useEffect(() => {
        localStorageData = JSON.parse(localStorage.getItem('popularMoviesData'));
        movie = localStorageData.find(item => item.id == id);

        return () => console.log('unmounting...');
    }, [movie])

    // console.log(movie.title)
    return (
        <div className="movie">
            {/* <h1>NAME: {movie.title}</h1> */}
            {console.log(movie)}
            <h1>NAME:</h1>
        </div>
    )
}
