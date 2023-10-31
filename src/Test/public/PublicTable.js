import React from "react";

import { Table, Badge, Menu, Dropdown, Icon, Button, Input } from 'antd';
import _ from "loadsh";


import style from "./style.less";

const menu = (
    <Menu>
        <Menu.Item>Action 1</Menu.Item>
        <Menu.Item>Action 2</Menu.Item>
    </Menu>
);



const dataS = [];
for (let i = 0; i < 3; ++i) {
    dataS.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',

    });
};

const data = [];
for (let i = 0; i < 3; ++i) {
    data.push({
        key: i.toString(),
        name: 'Screem',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
        chidernList: [],
    });
};

class PublicTable extends React.Component {

    state = {
        expandedRowKeys: [],
        dataSource: data,
        dataList: [],
    }

    expandedRowRender = (record, index) => {
        const { dataList } = this.state;
        console.log(record, index, "record, index")
        const columns = [
            { title: 'Date', dataIndex: 'date', key: 'date' },
            { title: 'Name', dataIndex: 'name', key: 'name' },
            {
                title: 'Status',
                key: 'state',
                render: () => (
                    <span>
                        <Badge status="success" />
                        Finished
                    </span>
                ),
            },
            {
                title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum',
                render: (text, record, indexT) => {
                    return (
                        <Input defaultValue={text} onChange={this.handChangeSecond.bind(this, record, "upgradeNum", index, indexT)} />
                    )
                }
            },
            {
                title: 'Action',
                dataIndex: 'operation',
                key: 'operation',
                render: (text, record, indexT) => (
                    <span className="table-operation">
                        <a onClick={this.handClickDeleteSecond.bind(this, record, index, indexT)}>删除</a>
                        <a>Pause</a>
                        <a>Stop</a>
                        <Dropdown overlay={menu}>
                            <a>
                                More <Icon type="down" />
                            </a>
                        </Dropdown>
                    </span>
                ),
            },
        ];


        return <div>
            <div className={style.headerBoxButton}>
                <Button type="primary" onClick={this.handClickAddSecond.bind(this, index)}>新增</Button>
            </div>
            <Table columns={columns} dataSource={dataList} pagination={false} />
        </div>;
    };

    handChangeSecond = (record, type, index, indexT, e) => {
        console.log(record, type, index, indexT, e, "record, type, index, indexT,e");
        const { dataSource } = this.state;

        const data = _.map(dataSource, (item, indexD) => ({
            ...item,
            chidernList: index == indexD ? _.map(item.chidernList, (itemG, indexG) => ({
                ...itemG,
                [type]: indexG == indexT ? e.target.value : itemG[type]
            })) : item.chidernList
        }));
        this.setState({ dataSource: data, dataList: _.get(data[index], "chidernList") || [] });

    }

    handClickAddSecond = (index) => {
        const { dataSource } = this.state;
        console.log(index, "index");
        const data = _.map(dataSource, (item, indexT) => ({
            ...item,
            chidernList: index == indexT ? item.chidernList.concat([{ name: "二级", key: item.chidernList.length }]) : item.chidernList
        }));
        this.setState({ dataSource: data, dataList: _.get(data[index], "chidernList") || [] });
    }

    handClickDeleteSecond = (obj, index, indexT) => {
        const { dataSource } = this.state;
        const data =  _.map(dataSource,(item,indexR)=>({
            ...item,
            chidernList:index==indexR?_.map(_.filter(item.chidernList,(itemD,indexD)=>indexD!=indexT),itemD=>({
                ...itemD
            })):item.chidernList,
        }))
        this.setState({ dataSource: data, dataList: _.get(data[index], "chidernList") || [] });
    }

    columns = () => {
        const columnsList = [
            {
                title: 'Name', dataIndex: 'name', key: 'name',
                render: (text, record, index) => {
                    return (
                        <Input defaultValue={text} onChange={this.handChange.bind(this, record, "name", index)} />
                    )
                }
            },
            { title: 'Platform', dataIndex: 'platform', key: 'platform' },
            { title: 'Version', dataIndex: 'version', key: 'version' },
            { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
            { title: 'Creator', dataIndex: 'creator', key: 'creator' },
            { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
            {
                title: 'Action', key: 'operation', render: (text, record, index) => <div>
                    <a onClick={this.handClickDelete.bind(this, record, index)}>删除</a>
                    <a>Publish</a>
                </div>
            },
        ];
        return columnsList;
    };

    handClickDelete = (obj, index) => {
        const { dataSource } = this.state;
        const data = _.map(_.filter(dataSource, (item, indexT) => index != indexT), item => ({
            ...item,
        }));
        this.setState({ dataSource: data });
    }

    handChange = (record, type, index, e) => {
        const { dataSource } = this.state;
        console.log(record, type, index, e, "e")
        const data = _.map(dataSource, (item, indexT) => ({
            ...item,
            [type]: index == indexT ? e.target.value : item[type]
        }));
        this.setState({ dataSource: data });
    }


    onExpandedRowsChange = (expandedRows) => {
        console.log(expandedRows, "expandedRows")

    };

    onExpand = (expanded, record) => {
        console.log(expanded, record, "expanded, record")
        this.setState({
            expandedRowKeys: expanded ? [record.key] : [],
            dataList: expanded ? record.chidernList : []
        })
    }

    handClickAddFirst = () => {
        const { dataSource } = this.state;
        const dataNew = [
            {
                name: "一级",
                key: dataSource.length,
            }
        ];
        this.setState({ dataSource: dataSource.concat(dataNew) })
    }

    render() {

        const { expandedRowKeys, dataSource } = this.state;
        console.log(dataSource, "dataSource")



        return (
            <div>
                <div className={style.headerBoxButton}>
                    <Button type="primary" onClick={this.handClickAddFirst}>新增</Button>
                </div>
                <Table
                    className="components-table-demo-nested"
                    columns={this.columns()}
                    expandedRowRender={this.expandedRowRender}
                    dataSource={dataSource}
                    onExpandedRowsChange={this.onExpandedRowsChange}
                    expandRowByClick={false}
                    onExpand={this.onExpand}
                    expandedRowKeys={expandedRowKeys}
                    rowKey={"key"}
                    pagination={false}
                />
            </div>
        )
    }
}

export default PublicTable;