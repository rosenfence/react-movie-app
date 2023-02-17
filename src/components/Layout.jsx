import React from 'react';
import styled from 'styled-components';

const LayoutDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1250px;
`;

const Layout = ({ children }) => {
  return <LayoutDiv>{children}</LayoutDiv>;
};

export default Layout;
