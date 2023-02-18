import styled from 'styled-components';

const TitleDiv = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
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

const DiscriptionDiv = styled.div`
  display: flex;

  width: 100%;
  max-width: 100vw;
  height: 400px;

  margin-top: 50px;
  margin-bottom: 100px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const PosterDiv = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 750px) {
    margin-bottom: 30px;
  }
`;

const PosterImg = styled.img`
  @media screen and (max-width: 750px) {
    height: 100%;
  }
  @media screen and (min-width: 751px) {
    width: 100%;
  }
`;

const LetterDiv = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;

  padding-left: 10px;
`;

const InfoDiv = styled.div`
  flex: 1;
  display: flex;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const MovieTitleDiv = styled.div`
  flex: 3;
  height: 100%;
  font-size: 40px;
`;

const MovieInfoDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const YearRuntimeDiv = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
`;

const YearRuntimeSpan = styled.span`
  font-size: 18px;
`;

const GenreDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 100%;
`;

const GenreSpan = styled.span`
  background: #bbb;
  border-radius: 5px;
  font-size: 18px;
  color: #eee;
  padding: 3px;
`;

const DisDiv = styled.div`
  flex: 3;
  font-size: 20px;
  color: #fff;
  background-color: gray;
  border-radius: 5px;
  padding: 10px;
  overflow: auto;
  line-height: 2rem;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 750px) {
    margin-bottom: 50px;
  }
`;

export { TitleDiv, TitleImg, TitleLetterDiv, DiscriptionDiv, PosterDiv, PosterImg, LetterDiv, InfoDiv, MovieTitleDiv, MovieInfoDiv, YearRuntimeDiv, YearRuntimeSpan, GenreDiv, GenreSpan, DisDiv };
