import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import styled, { keyframes } from 'styled-components';
import Pulse from '@bit/formidablelabs.react-animations.pulse';

const PulseAnim = keyframes`${Pulse}`;
const PulseDiv = styled.div`
  animation: infinite 5s ${PulseAnim};
`;

ReactDOM.render(
  <PulseDiv>
    <img src="https://picsum.photos/1920/1080/?random" />
  </PulseDiv>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
