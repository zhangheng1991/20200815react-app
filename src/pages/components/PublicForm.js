import React from "react";
import { Form, Input, Select, Col } from "antd";
import _ from "loadsh";
const { Option } = Select;

class PublicForm extends React.Component {

    componentDidMount() {
        if (this.props.GetRef) {
            this.props.GetRef(this)
        }
    }


    formData = (item, index) => {
        console.log(item, index, "ffff")
        const { getFieldDecorator } = this.props.form;

        if (item.typeKey === "Input") {
            return (
                <Col span={6}>
                    <Form.Item label={_.get(item, "name") || " "}>
                        {getFieldDecorator(item.keyName, {
                            initialValue: item.name,
                            rules: [{ required: false, message: '请选择地名' }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                </Col>
            )
        } else if (item.typeKey === "Select") {
            return (
                <Col span={6}>
                    <Form.Item label={_.get(item, "name") || " "}>
                        {getFieldDecorator(item.keyName, {
                            initialValue: item.name,
                            rules: [{ required: false, message: '请选择地名' }],
                        })(

                            <Select style={{ width: '100%' }} >
                                <Option value="南京">南京</Option>
                                <Option value="商丘">商丘</Option>
                                <Option value="郑州">郑州</Option>
                                <Option value="北京">北京</Option>
                            </Select>
                        )}
                    </Form.Item>
                </Col>
            )
        }
    }


    render() {

        const { selectData } = this.props;
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        console.log(selectData, "selectData")

        return (
            <div>
                sdfsdf
                <Form  {...formItemLayout}>
                    {
                        selectData && selectData.map((item, index) => {
                            return this.formData(item, index)
                        })
                    }
                </Form>
            </div>
        )
    }
}

export default Form.create()(PublicForm);