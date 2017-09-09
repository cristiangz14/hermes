import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

  constructor(props) {
    super(props);

    this.getClassName = this.getClassName.bind(this);
  }

  getClassName() {
    const { type } = this.props;
    let className;
    switch (type) {
      case 'primary':
        className = 'btn-primary';
        break;
      case 'success':
        className = 'btn-success';
        break;
      case 'transparent':
        className = 'btn-transparent';
        break;
      default:
        className = 'btn-default';
    }

    return `btn ${className}`;
  }

  render() {
    const { isSubmit, isLoading, text, loadingText, handleClick } = this.props;
    return (
      <button
        type={isSubmit ? 'submit' : 'button'}
        className={this.getClassName()}
        onClick={handleClick}
        disabled={isLoading}>
        {isLoading && loadingText ? loadingText : text}
      </button>
    )
  }
}

Button.propTypes = {
  type: PropTypes.string,
  isSubmit: PropTypes.bool,
  isLoading: PropTypes.bool,
  text: PropTypes.string,
  loadingText: PropTypes.string,
  handleClick: PropTypes.func
};

export default Button;
