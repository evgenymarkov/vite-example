import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from 'wouter';

import { Shell } from './shell';

const RidesApp = lazy(() => import('./apps/rides'));
const RoversApp = lazy(() => import('./apps/rovers'));

function RedirectToRides() {
  return <Redirect to="/rides" />;
}

ReactDOM.render(
  <React.StrictMode>
    <Shell>
      <Suspense fallback="Loading...">
        <Switch>
          <Route path="/rides" component={RidesApp} />
          <Route path="/rovers" component={RoversApp} />
          <Route component={RedirectToRides} />
        </Switch>
      </Suspense>
    </Shell>
  </React.StrictMode>,
  document.getElementById('root'),
);
