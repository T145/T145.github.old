import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { isIOS } from 'react-device-detect';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  SwipeableDrawer,
  Typography,
  IconButton,
  Icon,
} from '@material-ui/core';
import { FaMapSigns as SignIcon } from 'react-icons/fa';
import { VscGithub as GitHubIcon } from 'react-icons/vsc';
import { AiOutlineBars as BarsIcon } from 'react-icons/ai';
import { RouteList, RouteSwitch } from '../../routes';
import Footer from '../../components/Footer/Footer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    toolbar: theme.mixins.toolbar, // necessary for content to not clip the app bar
    content: {
      padding: theme.spacing(2, 2, 0),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
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
      <AppBar color="secondary">
        <Toolbar id="back-to-top-anchor">
          <Icon color="inherit" fontSize="small">
            <SignIcon />
          </Icon>

          <div className={classes.grow} />

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

      <div className={classes.content}>
        <RouteSwitch />
        <Footer />
      </div>

      <div className={classes.toolbar} />

      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            component="a"
            href="https://github.com/T145/T145.github.io"
            aria-label="GitHub"
            edge="start"
            data-ga-event-category="header"
            data-ga-event-action="github"
          >
            <GitHubIcon />
          </IconButton>

          <div className={classes.grow} />

          <IconButton
            edge="end"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <BarsIcon />
          </IconButton>

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
              <RouteList />
            </div>
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(MobileLayout);