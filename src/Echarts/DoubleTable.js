import React from "react";
import { Table } from 'antd';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];

const data = [
  {
    key: "33333333333333333333333333331111",
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: "2rrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: "3",
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];

class DoubleTable extends React.Component {
  state={
    expandedRowKeys:"1"
  }
  onExpand=(expanded, record)=>{
           console.log(record.key)
           if(expanded){
            this.setState({expandedRowKeys:record.key})
           }
           else{
            this.setState({expandedRowKeys:""})
           }
         
  }
  render() {
    return (
      <div>
        <Table
          columns={columns}
          expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
          dataSource={data}
          onExpand={this.onExpand}
          rowKey="key"
          expandedRowKeys={this.state.expandedRowKeys}
        />
      </div>
    )
  }
}

export default DoubleTable;