import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MarkdownPreview from './MarkdownPreview';
import TextArea from './TextArea';

class Description extends Component {
  constructor(props) {
    super(props);

    this.tabs = {
      description: 1,
      preview: 2,
    };

    this.state = {
      activedTab: this.tabs.description,
    };
  }

  changeActivedTab(tabId) {
    this.setState({ activedTab: tabId });
  }

  isActivedTab(tabId) {
    return this.state.activedTab === tabId;
  }

  render() {
    const { description, preview } = this.tabs;
    const { input } = this.props;
    return (
      <div>
        <ul className="nav nav-tabs">
          <li className={this.isActivedTab(description) ? 'active' : ''}>
            <a href="#!" onClick={() => this.changeActivedTab(description)}>Desription *</a>
          </li>
          <li className={this.isActivedTab(preview) ? 'active' : ''}>
            <a href="#!" onClick={() => this.changeActivedTab(preview)}>Preview</a>
          </li>
        </ul>
        <div className={!this.isActivedTab(description) ? 'hide' : ''}>
          <TextArea {...this.props}/>
        </div>
        <div className={!this.isActivedTab(preview) ? 'hide' : ''}>
          <MarkdownPreview value={input.value}/>
        </div>
      </div>
    );
  }
}

Description.propTypes = {
  input: PropTypes.object,
  description: PropTypes.element,
  preview: PropTypes.element,
};

export default Description;
