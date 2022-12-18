import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// random reducer
import randomReducer from './random/randomReducer';

const store = configureStore({
  reducer: {
    randomState: randomReducer,
  },
  middleware: [thunk],
});

export default store;
