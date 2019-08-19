import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Button = ({ type, children, theme, className, onClick }) => {
  const finalClassName = classNames(
    'iunigo-button',
    `${theme}-theme`,
    `${type}-type`,
    className
  );

  return (
    <button type='button' className={finalClassName} onClick={onClick} disabled={type === 'disabled'}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'disabled',
  ]),
  theme: PropTypes.oneOf([
    'dark',
    'light'
  ])
};

Button.defaultProps = {
  className: '',
  type: 'primary',
  theme: 'light',
  onClick: () => {},
};

export default Button;
