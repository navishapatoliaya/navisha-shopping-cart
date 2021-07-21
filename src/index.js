import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../src/styles/global/index.scss";
// import { unregistar } from "./serviceWorker"
import { configureStore } from './store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "font-awesome/css/font-awesome.min.css";

const store=configureStore();
ReactDOM.render(
  
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

