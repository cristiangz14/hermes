import React from 'react';
import { markdown } from 'markdown';
import FieldWrapper from './FieldWrapper';

const MarkdownPreview = ({ value }) => (
  <FieldWrapper>
    <div className="markdown-control">
      <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(value) }}></div>
    </div>
  </FieldWrapper>
);

export default MarkdownPreview;
