import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Severity from '../../../components/Severity';
import Multiselect from '../../../components/Multiselect';
import validate from './validate';

const renderField = ({ input, label, type, meta: { touched, error }, className }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className={className}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

let TicketForm = props => {
  const { handleSubmit, isSumitting, customers } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label className="form__label" htmlFor="subject">Subject </label>
        <Field className="form__control" name="subject" component={renderField} type="text" />
      </div>
      <div>
        <label className="form__label" htmlFor="requestedBy">Requested by</label>
        <Field className="form__control"
          name="requestedBy"
          component={Multiselect}
          data={customers}
          valueField="email"
          textField={customer => customer.name + ' (' + customer.email + ')'}/>
      </div>
      <div>
        <label className="form__label" htmlFor="severity">Severity</label>
        <Field name="severity" component={Severity} />
      </div>
      <div>
        <label className="form__label" htmlFor="email">Description</label>
        <Field className="form__control" name="description" component="textarea" />
      </div>
      <button type="submit">{isSumitting ? 'SUBMITTING':'SUBMIT'}</button>
      <button type="submit">CANCEL</button>
    </form>
  )
}

TicketForm = reduxForm({
  form: 'ticket',
  validate
})(TicketForm)

export default TicketForm;
