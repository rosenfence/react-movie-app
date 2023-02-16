import React from 'react';
import { Link } from 'react-router-dom';
import { WrpperDiv, SummaryP, MovieImg, MovieTitleLink } from './Movie.Style';

const Movie = ({ id, coverImg, title, rating, summary, genres }) => {
  return (
    <WrpperDiv>
      <Link to={`/movie/${id}`}>
        <MovieImg src={coverImg} alt={title} />
      </Link>
      <h2>
        <MovieTitleLink to={`/movie/${id}`}>
          {title} :: ★ {rating}
        </MovieTitleLink>
      </h2>
      <SummaryP fontSize='20px' color='black'>
        {summary}
      </SummaryP>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </WrpperDiv>
  );
};

export default Movie;
