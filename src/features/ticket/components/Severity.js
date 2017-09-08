import React from 'react';
import SeverityComponent from '../../common/components/Severity';
import HelpBlock from './HelpBlock';
import FieldWrapper from './FieldWrapper';

const Severity = ({ input: { onChange }, label, value, meta: { touched, error } }) => (
  <FieldWrapper {...{label, touched, error}}>
    <SeverityComponent onChange={onChange} value={value}/>
  </FieldWrapper>
)

export default Severity;
