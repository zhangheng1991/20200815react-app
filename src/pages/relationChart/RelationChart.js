import React from "react";
import { Form, DatePicker, TimePicker, Button, Input, Select, Collapse, Icon } from 'antd';
import moment from "moment";
import RelationChartCom from "../components/realtionChart/index";
import _ from "loadsh";
import style from "./style.less";
import "./style.less";
const { MonthPicker, RangePicker } = DatePicker;
const { Panel } = Collapse;
const { Option } = Select;

const { TextArea } = Input;
class RelationChart extends React.Component {

    state = {
        dataCollapse: [{}],
        activeKey: "0",
        time: moment(),
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.form.validateFields((err, fieldsValue) => {
            if (err) {
                return;
            }
            console.log(fieldsValue, "fieldsValue")

            console.log(this.props.form.getFieldsValue())

            // Should format date value before submit.
            // const rangeValue = fieldsValue['range-picker'];
            // const rangeTimeValue = fieldsValue['range-time-picker'];
            // const values = {
            //     ...fieldsValue,
            //     'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
            //     'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
            //     'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
            //     'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
            //     'range-time-picker': [
            //         rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
            //         rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
            //     ],
            //     'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
            // };
            // console.log('Received values of form: ', values);
        });
    };

    callback = (key) => {
        console.log(key);
        this.setState({ activeKey: key })
    }

    handClickAdd = (e) => {
        const { dataCollapse } = this.state;
        const data = [{}];
        this.setState({ dataCollapse: dataCollapse.concat(data) });
        e.stopPropagation()
        setTimeout(() => {
            this.props.form.setFieldsValue({ "Collapse": dataCollapse.concat(data) })
        }, 100)
    }

    handClickDelete = (e, indexT) => {
        const { dataCollapse } = this.state;
        const data = _.map(_.filter(dataCollapse, (item, index) => index !== indexT), item => ({
            ...item,
        }))
        this.setState({ dataCollapse: data })
        setTimeout(() => {
            // this.props.form.setFieldsValue({ "Collapse": data })
        }, 100)
        this.props.form.setFieldsValue({ "Collapse": data })
        e.stopPropagation()
    }

    handCliclChange = (obj, index, type, e, value) => {

        console.log(obj, index, type, e, value, "obj,index,type,e,value")
        const { dataCollapse } = this.state;
        const data = _.map(dataCollapse, (item, indexT) => {
            return Object.assign(
                {},
                item,
                index === indexT ? { [type]: e.target.value } : { [type]: item[type] }
            )
        })
        this.setState({ dataCollapse: data });
        console.log(data, "data")
        console.log(this.props, "ddd")
        setTimeout(() => {
            this.props.form.setFieldsValue({ "Collapse": data })
        }, 100)
        // this.props.form.setFieldsValue({ "Collapse": data })
    }


    handleChange(obj, index, type, value) {
        console.log(obj, index, type, value, `selected ${value}`);

        const { dataCollapse } = this.state;
        const data = _.map(dataCollapse, (item, indexT) => {
            return Object.assign(
                {},
                item,
                index === indexT ? { [type]: value } : { [type]: item[type] }
            )
        })
        this.setState({ dataCollapse: data });
        // console.log(data, "data")
        // console.log(this.props, "ddd")
        this.props.form.setFieldsValue({ "Collapse": data })
        // setTimeout(() => {
        //     this.props.form.setFieldsValue({ "Collapse": data })
        // }, 0)

    }

    componentDidMount() {
        // var wrapper = document.getElementById('wrapper');
        // var content = document.getElementById('content');
        // this.intervalId = setInterval(this.scroll, 2000);
        // this.timeID = setInterval(this.time, 1000);
    }


    scroll = () => {
        var wrapper = document.getElementById('wrapper');
        var content = document.getElementById('content');
        var firstChild = content.children[0];
        content.removeChild(firstChild);
        content.appendChild(firstChild);
    }

    componentWillUnmount() {
        window.clearInterval(this.timeID)
        window.clearInterval(this.intervalId)
    }

    time = () => {
        this.setState({ time: moment() })
    }

