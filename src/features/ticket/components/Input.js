import React from 'react';
import HelpBlock from './HelpBlock';

const Input = ({ input, label, type, placeholder, meta: { touched, error } }) => (
  <div className={'form-group ' + (touched && error ? 'has-error' : '')}>
    <label className="control-label">{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} className={'form-control ' + (touched && error ? 'has-error' : '')}/>
      {touched && error && <HelpBlock type='error' message={error}/>}
    </div>
  </div>
)

export default Input;
