import styled from 'styled-components';

const TitleDiv = styled.div`
  position: relative;
  width: 100%;
`;

const TitleImg = styled.img`
  width: 100%;
`;

const TitleLetterDiv = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  color: #fff;
  font-size: 6vw;
  @media screen and (min-width: 1250px) {
    font-size: 75px;
  }
`;

export { TitleDiv, TitleImg, TitleLetterDiv };