    render() {

        const relationChartObj = {
            id: "relationChartObj1",
            height: "800px",
            data: {
                nodes: [

                    {
                        id: 'root',
                        text: 'Root',
                        endpoints: [{
                            id: 'root-1',
                            // orientation: [0, 0],
                            // pos: [0.5, 1],
                            color: 'system-green',
                            typeFlag: "end",
                        }]
                    },
                    {
                        id: 'test',
                        text: 'Test',
                        endpoints: [
                            {
                                id: 'test-1',
                                // orientation: [0, -1],
                                // pos: [0.5, 0],
                                color: 'system-green',
                                typeFlag: "start",
                            },
                            {
                                id: 'test-2',
                                // orientation: [0, 0],
                                // pos: [0.2, 0.9],
                                color: 'system-green',
                                content: "222",
                                typeFlag: "normal",
                                data: [
                                    {
                                        id: "111",
                                        name: "111",
                                    },
                                    {
                                        id: "222",
                                        name: "222",
                                    },
                                ]
                            },

                            {
                                id: 'test-3',
                                // orientation: [0, 0],
                                // pos: [0.8, 0.9],
                                color: 'system-green',
                                content: "222",
                                typeFlag: "normal",
                                data: [
                                    {
                                        id: "333",
                                        name: "333",
                                    },
                                    {
                                        id: "444",
                                        name: "444",
                                    },
                                ]
                            },
                            {
                                id: 'test-4',
                                // orientation: [0, 0],
                                // pos: [0.5, 1],
                                color: 'system-green',
                                typeFlag: "down",
                            },
                        ]
                    },
                    {
                        id: 'title',
                        text: 'Title',
                        endpoints: [{
                            id: 'title-1',
                            // orientation: [0, -1],
                            // pos: [0.5, 0],
                            color: 'system-green',
                            typeFlag: "start",
                        }, {
                            id: 'title-2',
                            // orientation: [0, 0],
                            // pos: [0.2, 0.9],
                            color: 'system-green',
                            typeFlag: "normal",
                            content: "555",
                            data: [
                                {
                                    id: "555",
                                    name: "555",
                                },
                                {
                                    id: "666",
                                    name: "666",
                                },
                            ]
                        },
                        {
                            id: 'title-3',
                            // orientation: [0, 0],
                            // pos: [0.8, 0.9],
                            color: 'system-green',
                            typeFlag: "normal",
                            content: "777",
                            data: [
                                {
                                    id: "888",
                                    name: "888",
                                },
                                {
                                    id: "999",
                                    name: "999",
                                },
                            ]
                        },
                        {
                            id: 'title-4',
                            // orientation: [0, 0],
                            // pos: [0.8, 0.9],
                            color: 'system-green',
                            typeFlag: "down",

                        }
                        ]
                    },
                    {
                        id: 'txt',
                        text: 'Txt',
                        endpoints: [{
                            id: 'txt-1',
                            // orientation: [0, -1],
                            // pos: [0.5, 0],
                            color: 'system-green',
                            typeFlag: "start",
                        },
                        {
                            id: 'txt-2',
                            // orientation: [0, 0],
                            // pos: [0.2, 0.9],
                            color: 'system-green',
                            typeFlag: "normal",
                            content: "555",
                            data: [
                                {
                                    id: "555",
                                    name: "555",
                                },
                                {
                                    id: "666",
                                    name: "666",
                                },
                            ]
                        },
                        {
                            id: 'txt-3',
                            // orientation: [0, 0],
                            // pos: [0.8, 0.9],
                            color: 'system-green',
                            typeFlag: "normal",
                            content: "555",
                            data: [
                                {
                                    id: "555",
                                    name: "555",
                                },
                                {
                                    id: "666",
                                    name: "666",
                                },
                            ]
                        },
                        {
                            id: 'txt-5',
                            // orientation: [0, 0],
                            // pos: [0.8, 0.9],
                            color: 'system-green',
                            typeFlag: "normal",
                            content: "555",
                            data: [
                                {
                                    id: "555",
                                    name: "555",
                                },
                                {
                                    id: "666",
                                    name: "666",
                                },
                            ]
                        },
                        {
                            id: 'txt-6',
                            // orientation: [0, 0],
                            // pos: [0.8, 0.9],
                            color: 'system-green',
                            typeFlag: "normal",
                            content: "555",
                            data: [
                                {
                                    id: "555",
                                    name: "555",
                                },
                                {
                                    id: "666",
                                    name: "666",
                                },
                            ]
                        },
                        {
                            id: 'txt-4',
                            // orientation: [0, 0],
                            // pos: [0.5, 1],
                            color: 'system-green',
                            typeFlag: "down",
                        }
                        ]
                    },
                    {
                        id: 'fly',
                        text: 'Fly',
                        endpoints: [{
                            id: 'fly-1',
                            // orientation: [0, -1],
                            // pos: [0.5, 1],
                            color: 'system-green',
                            typeFlag: "start",
                        }]
                    }],

                edges: [
                    {
                        source: 'root-1',
                        target: 'test-1',
                        sourceNode: 'root',
                        targetNode: 'test',
                        type: 'endpoint',

                    },
                    {
                        source: 'root-1',
                        target: 'txt-1',
                        sourceNode: 'root',
                        targetNode: 'txt',
                        type: 'endpoint',

                    },
                    {
                        source: 'test-3',
                        target: 'title-1',
                        sourceNode: 'test',
                        targetNode: 'title',
                        type: 'endpoint',

                    },
                    {
                        source: 'txt-2',
                        target: 'title-1',
                        sourceNode: 'txt',
                        targetNode: 'title',
                        type: 'endpoint',

                    },
                    {
                        source: 'title-4',
                        target: 'fly-1',
                        sourceNode: 'title',
                        targetNode: 'fly',
                        type: 'endpoint',

                    }
                ]
            },
        }
        const widthObj = {
            width: "50%",
            left: "30%"
        }

        const { getFieldDecorator } = this.props.form;
        const { dataCollapse, activeKey ,time} = this.state;
        const formItemLayout = {
            labelCol: {
                xs: { span: 4 },
                sm: { span: 4 },
                span: 4
            },
            wrapperCol: {
                xs: { span: 20 },
                sm: { span: 20 },
                span: 20
            },
        };
        const config = {
            rules: [{ type: 'string', required: true, message: 'Please select time!' }],
        };
        const rangeConfig = {
            rules: [{ type: 'array', required: true, message: 'Please select time!' }],
        };

        console.log(dataCollapse, "dataCollapse")

        console.log(time,"time")

        return (
            <div>
                <div className={style.content}>
                    <div className={style.contentHeader}>
                        <h2>充电桩市场占有率</h2>
                        <span>62%</span>
                    </div>
                    <div className={style.Progressbar}>
                        <div className={style.Progress} style={{ width: widthObj.width }}>

                        </div>
                    </div>
                    <div className={style.boxD} style={{ left: widthObj.left }}>
                        <div className={style.check} ></div>
                    </div>
                    <div className={style.contentFooter}>
                        <div>
                            <div className={style.percentage}>
                                10%
                            </div>
                            <div className={style.text}>
                                同期比例
                            </div>
                        </div>
                        <div>
                            <div className={`${style["percentage"]} ${style["percentage-right"]}`} >
                                40%
                            </div>
                            <div className={style.text}>
                                目标比例
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className={style.timeBox}>
                      
                       <div className={style.time}>{moment(time).format("YYYY-MM-DD  dddd")}</div>
                       <div className={style.time}>{moment(time).format("HH:mm:ss  a")}</div>
                     
                </div> */}

                {/* <div id="wrapper">
                    <div id="content">
                        <div>广告1</div>
                        <div>广告2</div>
                        <div>广告3</div>
                    </div>
                </div> */}

                <div>
                    <Form  {...formItemLayout} onSubmit={this.handleSubmit}>
                        <section>
                            <Form.Item label="space Address">
                                {getFieldDecorator('spaceAddress',
                                    {
                                        rules: [{ type: 'string', required: true, message: 'Please input space Address!' }],
                                    })(<TextArea rows={4} />)}
                            </Form.Item>
                        </section>
                        <div>
                            <Form.Item label="chooseColumns">
                                {getFieldDecorator('Collapse', {
                                    initialValue: dataCollapse,
                                    rules: [{ required: true, message: 'Please select time!' }],
                                })(<div>
                                    <Collapse defaultActiveKey={['0']} activeKey={activeKey} onChange={this.callback}
                                    // accordion
                                    >
                                        {
                                            dataCollapse && dataCollapse.map((item, index) => {
                                                return (
                                                    <Panel header={`This is panel header${index}`} key={index} extra={
                                                        <div>
                                                            <Icon type="plus" onClick={(e) => this.handClickAdd(e)} />
                                                            {
                                                                dataCollapse && dataCollapse.length > 1 && <Icon type="minus" onClick={(e) => this.handClickDelete(e, index)} />
                                                            }

                                                        </div>

                                                    }>
                                                        <div>
                                                            <Form.Item label="name" labelCol={4} wrapperCol={20} {...formItemLayout} >
                                                                {/* initialValue:"", */}
                                                                {getFieldDecorator(`name${index}`, {
                                                                    initialValue: item.name,
                                                                    rules: [{ type: 'string', required: true, message: 'Please select name!' }],
                                                                },
                                                                    config,)(<Input onChange={(e) => this.handCliclChange(item, index, "name", e)} />)}
                                                            </Form.Item>
                                                            <Form.Item label="text" {...formItemLayout} >
                                                                {getFieldDecorator(`txt${index}`, {
                                                                    initialValue: item.txt,
                                                                    rules: [{ type: 'string', required: true, message: 'Please select txt!' }],
                                                                })(<Input onChange={(e) => this.handCliclChange(item, index, "txt", e)} />)}
                                                            </Form.Item>
                                                            <Form.Item label="sex" {...formItemLayout} >
                                                                {getFieldDecorator(`sex${index}`, {
                                                                    initialValue: item.sex,
                                                                    rules: [{ type: 'string', required: true, message: 'Please select txt!' }],
                                                                })(<Select defaultValue="lucy" style={{ width: "100%" }} onChange={(value) => this.handleChange(item, index, "sex", value)}>
                                                                    <Option value="jack">Jack</Option>
                                                                    <Option value="lucy">Lucy</Option>

                                                                    <Option value="Yiminghe">yiminghe</Option>
                                                                </Select>)}
                                                            </Form.Item>
                                                        </div>

                                                    </Panel>
                                                )
                                            })
                                        }

                                        {/* <Panel header="This is panel header 2" key="2">
                                        <p>222</p>
                                    </Panel>
                                    <Panel header="This is panel header 3" key="3" disabled>
                                        <p>3333</p>
                                    </Panel> */}
                                    </Collapse>

                                </div>)}
                            </Form.Item>
                        </div>
                        <section>
                            <Form.Item label="space Content">
                                {getFieldDecorator('spaceContent',
                                    {
                                        rules: [{ type: 'string', required: true, message: 'Please input space Content!' }],
                                    })(<TextArea rows={4} />)}
                            </Form.Item>
                        </section>
                        {/* <Form.Item label="DatePicker">
                            {getFieldDecorator('date-picker', config)(<DatePicker />)}
                        </Form.Item>
                        <Form.Item label="DatePicker[showTime]">
                            {getFieldDecorator('date-time-picker', config)(
                                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
                            )}
                        </Form.Item>
                        <Form.Item label="MonthPicker">
                            {getFieldDecorator('month-picker', config)(<MonthPicker />)}
                        </Form.Item>
                        <Form.Item label="RangePicker">
                            {getFieldDecorator('range-picker', rangeConfig)(<RangePicker />)}
                        </Form.Item>
                        <Form.Item label="RangePicker[showTime]">
                            {getFieldDecorator('range-time-picker', rangeConfig)(
                                <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
                            )}
                        </Form.Item>
                        <Form.Item label="TimePicker">
                            {getFieldDecorator('time-picker', config)(<TimePicker />)}
                        </Form.Item> */}
                        <Form.Item
                            wrapperCol={{
                                xs: { span: 24, offset: 0 },
                                sm: { span: 16, offset: 8 },
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <RelationChartCom  {...relationChartObj} />
            </div>
        )
    }
}

export default Form.create()(RelationChart);