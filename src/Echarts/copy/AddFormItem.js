import React from "react";

import { Form, Input, Icon, Button } from 'antd';
import _ from "loadsh";
import "./style.less";
import style from "./style.less";
let id = 0;

class DynamicFieldSet extends React.Component {
    remove = k => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    };

    add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        console.log(keys, "keys")
        console.log(_.max(keys))
        let nu = _.max(keys) + 1;
        const nextKeys = keys.concat(nu);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { keys, names } = values;
                console.log('Received values of form: ', values);
                console.log('Merged values:', keys.map(key => names[key]));
            }
        });
    };

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 18 },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        getFieldDecorator('keys', { initialValue: [id] });
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => (
            <div className={`${style.FormItemBox}`}   key={k}>
                <Form.Item
                    // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    {...formItemLayout}
                    label={'Passengers'}
                    required={false}
                    key={`names[${k}]`}
                // style={{ display: "block" }}
                >
                    {getFieldDecorator(`names[${k}]`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [
                            {
                                required: true,
                                whitespace: true,
                                message: "Please input passenger",
                            },
                        ],
                    })(<Input placeholder="passenger name" style={{ width: '90%', marginRight: 8 }} />)}
                    {/* {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            onClick={() => this.remove(k)}
                        />
                    ) : null} */}
                </Form.Item>
                <Form.Item
                    // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    {...formItemLayout}
                    label={'addres'}
                    required={false}
                    key={`addres[${k}]`}
                // style={{ display: "block" }}
                >
                    {getFieldDecorator(`addres[${k}]`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [
                            {
                                required: true,
                                whitespace: true,
                                message: "Please input addres",
                            },
                        ],
                    })(<Input placeholder="addres" style={{ width: '90%', marginRight: 0 }} />)}
                    {/* {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            onClick={() => this.remove(k)}
                        />
                    ) : null} */}
                </Form.Item>
                <Form.Item
                    // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    {...formItemLayout}
                    label={'city'}
                    required={false}
                    key={`city[${k}]`}
                // style={{ display: "block" }}
                >
                    {getFieldDecorator(`city[${k}]`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [
                            {
                                required: true,
                                whitespace: true,
                                message: "Please input city",
                            },
                        ],
                    })(<Input placeholder="city" style={{ width: '90%', marginLeft: 8 }} />)}
                    {/* {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            onClick={() => this.remove(k)}
                        />
                    ) : null} */}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={'pages'}
                    required={false}
                    key={`age[${k}]`}
                // style={{ display: "block" }}
                >
                    {getFieldDecorator(`age[${k}]`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [
                            {
                                required: true,
                                whitespace: true,
                                message: "Please input age",
                            },
                        ],
                    })(<Input placeholder="age" style={{ width: '80%', marginRight: 8 }} />)}
                    {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            onClick={() => this.remove(k)}
                        />
                    ) : null}
                    <Icon
                        className="dynamic-add-button"
                        type="plus"
                        onClick={this.add}
                    />
                </Form.Item>
            </div>
        ));
        return (
            <div style={{ width: "100%", margin: "0 auto" }}>
                <Form onSubmit={this.handleSubmit}>
                    {formItems}
                    {/* <Form.Item >
                        <Button type="dashed" onClick={this.add} style={{ width: '200px' }}>
                            <Icon type="plus" /> Add field
                        </Button>
                    </Form.Item> */}
                    <Form.Item {...formItemLayoutWithOutLabel}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Form.create({ name: 'dynamic_form_item' })(DynamicFieldSet);