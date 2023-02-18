import React, { useEffect } from 'react';
import styled from 'styled-components';

const LayoutDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1250px;
  
`;

const Layout = ({ children }) => {
  let vh = 0;
  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);
  return <LayoutDiv style={{height: `calc(var(--vh, 1vh) * 100)`}}>{children}</LayoutDiv>;
};

export default Layout;
