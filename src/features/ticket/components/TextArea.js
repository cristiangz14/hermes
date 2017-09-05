import React from 'react';

const TextArea = ({ input, label, placeholder, rows, meta: { touched, error } }) => (
  <div className={'form-group ' + (touched && error ? 'has-error' : '')}>
    <label className="control-label">{label}</label>
    <div>
      <textarea {...input} placeholder={placeholder} rows={rows || 1} className={'form-control ' + (touched && error ? 'has-error' : '')}/>
      {touched && error && <div className="help-block">{error}</div>}
    </div>
  </div>
)

export default TextArea;
