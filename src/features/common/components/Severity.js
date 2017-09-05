import React, { Component } from 'react';

class Severity extends Component {

  constructor(props) {
    super(props);

    this.state = {
      severity: {
        low: {
          label: 'Low',
          value: 'low',
          description: 'Product question',
          className: 'severity__item--low'
        },
        normal: {
          label: 'Normal',
          value: 'normal',
          description: 'General support issue',
          className: 'severity__item--normal'
        },
        high: {
          label: 'Normal',
          value: 'high',
          description: 'Product application issue',
          className: 'severity__item--high'
        },
        urgent: {
          label: 'Urgent',
          value: 'urgent',
          description: 'Product application offline',
          className: 'severity__item--urgent'
        }
      },
      selected: props.value || ''
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(severity) {
    const { onChange } = this.props;
    onChange(severity.value);
    this.setState({'selected': severity.value})
  }

  getItemClassName(severity) {
    const { selected } = this.state;
    const selectedClass = severity.value === selected ? 'severity__item--selected' : '';
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
    )
  }

  render() {
    const { severity } = this.state;
    return (
      <div className="severity">
        {this.renderItem(severity.low)}
        {this.renderItem(severity.normal)}
        {this.renderItem(severity.high)}
        {this.renderItem(severity.urgent)}
      </div>
    )
  }
}

export default Severity;
