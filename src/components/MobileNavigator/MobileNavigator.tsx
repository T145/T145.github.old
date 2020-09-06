import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { isIOS } from 'react-device-detect';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Fab,
  SwipeableDrawer,
  List,
} from '@material-ui/core';
import { FaMapSigns as SignIcon } from 'react-icons/fa';
import {
  FiChevronsUp as ChevronIcon,
  FiMoreVertical as MoreIcon,
} from 'react-icons/fi';
import Routes from '../../routes';
import MobileStyle from '../../constants/MobileStyle/MobileStyle';
import ListLink from '../ListLink/ListLink';

function MobileNavigator() {
  const classes = MobileStyle();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar
      data-testid="MobileNavigator"
      position="fixed"
      color="primary"
      className={classes.appBar}
    >
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

        <Route>
          {({ location }) => (
            <Typography variant="h6" color="inherit" noWrap>
              {location.pathname}
            </Typography>
          )}
        </Route>

        <Fab color="secondary" aria-label="add" className={classes.fabButton}>
          <ChevronIcon />
        </Fab>

        <div className={classes.grow} />

        <IconButton edge="end" color="inherit">
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(MobileNavigator);
