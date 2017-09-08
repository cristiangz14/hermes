import React from 'react';
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';
import HelpBlock from './HelpBlock';
import FieldWrapper from './FieldWrapper';

const Select = ({ input, label, value, placeholder, options, meta: { touched, error } }) => (
  <FieldWrapper {...{label, touched, error}}>
    <ReactSelect
      value={value || []}
      placeholder={placeholder}
      options={options}
      {...input}
      onBlur={() => input.onBlur(value)}/>
  </FieldWrapper>
)

export default Select;
