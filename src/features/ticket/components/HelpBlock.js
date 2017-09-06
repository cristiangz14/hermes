import React from 'react';

const getClassName = type => {
  let className = '';
  switch (type) {
    case 'error':
      className = 'alert-danger';
      break;
    default:
      return '';
  }

  return `alert ${className} help-block`;
}

const HelpBlock = ({ type, message }) => (
    <div className={getClassName(type)}>{message}</div>
)

export default HelpBlock;
