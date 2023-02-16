import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ id, coverImg, title, rating, summary, genres }) => {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
      </Link>
      <h2>
        <Link to={`/movie/${id}`}>
          {title} :: ★ {rating}
        </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
