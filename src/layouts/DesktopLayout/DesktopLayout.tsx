import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
  Icon,
} from '@material-ui/core';
import { VscGithub as GithubIcon } from 'react-icons/vsc';
import { FaMapSigns as SignIcon } from 'react-icons/fa';
import { RouteList, RouteSwitch } from '../../routes';
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
    drawerBar: {
      width: drawerWidth,
      marginRight: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar, // necessary for content to be below app bar
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

function DesktopLayout() {
  const classes = useStyles();

  return (
    <div className={classes.root} data-testid="DesktopLayout">
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Tooltip title="Github">
            <IconButton
              color="inherit"
              component="a"
              href="https://github.com/T145/T145.github.io"
              aria-label="GitHub"
              edge="start"
              data-ga-event-category="header"
              data-ga-event-action="github"
              rel="noreferrer"
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
        <AppBar color="secondary" className={classes.drawerBar}>
          <Toolbar>
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
        <RouteList />
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <RouteSwitch />
        <Footer />
      </main>
    </div>
  );
}

export default withRouter(DesktopLayout);
