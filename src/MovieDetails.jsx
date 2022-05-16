import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const MovieDetails = () => {
    const {imdbId}  = useParams();
    const [movie, setMovie] = useState({});
    const getMovieDetails = async (imdbId) =>{
        const response = await fetch(`https://www.omdbapi.com/?i=${imdbId}&apikey=b6003d8a`);
        const data = await response.json()
        console.log(data)
        setMovie(data)
    
      }
      

    useEffect(() => {
        getMovieDetails(imdbId);
    } , [])

  return (
    <div className='app'>
     <h1>Movie Details {movie.Title}</h1>
    {
        movie.Title ? (<>
       <DetailsCard movie={movie} />
        
        </>) : <h2>Loading...</h2>
    }
    </div>
  )
}

export default MovieDetails
