import React from 'react';
import Layout from './components/layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/headers/HomePage';
import Random from './components/headers/Random';
import Categories from './components/headers/Categories';
import Favourite from './components/favourite/Favourite';
import FavouritePage from './components/favourite/FavouritePage';
const App = () => {
  return (
    <main>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/random' element={<Random />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path='/favourite/food/:id' element={<FavouritePage />} />
        </Routes>
      </Layout>
    </main>
  );
};

export default App;
