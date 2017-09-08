import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import { markdown } from 'markdown';

import {
  submitTicket,
  resetForm
} from '../actions';

class Ticket extends Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.mapToCustomer = this.mapToCustomer.bind(this);
  }

  submit(values) {
    const { profile, customers } = this.props;

    const submittedBy = {
      name: profile.name,
      email: profile.email
    }

    const requestedBy = {
      name: values.requesterName,
      email: values.requesterEmail
    }

    this.props.submitTicket({...values, requestedBy, submittedBy});
  }

  mapToCustomer( value ) {
    if(!value) {
      return null;
    }

    const { customers } = this.props;

    const index = customers.findIndex((customer) => {
      return customer.email === value.value;
    });

    if(index >= 0) {
      return customers[index];
    }

    return null;
  }

  render() {
    const { isSubmitting, submitSuccess, submitFailed, message, submitTicket, customers, resetForm } = this.props;
    const props = {
      onSubmit: this.submit,
      isSubmitting,
      customers,
      submitSuccess,
      submitFailed,
      message,
      resetForm
    }

    return (
        <Form {...props}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    isSubmitting: state.ticket.isSubmitting,
    submitFailed: state.ticket.submitFailed,
    submitSuccess: state.ticket.submitSuccess,
    message: state.ticket.message,
    customers: state.customers,
    profile: state.auth.profile
  }
}

const mapDispatchToProps = {
  submitTicket,
  resetForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
