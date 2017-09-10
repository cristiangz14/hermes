import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { text, className } = this.props;
    return (
      <h1 className={className}>{text}</h1>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Title;
