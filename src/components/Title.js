import React, { Component } from 'react';

class Title extends Component {
  render() {
    const { text } = this.props;
    return (
      <h1 className="title">{text}</h1>
    )
  }
}

export default Title;
