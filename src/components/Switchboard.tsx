import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Routes from './utils/Routes';

export default function Switchboard() {
  return (
    <Switch>
      {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Routes.map((prop, key) => {
          return (
            <Route key={prop.key} path={prop.path} component={prop.component} />
          );
        })
      }
    </Switch>
  );
}
