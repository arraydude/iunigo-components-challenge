import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const InputText = ({ theme, className, ...remainingProps }) => {
  const onKeyPress = (e) => {
    const { onKeyPress, onEnter } = remainingProps;

    if (onEnter && e.key === 'Enter') onEnter(e);
    if (onKeyPress) onKeyPress(e);
  };

  const finalClassName = classNames(
    'iunigo-inputText',
    `${theme}-theme`,
    className
  );

  return (
    <input
      type='text'
      {...remainingProps}
      className={finalClassName}
      onKeyPress={onKeyPress}
    />
  );
};

InputText.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onEnter: PropTypes.func,
  theme: PropTypes.oneOf([
    'dark',
    'light'
  ])
};

InputText.defaultProps = {
  name: 'text',
  theme: 'light',
  min: '',
  max: '',
  className: '',
  placeholder: '',
  onEnter: () => {},
  onChange: () => {},
  onKeyPress: () => {},
};

export default InputText;
