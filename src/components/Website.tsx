import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import 'fontsource-roboto';
import Navigator from './Navigator';

/*
 * Useful documentation:
 * https://reactjs.org/docs/strict-mode.html
 * https://reactrouter.com/web/guides/quick-start
 */

const past = createBrowserHistory();

export default function Website() {
  return (
    <React.StrictMode>
      <Router history={past}>
        <Navigator />
      </Router>
    </React.StrictMode>
  );
}
