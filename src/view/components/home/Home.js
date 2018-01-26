import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        this is the app home page.
      </div>
    );
  }
}

Home.propTypes = {

}

export default Home;
