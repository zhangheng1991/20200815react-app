import React, { useState } from 'react';
import {  Input, InputNumber,  Form, } from 'antd';
const originData = [];

const EditableCell = (props) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    const {  editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps}=props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };
  export default EditableCell;