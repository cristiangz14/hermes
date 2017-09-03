import React, { Component } from 'react';

class Severity extends Component {

  constructor(props) {
    super(props);

    this.state = {
      severities: {
        low: {
          priority: 'Low',
          description: 'Product question',
          className: 'severity__item--low'
        },
        normal: {
          priority: 'Normal',
          description: 'General support issue',
          className: 'severity__item--normal'
        },
        high: {
          priority: 'Normal',
          description: 'Product application issue',
          className: 'severity__item--high'
        },
        urgent: {
          priority: 'Urgent',
          description: 'Product application offline',
          className: 'severity__item--urgent'
        }
      }
    }
  }

  renderItem(severity) {
    return (
      <button type="button" className={"severity__item " + severity.className}>
        <div className="severity__item__priority">
          <span className="severity__item__bullet"></span>
          <span className="severity__item__label">{severity.priority}</span>
        </div>
        <div className="severity__item__decription">{severity.description}</div>
      </button>
    )
  }

  render() {
    const { severities } = this.state;
    return (
      <div className="severity">
        {this.renderItem(severities.low)}
        {this.renderItem(severities.normal)}
        {this.renderItem(severities.high)}
        {this.renderItem(severities.urgent)}
      </div>
    )
  }
}

export default Severity;
