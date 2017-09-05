import React from 'react';

const TextArea = ({ input, label, placeholder, meta: { touched, error } }) => (
  <div className={'form-group ' + (touched && error ? 'has-error' : '')}>
    <label className="control-label">{label}</label>
    <div>
      <textarea {...input} placeholder={placeholder} className={'form-control ' + (touched && error ? 'has-error' : '')}/>
      {touched && error && <div className="form__explain">{error}</div>}
    </div>
  </div>
)

export default TextArea;
