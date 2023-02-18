import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading, Header, Rating } from '../components';
import { TitleDiv, TitleImg, TitleLetterDiv } from './Detail.style';

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

          <img src={movieDetail.large_cover_image} alt={movieDetail.title} />
          <h3>Runtime : {movieDetail.runtime !== 0 ? `${movieDetail.runtime} min` : `정보 없음`} </h3>
          <div>{movieDetail.description_full}</div>
        </>
      )}
    </>
  );
};

export default Detail;
