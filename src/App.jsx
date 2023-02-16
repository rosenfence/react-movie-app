import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyle';
import { Home, Detail } from './routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
