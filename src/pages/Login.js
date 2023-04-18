/**
 * Created by zhangheng on 2019/5/18.
 */
import React, { Children } from 'react';
import { connect } from "dva";
import { Form, Icon, Input, Button, Checkbox, Upload, message, } from 'antd';

import moment from 'moment';
import { DatePicker } from 'antd';
import _ from "loadsh";
import PublicTable from "./components/PublicTable";
import AppPublic from "./components/App";
import ExampleApp from './components/ExampleApp';
import EditApp from "./components/EditApp";
import EditComponent from "./components/EditComponent";
import style from "../user/user.less";
// import JsonFormault from "./components/JsonFormault";
// import MonacoEditor from "././components/MonacoEditor";
// import XmlFormaultD from "./../component/XmlFormault";
import CodemirrorFormault from "./components/CodemirrorFormault";
import JSonFormault from "./comm/JSonFormault";
import AecComponent from "./components/Ace";

import Graph from "./components/Graph/index";
import ExampleGrapg from './components//Graph/example';

import ButtterflyDag from "./components/butterflyDag/index";

import DagreLayout from "./components/dagreLayout/index";
import CompactBoxTree from "./components/compact-box-tree/index";
import RelationalBook from "./components/relationalBooks/index";
import MinMap from "./components/mindMap/index";

