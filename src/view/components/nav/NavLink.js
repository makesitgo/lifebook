import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as ReactNavLink } from 'react-router-dom';
import { FaIcon } from 'view/components';

const NavLink = ({
  exact,
  target,
  fontAwesomeOptions,
  label
}) => {
  const { size: faSize, icon: faIcon } = fontAwesomeOptions;
  return (
    <div className="App-Navbar-Item">
      <ReactNavLink exact={!!exact} to={target}>
        {fontAwesomeOptions && (
          <FaIcon size={faSize} icon={faIcon} />
        )}
        {label && (
          <span>{label}</span>
        )}
      </ReactNavLink>
    </div>
  );
}

NavLink.propTypes = {
  exact: PropTypes.bool,
  target: PropTypes.string.isRequired,
  fontAwesomeOptions: PropTypes.shape({
    size: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }),
  label: PropTypes.string
};

NavLink.defaultProps = {
  exact: false,
  fontAwesomeOptions: {},
  label: ''
}

export default NavLink;
