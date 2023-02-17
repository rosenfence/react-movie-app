import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyle';
import { Home, Detail } from './routes';
import { Layout } from './components';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Detail />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
