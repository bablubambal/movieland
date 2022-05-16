import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  const getMovieDetails = async (imdbId) =>{
    const response = await fetch(`https://www.omdbapi.com/?i=${imdbId}&apikey=b6003d8a`);
    const data = await response.json()
    console.log(data)

  }

  return (
    <a href={`/movie/${imdbID}`}>
    <div className="movie" key={imdbID} >
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
     </a>
  );
}

export default MovieCard;