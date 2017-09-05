import React from 'react';

const Input = ({ input, label, type, placeholder, meta: { touched, error } }) => (
  <div className={'form-group ' + (touched && error ? 'has-error' : '')}>
    <label className="control-label">{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} className={'form-control ' + (touched && error ? 'has-error' : '')}/>
      {touched && error && <div className="help-block">{error}</div>}
    </div>
  </div>
)

export default Input;