const { MonthPicker, RangePicker } = DatePicker;
@connect(({ Login }) => ({ Login }))
class Login extends React.Component {
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
    testDisabled: false,
    shapeType: "AdvancedBezier"
  }
  componentDidMount() {
    // const { dispatch } = this.props;
    // dispatch({
    //   type: "Login/testFunc", payload: { aa: "111" }
    // })
  }
  handleSubmit = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    // this.props.form.setFieldsValue({username:""})
    // this.props.form.resetFields("password")
    const data = this.props.form.getFieldsValue();
    console.log(data, "data")
    // if (_.get(data, "password") === "" || _.get(data, "password") === undefined) {
    //   this.props.form.resetFields("password")
    // }
    // if (_.get(data, "username")) {
    //   //  return
    // } else {
    //   this.props.form.setFieldsValue({ username: "" })
    // }

    this.setState(
      () => ({
        testDisabled: false
      })

    )

    setTimeout(() => {
      this.props.form.validateFields((err, values) => {
        console.log(err, values)
        if (!err) {
          dispatch({
            type: "Login/UserLogin", payload: values
          })

        }
      });
    }, 1000)
  };
  onFinishFailed = errorInfo => {

  };
  disabledDate = (current) => {
    // Can not select days before today and today
    // return current && current.valueOf() < moment().subtract(1, "month");
    return current && current.valueOf() < Date.now();
  }
  range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }
  disabledRangeTime = (_, type) => {
    if (type === 'start') {
      return {
        disabledHours: () => this.range(0, 60).splice(4, 20),
        disabledMinutes: () => this.range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    }
    return {
      disabledHours: () => this.range(0, 60).splice(20, 4),
      disabledMinutes: () => this.range(0, 31),
      disabledSeconds: () => [55, 56],
    };
  }

  dataFunction = (data, id) => {
    console.log(data, id, "data,id")
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
    console.log(id, "id")
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

  handClickTest = () => {
    this.setState(
      () => ({
        testDisabled: true
      })

    )
    // this.setState({ testDisabled: true })
    // console.log(this.props,"22")
    const data = this.props.form.getFieldsValue();
    console.log(data, "data")
    if (_.get(data, "username") === "" || _.get(data, "username") === undefined) {
      this.props.form.resetFields("username")
    }
    if (_.get(data, "password")) {
      //  return
    } else {
      this.props.form.setFieldsValue({ password: "" })
    }

    // this.props.form.resetFields("username")
    setTimeout(() => {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log(values, "values")
        }
      });
    }, 1000)

  }

  hadnclickdd = (value) => {
    console.log(value, "sss")
  }

  disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }

  handClickDrage = (obj) => {
    console.log(obj, "obj")
  }

  optionsChangeLine = (value) => {
    console.log(value, "value")
    this.setState({ shapeType: value })
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const { dataSource, current, pageSize, testDisabled, shapeType } = this.state;
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };
    const Dform = {
      username: "admin",
      password: "123456",
    }

    const dataTable = {
      dataSource: dataSource,
      columns: [
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
          selectList: [{ name: "输入框", key: "Input" }, { name: "下拉框", key: "select" }]
        },
        {
          title: '页面',
          dataIndex: 'page',
          key: 'page',
          type: "Input",
        },

        // {
        //   title:"Action",
        //   key:"action",
        //   render:(text, record) => (
        //     <span>
        //       <a>Invite {record.lastName}</a>
        //       {/* <Divider type="vertical" /> */}
        //       <a>Delete</a>
        //     </span>
        //   ),
        // }
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

    // console.log(dataSource, "dataSource")

    // console.log(testDisabled, "testDisabled")

    const props = {
      name: 'file',
      action: 'https://www.baidu.com/?tn=48021271_13_hao_pg&H123Tmp=nunew11#talentn=21002492_51_hao_pg',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        console.log(info, "info")
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    const options = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' },
    ];
    const plainOptions = ['Apple', 'Pear', 'Orange'];

    const nodesList = {
      // nodes:[
      //   {

      //   }
      // ],
      nodes: [
        {
          name: 'Node 1',
          x: 300,
          y: 300
        },
        {
          name: 'Node 2',
          x: 800,
          y: 300
        },
        {
          name: 'Node 3',
          x: 550,
          y: 100
        },
        {
          name: 'Node 4',
          x: 550,
          y: 500
        }
      ],
      // links: [],
      links: [
        {
          source: 0,
          target: 1,
          symbolSize: [5, 20],
          label: {
            show: true
          },
          lineStyle: {
            width: 5,
            curveness: 0.2
          }
        },
        {
          source: 'Node 2',
          target: 'Node 1',
          label: {
            show: true
          },
          lineStyle: {
            curveness: 0.2
          }
        },
        {
          source: 'Node 1',
          target: 'Node 3'
        },
        {
          source: 'Node 2',
          target: 'Node 3'
        },
        {
          source: 'Node 2',
          target: 'Node 4'
        },
        {
          source: 'Node 1',
          target: 'Node 4'
        }
      ],
    }

    const DagreLayoutObj = {
      id: "DagreLayoutObj",
      height: "800px",
      data: {
        nodes: [
          {
            id: 'root',
            name: 'root',
            width: 100,
            height: 60,
            shape: 'circle',
            className: 'nodeBackground-first'
          }, {
            id: 'test1',
            name: 'test1',
            className: 'nodeBackground-color',
            list: [
              {
                Children: [{ id: "test1-1", name: "tttt",  }, { id: "test1-2", name: "www", },],
                stepName: "step1",
                id: 'test1',
                sourceNodeId: '2', targetNodeId: '3'
              },
              {
                Children: [{ id: "test2-1", name: "test2-2",  }, { id: "eee", name: "www", },],
                stepName: "step2",
                id: 'test1',
                sourceNodeId: '4', targetNodeId: '5'
              },
            ],
            data: [{
              stepName: "step1",
              content: [
                // { id: '1', name: "rrrr", content: 'id', sourceNodeId: '2', targetNodeId: '3' },
                { id: '4', name: "tttt", content: 'isbn', sourceNodeId: '5', targetNodeId: '6' },
                { id: '7', name: "ffff", content: 'title', sourceNodeId: '8', targetNodeId: '9' },
              ],
            }]
          },


          // {
          //   source: '8',
          //   target: '12',
          //   sourceNode: 'test1',
          //   targetNode: 'test2',
          //   type: 'endpoint',
          // },

          {
            id: 'test2',
            name: 'test2',
            color: "red",
            list: [
              {
                Children: [{ id: "test3-1", name: "tttt" }, { id: "test3-2", name: "www" },],
                stepName: "step1",
                id: 'test2',
                sourceNodeId: '6', targetNodeId: '7'
              },
            ],
            data: [{
              stepName: "step1",
              content: [
                { id: '10', name: "rrrr", content: 'id', sourceNodeId: '11', targetNodeId: '12' },
                // { id: '4', name: "tttt", content: 'isbn', sourceNodeId: '5', targetNodeId: '6' },
                // { id: '7', name: "ffff", content: 'title', sourceNodeId: '8', targetNodeId: '9' },
              ],
            }],
            className: 'nodeBackground-color'
          }, {
            id: 'test3',
            name: 'test3',
            list: [
              {
                Children: [{ id: "test4-1", name: "tttt" }, { id: "test4-2", name: "www" },],
                stepName: "step1",
              },
              {
                Children: [{ id: "test5-1", name: "tttt" }, { id: "test5-2", name: "www" },],
                stepName: "step2",
              }, {
                Children: [{ id: "test6-1", name: "tttt" }, { id: "test6-2", name: "www" },],
                stepName: "step1",
              },
              {
                Children: [{ id: "test7-1", name: "tttt" }, { id: "test7-2", name: "www" },],
                stepName: "step2",
              },
            ],
            className: 'nodeBackground-color'
          }, {
            id: 'test4',
            name: 'test4',

            className: 'nodeBackground-color'
          }, {
            id: 'test5',
            name: 'test5',

            className: 'nodeBackground-color'
          }, {
            id: 'test7',
            name: 'test7',

            className: 'nodeBackground-color'
          }, {
            id: 'test6',
            name: 'test6',

            className: 'nodeBackground-color'
          }, {
            id: 'test8',
            name: 'test8',

            className: 'nodeBackground-color'
          }, {
            id: 'test9',
            name: 'test9',

            className: 'nodeBackground-color'
          }, {
            id: 'test10',
            name: 'test10',

            className: 'nodeBackground-color'
          }, {
            id: 'test11',
            name: 'test11',

            className: 'nodeBackground-color'
          }, {
            id: 'test12',
            name: 'test12',

            className: 'nodeBackground-color'
          }
        ],
        edges: [{
          source: 'test1',
          target: 'test2',
        },

        {
          source: 'root',
          target: 'test1',
        },
        {
          source: 'test1',
          target: 'test3',
          color: "red"
        },
        {
          source: 'root',
          target: 'test4'
        },
        //  {
        //   source: '8',
        //   target: 'test1',
        //   sourceNode: '12',
        //   targetNode: 'test2',
        //   type: 'endpoint',
        // }, 

        {
          source: '2',
          target: '7',
          sourceNode: 'test1',
          targetNode: 'test2',
          type: 'endpoint',
        },


        {
          source: 'test3',
          target: 'test4'
        }, {
          source: 'test4',
          target: 'test5'
        }, {
          source: 'test4',
          target: 'test7'
        }, {
          source: 'test4',
          target: 'test6'
        },
        // {
        //   source: 'test2',
        //   target: 'test6'
        // },
        {
          source: 'test6',
          target: 'test8',
        },
        {
          source: 'test5',
          target: 'test8',
        },
        {
          source: 'test7',
          target: 'test8',
        },
        {
          source: 'test9',
          target: 'test8',
        },
        {
          source: 'test4',
          target: 'test9',
        },
        {
          source: 'test1',
          target: 'test10',
        },
        {
          source: 'test1',
          target: 'test11',
        },
        {
          source: 'test1',
          target: 'test12',
        },
        {
          source: 'test10',
          target: 'test4',
        },
        {
          source: 'test11',
          target: 'test4',
        },
        {
          source: 'test12',
          target: 'test4',
        },
          // {
          //   source: 'test12',
          //   target: 'test9',
          // },
          // {
          //   source: 'test7',
          //   target: 'test9'
          // },
          // {
          //   source: 'test7',
          //   target: 'test10'
          // },
          // {
          //   source: 'test7',
          //   target: 'test11'
          // },
          // {
          //   source: 'test7',
          //   target: 'test8'
          // },
          // {
          //   source: 'test8',
          //   target: 'test12'
          // },
          // {
          //   source: 'test11',
          //   target: 'test12'
          // },
          // {
          //   source: 'test1',
          //   target: 'test9'
          // }
        ]
      },
      handClick: this.handClickDrage,
      optionsChangeLine: this.optionsChangeLine,
      shapeType: shapeType
    }

    const minMapObj={
      id:"minMapObj"
    }

    const DagreLayoutObj1 = {
      id: "DagreLayoutObj1",
      height: "800px",
      data: {
        nodes: [
          {
            id: 'root',
            name: 'root',
            width: 100,
            height: 60,
            shape: 'circle',
            className: 'nodeBackground-first'
          }, {
            id: 'test1',
            name: 'test1',
            className: 'nodeBackground-color',
            list: [
              {
                Children: [{ id: "test1-1", name: "tttt", sourceNodeId: '2', targetNodeId: '3' }, { id: "test1-2", name: "www" },],
                stepName: "step1",
              },
              {
                Children: [{ id: "test2-1", name: "test2-2" }, { id: "eee", name: "www" },],
                stepName: "step2",
              },
            ],
            data: [{
              stepName: "step1",
              content: [
                // { id: '1', name: "rrrr", content: 'id', sourceNodeId: '2', targetNodeId: '3' },
                { id: '4', name: "tttt", content: 'isbn', sourceNodeId: '5', targetNodeId: '6' },
                { id: '7', name: "ffff", content: 'title', sourceNodeId: '8', targetNodeId: '9' },
              ],
            }]
          },
          {
            id: 'test2',
            name: 'test2',
            color: "red",
            list: [
              {
                Children: [{ id: "test3-1", name: "tttt" }, { id: "test3-2", name: "www" },],
                stepName: "step1",
              },
            ],
            data: [{
              stepName: "step1",
              content: [
                { id: '10', name: "rrrr", content: 'id', sourceNodeId: '11', targetNodeId: '12' },
                // { id: '4', name: "tttt", content: 'isbn', sourceNodeId: '5', targetNodeId: '6' },
                // { id: '7', name: "ffff", content: 'title', sourceNodeId: '8', targetNodeId: '9' },
              ],
            }],
            className: 'nodeBackground-color'
          }, {
            id: 'test3',
            name: 'test3',
            list: [
              {
                Children: [{ id: "test4-1", name: "tttt" }, { id: "test4-2", name: "www" },],
                stepName: "step1",
              },
              {
                Children: [{ id: "test5-1", name: "tttt" }, { id: "test5-2", name: "www" },],
                stepName: "step2",
              }, {
                Children: [{ id: "test6-1", name: "tttt" }, { id: "test6-2", name: "www" },],
                stepName: "step1",
              },
              {
                Children: [{ id: "test7-1", name: "tttt" }, { id: "test7-2", name: "www" },],
                stepName: "step2",
              },
            ],
            className: 'nodeBackground-color'
          }, {
            id: 'test4',
            name: 'test4',

            className: 'nodeBackground-color'
          }, {
            id: 'test5',
            name: 'test5',

            className: 'nodeBackground-color'
          }, {
            id: 'test7',
            name: 'test7',

            className: 'nodeBackground-color'
          }, {
            id: 'test6',
            name: 'test6',

            className: 'nodeBackground-color'
          }, {
            id: 'test8',
            name: 'test8',

            className: 'nodeBackground-color'
          }, {
            id: 'test9',
            name: 'test9',

            className: 'nodeBackground-color'
          }, {
            id: 'test10',
            name: 'test10',

            className: 'nodeBackground-color'
          }, {
            id: 'test11',
            name: 'test11',

            className: 'nodeBackground-color'
          }, {
            id: 'test12',
            name: 'test12',

            className: 'nodeBackground-color'
          }
        ],
        edges: [
          {
          source: 'test1',
          target: 'test2',
        },

        {
          source: 'root',
          target: 'test1',
        },
        {
          source: 'test1',
          target: 'test3',
          color: "red"
        },
        {
          source: 'root',
          target: 'test4'
        },
        

        {
          source: 'test3',
          target: 'test4'
        }, {
          source: 'test4',
          target: 'test5'
        }, {
          source: 'test4',
          target: 'test7'
        }, {
          source: 'test4',
          target: 'test6'
        },
        // {
        //   source: 'test2',
        //   target: 'test6'
        // },
        // {
        //   source: 'test6',
        //   target: 'test8',
        // },
        // {
        //   source: 'test5',
        //   target: 'test8',
        // },
        // {
        //   source: 'test7',
        //   target: 'test8',
        // },
        // {
        //   source: 'test9',
        //   target: 'test8',
        // },
        // {
        //   source: 'test4',
        //   target: 'test9',
        // },
        // {
        //   source: 'test1',
        //   target: 'test10',
        // },
        // {
        //   source: 'test1',
        //   target: 'test11',
        // },
        // {
        //   source: 'test1',
        //   target: 'test12',
        // },
        // {
        //   source: 'test10',
        //   target: 'test4',
        // },
        // {
        //   source: 'test11',
        //   target: 'test4',
        // },
        // {
        //   source: 'test12',
        //   target: 'test4',
        // },
         
        ]
      },
      handClick: this.handClickDrage,
      optionsChangeLine: this.optionsChangeLine,
      shapeType: shapeType
    }

    return (
      <div>
        <div className={`${style["UserLogin"]}`}>
          {/* <MonthPicker disabledDate={this.disabledDate} placeholder="Select month" />
        <RangePicker
          disabledDate={this.disabledDate}
          disabledTime={this.disabledRangeTime}
          mode={['month', 'month']}
          format="YYYY-MM"
          // showTime={{
          //   hideDisabledOptions: true,
          //   defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
          // }}
        /> */}

          <Form onSubmit={this.handleSubmit} className="login-form" id={testDisabled + "1"} key={testDisabled + "1"}>
            <Form.Item>
              {getFieldDecorator('username', {
                // initialValue: Dform.username,
                // rules: testDisabled ? [{ required: true, message: 'Please input your username!' }] : [{ required: false, message: 'Please input your username!' }],
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}

            </Form.Item>

            <Form.Item>
              {getFieldDecorator('password', {
                // initialValue: Dform.password,
                // rules: !testDisabled ? [{ required: true, message: 'Please input your Password!' }] : [{ required: false, message: 'Please input your Password!' }],
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                // <Input
                //   prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                //   type="password"
                //   placeholder="Password"
                // />,
                <Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="input password" />
              )}
            </Form.Item>

            <Form.Item>
              {/* <Form.Item>
                {getFieldDecorator('Checkbox', {
                  valuePropName: 'checked',
                  initialValue: "true",
                  rules: testDisabled ? [{ required: true, message: 'Please input your username!' }] : [{ required: false, message: 'Please input your username!' }],
                })(
                  
                  <Checkbox >Checkbox</Checkbox>
                )}

              </Form.Item> */}
              {/* // <Checkbox.Group options={plainOptions}
                  //  defaultValue={['Apple']}
                  //   /> */}

              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              {/* <Button type="primary" onClick={this.handClickTest}>测试</Button> */}

            </Form.Item>
          </Form>
        </div>
        {/* <DatePicker showTime disabledDate={this.disabledDate} />
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload> */}
        <div>
          {/* <div style={{ height: "800px" }}>  <MinMap {...minMapObj} /></div> */}
          {/* <div ><DagreLayout {...DagreLayoutObj1} /></div> */}
          {/* <div ><DagreLayout {...DagreLayoutObj} /></div> */}
          <div style={{ height: "800px" }}><RelationalBook /></div>

          {/* <div style={{height:"800px"}}>  <ButtterflyDag /></div> */}
          {/* <div> <AecComponent hadnclick={this.hadnclickdd} /></div>
          <div><JSonFormault /></div>
          <div style={{ height: "800px" }}><CompactBoxTree /></div>
          <div></div> */}


          {/* <ExampleGrapg {...nodesList} /> */}
          {/* <Graph /> */}


          {/* <ExampleApp />
          <EditApp /> */}
          {/* <XmlFormaultD /> */}
          {/* <EditComponent /> */}
          {/* <JsonFormault /> */}
          {/* <MonacoEditor /> */}
          {/* <CodemirrorFormault /> */}
        </div>

        {/* <PublicTable
          {...dataTable}
          dataFunction={this.dataFunction}
          handInputChange={this.handInputChange}
          handleSelectChange={this.handleSelectChange}
          handClickAdd={this.handClickAdd}
          handChagePage={this.handChagePage}
        /> */}
      </div>
    )
  }
}
export default Form.create()(Login);
