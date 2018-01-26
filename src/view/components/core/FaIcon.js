import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { prefixIfNotPresent, suffixIfNotPresent } from 'view/util';

const FaIcon = ({ size, icon }) => {
  const classes = classNames(
    'fa',
    prefixIfNotPresent('fa-', suffixIfNotPresent(size, 'x')),
    prefixIfNotPresent('fa-', icon)
  );

  return <i className={classes}></i>;
};

FaIcon.propTypes = {
  size: PropTypes.string,
  icon: PropTypes.string.isRequired
}

FaIcon.defaultProps = {
  size: '1'
}

export default FaIcon;
