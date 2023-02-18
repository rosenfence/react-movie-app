import React from 'react';
import styled, { keyframes } from 'styled-components';

const BehindDiv = styled.div`
  position: absolute;
  bottom: 60px;
  right: 60px;
  width: 200px;
  height: 30px;
  background: #eee;
  border-radius: 5px;
`;

const Texth1 = styled.h1`
  position: absolute;
  top: calc(50% - 9px);
  left: 10%;

  font-size: 18px;
  font-weight: bold;
  color: #eee;

  z-index: 1;
`;

const FrontDiv = styled.div`
  position: absolute;
  width: ${(props) => (props.width / 10) * 100}%;
  height: 100%;
  background: linear-gradient(to right, #026695, #00a1e9);
  transition: all;
  border-radius: 5px 0px 0px 5px;
`;

const RatingAnimation = keyframes`
    0%{
    top:-100px
    }
    100%{
    top:-110px
    }
`;

const IdolImg = styled.img`
  position: absolute;
  width: 100px;
  top: -100px;
  left: calc(${(props) => props.location / 10} * 200px - 50px);
  animation: ${RatingAnimation} 0.3s alternate-reverse infinite;
`;

const Rating = ({ width, children }) => {
  return (
    <BehindDiv>
      <IdolImg location={width} src='/dia.png' alt='RatingChar' />
      <Texth1>{children}</Texth1>
      <FrontDiv width={width} />
    </BehindDiv>
  );
};

export default Rating;
