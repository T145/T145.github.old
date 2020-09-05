import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routes from '../../routes';
import MobileStyle from '../../constants/MobileStyle/MobileStyle';
import MobileNavigator from '../../components/MobileNavigator/MobileNavigator';

export default function MobileLayout() {
  const classes = MobileStyle();

  return (
    <Router>
      <div data-testid="MobileLayout">
        <main>
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
        </main>

        <MobileNavigator />
      </div>
    </Router>
  );
}
