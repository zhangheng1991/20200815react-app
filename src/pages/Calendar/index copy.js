import React from "react";
import { Calendar, Alert, Input, Table, Icon, Button, Form } from 'antd';
import moment from 'moment';
import _ from "loadsh";
import style from "./style.less";



const { TextArea } = Input;


const dataH = [];

for (let i = 1; i < 101; i++) {

    dataH.push({
        key: i,
        name: `李四${i}`,

    })
}

class CalendarCom extends React.Component {

    state = {
        value: moment(moment().format("YYYYMMDD")),
        selectedValue: moment(moment().format("YYYYMMDD")),
        data: dataH,
        dataSource: [{ id: moment().format("YYYYMM HH:mm:ssss") }],
        TextAreaValue: "",
        current: 1,
        pagination: { current: 1, pageSize: 10 }
    };

    onSelect = value => {
        this.setState({
            value,
            selectedValue: value,
        });
    };

    onPanelChange = value => {
        this.setState({ value });
    };


    dataSource = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ];

    columns = () => {
        const { dataSource, pagination } = this.state;
        const total = (pagination.current - 1) * 10;
        const { getFieldDecorator } = this.props.form;
        // console.log(getFieldDecorator, "getFieldDecorator")
        var str = '1a2b3c4d5e6f7';

        const result = str.replace(/[0-9]/g, '');//第二个参数为空("")
        const resultU=str.replace(/[^\d]/g,'');
        console.log(resultU,"resultU")
        console.log(result, "result");

        const objData = {
            name0: "11",
            name1: "22",
            name2: "33",
            age0: "44",
            age1: "55",
            age2: "66",
            address0: "77",
            address1: "88",
            address2: "99",
        };

        const data=_.map(objData,(item,key)=>({
            [key.replace(/[0-9]/g, '')]:item,
            keyId:key.replace(/[^\d]/g,''),
        }));
        console.log(data,"data")

        const column = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                render: (text, record, index) => {
                    const indexF = total + index;
                    console.log(indexF,"indexF")
                    return (
                        // <div>
                        //     <Input defaultValue={text} onChange={this.handClickChange.bind(this, record, index, "name")} />
                        // </div>
                        <Form.Item >
                            {getFieldDecorator(`name${indexF}`,
                                {
                                    initialValue: text,
                                    rules: [{ type: 'string', required: true, message: 'Please input name!' }],
                                })(<Input
                                    // defaultValue={text} 
                                    onChange={this.handClickChange.bind(this, record, index, "name")} />)}
                        </Form.Item>
                    )
                }
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                render: (text, record, index) => {
                    const indexF = total + index;
                    return (
                        // <div>
                        //     <Input defaultValue={text} onChange={this.handClickChange.bind(this, record, index, "age")} />
                        // </div>
                        <Form.Item >
                            {getFieldDecorator(`age${indexF}`,
                                {
                                    initialValue: text,
                                    rules: [{ type: 'string', required: true, message: 'Please input age!' }],
                                })(<Input
                                    // defaultValue={text}
                                    onChange={this.handClickChange.bind(this, record, index, "age")} />)}
                        </Form.Item>
                    )
                }
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                render: (text, record, index) => {
                    const indexF = total + index;
                    return (
                        // <div>
                        //     <Input defaultValue={text} onChange={this.handClickChange.bind(this, record, index, "address")} />
                        // </div>
                        <Form.Item >
                            {getFieldDecorator(`address${indexF}`,
                                {
                                    initialValue: text,
                                    rules: [{ type: 'string', required: true, message: 'Please input address!' }],
                                })(<Input
                                    // defaultValue={text}
                                    onChange={this.handClickChange.bind(this, record, index, "address")} />)}
                        </Form.Item>
                    )
                }
            },
            {
                title: "操作",
                dataIndex: "operate",
                key: "operate",
                render: (text, record, index) => {
                    return (
                        <div>
                            <Icon type="plus" onClick={this.handClickAdd} />
                            <Icon type="minus" onClick={this.handClickDelete.bind(this, record, index)} />
                        </div>
                    )
                }
            }
        ];
        return column;
    }

    handClickDelete = (record, index) => {
        const { dataSource } = this.state;
        const data = _.map(_.filter(dataSource, (item, indexD) => item.id != record.id), item => ({
            ...item,
        }));
        this.setState({ dataSource: data })
    }


    handClickAdd = () => {
        console.log(Math.round(Math.random() * 100000), "2222")
        const { dataSource } = this.state;
        const dataNew = [{ id: moment().format("YYYYDDMM HH:mm:ssss") + Math.round(Math.random() * 100000) + dataSource.length, name: "", age: "", address: "" }];

        this.setState({ dataSource: dataNew.concat(dataSource) })
    }

    handClickChange = (record, index, type, e) => {
        const { dataSource } = this.state;

        const data = _.map(dataSource, (item, indexD) => ({
            ...item,
            [type]: index == indexD ? e.target.value : item[type],
        }))

        setTimeout(() => {
            this.setState({ dataSource: data });
        }, 10)

    }

    handClick = (e) => {

        console.log(e.target.value, "#333333")
        this.setState({ TextAreaValue: e.target.value })

        var regex = /(?<=\{)(.+?)(?=\})/g;;

        console.log(e.target.value.match(regex), "regex")
        console.log(_.uniq(e.target.value.match(regex)), "kkkkkkk");
        const dataString = e.target.value ? e.target.value.match(regex) : [];

        const data = _.map(dataString, (item, index) => ({
            name: item,
            id: moment().format("YYYYDDMM HH:mm:ssss") + index + Math.round(Math.random() * 100000),
            age: "",
            address: ""
        }))

        this.setState({ dataSource: data })
    }

    handClickPage = (pagination) => {
        console.log(pagination, "pagin")
        this.setState({ current: pagination.current, pagination: pagination })
    }

    handClickSubmit = () => {
        const { dataSource, TextAreaValue } = this.state;
        console.log(this.props.form, "Dddd")
        console.log(dataSource, TextAreaValue, "dataSource,TextAreaValue")

        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            console.log(fieldsValue, "fieldsValue")

            console.log(this.props.form.getFieldsValue())


        });

    }

    render() {

        const { value, selectedValue, data, dataSource, TextAreaValue, current } = this.state;

        // const str = 'HelloWorldlklkasdasdWorldffff';
        const str = 'HelloWorld"#{dlkl}"ka{sdasdWorld}rldf"#{dlkl}"fff';
        const pattern = "World";
        const rr = `select * from abacus_position where book ="#{book}" and department ="#{department}"or book ="#book"`;
        var regex = /(?<=\{)(.+?)(?=\})/g;;

        // console.log(rr.match(regex), "regex")


        // const result = str.match(pattern);
        // console.log(str.match(/"(\S*)"/), "result");
        // console.log(str.split("World"))

        var s = "HelloWorldlklkasdasdWorldffff";
        var a = s.indexOf("World");
        var b = s.indexOf("/", a);
        var c = s.substring(a, b);
        var d = s.slice(a, b);

        // console.log(a,"a")
        // console.log(_.split(str, 'World'))
        // _.split('a-b-c', '-', 2);

        var str2 = "abcdefgname='test'sddfhskshjsfsjdfps";
        var reg = /name='((\w|-|\s)+)/ig;
        // console.log(this.columns,"this.columns")
        console.log(dataSource, "dataSource")
        return (
            <div>
                <div>
                    <div className={style.sqlBox}>
                        <div className={style.sqlBoxContent}>
                            <span>sql</span>
                            <TextArea rows={10} onChange={this.handClick} value={TextAreaValue} />
                        </div>
                        <div className={style.sqlBoxContent}>
                            <div className={style.sqlBoxContentTable}>
                                <div style={{ textAlign: "right", margin: "10px 0" }}>
                                    <Button type="primary" onClick={this.handClickAdd}>新增</Button>
                                </div>
                                <div >
                                    <Table dataSource={dataSource} columns={this.columns()}
                                        rowKey={(record, index) => record.id}
                                        // rowKey="id"
                                        pagination={{ pageSize: 10, current: current }}
                                        onChange={this.handClickPage}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div style={{ textAlign: "right", margin: "10px 0" }}>
                        <Button type="primary" onClick={this.handClickSubmit}>提交</Button>
                    </div>
                </div>
                <div className={style.contentTex}>
                    {
                        data.map((item, index) => {
                            return (
                                <div className={style.contentBox} key={item.key}> <div title={item.name}>{item.name}</div></div>
                            )
                        })
                    }
                </div>
                <div className={style.Calendar}>
                    <Alert
                        message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
                    />
                    <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
                </div>
            </div>
        )
    }
}

export default Form.create()(CalendarCom);