import React from 'react';
import ReactDOM from 'react-dom';
import * as worker from './serviceWorker';
import Website from './components/Website';

ReactDOM.render(<Website />, document.querySelector('#root'));

if (process.env.NODE_ENV === 'production') {
  worker.register();
} else {
  worker.unregister();
}
