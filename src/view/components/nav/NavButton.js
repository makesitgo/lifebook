import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as ReactNavLink } from 'react-router-dom';
import { FaIcon } from 'view/components';

const NavButton = ({ onClick, fontAwesomeOptions = {} }) => {
  const { size: faSize, icon: faIcon } = fontAwesomeOptions;
  return (
    <div className="App-Navbar-Item" onClick={onClick}>
        {fontAwesomeOptions && (
          <FaIcon size={faSize} icon={faIcon} />
        )}
    </div>
  );
}

NavButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  fontAwesomeOptions: PropTypes.shape({
    size: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })
};

NavButton.defaultProps = {
  fontAwesomeOptions: {}
}

export default NavButton;
