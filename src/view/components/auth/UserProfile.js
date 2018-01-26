import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="UserProfile">
        <button onClick={() => console.log('user registration')}>register</button>
        <button onClick={() => console.log('login')}>login</button>
        <button onClick={() => console.log('logout')}>logout</button>
      </div>
    );
  }
}

export default UserProfile;
