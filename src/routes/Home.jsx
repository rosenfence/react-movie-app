import React, { useEffect, useState } from 'react';
import { Movie, Loading } from '../components';
import styled from 'styled-components';

const MovieListDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')).json();
    setMovies(json.data.movies);
    setTimeout(() => setLoading(false), 5000);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loading ? (
        <Loading idol='/nishikinoMaki.png' />
      ) : (
        <MovieListDiv>
          {movies.map((movie) => (
            <Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} rating={movie.rating} summary={movie.summary} genres={movie.genres} />
          ))}
        </MovieListDiv>
      )}
    </>
  );
};

export default Home;
