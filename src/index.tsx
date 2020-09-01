import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigator from './components/Navigator';
import 'fontsource-roboto';

/*
 * Useful documentation:
 * https://reactjs.org/docs/strict-mode.html
 * https://reactrouter.com/web/guides/quick-start
 */

ReactDOM.render(
  <StrictMode>
    <Router>
      <Navigator />
    </Router>
  </StrictMode>,
  document.querySelector('#root')
);
