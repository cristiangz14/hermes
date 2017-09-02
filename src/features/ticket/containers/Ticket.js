import React, { Component } from 'react';

import Title from '../../../components/Title';
import Form from './Form';

class Ticket extends Component {
  submit(values) {
    console.log(values);
  }
  render() {
    return (
      <div className="ticket">
        <Title text="New Ticket"/>
        <Form onSubmit={this.submit}/>
      </div>

    )
  }
}

export default Ticket;
