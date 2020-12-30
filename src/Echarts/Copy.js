import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Table, InputNumber, Progress,message } from 'antd';
import style from './component/style.less';
class CopyCom extends React.Component {
  state = {
    title: '',
    textT: '没有选中！',
    persent: 66,
  };
  onCopy = record => {
    // console.log(record);
    message.info("当前复制:"+record.address,0.5);//时间秒
    this.setState({ textT: record.address, persent: record.persent });
  };
  onChangeNumber = value => {
    //  console.log(value)
    this.setState({ persent: value });
  };
  render() {
    const { textT, persent } = this.state;
    const data = [];
    const dataSource = [
        // {
        //   key: '1',
        //   name: '胡彦斌',
        //   age: 32,
        //   address: '西湖区湖底公园1号',
        //   persent: 50,
        // },
        // {
        //   key: '2',
        //   name: '胡彦祖',
        //   age: 42,
        //   address: '西湖区湖底公园2号',
        //   persent: 90,
        // },
      ];
  
    for (let i = 1; i <= 100; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
      dataSource.push({
        key:i,
        name: '胡彦祖'+i,
        age: i,
        address: '西湖区湖底公园'+i+"号",
        persent:i,
      })
    }
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width:"20%",
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        width:"10%",
      },
      {
        title: '百分比',
        dataIndex: 'persent',
        key: 'persent',
        width:"10%",
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
        width:"50%",
      },
      {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        width:"10%",
        render: (text, record) => (
          <CopyToClipboard text={record.address} onCopy={this.onCopy.bind(this, record)}>
            <span className={`${style['copyText']}`}>复制</span>
          </CopyToClipboard>
        ),
      },
    ];
    const dataT = {
      dataSource: dataSource,
      columns: columns,
    };
    return (
      <div className={`${style['copyBox']}`}>
        <InputNumber
          min={0}
          max={100}
          // defaultValue={persent}
          value={persent}
          onChange={this.onChangeNumber}
        />
        <h2>当前百分比：{persent}</h2>
        <Progress
          strokeColor={{
            '0%': '#108ee9',
            '20': 'red',
            '40': 'green',
            '60': 'blue',
            '80%': 'yellow',
            '100%': '#87d068',
          }}
          percent={persent}
        />
        <h2>当前选中复制：{textT}</h2>
        <Table {...dataT} />
      </div>
    );
  }
}
export default CopyCom;
