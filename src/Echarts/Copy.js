import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Table, InputNumber, Progress } from 'antd';
import style from './component/style.less';
class CopyCom extends React.Component {
  state = {
    title: '',
    textT: '没有选中！',
    persent:66,
  };
  onCopy = record => {
    console.log(record);
    this.setState({ textT: record.address,persent:record.persent});
  };
  onChangeNumber=(value)=>{
    //  console.log(value)
     this.setState({ persent:value});
  }
  render() {
    const { textT,persent } = this.state;
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
        persent:50
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园2号',
        persent:90
      },
    ];

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
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
        <h2>当前选中复制：{textT}</h2>
        <InputNumber min={0} max={100} defaultValue={3} onChange={this.onChangeNumber} />
        <Progress
          strokeColor={{
            '0%': '#108ee9',
            '20':"red",
            '40':"green",
            '60':"blue",
            '80%':"yellow",
            '100%': '#87d068',
          }}
          percent={persent}
        />
        <Table {...dataT} />
      </div>
    );
  }
}
export default CopyCom;
