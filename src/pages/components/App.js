import React from "react";
import _ from "loadsh";
import { Button } from "antd";

import PublicTable from "./PublicTable";
import PublicForm from "./PublicForm";

class App extends React.Component {

    componentDidMount() {
        const { refProps } = this.props;
        if (refProps) {
            this.props.refProps(this);
        }
    }

    state = {
        dataSource: [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
                id: 1,
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
                id: 2
            },
        ],
        current: 1,
        pageSize: 10,
        selectData: [],
        selectKeyList: []
    }

    dataFunction = (data, id) => {
        // console.log(data, id, "data,id")
        this.setState({
            selectData: data,
            selectKeyList: id
        })
    }

    handInputChange = (obj, index, value) => {
        const { dataSource } = this.state;
        const dataType = obj.key;
        const data = _.map(dataSource, (item, indexT) => ({
            ...item,
            [obj.key]: index == indexT ? value : item[obj.key]
        }))
        this.setState({ dataSource: data })
    }

    handleSelectChange = (obj, index, value) => {
        const { dataSource } = this.state;
        const dataType = obj.key;
        const data = _.map(dataSource, (item, indexT) => ({
            ...item,
            [obj.key]: index == indexT ? value : item[obj.key]
        }))
        this.setState({ dataSource: data })
    }

    handClickAdd = () => {
        const { dataSource } = this.state;
        const id = _.max(_.map(dataSource, item => item.id)) || 0;
        // console.log(id, "id")
        const dataNew = [
            {
                key: id + 1,
                name: '',
                age: "",
                address: '',
                id: id + 1,
            }
        ];
        const data = dataSource.concat(dataNew);
        this.setState({ dataSource: data })
    }

    handConfigDelete = (obj, index) => {
        const { dataSource } = this.state;
        const data = _.map(_.filter(dataSource, item => item.id !== obj.id), item => ({
            ...item
        }))
        this.setState({ dataSource: data })
    }

    handChagePage = (pagination, filters, sorter) => {
        const { current, pageSize } = this.state;
        this.setState({ current: pageSize === pagination.pageSize ? pagination.current : 1, pageSize: pagination.pageSize })
    }

    GetRef = (ref) => {
        if (ref) {
            this.getRefForm = ref;
        }
    }

    handSearch = () => {
        // console.log(this.getRefForm, "this.getRefForm")
    }

    render() {
        const { dataSource, current, pageSize, selectData } = this.state;
        const { columns } = this.props;
        const dataTable = {
            dataSource: dataSource,
            columns: columns || [
                {
                    title: '搜索名称',
                    dataIndex: 'name',
                    key: 'name',
                    type: "Input",
                },
                {
                    title: '搜索key',
                    dataIndex: 'keyName',
                    key: 'keyName',
                    type: "Input",
                },
                {
                    title: '类型',
                    dataIndex: 'typeKey',
                    key: 'typeKey',
                    type: "Select",
                    selectList: [{ name: "输入框", key: "Input" }, { name: "下拉框", key: "Select" }]
                },
                {
                    title: '页面',
                    dataIndex: 'page',
                    key: 'page',
                    type: "Input",
                },

            ],
            rowKey: "id",
            rowSelectionFlag: true,
            operationList: [{
                title: 'operation',
                dataIndex: 'operation',
                key: 'operation',
                render: (text, record, index) => {
                    return (
                        <div>
                            <a onClick={this.handConfigDelete.bind(this, record, index)}>删除</a>
                        </div>
                    )
                }
            },],
            current: current,
            pageSize: pageSize,
            paginationP: true,
        }

        // console.log(_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'), "2222")

        return (


            <div>
                <div>
                    <PublicTable
                        {...dataTable}
                        dataFunction={this.dataFunction}
                        handInputChange={this.handInputChange}
                        handleSelectChange={this.handleSelectChange}
                        handClickAdd={this.handClickAdd}
                        handChagePage={this.handChagePage}
                    />
                </div>
                {/* <div>
                    <PublicForm selectData={selectData} GetRef={this.GetRef} />
                    <Button type="primary" onClick={this.handSearch}>查询</Button>
                </div> */}
            </div>
        )
    }
}

export default App;