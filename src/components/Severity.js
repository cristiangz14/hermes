import React, { Component } from 'react';

class Severity extends Component {

  constructor(props) {
    super(props);

    this.state = {
      severities: {
        low: {
          priority: 'Low',
          description: 'Product question'
        },
        normal: {
          priority: 'Normal',
          description: 'General support issue'
        },
        high: {
          priority: 'Normal',
          description: 'Product application issue'
        },
        urgent: {
          priority: 'Urgent',
          description: 'Product application offline'
        }
      }
    }
  }

  renderCard(severity) {
    return (
      <div className="severity__item severity__item--low">
        <div className="severity__item__priority">
          <span className="severity__item__bullet"></span>
          <span className="severity__item__label">{severity.priority}</span>
        </div>
        <div className="severity__item__decription">{severity.description}</div>
      </div>
    )
  }

  render() {
    const { severities } = this.state;
    return (
      <div className="severity">
        {this.renderCard(severities.low)}
        {this.renderCard(severities.normal)}
        {this.renderCard(severities.high)}
        {this.renderCard(severities.urgent)}
      </div>
    )
  }
}

export default Severity;
