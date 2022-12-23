import React from 'react';
import Layout from './components/layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/headers/HomePage';
import Random from './components/headers/Random';

import FavoritePage from './components/favorite/FavoritePage';
import Favorite from './components/favorite/Favorite';
import Categories from './components/categories/Categories';
import CategoryItem from './components/categories/CategoryItem';

const App = () => {
  return (
    <main>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/random' element={<Random />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/food/:id' element={<FavoritePage />} />
          <Route path='/category/:cat' element={<Categories />} />
          <Route path='/category/:cat/:name' element={<CategoryItem />} />
        </Routes>
      </Layout>
    </main>
  );
};

export default App;
