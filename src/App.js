import React from 'react';
import Layout from './components/layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/headers/HomePage';
import Random from './components/headers/Random';
import Categories from './components/headers/Categories';

import FavoritePage from './components/favorite/FavoritePage';
import Favorite from './components/favorite/Favorite';

const App = () => {
  return (
    <main>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/random' element={<Random />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/favorite/food/:id' element={<FavoritePage />} />
        </Routes>
      </Layout>
    </main>
  );
};

export default App;
