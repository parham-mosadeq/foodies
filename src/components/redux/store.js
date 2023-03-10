import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// random reducer
import randomReducer from './random/randomReducer';
import idReducer from './favorite/favoriteReducer';
import categoriesReducer from './categories/categoriesReducer';
import categoryReducer from './category/categoryReducer';
import categoryItemsReducer from './categoryItems/categoryItemsReducer';

const store = configureStore({
  reducer: {
    randomState: randomReducer,
    idState: idReducer,
    catState: categoriesReducer,
    catItemsState: categoryReducer,
    catItemNameState: categoryItemsReducer,
  },
  middleware: [thunk],
});

export default store;
