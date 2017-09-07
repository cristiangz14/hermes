import React from 'react';
import { markdown } from 'markdown';
import HelpBlock from './HelpBlock';

const MarkdownPreview = ({ input, label }) => (
  <div className={'form-group '}>
    <label className="control-label">{label}</label>
    <div className="markdown-control">
      <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(input.value) }}></div>
    </div>
  </div>
)

export default MarkdownPreview;
