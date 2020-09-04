import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  IconButton,
} from '@material-ui/core';

import SunIcon from '@material-ui/icons/Brightness7Rounded';
// import MoonIcon from '@material-ui/icons/NightsStayRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import PaletteIcon from '@material-ui/icons/PaletteRounded';

import Routes from '../../routes';
import ListLink from '../ListLink/ListLink';

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

function DesktopNavigator() {
  const classes = useStyles();

  return (
    <div data-testid="DesktopNavigator">
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

          <IconButton color="inherit">
            <PaletteIcon />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://github.com/T145/T145.github.io"
          >
            <GitHubIcon />
          </IconButton>

          <IconButton color="inherit" edge="end">
            <SunIcon />
          </IconButton>
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
    </div>
  );
}

export default withRouter(DesktopNavigator);
