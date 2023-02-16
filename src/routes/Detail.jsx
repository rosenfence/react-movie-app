import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components';

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setLoading(false);
    setMovieDetail(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieDetail);

  return (
    <div>
      <Link to='/'>
        <Button>🏠</Button>
      </Link>
      {loading ? (
        <h1>loading...</h1>
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
    </div>
  );
};

export default Detail;
