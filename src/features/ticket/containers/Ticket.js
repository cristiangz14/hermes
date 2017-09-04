import React, { Component } from 'react';
import { connect } from 'react-redux';

import Title from '../../../components/Title';
import Form from './Form';

import {
  submitTicket
} from '../actions';

class Ticket extends Component {
  submit(values) {
    values.requestedBy = values.requestedBy.map((item) => {
      return item.email;
    })
    console.log(values);
    //this.props.submitTicket(values);

  }
  render() {
    const { isSumitting, submitTicket, customers } = this.props;
    const props = {
      onSubmit: this.submit,
      isSumitting,
      customers
    }
    return (
      <div className="ticket">
        <Title text="New Ticket"/>
        <Form {...props}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isSumitting: state.ticket.isSumitting,
    customers: state.customers
  }
}

const mapDispatchToProps = {
  submitTicket
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
