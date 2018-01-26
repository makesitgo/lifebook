import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const buttonClass = 'Button';
const buttonStyles = ['Small', 'Large', 'Disabled'];

const Button = (props) => {
  const { className: originalClasses } = props;

  const newProps = {
    ...props,
    className: classNames(
      buttonClass,
      originalClasses,
      buttonStyles.reduce(
        (styles, style) => Object.assign(styles, { [`${buttonClass}-${style}`]: props[style] }),
        {}
      )
    )
  };
  buttonStyles.forEach(style => {
    delete newProps[style];
  });

  return (
    <button {...newProps} />
  );
};

Button.propTypes = {
  className: PropTypes.string,
  Small: PropTypes.bool,
  Large: PropTypes.bool,
  Disabled: PropTypes.bool,
};

Button.defaultProps = {
  Small: false,
  Large: false,
  Disabled: false,
};

export default Button;
