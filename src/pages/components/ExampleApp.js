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
        data = {
            serachData: _.get(dataSearch, "state.selectData"),
            tableData: _.get(dataTable, "state.selectData"),
        };
        console.log(data, "data")
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
        const dataU = {
            "dataRcon": "rrr",
            "dataRcon.dataRcon1": "rrr1",
            "dataRcon.dataRcon2": "rrr2",

            "dataImport": "rrr",
            "dataImport.dataImport1": "rrr1",
            "dataImport.dataImport2": "rrr2",
            "dataImport.dataImport3": "rrr3",

            "dataAdd": "rrr",
            "dataAdd.dataImport1": "rrr1",
            "dataAdd.dataImport2": "rrr2",
            "dataAdd.dataImport3": "rrr3",

        };
        const dataT = _.map(dataU, (item, key, obj) => ({
            name: item,
            initialkey: key,
            key:key,
        }))

        const dataK = [];

        for (let i = 0; i < dataT.length; i++) {
            // console.log(dataT[i], dataT[i].key.indexOf("."))
            if (dataT[i].initialkey.indexOf(".") === -1) {
                dataK.push(dataT[i])
                // dataK.child = dataK.child || [];
                for (let j = 0; j < dataT.length; j++) {
                    // console.log(dataT[i], dataT[i].key.indexOf("."))
                    // if (dataT[i].key.indexOf(".") === -1) {
                    //     dataK.push(dataT[i])
                    // }

                    console.log(dataT[i], dataT[j], dataT[j].initialkey.indexOf(dataT[i].initialkey), "222")

                    if (dataT[i].initialkey !== dataT[j].initialkey && dataT[j].initialkey.indexOf(dataT[i].initialkey) === 0) {
                        console.log(dataK, dataT[i], dataT[j], "333")

                        dataK.map((item, index) => {
                            if (item.initialkey === dataT[i].initialkey) {

                                // 截取最后一个 > 前面的字符串
                                let index = dataT[j].initialkey.lastIndexOf(".")
                                let str = dataT[j].initialkey.substring(index+1, dataT[j].initialkey.length);
                                dataT[j].key=str;
                                console.log(str, "str")
                                console.log(item, "item", dataT[j].initialkey.substring("end", "."))
                                if (!item.child) {
                                    item.child = [dataT[j]]
                                } else {
                                    item.child.push(dataT[j])
                                }
                                //    item.child.push(dataT[j])
                                // item.child=item.child.concat([dataT[j]])
                            }
                        })

                    }
                }

            }
        }

        // dataT.map((item,index))

        console.log(dataT, dataK, "dataT")


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
                <div style={{ textAlign: "center" }}>
                    <Button type="primary" onClick={this.handClickSubmit}>保存</Button>
                </div>
            </div>
        )
    }
}

export default ExampleApp;