import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { isIOS } from 'react-device-detect';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  SwipeableDrawer,
  Toolbar,
  Typography,
  IconButton,
  Fab,
  List,
} from '@material-ui/core';
import { FaMapSigns as SignIcon } from 'react-icons/fa';
import { FiChevronsUp as ChevronIcon } from 'react-icons/fi';
import { VscGithub as GithubIcon } from 'react-icons/vsc';
import Routes from '../../routes';
import ListLink from '../../components/ListLink/ListLink';
import ElevationScroll from '../../components/ElevationScroll/ElevationScroll';
import Footer from '../../components/Footer/Footer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(2, 2, 0),
      paddingBottom: 50,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
    toolbar: theme.mixins.toolbar,
    drawer: {
      width: 'auto',
    },
  })
);

export default function MobileLayout() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <Typography className={classes.text} variant="h5" gutterBottom>
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
        <div className={classes.toolbar} />
        <div className={classes.toolbar} />
      </Typography>

      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <SwipeableDrawer
              anchor="bottom"
              open={open}
              onOpen={handleDrawerOpen}
              onClose={handleDrawerClose}
              disableBackdropTransition={!isIOS}
              disableDiscovery={isIOS}
            >
              <div
                className={classes.drawer}
                role="presentation"
                onClick={handleDrawerClose}
                onKeyDown={handleDrawerClose}
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
              </div>
            </SwipeableDrawer>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
            >
              <SignIcon />
            </IconButton>

            <Fab
              color="secondary"
              aria-label="add"
              className={classes.fabButton}
            >
              <ChevronIcon />
            </Fab>

            <div className={classes.grow} />

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
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Router>
  );
}
