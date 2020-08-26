import React from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';

const EditableContext = React.createContext();

class TestChildren extends React.Component {
  state = {
    editing: false,
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    // console.log(e.target.value)
    const { record, handleSave } = this.props;
    // console.log(record);
    // console.log(e.target.value);
    this.props.form.validateFields((error, values) => {
      // console.log(values[0]);
      for (let key in values) {
        // console.log(key + '---' + values[key]);
        values[key]=e.target.value;
      }
      // values[0] = e.target.value;
      if (error && error[e.currentTarget.id]) {
        return;
      }
      // this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    // console.log(this)
    // console.log(form)
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    // console.log(children, dataIndex, record, title);
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0,pading:"0px" }}>
        {this.props.form.getFieldDecorator(dataIndex, {
          rules: [
            {
              // required: true,
              // message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex],
        })(<Input ref={node => (this.input = node)} onChange={this.save} />)}
        {/* <Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} /> */}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };
  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}
// export default TestChildren;
export default Form.create()(TestChildren);
