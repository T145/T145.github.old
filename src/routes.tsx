import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { GiFamilyHouse as HouseIcon } from 'react-icons/gi';
import { SiInternetarchive as ArchiveIcon } from 'react-icons/si';
import List from '@material-ui/core/List';
import ListLink from './components/ListLink/ListLink';
import Home from './pages/HomePage/HomePage';
import Archive from './pages/ArchivePage/ArchivePage';

/*
 Route keys are hardcoded as opposed to using
 the "mapped" keys to prevent variance.
 */

const Routes = [
  {
    key: 100,
    path: '/',
    name: 'Home',
    icon: <HouseIcon />,
    component: Home,
  },
  {
    key: 101,
    path: '/archive',
    name: 'Archive',
    icon: <ArchiveIcon />,
    component: Archive,
  },
];

export function RouteList() {
  const links = Routes.map(route => (
    <ListLink
      icon={route.icon}
      primary={route.name}
      to={route.path}
      key={route.key}
    />
  ));

  return <List>{links}</List>;
}

export function RouteSwitch() {
  const routes = Routes.map(route => (
    <Route
      exact
      path={route.path}
      component={route.component}
      key={route.key}
    />
  ));

  return <Switch>{routes}</Switch>;
}
