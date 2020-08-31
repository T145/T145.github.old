import React from 'react';
import ReactDOM from 'react-dom';
// import { createBrowserHistory } from 'history';
// import { Router, Route, Switch, Redirect } from 'react-router-dom';
import * as worker from './serviceWorker';
import 'fontsource-roboto';
// import 'react-perfect-scrollbar/dist/css/styles.css';
import Title from './components/Title';
import Footer from './components/Footer';

// https://reactjs.org/docs/strict-mode.html
ReactDOM.render(
  <React.StrictMode>
    <Title>Hello World!</Title>
    <Footer />
  </React.StrictMode>,
  document.querySelector('#root')
);

if (process.env.NODE_ENV === 'production') {
  worker.register();
} else {
  worker.unregister();
}
