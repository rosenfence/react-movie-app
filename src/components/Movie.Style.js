import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WrpperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 297px;
  border: 4px solid #fff;
  padding: 30px 30px 0 30px;
  margin: 0px 15px 15px 0px;
  border-radius: 20px;
  box-shadow: 2px 2px 2px #e20082;
  background-color: #fff;
`;

const SummaryP = styled.p`
  font-family: 'Shantell Sans', cursive;
  word-break: break-all;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  text-align: left;
  margin: 20px 0 20px 0;
  flex: 2.5;
`;

const MovieImg = styled.img`
  margin-bottom: 10px;
  flex: 3.5;
`;

const MoiveH2 = styled.h2`
  flex: 2.5;
`;

const GenresUl = styled.ul`  
  display: flex;
  flex: 0.5;
  flex-wrap: wrap;
  
  justify-content: center;
  padding-left: 0;
  width:120px;
  margin-bottom: 10px;
  width: 200px;
`;

const GenreLi = styled.li`
  display: flex;
  width: 100px
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 10px;
  background-color: #e20082;
  color: #fff;
  font-family: 'Shantell Sans', cursive;
  cursor: pointer;
  height: 30px;
  margin: 2px;
`

const MovieTitleLink = styled(Link)`
    font-size: 25px;
    font-weight: bold;
    font-family: 'Gajraj One', cursive;
    color: #e20082;
    letter-spacing: 1px;
    word-spacing: 4px;
    word-break: break-all;
`;



export { WrpperDiv, SummaryP, MovieImg, MoiveH2, GenresUl, GenreLi, MovieTitleLink };