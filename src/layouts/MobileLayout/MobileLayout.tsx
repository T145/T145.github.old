import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { isIOS } from 'react-device-detect';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  SwipeableDrawer,
  Typography,
  IconButton,
  Fab,
  List,
} from '@material-ui/core';
// import { FaMapSigns as SignIcon } from 'react-icons/fa';
import { BsChevronBarUp as ChevronIcon } from 'react-icons/bs';
import { VscGithub as GithubIcon } from 'react-icons/vsc';
import { AiOutlineBars as BarsIcon } from 'react-icons/ai';
import Routes from '../../routes';
import ListLink from '../../components/ListLink/ListLink';
import Footer from '../../components/Footer/Footer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
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
      position: 'fixed',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
    },
    toolbar: theme.mixins.toolbar,
    drawer: {
      width: 'auto',
    },
  })
);

function MobileLayout() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root} data-testid="MobileLayout">
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
      </Typography>

      <AppBar color="primary" className={classes.appBar}>
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

          <Fab
            color="secondary"
            aria-label="scroll back to top"
            className={classes.fabButton}
          >
            <ChevronIcon />
          </Fab>

          <div className={classes.grow} />

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <BarsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(MobileLayout);
