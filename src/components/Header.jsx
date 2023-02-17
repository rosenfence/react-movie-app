import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapperDiv = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  max-width: 1250px;
  height: 70px;
  border-bottom: 3px solid #fff;
  background-color: #e20082;

  top: 0;
`;

const LogoImg = styled.img`
  height: 42px;
  margin-left: 30px;
`;

const SearchDiv = styled.div`
  position: relative;
  width: 150px;
  height: 25px;
  margin-right: 30px;
`;

const SearchIconSpan = styled.span`
  position: absolute;
  top: 4px;
  right: 2px;
  font-size: 20px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  height: 100%;
  width: 100%;

  padding-left: 10px;

  border: none;
  border-radius: 5px;
`;

const Header = () => {
  return (
    <HeaderWrapperDiv>
      <Link to='/'>
        <LogoImg src='/logo.svg' />
      </Link>
      <SearchDiv>
        <SearchInput />
        <SearchIconSpan>🔍</SearchIconSpan>
      </SearchDiv>
    </HeaderWrapperDiv>
  );
};

export default Header;
