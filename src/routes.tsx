import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  GiFamilyHouse as HouseIcon,
  GiTreasureMap as MapIcon,
  GiTrophy as TrophyIcon,
  GiMetalBar as MetalBarIcon,
} from 'react-icons/gi';
import { SiInternetarchive as ArchiveIcon } from 'react-icons/si';
import List from '@material-ui/core/List';
import ListLink from './components/ListLink/ListLink';
import HomePage from './pages/HomePage/HomePage';
import ArchivePage from './pages/ArchivePage/ArchivePage';
import SalesmanPage from './pages/SalesmanPage/SalesmanPage';
import ContestsPage from './pages/ContestsPage/ContestsPage';
import ChestsPage from './pages/ChestsPage/ChestsPage';

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
    component: HomePage,
  },
  {
    key: 101,
    path: '/archive',
    name: 'Archive',
    icon: <ArchiveIcon />,
    component: ArchivePage,
  },
  {
    key: 102,
    path: '/salesman',
    name: 'Traveling Salesman',
    icon: <MapIcon />,
    component: SalesmanPage,
  },
  {
    key: 103,
    path: '/contests',
    name: 'Programming Contests',
    icon: <TrophyIcon />,
    component: ContestsPage,
  },
  {
    key: 104,
    path: '/chests',
    name: 'Metal Chests',
    icon: <MetalBarIcon />,
    component: ChestsPage,
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
