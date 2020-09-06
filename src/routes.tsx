import React from 'react';
import HomeIcon from '@material-ui/icons/HomeRounded';
import SpecialFolderIcon from '@material-ui/icons/FolderSpecialRounded';
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
    icon: <HomeIcon />,
    component: Home,
  },
  {
    key: 101,
    path: '/archive',
    name: 'Archive',
    icon: <SpecialFolderIcon />,
    component: Archive,
  },
];

export default Routes;
