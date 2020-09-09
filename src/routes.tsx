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
import Home from './pages/HomePage/HomePage';
import Archive from './pages/ArchivePage/ArchivePage';
import TravelingSalesman from './pages/TravelingSalesmanPage/TravelingSalesmanPage';
import ProgrammingContests from './pages/ProgrammingContestsPage/ProgrammingContestsPage';
import MetalChests from './pages/MetalChestsPage/MetalChestsPage';

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
  {
    key: 102,
    path: '/travelingSalesman',
    name: 'Traveling Salesman',
    icon: <MapIcon />,
    component: TravelingSalesman,
  },
  {
    key: 103,
    path: '/programmingContests',
    name: 'Programming Contests',
    icon: <TrophyIcon />,
    component: ProgrammingContests,
  },
  {
    key: 104,
    path: '/metalChests',
    name: 'Metal Chests',
    icon: <MetalBarIcon />,
    component: MetalChests,
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
