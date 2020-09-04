import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { isMobile, isTablet } from 'react-device-detect';
import { ThemeProvider } from '@material-ui/core';
import 'fontsource-roboto'; // required for Material UI
import TabletLayout from './layouts/TabletLayout/TabletLayout';
import MobileLayout from './layouts/MobileLayout/MobileLayout';
import DesktopLayout from './layouts/DesktopLayout/DesktopLayout';
import GlobalTheme from './constants/GlobalTheme/GlobalTheme';

function getLayout() {
  if (isMobile) {
    return isTablet ? <TabletLayout /> : <MobileLayout />;
  }
  return <DesktopLayout />;
}

render(
  <StrictMode>
    <ThemeProvider theme={GlobalTheme}>{getLayout()}</ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
