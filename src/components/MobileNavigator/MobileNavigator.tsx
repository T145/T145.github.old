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

import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

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
    <div data-testid="MobileNavigator">
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
        disableBackdropTransition={!isIOS}
        disableDiscovery={isIOS}
      >
        <div
          className={classes.list}
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

      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>

          <Route>
            {({ location }) => (
              <Typography variant="h6" color="inherit" noWrap>
                {location.pathname}
              </Typography>
            )}
          </Route>

          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab>

          <div className={classes.grow} />

          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>

          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(MobileNavigator);
