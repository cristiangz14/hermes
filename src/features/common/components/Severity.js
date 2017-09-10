import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Severity extends Component {
  constructor(props) {
    super(props);

    this.severity = {
      low: {
        label: 'Low',
        value: 'low',
        description: 'Product question',
        className: 'severity__item--low',
      },
      normal: {
        label: 'Normal',
        value: 'normal',
        description: 'General support issue',
        className: 'severity__item--normal',
      },
      high: {
        label: 'High',
        value: 'high',
        description: 'Product application issue',
        className: 'severity__item--high',
      },
      urgent: {
        label: 'Urgent',
        value: 'urgent',
        description: 'Product application offline',
        className: 'severity__item--urgent',
      },
    };

    this.onClick = this.onClick.bind(this);
    this.getItemClassName = this.getItemClassName.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  onClick(severity) {
    const { onChange } = this.props;
    onChange(severity.value);
  }

  getItemClassName(severity) {
    const { value } = this.props;
    const selectedClass = severity.value === value ? 'severity__item--selected' : '';
    return `severity__item ${selectedClass} ${severity.className}`;
  }

  renderItem(severity) {
    return (
      <button type="button" onClick={() => this.onClick(severity)} className={this.getItemClassName(severity)}>
        <div className="severity__item__priority">
          <span className="severity__item__bullet"></span>
          <span className="severity__item__label">{severity.label}</span>
        </div>
        <div className="severity__item__decription">{severity.description}</div>
      </button>
    );
  }

  render() {
    const severity = this.severity;
    return (
      <div className="severity">
        {this.renderItem(severity.low)}
        {this.renderItem(severity.normal)}
        {this.renderItem(severity.high)}
        {this.renderItem(severity.urgent)}
      </div>
    );
  }
}

Severity.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Severity;
