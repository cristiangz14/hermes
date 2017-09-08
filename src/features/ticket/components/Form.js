import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import Severity from './Severity';
import MarkdownPreview from './MarkdownPreview';
import Title from '../../common/components/Title';
import Button from '../../common/components/Button';
import Alert from '../../common/components/Alert';
import validate from './validate';
import Description from './Description';

let TicketForm = props => {
  const { handleSubmit, isSubmitting, submitSuccess, submitFailed, message, customers, resetForm } = props;

  const options = customers.map(customer => {
    return {
      value: customer.email,
      label: `${customer.name} (${customer.email})`
    }
  });

  return (
    <form onSubmit={ handleSubmit }>
      <Title text="New Ticket"/>
      {(submitSuccess || submitFailed) && message &&
        <Alert text={message}
          timeout={5000}
          type={submitSuccess ? "success" : "danger"}/>
      }

      <Field name="subject"
        label="Subject *"
        type="text"
        placeholder="Give a subject to your ticket"
        component={Input} />

      <Field name="requesterName"
        label="Requester's name"
        type="text"
        component={Input} />

      <Field name="requesterEmail"
        label="Requester's email"
        type="email"
        component={Input} />

      <Field name="severity"
        label="Severity *"
        component={Severity}/>

        <Field name="description"
          placeholder="Describe your problem"
          rows={4}
          component={Description} />

      <div className="form-group">
        <Button isSubmit
          type="primary"
          text="SUBMIT"
          loadingText="SUBMITTING..."
          isLoading={isSubmitting}
          />
        <Button text="CANCEL"
          handleClick={resetForm}
          isLoading={isSubmitting}
          />
      </div>
    </form>
  )
}

TicketForm = reduxForm({
  form: 'ticket',
  validate
})(TicketForm)

/*TicketForm.propTypes = {
  customers: PropTypes.array,
  isSubmitting: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired
};*/

export default TicketForm;
