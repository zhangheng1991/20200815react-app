import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import style from './component/style.less';
@connect(({ PublicApi }) => ({ PublicApi }))
class PublicInterface extends React.Component {
  state = {
    todayHistoryList: [],
  };
  componentDidMount() {
    this.TodayHistory(this.param);
    this.QQLever(this.param1);
    this.QQSpaceVisitors(this.param2);
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
      console.log(res);
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
      console.log(res);
    });
  }
  SelectQQSpaceVisitors;
  //
  render() {
    const { todayHistoryList } = this.state;
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
          {/* {
              todayHistoryList.map((item,index)=>{

              })
          } */}
        </div>
      </div>
    );
  }
}

export default PublicInterface;
