import React, { Component } from 'react';
import ReactWidgetMultiselect from 'react-widgets/lib/Multiselect';
import 'react-widgets/lib/scss/react-widgets.scss';

class TagItem extends Component {

  render() {
    const { item, textField } = this.props;
    return (
      <div className="rw-tag">{textField(item)}</div>
    )
  }
}

class ListItem extends Component {

  render() {
    const { text } = this.props;
    return (
      <span>{text}</span>
    )
  }
}

class Multiselect extends Component {

  render() {
    const { data, input, valueField, textField } = this.props;
    return (
      <ReactWidgetMultiselect
        onBlur={() => input.onBlur()}
        textField={textField}
        valueField={valueField}
        tagComponent={({item}) => (<TagItem item={item} textField={textField}/>)}
        itemComponent={ListItem}
        onChange={value => input.onChange(value)}
        value={input.value || []}
        data={data}/>
    )
  }
}

export default Multiselect;
