import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  About,
  FontAwesome,
  Footer,
  Home,
  Navbar,
  NavLink,
  UserProfile
} from 'view/components';
import { siteUrls } from 'view/urls';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type: footerClassName, message: footerText } = this.props.alert;
    return (
      <div className="App">
        <Navbar
          lhs={
            <div className="Navbar-Lhs">
              <NavLink
                exact
                target={siteUrls.app().home()}
                fontAwesomeOptions={{ size: '2', icon: 'home' }}
              />
            </div>
          }
          rhs={
            <div className="Navbar-Rhs">
              <NavLink
                target={siteUrls.app().about()}
                fontAwesomeOptions={{ size: '2', icon: 'info' }}
              />
              <NavLink
                target={siteUrls.auth().profile()}
                fontAwesomeOptions={{ size: '2', icon: 'user-circle-o' }}
              />
            </div>
          }
          logo="mmdb lifebook"
          subtitle="go write your own stories"
        />
        <main className="App-Main">
          <Switch>
            <Route exact path={siteUrls.app().home()} component={Home} />
            <Route path={siteUrls.app().about()} component={About} />
            <Route path={siteUrls.auth().profile()} component={UserProfile} />
            <Redirect to={siteUrls.app().home()} />
            {/* <Redirect to={siteUrls.error().notFound()} */}
          </Switch>
        </main>
        <Footer message={footerText}/>
      </div>
    );
  }
}

App.propTypes = {};

const mapStateToProps = ({ alert }) => ({
  alert
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
