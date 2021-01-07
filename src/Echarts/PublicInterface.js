import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import style from './component/style.less';
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
  };
  componentWillMount() {
    this.TodayHistory(this.param);
    this.QQLever(this.param1);
    // this.QQSpaceVisitors(this.param2);
    this.TimeID = setInterval(() => this.Tick(), 1000);
  }
  Tick() {
    this.QQSpaceVisitors(this.param2);
  }
  componentWillUnmount() {
    // this.setState({ flagD: false });
    clearTimeout(this.TimeID);//清除定时器
  }
  param = { format: 'json' };
  //查询历史上的今天
  TodayHistory(data) {
    const { dispatch } = this.props;
    dispatch({
      type: 'PublicApi/SelectTodayHistory',
      payload: data,
    }).then(res => {
      console.log(res);
      if (res.data.code === 200) {
        const dataL = res.data.data;
        dataL.map((item, index) => {
          item.key = index + 1;
        });
        this.setState({ todayHistoryList: dataL });
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
      }
    });
  }
  //   SelectQQSpaceVisitors;
  //
  render() {
    const { todayHistoryList, QQLever, QQSpace, flagD } = this.state;
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
    const TableList = {
      dataSource: todayHistoryList,
      columns: columns,
      rowKey: 'key',
    };
    return (
      <div className={`${style['copyBox']} ${style['publicInterface']}`}>
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
            <span>QQ空间链接：{QQSpace.qzone}；</span>
            <span>今天访问人数：{QQSpace.today_access}；</span>
            <span>今天拒绝访问人数：{QQSpace.today_access}；</span>
            <span>总共访问人数：{QQSpace.total_access}；</span>
            <span>总共拒绝访问人数：{QQSpace.total_refuse}；</span>
            {/* name: "张衡" qq: "404455037" qzimg:
            "http://qlogo2.store.qq.com/qzone/404455037/404455037/100" qzone:
            "http://404455037.qzone.qq.com" time: "2021-01-07 13:23:00" today_access: "0"
            today_refuse: "0" total_access: "2283" total_refuse: "0" */}
          </div>
        </div>
      </div>
    );
  }
}

export default PublicInterface;
