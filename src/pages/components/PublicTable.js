import React from "react";
import { Table, Input, Select, Button } from "antd";
import _ from "loadsh";

const { Option } = Select;

class PublicTable extends React.Component {
    state = {
        selectedRowKeys: [],
        selectedData: [],
    }

    componentWillReceiveProps(nextProps) {
        const { selectedRowKeys } = nextProps;

        if (selectedRowKeys && selectedRowKeys !== this.state.selectedRowKeys) {
            this.setState({ selectedRowKeys: selectedRowKeys })
        }

    }

    handInputChange = (record, index, e) => {
        // console.log(record, index, e.target.value)
        if (this.props.handInputChange) {
            this.props.handInputChange(record, index, e.target.value)
        }
    }

    handleSelectChange = (record, index, key) => {
        // console.log(record, index, key, "record,index,key")
        if (this.props.handleSelectChange) {
            this.props.handleSelectChange(record, index, key)
        }
    }

    columnsType = (value, obj, index) => {
        if (obj.type === "Input") {
            return <Input value={value} onChange={this.handInputChange.bind(this, obj, index)} />

        }
        else if (obj.type === "Select") {
            return <Select style={{ width: "120px" }} onChange={this.handleSelectChange.bind(this, obj, index)}>
                {
                    obj.selectList && obj.selectList.map((item, index) => {
                        return (
                            <Option value={item.key}>{item.name}</Option>
                        )
                    })

                }
            </Select>
        }
    }

    columns = (data) => {
        const { operationList } = this.props;

        // console.log(data, "data")

        let dataList = _.map(data, item => ({
            ...item,
            render: (text, record, index) => <div>{this.columnsType(text, item, index)}</div>
        }))
        if (operationList) {
            dataList = dataList.concat(operationList)
        }

        return dataList;

    }

    handClickAdd = () => {
        if (this.props.handClickAdd) {
            this.props.handClickAdd()
        }
    }

    handChagePage = (pagination, filters, sorter) => {

        // console.log(pagination, filters, sorter, "pagination, filters, sorter")

        if (this.props.handChagePage) {
            this.props.handChagePage(pagination, filters, sorter)
        }

    }

    render() {
        const { dataSource, columns, rowSelectionFlag, rowKey, current, paginationP, pageSize } = this.props;


        const column = this.columns(columns);
        // console.log(column, "column")

        const { selectedRowKeys, selectedData } = this.state;
        const that = this;
        const rowSelection = {
            selectedRowKeys,
            onSelect: (record, selected) => {
                // console.log(record, selected)
                if (!selected) { // 去掉选中删除本条tradeId
                    const keys = _.filter(selectedRowKeys, key => key !== record.id);
                    const data = _.map(_.filter(selectedData, item => item.id !== record.id), item => ({
                        ...item,
                    }))
                    that.setState({ selectedRowKeys: keys, selectedData: data });
                    that.props.dataFunction(data, keys)

                } else {
                    const keys = [...selectedRowKeys, record.id];
                    const data = [record];
                    that.setState({ selectedRowKeys: [...new Set(keys)], selectedData: selectedData.concat(data) });
                    that.props.dataFunction(selectedData.concat(data), keys)
                }

            },
            onSelectAll(selected) {
                const currentKeys = _.map(dataSource, record => record.id);
                const dataList = dataSource;
                if (selected) {
                    const keys = [...selectedRowKeys, ...currentKeys];
                    that.setState({ selectedRowKeys: [...new Set(keys)], selectedData: dataSource });
                    that.props.dataFunction(dataSource, keys)
                } else {
                    const keys = _.filter(selectedRowKeys, item => _.indexOf(currentKeys, item) < 0);
                    const data = _.filter(selectedData, (item, index) => !dataList.some(itemD => itemD.id === item.id));
                    that.setState({ selectedRowKeys: keys, selectedData: data });
                    that.props.dataFunction(data, keys)

                    console.log(_.differenceBy(selectedData, dataList, 'id'), "2222")

                }
            },
        };
        // console.log(selectedData, "selectedData")
        // const dataK=[1,2,3,4,5,6,7];
        // const dataU=[2.,3,4,5];

        // console.log(_.pullAll(dataK,dataU),"dataK")

        const dataO=[1,2,3];

        const dataList=[{id:1,name:"1111"},{id:2,name:"2222"},{id:3,name:"3333"},{id:4,name:"444"},{id:5,name:"5555"},];

        const dataR=_.filter(dataList,(item,index)=>!dataO.some(itemD=>item.id===itemD));
        console.log(dataR,"dataR")

        return (
            <div>
                <div style={{ textAlign: "right", margin: "5px 0px" }}>
                    <Button type="primary" onClick={this.handClickAdd}>新增</Button>
                </div>
                <Table
                    dataSource={dataSource}
                    columns={column}
                    rowSelection={rowSelectionFlag ? rowSelection : false}
                    rowKey={rowKey}
                    onChange={this.handChagePage}
                    pagination={paginationP ? {
                        current: current,
                        pageSize: pageSize,
                        total: dataSource.length
                    } : false}
                />
            </div>
        )
    }
}

export default PublicTable;