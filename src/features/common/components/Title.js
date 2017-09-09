import React, { Component } from 'react';

class Title extends Component {
  render() {
    const { text, className } = this.props;
    return (
      <h1 className={className}>{text}</h1>
    );
  }
}

export default Title;
