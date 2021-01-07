import React from 'react';
import { connect } from 'dva';
import { Table, Select, message } from 'antd';
import moment from 'moment';
import style from './component/style.less';
const { Option } = Select;
const data = [
  {
    title: '南京',
  },
  {
    title: '北京',
  },
  {
    title: '长安',
  },
  {
    title: '开封',
  },
  {
    title: '郑州',
  },
  {
    title: '商丘',
  },
];
const columns = [
  {
    title: '序号',
    dataIndex: 'key',
    key: 'key',
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
    title: '日期',
    dataIndex: 'today',
    key: 'today',
    width: '15%',
  },
  {
    title: '事件',
    dataIndex: 'content',
    key: 'content',
    width: '80%',
    render: (text, record) => {
      if (text) {
        return <span>{text}</span>;
      } else {
        return <span>--</span>;
      }
    },
  },
];
const columnsW = [
  {
    title: '序号',
    dataIndex: 'codeSort',
    key: 'codeSort',
    width: '5%',
  },
  {
    title: '城市名称',
    dataIndex: 'cityName',
    key: 'cityName',
    width: '10%',
  },
  {
    title: '日期',
    dataIndex: 'days',
    key: 'days',
    width: '15%',
    render: (text, record) => {
      if (text) {
        return <span>{text + record.week}</span>;
      } else {
        return <span>--</span>;
      }
    },
  },
  {
    title: '温度',
    dataIndex: 'temperature',
    key: 'temperature',
    width: '15%',
  },
  {
    title: '风向',
    dataIndex: 'wind',
    key: 'wind',
    width: '15%',
  },

  {
    title: '天气',
    dataIndex: 'weather',
    key: 'weather',
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
@connect(({ PublicApi }) => ({ PublicApi }))
class PublicInterface extends React.Component {
  state = {
    todayHistoryList: [],
    QQLever: {
      autograph: '',
      email: '',
      gender: '',
      level: 0,
      name: '',
      qq: '',
      qqage: 0,
    },
    QQSpace: {
      name: '',
      qq: '',
      qzimg: '',
      qzone: '',
      time: '',
      today_access: '0',
      today_refuse: '0',
      total_access: '0',
      total_refuse: '0',
    },
    flagD: true,
    defaultValue: '南京',
    weatherList: [],
    time: moment().format('YYYY-MM-DD HH:mm ss'),
  };
  componentWillMount() {
    this.TodayHistory(this.param);
    this.QQLever(this.param1);
    // this.QQSpaceVisitors(this.param2);
    this.weatherList(this.param3);
    this.TimeID = setInterval(() => this.Tick(), 1000);
  }
  Tick() {
    this.QQSpaceVisitors(this.param2);
    this.setState({ time: moment().format('YYYY-MM-DD HH:mm ss') });
  }
  componentWillUnmount() {
    // this.setState({ flagD: false });
    clearTimeout(this.TimeID); //清除定时器
  }
  param = { format: 'json' };
  //查询历史上的今天
  TodayHistory(data) {
    const { dispatch } = this.props;
    dispatch({
      type: 'PublicApi/SelectTodayHistory',
      payload: data,
    }).then(res => {
      if (res.data.code === 200) {
        const dataL = res.data.data;
        dataL.map((item, index) => {
          item.key = index + 1;
        });
        this.setState({ todayHistoryList: dataL });
      } else {
        message.error('查询失败!!!!!', 0.5); //时间秒
      }
    });
  }
  //查询QQ等级
  param1 = { qq: '404455037' };
  QQLever(data) {
    const { dispatch } = this.props;
    dispatch({
      type: 'PublicApi/SelectQQLever',
      payload: data,
    }).then(res => {
      //   console.log(res);
      if (res.data.code === 200) {
        this.setState({ QQLever: res.data });
      } else {
        message.error('查询失败!!!!!', 0.5); //时间秒
      }
    });
  }
  //查询QQ空间访客
  param2 = { qq: '404455037' };
  QQSpaceVisitors(data) {
    const { dispatch } = this.props;
    dispatch({
      type: 'PublicApi/SelectQQSpaceVisitors',
      payload: data,
    }).then(res => {
      if (res.data.code === 200) {
        this.setState({ QQSpace: res.data });
      } else {
        message.error('查询失败!!!!!', 0.5); //时间秒
      }
    });
  }
  param3 = { location: '南京' };
  weatherList(dataB) {
    const { dispatch } = this.props;
    dispatch({
      type: 'PublicApi/SelectWeatherList',
      payload: dataB,
    }).then(res => {
      if (res.data.code === 200) {
        const dataL = res.data.data;
        dataL.map((item, index) => {
          item.cityName = res.data.citynm;
          item.codeSort = index + 1;
          item.key = index + 1;
        });
        this.setState({ weatherList: dataL });
      } else {
        message.error('查询失败!!!!!', 0.5); //时间秒
      }
    });
  }
  handleChange = value => {
    this.param3 = {
      location: value,
    };
    // console.log(value);
    this.weatherList(this.param3);
    this.setState({ defaultValue: value });
  };
  render() {
    const { todayHistoryList, QQLever, QQSpace, weatherList, defaultValue, time } = this.state;

    const TableList = {
      dataSource: todayHistoryList,
      columns: columns,
      rowKey: 'key',
    };
    const TableListW = {
      dataSource: weatherList,
      columns: columnsW,
      rowKey: 'key',
    };
    return (
      <div className={`${style['copyBox']} ${style['publicInterface']}`}>
        <div className={`${style['publicTextBox']}`}>
          <h1>当前时间：{time}</h1>
          <span className={`${style['publicText']}`}>aaa</span>
        </div>
        <div>
          <h1>获取历史上的今天发生的事件：</h1>
          <Table {...TableList} scroll={{ y: 310 }} pagination={false} />
        </div>
        <div>
          <h1>我的QQ信息：</h1>
          <div>
            <span>QQ号：{QQLever.qq}；</span>
            <span>QQ年龄：{QQLever.qqage}；</span>
            <span>QQ等级：{QQLever.level}；</span>
            <span>QQ姓名：{QQLever.name}；</span>
            <span>QQ性别：{QQLever.gender}；</span>
            <span>QQ个性签名：{QQLever.autograph}；</span>
          </div>
          <div>
            <span>访问时间：{QQSpace.time}；</span>
            <span>
              QQ空间链接：
              <a href={QQSpace.qzone} target="_blank">
                {QQSpace.qzone}；
              </a>
            </span>
            <span>今天访问人数：{QQSpace.today_access}；</span>
            <span>今天拒绝访问人数：{QQSpace.today_access}；</span>
            <span>总共访问人数：{QQSpace.total_access}；</span>
            <span>总共拒绝访问人数：{QQSpace.total_refuse}；</span>
            {/* name: "张衡" qq: "404455037" qzimg:
            "http://qlogo2.store.qq.com/qzone/404455037/404455037/100" qzone:
            "http://404455037.qzone.qq.com" time: "2021-01-07 13:23:00" today_access: "0"
            today_refuse: "0" total_access: "2283" total_refuse: "0" */}
          </div>
          <div>
            <h1>{defaultValue}近七天天气情况</h1>
            <div>
              <Select value={defaultValue} style={{ width: '200px' }} onChange={this.handleChange}>
                {data.map((item, index) => {
                  return (
                    <Option value={item.title} title={item.title}>
                      {item.title}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div>
              <Table {...TableListW} pagination={false} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PublicInterface;
