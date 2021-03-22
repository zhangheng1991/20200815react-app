import React from 'react';
import { Table } from 'antd';



class PdfOne extends React.Component {
   mergeCells=(text, data, key, index)=> {
    // 上一行该列数据是否一样
    if (index !== 0 && text === data[index - 1][key]) {
      return 0
    }
    let rowSpan = 1
    // 判断下一行是否相等
    for (let i = index + 1; i < data.length; i++) {
      if (text !== data[i][key]) {
        break
      }
      rowSpan++
    }
    return rowSpan
  }
  
   dataSource = [
    {
      key: '3',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
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
      address: '西湖区湖底公园1号',
    },
    {
      key: '4',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  
   columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text, record,index) => {
        const obj = {
          children: text !== null ? text : '',
          props: {}
        }
        obj.props.rowSpan =this.mergeCells(text, this.dataSource, 'name', index)
        return obj
      },
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
  ];
  render() {
    return (
      <div>
        <Table dataSource={this.dataSource} columns={this.columns} />
      </div>
    );
  }
}
export default PdfOne;
