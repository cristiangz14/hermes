import React from 'react';
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';
import HelpBlock from './HelpBlock';

const Select = ({ input, value, label, placeholder, options, meta: { touched, error } }) => (
  <div className="form-group">
    <label className="control-label">{label}</label>
    <div>
      <ReactSelect
        value={value || []}
        placeholder={placeholder}
        options={options}
        {...input}
        onBlur={() => input.onBlur(value)}/>
        {touched && error && <HelpBlock type='error' message={error}/>}
    </div>
  </div>
)

export default Select;
