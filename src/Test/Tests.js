/**
 * Created by zhangheng on 2019/5/18.
 */
import React from "react";
import styles from './Tests.less';
import Echarts from "echarts";
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import EditableCell from "./TestChildren";
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);
class Tests extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '30%',
        editable: true,
      },
      {
        title: 'age',
        dataIndex: 'age',
        editable: true,
      },
      {
        title: 'address',
        dataIndex: 'address',
        editable: true,
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length > 1 ? (
            <div>
              <Popconfirm title="Sure to delete?"
                onConfirm={() => this.handleDelete(record.key)}
                overlayStyle={{ zIndex: "10000" }}
              // onConfirm={this.confirm.bind(this,record.key)}
              >
                <a>删除</a>

              </Popconfirm>
              <a onClick={this.handleAdd} style={{ marginLeft: "20px" }}>新增</a>
            </div>
          ) :
            <a onClick={this.handleAdd}>新增</a>
      },
    ];

    this.state = {
      dataSource: [
        {
          key: '0',
          name: 'Edward King 0',
          age: '32',
          address: 'London, Park Lane no. 0',
        },
        {
          key: '1',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
        {
          key: '2',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
        {
          key: '3',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
        {
          key: '4',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
        {
          key: '5',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
        {
          key: '6',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
        {
          key: '7',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
        {
          key: '8',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
        {
          key: '9',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
        {
          key: '10',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
        {
          key: '11',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
      ],
      count: 2,
    };
  }

  handleDelete = (key) => {
    console.log(key)
    const dataSource = [...this.state.dataSource];
    console.log(dataSource)
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    console.log(this.state.dataSource)
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = row => {
    console.log(row)
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
    this.setState((state, props) => ({
      dataSource: newData
    }));
    console.log(this.state.dataSource)
  };


  render() {
    const { dataSource } = this.state;
    console.log(dataSource)
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        {/* <div className={styles.backGround}></div> */}
        <div className={styles.content}>
          <div>
            <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
              Add a row
        </Button>
            <Table
              components={components}
              rowClassName={() => 'editable-row'}
              bordered
              dataSource={dataSource}
              columns={columns}
            />
          </div>
        </div>
      </div>
    )
  }
}
// export default Form.create()(Tests) ;
export default Tests;
