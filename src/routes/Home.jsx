import React, { useEffect, useState } from 'react';
import { Movie } from '../components';
import styled, { keyframes } from 'styled-components';

const MovieListDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const LoadingDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const loadingAnimation = keyframes`
  0%{
    transform: rotate(-20deg);
  }
  100%{
    transform: rotate(20deg);
  }
`;

const LoadingImg = styled.img`
  margin-bottom: 30px;

  animation: ${loadingAnimation} 0.5s alternate-reverse infinite;
`;

const LoadingH1 = styled.h1`
  width: 100vw;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')).json();
    setMovies(json.data.movies);
    setTimeout(() => setLoading(false), 10000);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingDiv>
          <LoadingImg src='/yazawaNico.png' />
          <LoadingH1>Loading...</LoadingH1>
        </LoadingDiv>
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
