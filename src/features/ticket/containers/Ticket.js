import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';

import {
  submitTicket
} from '../actions';

class Ticket extends Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    const { profile } = this.props;

    values.requestedBy = values.requestedBy || [];

    values.requestedBy = values.requestedBy.map((item) => {
      return item.value;
    });

    if(!values.requestedBy.length) {
      values.requestedBy.push(profile.name);
    }

    this.props.submitTicket(values);
  }

  render() {
    const { isSubmitting, submitTicket, customers } = this.props;
    const props = {
      onSubmit: this.submit,
      isSubmitting,
      customers
    }

    return (
        <Form {...props}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    isSubmitting: state.ticket.isSubmitting,
    customers: state.customers,
    profile: state.auth.profile
  }
}

const mapDispatchToProps = {
  submitTicket
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
