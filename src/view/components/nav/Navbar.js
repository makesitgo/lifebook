import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, FaIcon, NavLink } from 'view/components';
import { siteUrls } from 'view/urls';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogoSubtitleOn: false
    };
  }

  render() {
    const { lhs, rhs, logo, subtitle } = this.props;
    return (
      <header className="Navbar">
        <nav role="navigation">
          {lhs}

          <div className="Navbar-Logo">
            <h1>{logo}</h1>
            {/* <h5>{subtitle}</h5> */}
          </div>

          {rhs}
        </nav>
      </header>
    );
  }
}

Navbar.propTypes = {
  lhs: PropTypes.node,
  rhs: PropTypes.node,
  logo: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

Navbar.defaultValues = {
  lhs: null,
  rhs: null,
  subtitle: 'we are two wild and crazy guys!'
};

export default Navbar;
