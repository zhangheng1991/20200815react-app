import React from "react";
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
const EditableContext = React.createContext();
class EditableCell extends React.Component {

    handClick=()=>{
        this.props.handClick()
    }

    getInput = (inputType) => {
        if (inputType === 'number') {
            return <InputNumber />;
        }else if(inputType==="other"){
            return <Input onClick={this.handClick}/>;
        }
        return <Input />;
    };

    renderCell = () => {
        console.log(this.props,"this.props")
        const {
            getFieldDecorator,
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            children,
            ...restProps
        } = this.props;
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item style={{ margin: 0 }}>
                        {getFieldDecorator(dataIndex, {
                            rules: [
                                {
                                    required: true,
                                    message: `Please Input ${title}!`,
                                },
                            ],
                            initialValue: record[dataIndex],
                        })(this.getInput(inputType))}
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    };

    render() {
        return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>;
    }
}

export default EditableCell;