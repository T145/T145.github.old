/* eslint-disable no-restricted-imports */
import React, { StrictMode as Strict } from 'react';
import { render } from 'react-dom';
import {
  Router,
  Link,
  Redirect,
  Location,
  RouteComponentProps,
  LocationProviderProps
} from '@reach/router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles.css';

const FadeTransitionRouter = (props: LocationProviderProps) => (
  <Location>
    {({ location }) => (
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
          {/* the only difference between a router animation and
              any other animation is that you have to pass the
              location to the router so the old screen renders
              the "old location" */}
          <Router location={location} className="router">
            {props.children}
          </Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
);

type PageProps = RouteComponentProps & {
  page?: string;
};

function getPageNumber(page: string | undefined): number {
  return page ? +page : 0;
}

const Page = ({ page }: PageProps) => (
  <div
    className="page"
    style={{ background: `hsl(${getPageNumber(page) * 75}, 60%, 60%)` }}
  >
    {page}
  </div>
);

Page.defaultProps = { page: '0' };

const App = (props: RouteComponentProps) => (
  <div className="app">
    <nav className="nav">
      <Link to="/">Page 1</Link>&nbsp;
      <Link to="page/2">Page 2</Link>&nbsp;
      <Link to="page/3">Page 3</Link>&nbsp;
      <Link to="page/4">Page 4</Link>
    </nav>

    <FadeTransitionRouter>
      <Page path="/" page="1" />
      <Page path="page/:page" />
    </FadeTransitionRouter>
  </div>
);

render(
  <Strict>
    <App />
  </Strict>,
  document.getElementById('root')
);
