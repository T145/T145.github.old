import React from 'react';
import clsx from 'clsx';
import { isMobileOnly } from 'react-device-detect';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  List,
  Container,
  Grid,
  Box,
} from '@material-ui/core';

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';

import AppStyles from '../constants/AppStyles';
import ListItemLink from './ListItemLink';
import Copyright from './Copyright';
import Routes from '../utils/Routes';

export default function Navigator() {
  const classes = AppStyles();
  const [open, setOpen] = React.useState(!isMobileOnly);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuRoundedIcon />
          </IconButton>

          <Route>
            {({ location }) => (
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                {location.pathname}
              </Typography>
            )}
          </Route>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftRoundedIcon />
          </IconButton>
        </div>

        <Divider />
        <List>
          {Routes.map(route => {
            return (
              <ListItemLink
                to={route.path}
                primary={route.name}
                icon={route.icon}
                key={route.key}
              />
            );
          })}
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Switch>
              {
                // render page content on the corresponding route
                Routes.map(route => {
                  return (
                    <Route
                      path={route.path}
                      key={route.key}
                      component={route.component}
                    />
                  );
                })
              }
              <Redirect from="/" to="home" />
            </Switch>
          </Grid>

          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}