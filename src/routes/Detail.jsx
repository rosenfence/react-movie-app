import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../components';

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
        <div>
          <h1>
            {movieDetail.title_long} :: ★ {movieDetail.rating}
          </h1>
          <img src={movieDetail.large_cover_image} alt={movieDetail.title} />
          <h3>Runtime : {movieDetail.runtime} min</h3>
          <div>{movieDetail.description_full}</div>
        </div>
      )}
    </>
  );
};

export default Detail;
