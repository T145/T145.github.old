import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Routes from '../../routes';
import DesktopNavigator from '../../components/DesktopNavigator/DesktopNavigator';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      margin: theme.spacing(0, 3, 0),
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export default function DesktopLayout() {
  const classes = useStyles();

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
                key={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </main>
      </div>
    </Router>
  );
}
