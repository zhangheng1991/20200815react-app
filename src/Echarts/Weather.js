import React from 'react';
import axios from 'axios';
import { Table, Form, Select, Button, Col } from 'antd';
import WheatherApi from './../component/Weather/Weather';
import style from './component/style.less';
const { Option } = Select;
class Weather extends React.Component {
  state = {
    dataSource: [],
  };
  // 定义form对象
  //   formRef = React.createRef();
  //   form= React.createRef()
  param = {
    version: 'v1', //获取天气天数
    city: '南京', // 若不提供城市名，会根据本机IP获取当地天气
    appid: '53783933', // 若不提供城市名，会根据本机IP获取当地天气
    appsecret: 'AYHXKr8a', // 到该网站上注册申请（操作很简单）
  };
  componentDidMount() {
    // WheatherApi.getWeather(this.param);
    this.getWeather(this.param);
  }
  getWeather(data) {
    axios({
      url: 'https://www.tianqiapi.com/api/',
      method: 'get',
      params: data,
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      data: [],
    }).then(res => {
      const dataL = res.data.data;
      dataL.map((item, index) => {
        item.cityName = res.data.city;
      });
      this.setState({ dataSource: res.data.data });
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        if (values.numberDays === 7) {
          this.param.version = 'v1';
        } else if (values.numberDays === 40) {
          this.param.version = 'v3';
        } else {
          this.param.version = values.numberDays;
        }
        this.param.city = values.placeNames;
        this.getWeather(this.param);
      }
    });
  };
  render() {
    // console.log(WheatherApi.getWeather(this.param));
    const { dataSource } = this.state;
    const columns = [
      {
        title: '城市',
        dataIndex: 'cityName',
        key: 'cityName',
        width: '10%',
      },
      {
        title: '年月日',
        dataIndex: 'date',
        key: 'date',
        width: '10%',
      },
      {
        title: '周',
        dataIndex: 'week',
        key: 'week',
        width: '10%',
      },
      {
        title: '阴历',
        dataIndex: 'date_nl',
        key: 'date_nl',
        width: '10%',
      },
      {
        title: '天气',
        dataIndex: 'wea',
        key: 'wea',
        width: '10%',
      },
      {
        title: '最高温度',
        dataIndex: 'tem1',
        key: 'tem1',
        width: '7%',
      },
      {
        title: '最低温度',
        dataIndex: 'tem2',
        key: 'tem2',
        width: '7%',
      },
      {
        title: '风向',
        dataIndex: 'win',
        key: 'win',
        width: '15%',
      },
      {
        title: '白天风向',
        dataIndex: 'win_day',
        key: 'win_day',
        width: '10%',
      },
      {
        title: '晚上风向',
        dataIndex: 'win_night',
        key: 'win_night',
        width: '10%',
      },
    ];
    const TableList = {
      dataSource: dataSource,
      columns: columns,
    };
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const formD = {
      placeNames: '南京',
      numberDays: 7,
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={`${style['copyBox']}`}>
        <div>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onSubmit={this.handleSubmit}
          >
            <Col span={4}>
              <Form.Item label="地名">
                {getFieldDecorator('placeNames', {
                  initialValue: formD.placeNames,
                  rules: [{ required: false, message: '请选择地名' }],
                })(
                  <Select style={{ width: '100%' }} onChange={this.handleChange}>
                    <Option value="南京">南京</Option>
                    <Option value="商丘">商丘</Option>
                  </Select>,
                )}
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="天数">
                {getFieldDecorator('numberDays', {
                  initialValue: formD.numberDays,
                  rules: [{ required: false, message: '请选择天数' }],
                })(
                  <Select style={{ width: '100%' }} onChange={this.handleChange}>
                    <Option value="v1">7</Option>
                    <Option value="v2">15</Option>
                    <Option value="v3">40</Option>
                    {/* <Option value="v4">40</Option> */}
                  </Select>,
                )}
              </Form.Item>
            </Col>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          </Form>
        </div>
        <Table {...TableList} />
      </div>
    );
  }
}
export default Form.create()(Weather);
