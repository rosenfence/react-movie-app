import React, { useEffect, useState } from 'react';
import { Movie } from '../components';
import styled from 'styled-components';

const MovieListDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const LodingDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoadingImg = styled.img`
  width: 200px;
`;

const LodingH1 = styled.h1`
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
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loading ? (
        <LodingDiv>
          <LoadingImg src='https://t1.daumcdn.net/cfile/tistory/2351663D5384BD9708' />
          <LodingH1>Loading...</LodingH1>
        </LodingDiv>
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
