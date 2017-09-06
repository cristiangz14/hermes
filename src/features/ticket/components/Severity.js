import React from 'react';
import SeverityComponent from '../../common/components/Severity';
import HelpBlock from './HelpBlock';

const Severity = ({ input, label, value, meta: { touched, error } }) => (
  <div className={'form-group ' + (touched && error ? 'has-error' : '')}>
    <label className="control-label">{label}</label>
    <div>
      <SeverityComponent onChange={input.onChange} value={value}/>
      {touched && error && <HelpBlock type='error' message={error}/>}
    </div>
  </div>
)

export default Severity;
