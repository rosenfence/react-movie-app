import React, { useEffect, useState } from 'react';
import { Movie, Loading, Header } from '../components';
import styled, { keyframes } from 'styled-components';

const AboveDiv = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  padding-top: 50px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const HalfDiv = styled.div`
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justifyContent};
  padding-left: 30px;
  padding-right: 30px;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 900px) {
    width: 100%;
    height: 50%;
  }
`;

const MainJumpAnimation = keyframes`
    0%{
    transform: rotate(-3deg);
    margin-bottom: 0px;
    }
    100%{
    transform: rotate(3deg);
    margin-bottom: 20px;
    }
`;

const IdolImg = styled.img`
  animation: ${MainJumpAnimation} ${(props) => props.duration} alternate-reverse infinite;
  @media screen and (max-width: 600px) {
    width: 100px;
  }
`;

const SloganSpan = styled.div`
  font-size: 43px;
  font-weight: bold;
  color: #aaa;
  @media screen and (max-width: 900px) {
    font-size: 9vw;
  }
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
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=6&sort_by=year')).json();
    setMovies(json.data.movies);
    // setTimeout(() => setLoading(false), 5000);
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
                <div>모두가</div>
                <div style={{ paddingLeft: '30px' }}>이루어낸 이야기</div>
              </SloganSpan>
            </HalfDiv>
            <HalfDiv justifyContent='flex-end' align='flex-end'>
              <IdolImg src='/eli.png' duration='0.7s' />
              <IdolImg src='/nico.png' duration='0.3s' />
              <IdolImg src='/maki.png' duration='0.5s' />
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
