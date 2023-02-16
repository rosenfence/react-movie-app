import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setLoading(false);
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return <div>{loading ? <h1>loading...</h1> : <h1>detail</h1>}</div>;
};

export default Detail;
