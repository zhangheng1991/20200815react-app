import React from "react";
import { Form, Modal, Select, Input, } from "antd";

const { Option } = Select;


class FormModal extends React.Component {
    componentDidMount() {
        const { getInfo } = this.props;
        if (getInfo) {
            getInfo(this)
        }
    }
    render() {

        const { visible, handleOk, handleCancel, clientFormRef } = this.props;
        const { getFieldDecorator } = this.props.form;
        const FormitemCol = {
            wrapperCol: { span: 12 },
            labelCol: { span: 5 },
        }
        return (
            <div>
                <Modal
                    title="Settings"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    zIndex={"1000"}
                >
                    <Form  {...FormitemCol} refs={clientFormRef}>
                        <Form.Item label="Note">
                            {getFieldDecorator('note', {
                                rules: [{ required: true, message: 'Please input your note!' }],
                            })(<Input placeholder="Place input" />)}
                        </Form.Item>
                       
                        <Form.Item label="Gender">
                            {getFieldDecorator('gender', {
                                rules: [{ required: true, message: 'Please select your gender!' }],
                            })(
                                <Select
                                    placeholder=" Pleace Select"
                                >
                                    <Option value="male" key="male">male</Option>
                                    <Option value="female" key="female">female</Option>
                                </Select>
                            )}
                        </Form.Item>
                    </Form>
                </Modal>

            </div>
        )
    }
}

export default Form.create()(FormModal);