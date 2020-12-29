import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Table, Input } from 'antd';
import style from "./component/style.less";
class CopyCom extends React.Component {
  state = {
    title: '',
    textT:"没有选中！",
  };
  onCopy=(record)=>{
      console.log(record)
      this.setState({textT:record.address})
  }
  render() {
      const {textT}=this.state;
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园2号',
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
          <CopyToClipboard text={record.address} onCopy={this.onCopy.bind(this,record)}>
            <span className={`${style["copyText"]}`}>复制</span>
          </CopyToClipboard>
        ),
      },
    ];
    const dataT = {
      dataSource: dataSource,
      columns: columns,
    };
    return (
      <div>
          <h2>当前选中复制：{textT}</h2>
        <Table {...dataT} />
      </div>
    );
  }
}
export default CopyCom;
