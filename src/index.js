import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import store from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = () => root.render((
  <Provider store={store}>
    <App/>
  </Provider>
));
render();

