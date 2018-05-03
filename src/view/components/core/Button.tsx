import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as classNames from 'classnames';

const buttonClass = 'Button';
const buttonStyles = ['Small', 'Large', 'Disabled'];

interface ButtonProps {
  className?: string
  Small?: boolean
  Large?: boolean
  Disabled?: boolean
  [key: string]: any
}

interface NewButtonProps extends ButtonProps {
  className: string
}

export const Button: React.SFC<ButtonProps> = (props) => {
  const { className: originalClasses } = props;

  const newProps: NewButtonProps = {
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

Button.defaultProps = {
  Small: false,
  Large: false,
  Disabled: false,
};
