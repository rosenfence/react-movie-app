import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingDiv = styled.div`
  width: 100vw;
  max-width: 1250px;
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

const loadingTextAnimaiton = keyframes`
    0%{
        color: #e20082;
    }
    100% {
        color: #ff57b1;
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
  color: #e20082;
  animation: ${loadingTextAnimaiton} 1s alternate-reverse infinite;
  font-family: 'Gajraj One', cursive;
`;

const Loading = () => {
  const [index, setIndex] = useState(0);

  const idolArr = ['/eli.png', '/maki.png', '/nico.png', '/hanayo.png', '/honoka.png', '/kotori.png', '/nozomi.png', '/rin.png', '/umi.png'];

  useEffect(() => {
    let idx = Math.floor(Math.random() * idolArr.length);
    setIndex(idx);
  }, []);

  return (
    <LoadingDiv>
      <LoadingImg src={idolArr[index]} />
      <LoadingH1>Loading...</LoadingH1>
    </LoadingDiv>
  );
};

export default Loading;
