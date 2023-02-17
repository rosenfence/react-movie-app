import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingDiv = styled.div`
    width: 100vw;
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
`;

const Loading = ({idol}) => {
    return (
        <LoadingDiv>
            <LoadingImg src={idol} />
            <LoadingH1>Loading...</LoadingH1>
        </LoadingDiv>
    );
}

export default Loading;

