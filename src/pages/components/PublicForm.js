import React from "react";
import { Form, Input, Select } from "antd";
const { Option } = Select;

class PublicForm extends React.Component {


    formData = (item, index) => {
        console.log(item, index, "ffff")
        const { getFieldDecorator } = this.props.form;

        if (item.typeKey === "Input") {
            return (
                <Form.Item label="地名">
                    {getFieldDecorator('placeNames', {
                        initialValue: item.name,
                        rules: [{ required: false, message: '请选择地名' }],
                    })(
                        <Input />
                        //   <Select style={{ width: '100%' }} onChange={this.handleChange}>
                        //     {
                        //       data.map((item,index)=>{
                        //         return(
                        //           <Option value={item.title} title={item.title}>{item.title}</Option>
                        //         )
                        //       })
                        //     }
                        //     {/* <Option value="南京">南京</Option>
                        //     <Option value="商丘">商丘</Option>
                        //     <Option value="郑州">郑州</Option>
                        //     <Option value="北京">北京</Option> */}
                        //   </Select>,
                    )}
                </Form.Item>
            )
        } else if (item.typeKey === "Select") {
            return (
                <Form.Item label="地名">
                    {getFieldDecorator('placeNames', {
                        initialValue: item.name,
                        rules: [{ required: false, message: '请选择地名' }],
                    })(

                        <Select style={{ width: '100%' }} onChange={this.handleChange}>
                            <Option value="南京">南京</Option>
                            <Option value="商丘">商丘</Option>
                            <Option value="郑州">郑州</Option>
                            <Option value="北京">北京</Option>
                        </Select>
                    )}
                </Form.Item>
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