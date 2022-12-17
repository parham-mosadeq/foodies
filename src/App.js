import React from 'react';
import Layout from './components/layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/HomePage';
import Random from './components/layout/Random';
const App = () => {
  return (
    <main>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/random' element={<Random />} />
          <Route path='/categories' element={''} />
        </Routes>
      </Layout>
    </main>
  );
};

export default App;
