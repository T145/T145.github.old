import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routes from '../../routes';
import DesktopStyle from '../../constants/DesktopStyle/DesktopStyle';
import DesktopNavigator from '../../components/DesktopNavigator/DesktopNavigator';
import Footer from '../../components/Footer/Footer';

export default function DesktopLayout() {
  const classes = DesktopStyle();

  return (
    <Router>
      <div className={classes.root} data-testid="DesktopLayout">
        <DesktopNavigator />

        <main className={classes.content}>
          <div className={classes.toolbar} />

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

          <Footer />
        </main>
      </div>
    </Router>
  );
}
