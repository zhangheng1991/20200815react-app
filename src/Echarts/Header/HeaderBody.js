import React from "react";
import { Table, Input, InputNumber, Popconfirm, Form, Modal } from 'antd';
import EditableCell from "./HeaderChildren";
const data = [];
for (let i = 0; i < 10; i++) {
    data.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: i,
        address: `London Park no. ${i}`,
        test: i,
    });
}
const EditableContext = React.createContext();


class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data, editingKey: '', visible: false };
        this.columns = [
            {
                title: 'name',
                dataIndex: 'name',
                width: '25%',
                editable: true,
                inputType: "input",
            },
            {
                title: 'age',
                dataIndex: 'age',
                width: '15%',
                editable: true,
                inputType: "number",
            },
            {
                title: 'address',
                dataIndex: 'address',
                width: '20%',
                editable: true,
                inputType: "input",
            },
            {
                title: 'Test',
                dataIndex: 'test',
                width: '20%',
                editable: true,
                inputType: "other",
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) => {
                    const { editingKey } = this.state;
                    const editable = this.isEditing(record);
                    return editable ? (
                        <span>
                            <EditableContext.Consumer>
                                {form => (
                                    <a
                                        onClick={() => this.save(form, record.key)}
                                        style={{ marginRight: 8 }}
                                    >
                                        Save
                                    </a>
                                )}
                            </EditableContext.Consumer>
                            <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                                <a>Cancel</a>
                            </Popconfirm>
                        </span>
                    ) : (
                        <a disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>
                            Edit
                        </a>
                    );
                },
            },
        ];
    }

    isEditing = record => record.key === this.state.editingKey;

    cancel = () => {
        this.setState({ editingKey: '' });
    };

    save(form, key) {
        form.validateFields((error, row) => {
            if (error) {
                return;
            }
            const newData = [...this.state.data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                this.setState({ data: newData, editingKey: '' });
            } else {
                newData.push(row);
                this.setState({ data: newData, editingKey: '' });
            }
            console.log(newData,"newData")
        });
    }

    edit(key) {
        this.setState({ editingKey: key });
    }

    handClick = () => {
        console.log(333)
        this.setState({
            visible: true,
        });
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handClickOperation = (obj) => {
        console.log(obj)
        console.log(this.props.form.setFieldsValue, "this.props.form")
        this.props.form.setFieldsValue({test:obj.test})
        this.setState({
            visible: false,
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const components = {
            body: {
                cell: EditableCell,
            },
        };

        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    // inputType: col.dataIndex === 'age' ? 'number' : 'text',
                    inputType: col.inputType,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                    getFieldDecorator,
                    handClick: this.handClick
                }),
            };
        });

        const dataSourceM = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
                test: "111",
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
                test: "222",
            },
        ];

        const columnsM = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                test: "2222",
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '测试',
                dataIndex: 'test',
                key: 'test',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render: (text, record) => {
                    return (
                        <a onClick={this.handClickOperation.bind(this, record)}>确认</a>
                    )
                }
            }
        ];

        return (

            <div>
                <EditableContext.Provider value={this.props.form}>
                    <Table
                        components={components}
                        bordered
                        dataSource={this.state.data}
                        columns={columns}
                        rowClassName="editable-row"
                        pagination={{
                            onChange: this.cancel,
                        }}
                    />
                </EditableContext.Provider>
                <Modal
                    title="请选择"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Table dataSource={dataSourceM} columns={columnsM} />
                </Modal>
            </div>
        );
    }
}

export default Form.create()(EditableTable);