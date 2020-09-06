import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { isMobile, isTablet } from 'react-device-detect';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import 'fontsource-roboto'; // required for Material UI
import TabletLayout from './layouts/TabletLayout/TabletLayout';
import MobileLayout from './layouts/MobileLayout/MobileLayout';
import DesktopLayout from './layouts/DesktopLayout/DesktopLayout';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

function getLayout() {
  if (isMobile) {
    return isTablet ? <TabletLayout /> : <MobileLayout />;
  }
  return <DesktopLayout />;
}

render(
  <StrictMode>
    <ThemeProvider theme={theme}>{getLayout()}</ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
