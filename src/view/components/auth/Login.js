import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AlertCommands, AuthCommands, AuthSelectors, RoutingSelectors } from 'state';
// import { commands as AlertCommands } from 'state/alert';
// import { commands as AuthCommands, selectors as AuthSelectors } from 'state/auth';
// import { selectors as RoutingSelectors } from 'state/routing';

class Login extends Component {

  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    const { login } = this.props;
    login('username', 'password');
  }

  render() {
    const { destination, isLoggedIn, login } = this.props;

    let message, buttonText;
    if (isLoggedIn) {
      message = 'You are already logged in!';
      buttonText = 'Home';
    } else {
      message = 'You must log in to view the page.';
      buttonText = 'Log in';
    }

    return (
      <div className="Login">
        Login
        <div>
          <p>{message}</p>
          <button onClick={this.onLogin}>{buttonText}</button>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  destination: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  destination: RoutingSelectors.getDestination(state),
  isLoggedIn: AuthSelectors.isLoggedIn()
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (username, password, destination) =>
    dispatch(AuthCommands.login(username, password, destination))
      .then((user) => dispatch(AlertCommands.success(`successfully logged in: ${JSON.stringify(user)}`)))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
