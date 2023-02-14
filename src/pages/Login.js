/**
 * Created by zhangheng on 2019/5/18.
 */
import React from 'react';
import { connect } from "dva";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import moment from 'moment';
import { DatePicker } from 'antd';
import _ from "loadsh";
import PublicTable from "./components/PublicTable";
import AppPublic from "./components/App";
import ExampleApp from './components/ExampleApp';
import style from "../user/user.less";
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
    if(_.get(data, "password")===""||_.get(data, "password")===undefined){
      this.props.form.resetFields("password")
    }
    if (_.get(data, "username")) {
      //  return
    } else {
      this.props.form.setFieldsValue({ username: "" })
    }

    this.setState(
      () => ({
        testDisabled: false
      })

    )

    setTimeout(() => {
      this.props.form.validateFields((err, values) => {
        console.log(err,values)
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
    if(_.get(data, "username")===""||_.get(data, "username")===undefined){
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




  render() {
    const { getFieldDecorator } = this.props.form;
    const { dataSource, current, pageSize, testDisabled } = this.state;
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
                rules: testDisabled ? [{ required: true, message: 'Please input your username!' }] : [{ required: false, message: 'Please input your username!' }],
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
                rules: !testDisabled ? [{ required: true, message: 'Please input your Password!' }] : [{ required: false, message: 'Please input your Password!' }],
              })(
                // <Input
                //   prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                //   type="password"
                //   placeholder="Password"
                // />,
                <Input.Password  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="input password" />
              )}
            </Form.Item>
            <Form.Item>

              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              <Button type="primary" onClick={this.handClickTest}>测试</Button>

            </Form.Item>
          </Form>
        </div>

        <div>
          <ExampleApp />
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
