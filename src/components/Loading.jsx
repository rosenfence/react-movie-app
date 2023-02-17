import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingDiv = styled.div`
  width: 100vw;
  max-width: 100%;
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
        color: #fff;
    }
    100% {
        color: #ccc;
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

  animation: ${loadingTextAnimaiton} 1s alternate-reverse infinite;
`;

const Loading = () => {
  const idolArr = ['/eli.png', '/maki.png', '/nico.png'];
  const idx = Math.floor(Math.random() * idolArr.length); // 0, 1, 2

  return (
    <LoadingDiv>
      <LoadingImg src={idolArr[idx]} />
      <LoadingH1>Loading...</LoadingH1>
    </LoadingDiv>
  );
};

export default Loading;
