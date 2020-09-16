/* eslint-disable no-restricted-imports */
import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { isMobile, isTablet } from 'react-device-detect';
import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import { Shadows } from '@material-ui/core/styles/shadows';
import { red } from '@material-ui/core/colors';
import 'fontsource-roboto'; // required for Material UI
import TabletLayout from './layouts/TabletLayout/TabletLayout';
import MobileLayout from './layouts/MobileLayout/MobileLayout';
import DesktopLayout from './layouts/DesktopLayout/DesktopLayout';

const GlobalTheme = createMuiTheme({
  props: {
    MuiToolbar: {
      variant: isMobile ? 'regular' : 'dense', // dense is desktop only
    },
    MuiIconButton: {
      color: 'inherit', // 'default' by default
    },
    MuiTooltip: {
      enterDelay: 300,
    },
  },
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
  shadows: Array(25).fill('none') as Shadows,
});

const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global
  '@global': {},
})(() => null);

function getLayout() {
  if (isMobile) {
    return isTablet ? <TabletLayout /> : <MobileLayout />;
  }
  return <DesktopLayout />;
}

render(
  <StrictMode>
    <ThemeProvider theme={GlobalTheme}>
      <GlobalCss />
      <Router>{getLayout()}</Router>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
