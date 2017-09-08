import React from 'react';
import { markdown } from 'markdown';
import HelpBlock from './HelpBlock';
import FieldWrapper from './FieldWrapper';

const Select = ({ label, input, meta: { touched, error } }) => (
  <FieldWrapper {...{label}}>
    <div className="markdown-control">
      <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(input.value) }}></div>
    </div>
  </FieldWrapper>
)

export default Select;
