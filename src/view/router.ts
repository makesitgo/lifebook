import * as React from 'react';
// import { Redirect, Route, Switch } from 'react-router-dom'
// import { ConnectedRouter } from 'react-router-redux';
import { ErrorBoundary, PrivateRoute } from './components';
import { App, Auth, Welcome } from './layouts';
import { siteUrls } from './urls';

const ViewRouter = ({ history: {} }) => (
  // <ConnectedRouter history={history}>
  //   <ErrorBoundary>
  //     // <Switch>
  //     //   <PrivateRoute path={su.app().root()} component={App} />
  //     //   <Route path={su.auth().root()} component={Auth} />
  //     //   <Route exact path={su.root()} component={Welcome} />
  //     //   <Redirect to={su.landingPage()} />
  //     // </Switch>
  //   </ErrorBoundary>
  // </ConnectedRouter>
);

export default ViewRouter;
