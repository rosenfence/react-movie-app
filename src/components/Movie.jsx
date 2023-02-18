import React from 'react';
import { Link } from 'react-router-dom';
import { WrpperDiv, SummaryP, MovieImg, GenresUl, MoiveH2, GenreLi, MovieTitleLink } from './Movie.Style';

const Movie = ({ id, coverImg, title, rating, summary, genres }) => {
  return (
    <WrpperDiv>
      <Link to={`/movie/${id}`}>
        <MovieImg src={coverImg} alt={title} />
      </Link>
      <MoiveH2>
        <MovieTitleLink to={`/movie/${id}`}>
          {title} :: ★ {rating}
        </MovieTitleLink>
      </MoiveH2>
      <SummaryP fontSize='17px' color='#616161'>
        {summary.length > 110 ? `${summary.slice(0, 110)}...` : summary}
      </SummaryP>
      <GenresUl>
        {genres.map((genre) => (
          <GenreLi key={genre}>{genre}</GenreLi>
        ))}
      </GenresUl>
    </WrpperDiv>
  );
};

export default Movie;
