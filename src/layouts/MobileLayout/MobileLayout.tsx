import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { CssBaseline, Typography } from '@material-ui/core';

import Routes from '../../routes';
import MobileStyle from '../../constants/MobileStyle/MobileStyle';
import MobileNavigator from '../../components/MobileNavigator/MobileNavigator';

export default function MobileLayout() {
  const classes = MobileStyle();

  return (
    <Router>
      <div data-testid="MobileLayout">
        <CssBaseline />

        <Typography className={classes.text}>
          <Switch>
            {Routes.map(route => (
              <Route
                exact
                path={route.path}
                key={route.key}
                component={route.component}
              />
            ))}
          </Switch>
        </Typography>
        <MobileNavigator />
      </div>
    </Router>
  );
}
