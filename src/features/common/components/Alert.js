import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Alert extends Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: true,
      timeout: props.timeout || 3000
    }

    this.getClassName = this.getClassName.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    const { timeout } = this.state;
    setTimeout(() => {
      this.close();
    }, timeout);
  }

  close() {
    this.setState({'visible': false})
  }

  getClassName() {
    const { type } = this.props;
    const { visible } = this.state;

    let className;
    switch (type) {
      case 'success':
         className = 'alert-success';
        break;
      case 'danger':
        className = 'alert-danger';
        break;
      default:
        className = 'alert-default';
    }
    return visible ? `alert ${className}` : `alert ${className} hide`;
  }

  render() {
    const { text } = this.props;
    return (
      <div className={this.getClassName()}>
        <button className="close"
          type="button"
          onClick={this.close}
          aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        {text}
      </div>
    )
  }
}

Alert.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
};

export default Alert;
