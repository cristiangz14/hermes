import React from 'react';
import FieldWrapper from './FieldWrapper';

const Input = ({ input, label, type, placeholder, meta: { touched, error } }) => (
  <FieldWrapper {...{label, touched, error}}>
    <input {...input} placeholder={placeholder} type={type} className={'form-control ' + (touched && error ? 'has-error' : '')}/>
  </FieldWrapper>
)

export default Input;
