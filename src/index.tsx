import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { isMobile, isTablet } from 'react-device-detect';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'fontsource-roboto'; // required for Material UI
import TabletLayout from './layouts/TabletLayout/TabletLayout';
import MobileLayout from './layouts/MobileLayout/MobileLayout';
import DesktopLayout from './layouts/DesktopLayout/DesktopLayout';

function getLayout() {
  if (isMobile) {
    return isTablet ? <TabletLayout /> : <MobileLayout />;
  }
  return <DesktopLayout />;
}

render(<StrictMode>{getLayout()}</StrictMode>, document.getElementById('root'));
