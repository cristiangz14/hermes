import React from 'react';
import FieldWrapper from './FieldWrapper';

const TextArea = ({ input, label, placeholder, rows, meta: { touched, error } }) => (
  <FieldWrapper {...{label, touched, error}}>
    <textarea {...input} placeholder={placeholder} rows={rows} className={'form-control ' + (touched && error ? 'has-error' : '')}/>
  </FieldWrapper>
)

export default TextArea;
