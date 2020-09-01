import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Website from './components/Website';
import 'fontsource-roboto';

/*
 * Useful documentation:
 * https://reactjs.org/docs/strict-mode.html
 * https://reactrouter.com/web/guides/quick-start
 */

ReactDOM.render(
  <StrictMode>
    <Website />
  </StrictMode>,
  document.querySelector('#root')
);
