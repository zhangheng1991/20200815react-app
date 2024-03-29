import React from "react";

import { Form, Input, Icon, Button, Upload, Table ,message} from 'antd';
import _ from "loadsh";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import jschardet from "jschardet";
import "react-datasheet/lib/react-datasheet.css";
import ReactData from "react-datasheet";

import "./style.less";
import style from "./style.less";
let id = 0;

class DynamicFieldSet extends React.Component {
    state = {
        fileList: [],
        grid: [],
        position: {},
        dataSource:[],
    }
    componentDidMount() {
        const { oNref } = this.props;
        if (oNref) {
            this.props.oNref(this)
        };
        document.onclick = function(event) {
            console.log(event,"event")
            console.log(document.getElementsByClassName("ant-input"),"2222");
            const data=document.getElementsByClassName("ant-input");
            console.log(data,"data");
            // data.map((item)=>{
            //     console.log(item,"item")
            // })
            var e = event || window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == 27) {
                alert("按 Esc")
            }
            if (e && e.keyCode == 32) {
                alert("按空格")
            }
            if (e && e.keyCode == 13) {
                alert("按回车")
            }
        };
    }
    remove = k => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    };

    add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        console.log(keys, "keys")
        console.log(_.max(keys))
        let nu = _.max(keys) + 1;
        const nextKeys = keys.concat(nu);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    };

    handleSubmit = e => {
        console.log(document.getElementsByClassName("dataSheet"),"2222");
        console.log(document.getElementById("dataSheet"),"3333");

        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { keys, names } = values;
                this.props.handleSubmitP(values)
                console.log('Received values of form: ', values);
                console.log('Merged values:', keys.map(key => names[key]));
                return values;
            }
        });
    };

    getJson = (arr) => {
        const data = _.map(arr, item => {
            return _.map(item, o => {
                return { value: o }
            })
        })
        return data;
    }

    checkEncoding = (base64Str) => {
        let encording = jschardet.detect(base64Str).encoding;
        if (encording === "windows-1252") {
            encording = "ANSI";
        }
        return encording;
    }

    updateDate = (result) => {
        const dataT = _.take(result.data, 5);//限制展示数据的长度
        const data = _.map(dataT, item => {
            return _.map(item, o => {
                return { value: 0, readOnly: true }
            })
        })
    }

    beforeUpload = (file, fileList) => {
        console.log(file, fileList)
        console.log(XLSX, "XLSX")
        const { current } = this.state;
        const that = this;
        const filename = _.split(file.name, '.');
        const accept = filename[filename.length - 1];
        console.log(accept, "accept")
        if (accept !== "xlsx" && accept !== "xls" && accept !== "csv") {
            message.error("请上传Excel文件或者CVS文件");
            return;
        }
        const reader = new FileReader();
        const fi = fileList[0];
        reader.onload = function (e) {
            const data = e.target.result;
            if (accept === "csv") {
                const encoding = that.checkEncoding(data);
                Papa.parse(file, {
                    header: false,
                    encoding,
                    complete: that.updateDate
                })
            } else {
                console.log(XLSX, "XLSX")
                const workbook = XLSX.read(data, {
                    type: "binary",
                });
                //假设我们的数据在第一个标签
                const first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
                //XLSX自带了一个工具把导入的数据转化成json
                const jsonArr = XLSX.utils.sheet_to_json(first_worksheet, {
                    header: 1,
                    defval: "",
                });
                //通过自定义的方法处理json ，比如加入state来展示
                const handleImportJson = that.getJson(_.take(jsonArr, jsonArr.length))
                that.setState({
                    grid: handleImportJson,
                    sheetButton: workbook.SheetNames,
                    currentSheet: workbook.SheetNames[0],
                    sheets: workbook.SheetNames,
                    flieType: accept === ('xlsx' || 'xls' || 'XLSX' || 'XLS') ? 'excel' : accept
                })
            }

        }
        reader.readAsBinaryString(fi);
        this.setState({
            fileList: [file],
            file,
            position: {}
        })
        return false
    }

    valueRenderer = (cell) => {
        cell.readOnly = true;
        return cell.value;
    }

    dataRenderer = (cell) => {
        console.log(cell)
    }

    onCellsChanged = (changes) => {
        console.log(changes, "changes")
        const { grid } = this.state;
        const gridList = grid;
        changes.forEach(({ cell, row, col, value }) => {
            gridList[row][col] = { ...grid[row][col], value }
        })
        this.setState({ grid: gridList })
    }


    handleCopy = ({ event, dataRenderer, valueRenderer, data, start, end, range }) => {
        console.log(event, dataRenderer, valueRenderer, data, start, end, range)
    }

    onContextMenu = (e, cell, i, j) => (cell.readOnly ? e.preventDefault() : null)

    onSelect = (query) => {
        console.log(query, "onSelect")
        this.setState({ position: query })
    }

    parsePaste = (query) => {
        console.log(query, "parsePaste")
    }

    onMouseup = () => {

    }
    //生成表格
    handTables=(isHeader)=>{
         const {position,grid,finderType,dataSource}=this.state;
         if(JSON.stringify(position) !=='{}'){
                        const start= _.get(position,"start");
                        const end =_.get(position,"end");
                        const startCol=_.get(start,'j');
                        const endCol =_.get(end,"j");
                        let originaldDataSource=dataSource;
                        if(isHeader==="Y"){
                            for(let i=startCol;i<=endCol;i++){
                                if( _.find(dataSource,o=>o.label===_.get(grid[_.get(start,'i')][i],'value'))){
                                       message.error("lable值不能重复");
                                       return
                                }
                                originaldDataSource=_.concat(originaldDataSource,{
                                    label:_.get(grid[_.get(start,'i')][i],"value"),
                                    index:i,
                                    type:"string",
                                    name:_.get(grid[_.get(start,'i')][i],"value"),
                                    processorConfigList:[],
                                    display:"0",
                                })
                             }
                             this.setState({
                                 startLine:_.get(start,'i'),
                                 flag:_.get(grid[_.get(start,"i")][startCol],"value")
                             })
                        }else{
                            for(let i=startCol;i<=endCol;i++){
                                originaldDataSource=_.concat(originaldDataSource,{
                                    label:"",
                                    index:i,
                                    type:"staring",
                                    name:"",
                                    processorConfigList:[],
                                    display:"0",
                                })
                            }
                            this.setState({
                                startLine:_.get(start,'i'),
                                flag:_.get(grid[_.get(start,"i")][startCol],"value")
                            })
                        }
                        this.setState({
                            dataSource:originaldDataSource,
                            position:{}
                        })

         }else{
             message.error("请选择要设置的表头在生成表格")
         }
    }

    columns=[
        {
            title:"label",
            dataIndex:"label",
            key:"label"
        },
        {
            title:"name",
            dataIndex:"name",
            key:"name"
        },
        {
            title:"type",
            dataIndex:"type",
            key:"type"
        },
        {
            title:"Index",
            dataIndex:"index",
            key:"index"
        },
    ];

    handCliclk=()=>{
        console.log("Ddddd")
    }

    render() {
        const { clientFormRef } = this.props;
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const { dataSource}=this.state;
        console.log(dataSource,"dataSource")
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 18 },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        const keysList = [0, 1, 2, 3];
        let nu = _.max(keysList);
        getFieldDecorator('keys', { initialValue: [nu] });
        const keys = getFieldValue('keys');
        const dataList = {
            PassengersList: ["1"],
            addresList: ["xin"],
        }
        const formItems = keys.map((k, index) => (
            <div className={`${style.FormItemBox}`} key={k}>
                <Form.Item
                    // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    {...formItemLayout}
                    label={'Passengers'}
                    required={false}
                    key={`names[${k}]`}
                // style={{ display: "block" }}
                >
                    {getFieldDecorator(`names[${k}]`, {
                        // validateTrigger: ['onChange', 'onBlur'],
                        initialValue: dataList.PassengersList[index] && dataList.PassengersList[index] || " ",
                        rules: [

                            {
                                required: true,
                                whitespace: true,
                                message: "Please input passenger",
                            },
                            { type: "string" },
                            {
                                max: 10,
                                message: "Please input passenge长度不能超过10",
                            },
                            // {
                            //     whitespace:true,
                            //     message: "不能输入空格",
                            // }
                        ],
                    })(<Input placeholder="passenger name" style={{ width: '90%', marginRight: 8 }} />)}
                    {/* {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            onClick={() => this.remove(k)}
                        />
                    ) : null} */}
                </Form.Item>
                <Form.Item
                    // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    {...formItemLayout}
                    label={'addres'}
                    required={false}
                    key={`addres[${k}]`}
                // style={{ display: "block" }}
                >
                    {getFieldDecorator(`addres[${k}]`, {
                        // validateTrigger: ['onChange', 'onBlur'],
                        initialValue: dataList.addresList[index] && dataList.addresList[index] || " ",
                        rules: [
                            {
                                required: true,
                                whitespace: true,
                                message: "Please input addres",
                            },
                        ],
                    })(<Input placeholder="addres" style={{ width: '90%', marginRight: 0 }} />)}
                </Form.Item>
                <Form.Item
                    // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    {...formItemLayout}
                    label={'email'}
                    required={false}
                    key={`email[${k}]`}
                // style={{ display: "block" }}
                >
                    {getFieldDecorator(`email[${k}]`, {
                        // validateTrigger: ['onChange', 'onBlur'],
                        rules: [
                            {
                                required: true,
                                whitespace: true,
                                message: "Please input email",
                            },
                        ],
                    })(<Input placeholder="email" style={{ width: '90%', marginRight: 0 }} />)}
                </Form.Item>
                <Form.Item
                    // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    {...formItemLayout}
                    label={'home'}
                    required={false}
                    key={`home[${k}]`}
                // style={{ display: "block" }} 
                >
                    {getFieldDecorator(`home[${k}]`, {
                        // validateTrigger: ['onChange', 'onBlur'],
                        rules: [
                            {
                                required: true,
                                whitespace: true,
                                message: "Please input home",
                            },
                        ],
                    })(<Input placeholder="home" style={{ width: '90%', marginRight: 0 }} />)}
                </Form.Item>
                <Form.Item
                    // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    {...formItemLayout}
                    label={'city'}
                    required={false}
                    key={`city[${k}]`}
                // style={{ display: "block" }}
                >
                    {getFieldDecorator(`city[${k}]`, {
                        // validateTrigger: ['onChange', 'onBlur'],
                        rules: [
                            {
                                required: true,
                                whitespace: true,
                                message: "Please input city",
                            },
                        ],
                    })(<Input placeholder="city" style={{ width: '90%', marginLeft: 8 }} />)}
                    {/* {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            onClick={() => this.remove(k)}
                        />
                    ) : null} */}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={'pages'}
                    required={false}
                    key={`age[${k}]`}
                // style={{ display: "block" }}
                >
                    {getFieldDecorator(`age[${k}]`, {
                        // validateTrigger: ['onChange', 'onBlur'],
                        rules: [
                            {
                                required: true,
                                whitespace: true,
                                message: "Please input age",
                            },
                        ],
                    })(<Input placeholder="age" style={{ width: '90%', marginRight: 8 }} />)}

                </Form.Item>
                <div className={`${style.FormItemIcon}`}>
                    <Icon
                        className="dynamic-add-button"
                        type="plus"
                        onClick={this.add}
                    />
                    {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            onClick={() => this.remove(k)}
                        />
                    ) : null}

                </div>

            </div>
        ));
        const height = document.body.clientHeight;
        // console.log(height, "height")
        // console.log(this.state.grid)
        const propsT = {
            name: 'file',
            beforeUpload: this.beforeUpload,
            fileList: this.state.fileList,
            // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            // headers: {
            //   authorization: 'authorization-text',
            // },
            // onChange(info) {
            //   if (info.file.status !== 'uploading') {
            //     console.log(info.file, info.fileList);
            //   }
            //   if (info.file.status === 'done') {
            //     message.success(`${info.file.name} file uploaded successfully`);
            //   } else if (info.file.status === 'error') {
            //     message.error(`${info.file.name} file upload failed.`);
            //   }
            // },
        };
        
      
        return (
            <div style={{ width: "100%", margin: "0 auto" }}>
                <Upload {...propsT}>
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
                <div className={`${style.dataSheet}`} id="dataSheet" onKeyDown={this.handCliclk}>
                    <ReactData
                        data={this.state.grid}
                        valueRenderer={this.valueRenderer}
                        dataRenderer={this.dataRenderer}
                        onContextMenu={this.onContextMenu}
                        onCellsChanged={this.onCellsChanged}
                        handleCopy={this.handleCopy}
                        onSelect={this.onSelect}
                        parsePaste={this.parsePaste}
                        onMouseup={this.onMouseup}
                        selected={this.state.position}
                    />
                </div>
                <Button type="primary" onClick={this.handTables.bind(this,"Y")}>
                    设置表头
                </Button>
                <Button type="primary" onClick={this.handTables.bind(this,"N")}>
                    设置索引
                </Button>
                <Table pagination={false} rowKey="index"  columns={this.columns} dataSource={dataSource}/>
                <Form
                    onSubmit={this.handleSubmit}
                    ref={clientFormRef}>
                    {formItems}

                    {/* <Form.Item
                    {...formItemLayout}
                    // {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label='pagesList'
                    required={false}
                    ref={ref=>this.name=ref}
                    // key={`age[${k}]`}
                // style={{ display: "block" }}
                >
                    {getFieldDecorator(`pagesList`, {
                        // validateTrigger: ['onChange', 'onBlur'],
                        rules: [
                            {
                                required: true,
                                whitespace: true,
                                message: "Please input pagesList",
                            },
                        ],
                    })(<Input placeholder="pagesList" style={{ width: '90%', marginRight: 8 }} />)}

                </Form.Item> */}
                    {/* <Form.Item >
                        <Button type="dashed" onClick={this.add} style={{ width: '200px' }}>
                            <Icon type="plus" /> Add field
                        </Button>
                    </Form.Item> */}
                    <Form.Item {...formItemLayoutWithOutLabel}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}


export default Form.create({ name: 'dynamic_form_item' })(DynamicFieldSet);