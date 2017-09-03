import React, { Component } from 'react';
import { connect } from 'react-redux';

import Title from '../../../components/Title';
import Form from './Form';

import {
  submitTicket
} from '../actions';

class Ticket extends Component {
  submit(values) {
    this.props.submitTicket(values);
    console.log(values);
  }
  render() {
    const { isSumitting, submitTicket } = this.props;
    const props = {
      onSubmit: submitTicket,
      isSumitting
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
    isSumitting: state.ticket.isSumitting
  }
}

const mapDispatchToProps = {
  submitTicket
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
