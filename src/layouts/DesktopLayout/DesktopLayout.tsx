import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import { VscGithub as GithubIcon } from 'react-icons/vsc';
import Routes from '../../routes';
import ListLink from '../../components/ListLink/ListLink';
import Footer from '../../components/Footer/Footer';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      margin: theme.spacing(0, 3, 0),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
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
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar variant="dense">
            <Route>
              {({ location }) => (
                <Typography variant="h6" color="inherit" noWrap>
                  {location.pathname}
                </Typography>
              )}
            </Route>

            <div className={classes.content} />

            <Tooltip title="Github" enterDelay={300}>
              <IconButton
                color="inherit"
                component="a"
                href="https://github.com/T145/T145.github.io"
                aria-label="GitHub"
                edge="end"
                data-ga-event-category="header"
                data-ga-event-action="github"
              >
                <GithubIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <List>
            {Routes.map(route => (
              <ListLink
                to={route.path}
                primary={route.name}
                icon={route.icon}
                key={route.key}
              />
            ))}
          </List>
        </Drawer>

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
