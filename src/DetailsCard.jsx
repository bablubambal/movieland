import React from 'react'
import { Link } from 'react-router-dom'

const DetailsCard = ({ movie }) => {
  return (
    <div className="movie" key={movie.imdbID} >
    <div>
      <p>{movie.Year}</p>
    </div>

    <div>
      <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
    </div>

    <div>
      <span>{movie.Type}</span>
      <h3>Title: {movie.Title}</h3>
      <h4>Rating:{movie.imdbRating}</h4>
      <h3>Actors: {movie.Actors}</h3>
    </div>
  </div>
  )
}

export default DetailsCard
