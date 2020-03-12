import React from 'react'
import './Movie.css'
import { useParams } from 'react-router-dom'

export default function Movie() {
    const params = useParams();
    console.log(params)
    return (
        <div className="movie">
            <h1>{params.id}</h1>
        </div>
    )
}
