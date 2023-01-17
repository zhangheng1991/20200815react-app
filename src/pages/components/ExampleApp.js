import React from "react";
import { Button } from "antd";
import _ from "loadsh";
import AppComponent from "./App";

class ExampleApp extends React.Component {

    state = {
        disabled: false,

    }


    RefFunctionSearch = (ref) => {
        if (ref) {
            this.FunctionSearch = ref;
        }
    }


    RefFunctionTable = (ref) => {
        if (ref) {
            this.FunctionTable = ref;
        }
    }

    handClickSubmit = () => {
        let data = {};
        const dataTable = this.FunctionTable;
        const dataSearch = this.FunctionSearch;
        // console.log(dataTable, dataSearch)
        data={
            serachData:_.get(dataSearch,"state.selectData"),
            tableData:_.get(dataTable,"state.selectData"),
        };
        // console.log(data,"data")
    }

    render() {

        const dataColumn = {
            columnsSearch: [
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
            columnsTable: [
                {
                    title: '表格标题名称',
                    dataIndex: 'name',
                    key: 'name',
                    type: "Input",
                },
                {
                    title: '表格标题key',
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
        }

        return (
            <div>
                <div style={{ display: "flex" }}>
                    <div style={{ padding: "0px 10px" }}>
                        <AppComponent columns={dataColumn.columnsSearch} refProps={this.RefFunctionSearch} />
                    </div>
                    <div style={{ padding: "0px 10px" }}>
                        <AppComponent columns={dataColumn.columnsTable} refProps={this.RefFunctionTable} />
                    </div>

                </div>
                <div style={{textAlign:"center"}}>
                    <Button type="primary" onClick={this.handClickSubmit}>保存</Button>
                </div>
            </div>
        )
    }
}

export default ExampleApp;