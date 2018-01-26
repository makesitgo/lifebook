import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message } = this.props;
    return (
      <footer className="App-StatusBar">
        {message}
      </footer>
    );
  }
}

PropTypes.Footer = {
  message: PropTypes.string.isRequired
};

export default Footer;
