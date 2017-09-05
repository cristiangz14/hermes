import React from 'react';
import SeverityComponent from '../../common/components/Severity';

const Severity = ({ input, label, value, meta: { touched, error } }) => (
  <div className={'form-group ' + (touched && error ? 'has-error' : '')}>
    <label className="control-label">{label}</label>
    <div>
      <SeverityComponent onChange={input.onChange} value={value}/>
      {touched && error && <div className="form__explain">{error}</div>}
    </div>
  </div>
)

export default Severity;
