import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading, Header, Rating } from '../components';
import {
  TitleDiv,
  TitleImg,
  TitleLetterDiv,
  DiscriptionDiv,
  PosterDiv,
  PosterImg,
  LetterDiv,
  InfoDiv,
  MovieTitleDiv,
  MovieInfoDiv,
  YearRuntimeDiv,
  YearRuntimeSpan,
  GenreDiv,
  GenreSpan,
  DisDiv,
} from './Detail.style';

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovieDetail(json.data.movie);
    setTimeout(() => setLoading(false), 3000);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieDetail);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <TitleDiv>
            <TitleImg src={movieDetail.background_image_original} alt={movieDetail.title} />
            <TitleLetterDiv>{movieDetail.title_long}</TitleLetterDiv>
            <Rating width={movieDetail.rating}>{`★ :: ${movieDetail.rating}`}</Rating>
          </TitleDiv>

          <DiscriptionDiv>
            <PosterDiv>
              <PosterImg src={movieDetail.large_cover_image} alt={movieDetail.title} />
            </PosterDiv>
            <LetterDiv>
              <InfoDiv>
                <MovieTitleDiv>{movieDetail.title}</MovieTitleDiv>
                <MovieInfoDiv>
                  <YearRuntimeDiv>
                    <YearRuntimeSpan>{movieDetail.year}</YearRuntimeSpan>
                    <YearRuntimeSpan>{movieDetail.runtime !== 0 ? `${movieDetail.runtime} min` : `정보 없음`}</YearRuntimeSpan>
                  </YearRuntimeDiv>
                  <GenreDiv>
                    {movieDetail.genres.map((genre) => (
                      <GenreSpan>{genre}</GenreSpan>
                    ))}
                  </GenreDiv>
                </MovieInfoDiv>
              </InfoDiv>
              <DisDiv>{movieDetail.description_full}</DisDiv>
            </LetterDiv>
          </DiscriptionDiv>

          {/* 
          <h3>Runtime :  </h3>
           */}
        </>
      )}
    </>
  );
};

export default Detail;
