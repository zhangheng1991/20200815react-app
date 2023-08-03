import React from 'react';
import { Table } from 'antd';
import ResizableTitle from "./ResizableTitle";
import "./style.less";
class ResizableTitleBody extends React.Component {

  state = {
    columns: [
      {
        title: 'Date',
        dataIndex: 'date',
        width: 200,
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        width: 100,
        sorter: (a, b) => a.amount - b.amount,
        defaultSortOrder: 'descend',
      },
      {
        title: 'Type',
        dataIndex: 'type',
        width: 100,
        sorter: (a, b) => a.amount - b.amount,
        defaultSortOrder: 'descend',
      },
      {
        title: 'Note',
        dataIndex: 'note',
        width: 100,
      },
      {
        title: 'Action',
        key: 'action',
        width: 100,
        render: (text, record) => <a onClick={this.handDelete.bind(this, record)}>Delete</a>,
      },
    ],
  };
  handDelete = (obj) => {

  }
  components = {
    header: {
      cell: ResizableTitle,
    },
  };

  data = [
    {
      key: 0,
      date: '2018-02-11',
      amount: 120,
      type: 'income',
      note: 'transfer',
    },
    {
      key: 1,
      date: '2018-03-11',
      amount: 243,
      type: 'income',
      note: 'transfer',
    },
    {
      key: 2,
      date: '2018-04-11',
      amount: 98,
      type: 'income',
      note: 'transfer',
    },
  ];

  handleResize = index => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  };

  equals = (a, b) => {
    if (a === b) return true;

    if (a instanceof Date && b instanceof Date)
      return a.getTime() === b.getTime();

    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
      return a === b;

    if (a.prototype !== b.prototype) return false;

    const keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;

    return keys.every(k => this.equals(a[k], b[k]));
  };



  render() {
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));
    const data = { qq: 111 };
    const data2 = { qq: 111, dd: "rrrrr" };
    const dataF = this.equals(data, data2);
    console.log(dataF)

    return (
      <div>
        <span>判断对象是否完全一致:data与data2{dataF.toString()}</span>
        <Table bordered components={this.components} columns={columns} dataSource={this.data} scroll={{x:"3600"}} />
      </div>

    )
  }
}
export default ResizableTitleBody;