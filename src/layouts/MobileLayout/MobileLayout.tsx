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
  Icon,
  Fab,
  List,
  Slide,
  useScrollTrigger,
  Zoom,
} from '@material-ui/core';
import { FaMapSigns as SignIcon } from 'react-icons/fa';
import { BsChevronBarUp as ChevronIcon } from 'react-icons/bs';
import { VscGithub as GitHubIcon } from 'react-icons/vsc';
import { AiOutlineBars as BarsIcon } from 'react-icons/ai';
import Routes from '../../routes';
import ListLink from '../../components/ListLink/ListLink';
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
    scrollFab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
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

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
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
      </div>

      <Zoom in={trigger}>
        <div
          onClick={handleClick}
          role="presentation"
          className={classes.scrollFab}
        >
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <ChevronIcon />
          </Fab>
        </div>
      </Zoom>

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

          <IconButton edge="end" aria-label="open drawer">
            <BarsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(MobileLayout);
