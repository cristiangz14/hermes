import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './Input';
import TextArea from './TextArea';
import MultiSelect from './MultiSelect';
import Severity from './Severity';
import Title from '../../common/components/Title';
import validate from './validate';

let TicketForm = props => {
  const { handleSubmit, isSubmitting, customers } = props;

  const options = customers.map(customer => {
    return {
      value: customer.email,
      label: `${customer.name} (${customer.email})`
    }
  });

  return (
    <form className="col-xs-7 col-xs-offset-1" onSubmit={ handleSubmit }>
      <Title text="New Ticket"/>
      <Field name="subject" label="Subject *" type="text" placeholder="Give a subject to your ticket" component={Input} />
      <Field name="requestedBy"
        label="Requested by"
        placeholder="Choose a requester"
        options={options}
        component={MultiSelect}/>
      <Field name="severity" label="Severity *" component={Severity}/>
      <Field name="description" label="Description *" placeholder="Describe your problem" rows={4} component={TextArea} />

      <div className="form-group">
        <button type="submit" className="btn btn-primary">{isSubmitting ? 'SUBMITTING' : 'SUBMIT'}</button>
        <button type="button" className="btn btn-transparent">CANCEL</button>
      </div>

    </form>
  )
}

TicketForm = reduxForm({
  form: 'ticket',
  validate
})(TicketForm)

export default TicketForm;
