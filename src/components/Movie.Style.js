import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WrpperDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
  max-width: 300px;
`;

const SummaryP = styled.p`
  width: 50%;
  word-break: break-all;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  text-align: left;
`;

const MovieImg = styled.img`
  width: 50%;
`;

const MovieTitleLink = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  color: black;
`;

export { WrpperDiv, SummaryP, MovieImg, MovieTitleLink };
