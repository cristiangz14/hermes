import React from 'react';
import HelpBlock from './HelpBlock';

const FieldWrapper = ({ label, touched, error, children }) => (
  <div className={'form-group ' + (touched && error ? 'has-error' : '')}>
    {label && <label className="control-label">{label}</label>}
    <div>
      {children}
      {touched && error && <HelpBlock type='error' message={error}/>}
    </div>
  </div>
)

export default FieldWrapper;
