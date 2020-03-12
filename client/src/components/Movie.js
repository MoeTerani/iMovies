import React, { useState, useEffect } from 'react'
import './Movie.css'
import { useParams } from 'react-router-dom'

export default function Movie(props) {
    const [movie, setmovie] = useState()
    const id = useParams().id;

    // console.log('id:   ' + id);
    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('popularMoviesData'));
        const movieData = localStorageData.find(item => item.id == id);
        console.log(movieData)
        setmovie(movieData)

        return () => console.log('unmounting...');
    }, [])

    // console.log(movie.title)
    return (
        <div className="movie">
            {/* <h1>NAME: {movie.title}</h1> */}
            <h1>NAME:</h1>
        </div>
    )
}
