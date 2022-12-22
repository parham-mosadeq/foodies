import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// random reducer
import randomReducer from './random/randomReducer';
import idReducer from './favorite/favoriteReducer';

const store = configureStore({
  reducer: {
    randomState: randomReducer,
    idState: idReducer,
  },
  middleware: [thunk],
});

export default store;
