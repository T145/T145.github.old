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
  Icon,
} from '@material-ui/core';
import { VscGithub as GithubIcon } from 'react-icons/vsc';
import { FaMapSigns as SignIcon } from 'react-icons/fa';
import Routes from '../../routes';
import ListLink from '../../components/ListLink/ListLink';
import Footer from '../../components/Footer/Footer';
import ElevationScroll from '../../components/ElevationScroll/ElevationScroll';

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
    drawerBar: {
      width: drawerWidth,
      marginRight: `calc(100% - ${drawerWidth}px)`,
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
        <ElevationScroll>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar variant="dense">
              <Tooltip title="Github" enterDelay={300}>
                <IconButton
                  color="inherit"
                  component="a"
                  href="https://github.com/T145/T145.github.io"
                  aria-label="GitHub"
                  edge="start"
                  data-ga-event-category="header"
                  data-ga-event-action="github"
                >
                  <GithubIcon />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>
        </ElevationScroll>

        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <AppBar color="secondary" className={classes.drawerBar}>
            <Toolbar variant="dense">
              <Icon color="inherit" fontSize="small">
                <SignIcon />
              </Icon>

              <div className={classes.content} />

              <Route>
                {({ location }) => (
                  <Typography color="inherit" variant="overline" noWrap>
                    {location.pathname}
                  </Typography>
                )}
              </Route>
            </Toolbar>
          </AppBar>

          <div className={classes.toolbar} />

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
