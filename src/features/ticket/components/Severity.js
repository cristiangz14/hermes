import React from 'react';
import SeverityComponent from '../../common/components/Severity';
import FieldWrapper from './FieldWrapper';

const Severity = ({ input: { onChange, value }, label, meta: { touched, error } }) => (
  <FieldWrapper {...{label, touched, error}}>
    <SeverityComponent onChange={onChange} value={value}/>
  </FieldWrapper>
)

export default Severity;
