import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import store from './app/store'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const render = () => root.render(
  <React.StrictMode>
    <App state={store.getState()} dispatch={store.dispatch}/>
  </React.StrictMode>
);
render();
store.subscribe(render);

reportWebVitals();
