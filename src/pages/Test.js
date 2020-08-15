/**
 * Created by zhangheng on 2019/5/18.
 */
import React from "react";
import { Row, Col, Checkbox } from "antd";
import { Select, Table } from 'antd';
import { connect } from "dva";
import style from "./index.less";
const { Option } = Select;
const data = [
  {
    title: "1111",
    key: "12312",
    id: "eeee",
  },
  {
    title: "1111eee",
    key: "12312fff",
    id: "gggggg",
  },
  {
    title: "eeeee",
    key: "rrrrr",
    id: "hhhhh",
  }
]
@connect(({ Index }) => ({ Index }))
//
class Test extends React.Component {
  state = {
    selectedRowKeys: [1], // Check here to configure the default column
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "Index/SelectList", payload: {}
    })
  }
  onChange = (value) => {
    console.log(`selected ${value}`);
  }
  onSearch = (value) => {
    console.log(`selected ${value}`);
  }
  dataSource =  [{
    name: "张三",
    sex: "男",
    age: 12,
    phone: 12345678900,
    address: "河南",
    id:1,
    flag: 1,
  },
  {
    name: "李四",
    sex: "男",
    age: 12,
    phone: 12345678900,
    address: "河南",
    id: 2,
    flag: 1,
  },
  {
    name: "王二",
    sex: "男",
    age: 12,
    phone: 12345678900,
    address: "河南",
    id: 3,
    flag: 2,
  },
  {
    name: "刘大",
    sex: "男",
    age: 12,
    phone: 12345678900,
    address: "河南",
    id: 4,
    flag: 3,
  },
  {
    name: "胡六",
    sex: "男",
    age: 12,
    phone: 12345678900,
    address: "河南",
    id: 5,
    flag: 4,
  },
  {
    name: "杨七",
    sex: "男",
    age: 12,
    phone: 12345678900,
    address: "河南",
    id:6,
    flag: 1,
  },
]

  columns = [
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
      title: '性别',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '电话',
      dataIndex: 'sex',
      key: 'sex',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  render() {
    const { Index } = this.props;
    const { TableList } = Index;
    const { selectedRowKeys } = this.state;
    console.log(TableList)
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      getCheckboxProps: record => ({
        disabled: record.flag === 3, // Column configuration not to be checked
        flag: record.flag,
      }),
     
    };
    return (
      <div className={`${style["IndexBox"]}`}>
        <Table rowKey="id"
          dataSource={TableList&&TableList.length>0?TableList:this.dataSource}
          columns={this.columns}
          pagination={false}
          pageSize="1000000"
          rowSelection={rowSelection}
        />
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          // onSearch={this.onSearch}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="jackee">Jack</Option>
          <Option value="lucyee">Lucy</Option>
          <Option value="tomee">Tom</Option>
        </Select>
        {
          data.map((item, index) => {
            return (
              <Row >
                <Col span={4}>{item.title}</Col>
                <Col span={12}>
                  <Checkbox > {item.id}</Checkbox>
                  {item.id}
                </Col>

                <Col span={8}>{item.key}</Col>
              </Row>
            )
          })
        }
        <Row >
          <Col span={4}>eeee</Col>
          <Col span={12}>
            dgerergergerg
          </Col>

          <Col span={8}>水水水水水水水水</Col>
        </Row>
      </div>
    )
  }
}
export default Test;
