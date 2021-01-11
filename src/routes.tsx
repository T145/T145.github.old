import React, { ReactElement, ReactNode } from 'react';
import { GiTreasureMap, GiTrophy, GiMetalBar } from 'react-icons/gi';
import { SiInternetarchive } from 'react-icons/si';
import SalesmanPage from './pages/SalesmanPage';
import ContestsPage from './pages/ContestsPage';
import ArchivePage from './pages/ArchivePage';

interface RouteProps {
  readonly route: string;
  readonly label: string;
  readonly icon: ReactElement;
  readonly page: ReactNode;
  readonly index: number;
}

const salesmanRoute: RouteProps = {
  route: 'salesman',
  label: '(Traveling Salesman)',
  icon: <GiTreasureMap />,
  page: <SalesmanPage />,
  index: 0
};

const contestsRoute: RouteProps = {
  route: 'contests',
  label: '(Programming Contests)',
  icon: <GiTrophy />,
  page: <ContestsPage />,
  index: 1
};

const archiveRoute: RouteProps = {
  route: 'archive',
  label: '(Retired Projects)',
  icon: <SiInternetarchive />,
  page: <ArchivePage />,
  index: 2
};

export default [salesmanRoute, contestsRoute, archiveRoute];
