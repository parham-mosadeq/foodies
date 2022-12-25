import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// * Components
import Layout from './components/layout';
import HomePage from './components/headers/HomePage';
import Random from './components/headers/Random';
// import FavoritePage from './components/favorite/FavoritePage';
import Favorite from './components/favorite/Favorite';
import Categories from './components/categories/Categories';
// import CategoryItem from './components/categories/CategoryItem';
import Loader from './components/shared/Loader';
// * Lazy importing components
const FavoritePage = lazy(() => import('./components/favorite/FavoritePage'));
const CategoryItem = lazy(() => import('./components/categories/CategoryItem'));
const App = () => {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/random' element={<Random />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='favorite/food/:id' element={<FavoritePage />} />
            <Route path='/category/:cat' element={<Categories />} />
            <Route path='/category/:cat/:name' element={<CategoryItem />} />
          </Routes>
        </Layout>
      </Suspense>
    </main>
  );
};

export default App;
