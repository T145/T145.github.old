import React from 'react';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import FolderSpecialRoundedIcon from '@material-ui/icons/FolderSpecialRounded';

import HomePage from '../pages/HomePage';
import ArchivePage from '../pages/ArchivePage';

const Routes = [
  {
    key: 100,
    path: '/home',
    name: 'Home',
    icon: <HomeRoundedIcon />,
    component: HomePage,
  },
  {
    key: 101,
    path: '/archive',
    name: 'Archive',
    icon: <FolderSpecialRoundedIcon />,
    component: ArchivePage,
  },
];

export default Routes;
