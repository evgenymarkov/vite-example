import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from 'wouter';

import { RidesApp } from './apps/rides';
import { RoversApp } from './apps/rovers';
import { Shell } from './shell';

function RedirectToRides() {
  return <Redirect to="/rides" />;
}

ReactDOM.render(
  <React.StrictMode>
    <Shell>
      <Switch>
        <Route path="/rides" component={RidesApp} />
        <Route path="/rovers" component={RoversApp} />
        <Route component={RedirectToRides} />
      </Switch>
    </Shell>
  </React.StrictMode>,
  document.getElementById('root'),
);
