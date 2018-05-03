import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';
import { prefixIfNotPresent, suffixIfNotPresent } from '../../util';

interface FontAwesomeProps {
  size?: number
  icon: string
}

export const FontAwesome: React.SFC<FontAwesomeProps> = ({ size = 1, icon }) => {
  const classes = classNames(
    'fa',
    prefixIfNotPresent('fa-', suffixIfNotPresent(String(size), 'x')),
    prefixIfNotPresent('fa-', icon)
  );

  return <i className={classes}></i>;
};
