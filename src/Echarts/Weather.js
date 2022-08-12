import React from 'react';
import axios from 'axios';
import { connect } from "dva";
import { Table, Form, Select, Button, Col } from 'antd';
import WheatherApi from './../component/Weather/Weather';
import _ from "loadsh";
import china from 'echarts/map/js/china.js';
import style from './component/style.less';
const data=[
  {
    title:"南京",
  },
  {
    title:"北京",
  },
  {
    title:"长安",
  },
  {
    title:"开封",
  },
  {
    title:"郑州",
  },
  {
    title:"商丘",
  },
]
const { Option } = Select;
@connect(({ PublicApi }) => ({ PublicApi }))
class Weather extends React.Component {
  state = {
    dataSource: [],
    current: 1,
    updateTime: '',
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
        item.codeSort = index + 1;
        item.key = index + 1;
      });
      this.setState({ dataSource: res.data.data, updateTime: res.data.update_time });
    });
  }
  //查询
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
       
        if (values.numberDays === 7) {
          this.param.version = 'v1';
        } else if (values.numberDays === 40) {
          this.param.version = 'v3';
        } else {
          this.param.version = values.numberDays;
        }
        this.param.city = values.placeNames;
        this.getWeather(this.param);
        this.setState({ current: 1 });
      }
    });
  };
  //重置
  handreSet = () => {
    this.props.dispatch({
      type:"PublicApi/stepConfig",
      // param:"2222"
      payload:{Weather:"333333"}
    })
    this.props.form.resetFields();
    this.param = {
      version: 'v1', //获取天气天数
      city: '南京', // 若不提供城市名，会根据本机IP获取当地天气
      appid: '53783933', // 若不提供城市名，会根据本机IP获取当地天气
      appsecret: 'AYHXKr8a', // 到该网站上注册申请（操作很简单）
    };
    this.getWeather(this.param);
  };
  onChange = (pagination, filters, sorter) => {
   
    this.setState({ current: pagination.current });
  };
  componentWillUnmount(){
    
  }
  render() {
   
    const { dataSource, current, updateTime } = this.state;
    
    const columns = [
      {
        title: '序号',
        dataIndex: 'codeSort',
        key: 'codeSort',
        width: '5%',
        render: (text, record) => {
          if (text) {
            return <span>{text}</span>;
          } else {
            return <span>--</span>;
          }
        },
      },
      {
        title: '城市',
        dataIndex: 'cityName',
        key: 'cityName',
        width: '12%',
        render: (text, record) => {
          if (text) {
            return <span>{text}</span>;
          } else {
            return <span>--</span>;
          }
        },
      },
      {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        width: '15%',
        render: (text, record) => {
          if (text) {
            return <span>{text+record.week}</span>;
          } else {
            return <span>--</span>;
          }
        },
      },
    //   {
    //     title: '周',
    //     dataIndex: 'week',
    //     key: 'week',
    //     width: '5%',
    //     render: (text, record) => {
    //       if (text) {
    //         return <span>{text}</span>;
    //       } else {
    //         return <span>--</span>;
    //       }
    //     },
    //   },
    //   {
    //     title: '阴历',
    //     dataIndex: 'date_nl',
    //     key: 'date_nl',
    //     width: '5%',
    //     render: (text, record) => {
    //       if (text) {
    //         return <span>{text}</span>;
    //       } else {
    //         return <span>--</span>;
    //       }
    //     },
    //   },
      {
        title: '天气',
        dataIndex: 'wea',
        key: 'wea',
        width: '10%',
        render: (text, record) => {
          if (text) {
            return <span>{text}</span>;
          } else {
            return <span>--</span>;
          }
        },
      },
      {
        title: '最高温度',
        dataIndex: 'tem1',
        key: 'tem1',
        width: '7%',
        render: (text, record) => {
          if (text) {
            return <span>{text}</span>;
          } else {
            return <span>--</span>;
          }
        },
      },
      {
        title: '最低温度',
        dataIndex: 'tem2',
        key: 'tem2',
        width: '7%',
        render: (text, record) => {
          if (text) {
            return <span>{text}</span>;
          } else {
            return <span>--</span>;
          }
        },
      },
      {
        title: '风向',
        dataIndex: 'win',
        key: 'win',
        width: '15%',
        render: (text, record) => {
          if (text) {
            return <span>{text}</span>;
          } else {
            return <span>--</span>;
          }
        },
      },
      {
        title: '白天风向',
        dataIndex: 'win_day',
        key: 'win_day',
        width: '10%',
        render: (text, record) => {
          if (typeof record.win === 'object') {
            return <span>{record.win[0]}</span>;
          } else {
            return <span>{text ? text : '--'}</span>;
          }
        },
      },
      {
        title: '晚上风向',
        dataIndex: 'win_night',
        key: 'win_night',
        width: '10%',
        render: (text, record) => {
          if (typeof record.win === 'object') {
            return <span>{record.win[1]}</span>;
          } else {
            return <span>{text ? text : '--'}</span>;
          }
        },
      },
      {
        title: '风速',
        dataIndex: 'win_speed',
        key: 'win_speed',
        width: '10%',
        render: (text, record) => {
          if (text) {
            return <span>{text}</span>;
          } else {
            return <span>--</span>;
          }
        },
      },
    ];
    const TableList = {
      dataSource: dataSource,
      columns: columns,
      rowKey:"key",
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
      rowKey: 'codeSort',
      //   pagination: {
      //     current: current,
      //     pageSize:1000000
      //   },
      pagination: false,
    };
    const { getFieldDecorator } = this.props.form;
    let results =
    [ { 
      nickname: '1',
      balance: "eeeeee2.00" }, { 
      nickname: '1',
      balance: "eeeeee4.00" },
    {
      nickname: '2',
      balance: "eeeeee3.00" } 
    ]

    console.log(this.props.PublicApi,"PublicApi")
 
   console.log( _.sortBy(results, function (item) { return item.balance }))
   const dd=_.map(_.filter(results,item=>item.balance),item=>({
     ...item
   }))
   const bb= _.map(results,item=>item.balance);
   console.log(bb,2222)
   const cc= _.sortBy(bb, function (item) { return -item });
   console.log(cc,4444)
   const result = _.sortBy(results, function (item) { return item.balance });
   console.log(result,result[result.length-1].balance.replace(/[^0-9]/ig,""),dd)
   console.log(_.get({LL:222},"LL"))

    return (
      <div className={`${style['copyBox']}`}>
        <div>
          我是modules：
          {
            this.props.PublicApi.Weather
          }
        </div>
        <div className={`${style['EncryptedStringBox']}`}>
            <div  className={`${style['EncryptedString']}`} style={{ "-webkit-box-orient": "vertical",display: "-webkit-box"}}>
           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
            </div>
          </div>
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
                    {
                      data.map((item,index)=>{
                        return(
                          <Option value={item.title} title={item.title}>{item.title}</Option>
                        )
                      })
                    }
                    {/* <Option value="南京">南京</Option>
                    <Option value="商丘">商丘</Option>
                    <Option value="郑州">郑州</Option>
                    <Option value="北京">北京</Option> */}
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
            <Col span={4} className={`${style['copyBoxButton']}`}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button type="primary" onClick={this.handreSet}>
                重置
              </Button>
            </Col>
          </Form>
        </div>
        <div className={`${style['updateTimeBox']}`}>
          {/* key={current} */}
          <div className={`${style['updateTime']}`}>
            <span>更新时间：{updateTime}</span>
          </div>
          {/* pagination={false} */}
          <Table {...TableList} onChange={this.onChange} pagination={false} />
        </div>
      </div>
    );
  }
}
export default Form.create()(Weather);
