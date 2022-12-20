import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// router
import { BrowserRouter } from 'react-router-dom';
// redux
import store from './components/redux/store';
import { Provider } from 'react-redux';
// style
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
