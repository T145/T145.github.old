import React from 'react';
import { GiFamilyHouse as HouseIcon } from 'react-icons/gi';
import { SiInternetarchive as ArchiveIcon } from 'react-icons/si';
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

export default Routes;
