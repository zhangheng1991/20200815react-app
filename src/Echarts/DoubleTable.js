import React from 'react';
import _ from 'loadsh';
import { Table, Select, AutoComplete } from 'antd';
const { Option } = Select;

// const columns = [
//   { title: 'Name', dataIndex: 'name', key: 'name',width:400, },
//   { title: 'Age', dataIndex: 'age', key: 'age',width:400, },
//   { title: 'Address', dataIndex: 'address', key: 'address',width:300, },
//   {
//     title: 'Action',
//     dataIndex: '',
//     key: 'x',
//     render: () => <a>Delete</a>,
//     width:100,
//   },
// ];

const data = [
  {
    key: '33333333333333333333333333331111',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: '2rrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
const DataS = [
  {
    title: 'Name',
  },
  {
    title: 'Age',
  },
  {
    title: 'Address',
  },
  {
    title: 'sex',
  },
  {
    title: '风筝',
  },
  {
    title: '螃蟹',
  },
  {
    title: '虾米',
  },
  {
    title: 'sex1',
  },
  {
    title: '风筝1',
  },
  {
    title: '螃蟹1',
  },
  {
    title: '虾米1',
  },
];
const options = [
  {
    value: 'Burns Bay Road',
  },
  {
    value: 'Downing Street',
  },
  {
    value: 'Wall Street',
  },
];
class DoubleTable extends React.Component {
  state = {
    expandedRowKeys: '1',
    columns: [
      { title: 'Name', dataIndex: 'name', key: 'name', width: 400 },
      { title: 'Age', dataIndex: 'age', key: 'age', width: 400 },
      { title: 'Address', dataIndex: 'address', key: 'address', width: 300 },
      { title: 'Action', dataIndex: '', key: 'x', render: () => <a>Delete</a>, width: 100 },
    ],
    total: 1200,
    value: ['Name', 'Age', 'Address'],
  };
  onExpand = (expanded, record) => {
    // console.log(record.key);
    if (expanded) {
      this.setState({ expandedRowKeys: record.key });
    } else {
      this.setState({ expandedRowKeys: '' });
    }
  };

  handleChange = value => {
    // console.log(value)
    // const {columns}=this.state;
    let column = [];
    value.map(item => {
      // console.log(item)
      column.push({
        title: item,
        key: item,
        dataIndex: item,
        width: 200,
      });
    });
    // console.log(colum)
    // this.setState({ columns: column,value:value });
    this.setState({ value: value });
    const NumTotal = _.map(column, record => record.width);
    // console.log(NumTotal)
    // console.log(_.sum(NumTotal))
    // // console.log(`Selected: ${value}`);
    this.setState({ total: _.sum(NumTotal) });
  };
  render() {
    const { columns, total, value } = this.state;
    // console.log(columns,value)
    // const NumTotal= _.map(colums,record=>record.width);
    // console.log(columns,total)
    // console.log(_.sum(NumTotal))
    return (
      <div>
        <AutoComplete
          style={{
            width: 200,
          }}
          options={options}
          placeholder="try to type `b`"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
        <Select
          mode="tags"
          placeholder="Please select"
          defaultValue={['Name', 'Age', 'Address']}
          onChange={this.handleChange}
          style={{ width: '100%' }}
        >
          {DataS.map((item, index) => {
            return (
              <Option key={item.title} title={item.title}>
                {item.title}
              </Option>
            );
          })}
          {/* {children} */}
        </Select>
        <div key={total}>
          {columns && (
            <Table
              columns={columns}
              expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
              dataSource={data}
              onExpand={this.onExpand}
              rowKey="key"
              expandedRowKeys={this.state.expandedRowKeys}
              scroll={{ x: total }}

            />
          )}
        </div>
      </div>
    );
  }
}

export default DoubleTable;
