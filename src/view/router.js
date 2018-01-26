import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux';
import { ErrorBoundary, PrivateRoute } from 'view/components';
import { App, Auth, Welcome } from 'view/layouts';
import { siteUrls } from 'view/urls';

const ViewRouter = ({ history }) => (
  <ConnectedRouter history={history}>
    <ErrorBoundary>
      <Switch>
        <PrivateRoute path={siteUrls.app().root()} component={App} />
        <Route path={siteUrls.auth().root()} component={Auth} />
        <Route exact path={siteUrls.root()} component={Welcome} />
        <Redirect to={siteUrls.landingPage()} />
      </Switch>
    </ErrorBoundary>
  </ConnectedRouter>
);

export default ViewRouter;
