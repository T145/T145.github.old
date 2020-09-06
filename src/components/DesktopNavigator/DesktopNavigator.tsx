import React from 'react';
import { Route, withRouter } from 'react-router-dom';
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
import DesktopStyle from '../../constants/DesktopStyle/DesktopStyle';
import ListLink from '../ListLink/ListLink';

function DesktopNavigator() {
  const classes = DesktopStyle();

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

          <Tooltip title="Github" enterDelay={300}>
            <IconButton
              color="inherit"
              component="a"
              href="https://github.com/T145/T145.github.io"
              aria-label="GitHub"
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
    </div>
  );
}

export default withRouter(DesktopNavigator);
