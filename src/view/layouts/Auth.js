import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login, Navbar, NavLink, Register, UserProfile } from 'view/components';
import { siteUrls } from 'view/urls';

const Auth = () => (
  <div className="Auth">
    <Navbar
      lhs={
        <div className="Navbar-Lhs">
          <NavLink
            exact
            target={siteUrls.landingPage()}
            fontAwesomeOptions={{ size: '2', icon: 'home' }}
          />
        </div>
      }
      rhs={
        <div className="Navbar-Rhs">
          <NavLink
            target={siteUrls.auth().login()}
            fontAwesomeOptions={{ size: '2', icon: 'user-circle-o' }}
          />
        </div>
      }
      logo="mmdb lifebook"
      subtitle="go write your own stories"
    />
    <main className="Auth-Main">
      <Switch>
        <Route path={siteUrls.auth().login()} component={Login} />
        <Route path={siteUrls.auth().profile()} component={UserProfile} />
        <Route path={siteUrls.auth().register()} component={Register} />
        <Redirect to={siteUrls.auth().login()} />
      </Switch>
    </main>
  </div>
);

Auth.propTypes = {};

export default Auth;
