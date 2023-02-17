import React, { useEffect, useState } from 'react';
import { Movie, Loading, Header } from '../components';
import styled from 'styled-components';

const AboveDiv = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  padding-top: 50px;
`;

const HalfDiv = styled.div`
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justifyContent};

  width: 50%;
  height: 100%;
`;

const SloganSpan = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: #eee;
`;

const MovieListDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
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
        <Loading />
      ) : (
        <>
          <Header />
          <AboveDiv>
            <HalfDiv>
              <SloganSpan>
                모두가
                <br />
                이루어낸 이야기
              </SloganSpan>
            </HalfDiv>
            <HalfDiv justifyContent='flex-end' align='flex-end'>
              <img src='/eli.png' />
              <img src='/maki.png' />
              <img src='/nico.png' />
            </HalfDiv>
          </AboveDiv>
          <MovieListDiv>
            {movies.map((movie) => (
              <Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} rating={movie.rating} summary={movie.summary} genres={movie.genres} />
            ))}
          </MovieListDiv>
        </>
      )}
    </>
  );
};

export default Home;
