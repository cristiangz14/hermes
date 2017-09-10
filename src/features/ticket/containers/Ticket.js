import React, { Component } from 'react';
import { connect } from 'react-redux';
import { markdown } from 'markdown';
import Form from '../components/Form';

import {
  submitTicket,
  resetForm,
} from '../actions';

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { profile } = this.props;

    const submittedBy = {
      name: profile.name,
      email: profile.email,
    };

    const requestedBy = {
      name: values.requesterName,
      email: values.requesterEmail,
    };

    this.props.submitTicket({ ...values, requestedBy, submittedBy });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} {...this.props}/>
    );
  }
}

const mapStateToProps = ({ ticket: { isSubmitting, submitFailed, submitSuccess, message }, auth: { profile } }) => ({
  isSubmitting,
  submitFailed,
  submitSuccess,
  message,
  profile,
});

const mapDispatchToProps = {
  submitTicket,
  resetForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
