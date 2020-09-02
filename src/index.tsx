import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Website from './components/Website';
import 'fontsource-roboto';
import Events from './utils/EventHandler';

/*
 * Useful documentation:
 * https://reactjs.org/docs/strict-mode.html
 * https://reactrouter.com/web/guides/quick-start
 */

ReactDOM.render(
  <StrictMode>
    <Events />
    <Website />
  </StrictMode>,
  document.querySelector('#root')
);
