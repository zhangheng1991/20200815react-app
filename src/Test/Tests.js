/**
 * Created by zhangheng on 2019/5/18.
 */
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './Tests.less';
import Echarts from 'echarts';
// import { MonacoDiffEditor } from 'react-monaco-editor';
import { Table, Input, Button, Popconfirm, Form, Drawer } from 'antd';
import moment from 'moment';
import EditableCell from './TestChildren';
import AppIndex from "./start/Index";
import { connect } from 'dva';

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
const dataP = [
  {
    title: "右面",
    key: "right",
  },
  {
    title: "底部",
    key: "bottom",
  },
  {
    title: "左面",
    key: "left",
  },
  {
    title: "顶部",
    key: "top",
  },
]
@connect(({ TestModel }) => ({ TestModel }))
class Tests extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        width: '20%',
        editable: false,
        render: (text, record) => <div class="text">{text}</div>,
      },
      {
        title: '性别',
        dataIndex: 'sex',
        width: '20%',
        editable: true,
        render: (text, record) => <div class="text">{text}</div>,
      },
      {
        title: '年龄',
        dataIndex: 'age',
        width: '20%',
        editable: true,
        render: (text, record) => <div class="text">{text}</div>,
      },
      {
        title: '地址',
        dataIndex: 'address',
        width: '20%',
        editable: true,
        render: (text, record) => <div class="text">{text}</div>,
      },
      {
        title: '操作',
        dataIndex: 'operation',
        width: '10%',
        render: (text, record) => (
          <div style={{ paddingLeft: '8px' }}>
            {/* <Popconfirm
                title="Sure to delete?"
                onConfirm={() => this.handleDelete(record.key)}
                overlayStyle={{ zIndex: '10000' }}
                // onConfirm={this.confirm.bind(this,record.key)}
              > */}
            {/* <a onClick={this.handleDelete.bind(this,record.key)}>删除</a> */}
            {/* </Popconfirm> */}
            {this.state.dataSource.length > 1 ? (
              <a onClick={this.handleDelete.bind(this, record.key)} style={{ marginRight: '20px' }}>
                删除
              </a>
            ) : (
              <a />
            )}
            <a onClick={this.handleAdd} style={{ marginLeft: '0px' }}>
              新增
            </a>
          </div>
        ),
      },
    ];
    this.data = [
      {
        key: 1,
        name: 'King 1',
        age: '32',
        sex: 'man',
        address: 'London, Park Lane no. 0',
      },
    ];
    this.state = {
      dataSource: [
        // {
        //   key: '1',
        //   name: 'Edward King 0',
        //   age: '32',
        //   address: 'London, Park Lane no. 0',
        // },
        // {
        //   key: '1',
        //   name: 'Edward King 1',
        //   age: '32',
        //   address: 'London, Park Lane no. 1',
        // },
        // {
        //   key: '2',
        //   name: 'Edward King 1',
        //   age: '32',
        //   address: 'London, Park Lane no. 1',
        // },
        // {
        //   key: '3',
        //   name: 'Edward King 1',
        //   age: '32',
        //   address: 'London, Park Lane no. 1',
        // },
        // {
        //   key: '4',
        //   name: 'Edward King 1',
        //   age: '32',
        //   address: 'London, Park Lane no. 1',
        // },
        // {
        //   key: '5',
        //   name: 'Edward King 1',
        //   age: '32',
        //   address: 'London, Park Lane no. 1',
        // },
        // {
        //   key: '6',
        //   name: 'Edward King 1',
        //   age: '32',
        //   address: 'London, Park Lane no. 1',
        // },
        // {
        //   key: '7',
        //   name: 'Edward King 1',
        //   age: '32',
        //   address: 'London, Park Lane no. 1',
        // },
        // {
        //   key: '8',
        //   name: 'Edward King 1',
        //   age: '32',
        //   address: 'London, Park Lane no. 1',
        // },
        // {
        //   key: '9',
        //   name: 'Edward King 1',
        //   age: '32',
        //   address: 'London, Park Lane no. 1',
        // },
        // {
        //   key: '10',
        //   name: 'Edward King 1',
        //   age: '32',
        //   address: 'London, Park Lane no. 1',
        // },
        // {
        //   key: '11',
        //   name: 'Edward King 1',
        //   age: '32',
        //   address: 'London, Park Lane no. 1',
        // },
      ],
      count: 2,
      tableList: [],
      value: '',
      copied: false,
      visible: false,
      placement: "right",
      name: "右面",
      falgTag: false
    };
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'TestModel/save',
      payload: { tableList: this.data },
    });
    setTimeout(() => {
      this.setState({ falgTag: true })
    }, 1000)

  }
  componentWillReceiveProps(nextProsp) {
    //实时监听表格数据发生变化
    if (nextProsp.TestModel.tableList && nextProsp.TestModel.tableList != this.state.dataSource) {
      this.setState({ dataSource: nextProsp.TestModel.tableList });
    }
  }

  componentWillUnmount() {
    this.setState({ falgTag: false })
  }
  //删除行
  handleDelete = key => {

    const dataSource = [...this.state.dataSource];

    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    const { TestModel, dispatch } = this.props;
    dispatch({
      type: 'TestModel/save',
      payload: { tableList: dataSource.filter(item => item.key !== key) },
    });

  };
  //新增行
  handleAdd = () => {
    const { count, dataSource } = this.state;
    // const newData = {
    //   key: count,
    //   name: `Edward King ${count}`,
    //   age: 32,
    //   address: `London, Park Lane no. ${count}`,
    // };
    const newData = {
      key: count,
      name: 'King ' + count,
      age: '',
      address: '',
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
    const { TestModel, dispatch } = this.props;
    dispatch({
      type: 'TestModel/save',
      payload: { tableList: [...dataSource, newData] },
    });

  };
  //input框输入保存
  handleSave = row => {
    const { TestModel, dispatch } = this.props;

    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
    // this.setState((state, props) => ({
    //   dataSource: newData,
    // }));
    dispatch({
      type: 'TestModel/save',
      payload: { tableList: newData },
    });

  };
  //打印当前表格数据
  handledCurrent = () => {

    // alert(this.state.dataSource)
  };
  //全部删除
  handDeleteAll = () => {
    const { TestModel, dispatch } = this.props;
    dispatch({
      type: 'TestModel/save',
      payload: { tableList: this.data },
    });
    this.setState({ dataSource: this.data });
  };
  showDrawer = (obj) => {
    this.setState({ visible: true, placement: obj.key, name: obj.title })
  };

  onClose = () => {
    this.setState({ visible: false })
  };


  mergeCells = (text, data, key, index) => {
    // 上一行该列数据是否一样
    if (index !== 0 && text === data[index - 1][key]) {
      return 0;
    }
    let rowSpan = 1;
    // 判断下一行是否相等
    for (let i = index + 1; i < data.length; i++) {
      if (text !== data[i][key]) {
        break;
      }
      rowSpan++;
    }
    return rowSpan;
  };


  render() {
    const { dataSource, falgTag } = this.state;
    const { TestModel, dispatch } = this.props;
    const { tableList } = TestModel;
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

    const dataR = [
      {
        classnName: "1111",
        kpiName: "22222",
        startValue: "w",
        endValue: "1",
      },
      {
        classnName: "1111",
        kpiName: "22222",
        startValue: "w1",
        endValue: "2",
      },
      {
        classnName: "1111",
        kpiName: "2222244",
        startValue: "w2",
        endValue: "3",
      },
      {
        classnName: "1111",
        kpiName: "2222244",
        startValue: "w3",
        endValue: "4",
      },
      {
        classnName: "1111",
        kpiName: "2222244",
        startValue: "w3",
        endValue: "5",
      },
    ]
    const columnsR = [
      {
        title: '项目',
        dataIndex: 'classnName',
        key: 'classnName',
        render: (text, record, index) => {
          const obj = {
            children: text !== null ? text : '',
            attrs: {},
            props: {},
          };
          obj.props.rowSpan = this.mergeCells(text, dataR, 'classnName', index);
          // obj.props.colSpan=5;
          // if (index > 2) {
          //   console.log(2222)
          //   obj.props.colSpan = 2;
          // }
          return obj;
        },
      },
      {
        title: '细项',
        dataIndex: 'kpiName',
        key: 'kpiName',
        ellipsis: true,
        render: (text, record, index) => {
          // console.log(index,"index")
          const obj = {
            children: text !== null ? text : '',
            attrs: {},
            props: {},
          };
          obj.props.rowSpan = this.mergeCells(text, dataR, 'kpiName', index);


          return obj;
        },
      },
      {
        title: '上年底数值',
        dataIndex: 'startValue',
        key: 'startValue',
        renderType: 'money',
        align: 'right',
        render: (text, record, index) => {
          // console.log(index,"index")
          const obj = {
            children: text !== null ? text : '',
            attrs: {},
            props: {},
          };
          obj.props.rowSpan = this.mergeCells(text, dataR, 'startValue', index);


          return obj;
        },

      },
      {
        title: '手工调整值',
        dataIndex: 'endValue',
        key: 'endValue',
        renderType: 'money',
        align: 'right',
       
      },
    ];
    const code1 = "// your original code...";
    const code2 = "// a different version...";
    const options = {
      //renderSideBySide: false
    };

    console.log(falgTag, "falgTag");


    const renderContent = (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 4) {
        obj.props.colSpan = 0;
      }
      return obj;
    };
    
    const columnsObj = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: (text, row, index) => {
          if (index < 4) {
            return <a>{text}</a>;
          }
          return {
            children: <a>{text}</a>,
            props: {
              colSpan: 5,
            },
          };
        },
      },
      {
        title: 'Age',
        dataIndex: 'age',
        render: renderContent,
      },
      {
        title: 'Home phone',
        colSpan: 2,
        dataIndex: 'tel',
        render: (value, row, index) => {
          const obj = {
            children: value,
            props: {},
          };
          // if (index === 2) {
          //   obj.props.rowSpan = 2;
          // }
          // // These two are merged into above cell
          // if (index === 3) {
          //   obj.props.rowSpan = 0;
          // }
          if (index === 4) {
            obj.props.colSpan = 0;
          }
          return obj;
        },
      },
      {
        title: 'Phone',
        colSpan: 0,
        dataIndex: 'phone',
        render: renderContent,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        render: renderContent,
      },
    ];
    
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        tel: '0571-22098909',
        phone: 18889898989,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        tel: '0571-22098333',
        phone: 18889898888,
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        name: 'Jim Red',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'London No. 2 Lake Park',
      },
      {
        key: '5',
        name: 'Jake White',
        age: 18,
        tel: '0575-22098909',
        phone: 18900010002,
        address: 'Dublin No. 2 Lake Park',
      },
    ];
    return (
      <div>
        {/* <MonacoDiffEditor
          width="800"
          height="600"
          language="javascript"
          original={code1}
          value={code2}
          options={options}
        /> */}
        {/* {
          falgTag&&<AppIndex id={moment().format('YYYY-MM-DD-HH:MM:ssss')} />
        } */}

        {/* key={moment().format('YYYY-MM-DD-HH:MM:ssss')}  */}
        <div >
          {/* style={{ position: "absolute", width: "100%",top:"0",height:"100%" }} */}
          <Table columns={columnsObj} dataSource={data} bordered />
          <Table
            // components={components}
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={dataR}
            columns={columnsR}
            pageSize="10000000"
            pagintion={false}
          />
          {/* <div className={styles.backGround}></div> */}111111111111111
          <div className={styles.content}>
            {
              dataP.map((item, index) => {
                return (
                  <Button type="primary" onClick={this.showDrawer.bind(this, item)} key={item.key}>
                    {item.title}
                  </Button>
                )
              })
            }

            <Drawer
              title={"抽屉方向(" + this.state.name + ")"}
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
              zIndex={100000}
              placement={this.state.placement}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
            <div>
              <input
                value={this.state.value}
                onChange={({ target: { value } }) => this.setState({ value, copied: false })}
              />

              <CopyToClipboard text={this.state.value} onCopy={() => this.setState({ copied: true })}>
                <span className={styles.copyButton}>点击复制</span>
              </CopyToClipboard>

              {/* <CopyToClipboard text={this.state.value} onCopy={() => this.setState({ copied: true })}>
            <button>Copy to clipboard with button</button>
          </CopyToClipboard> */}

              {/* {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null} */}
            </div>
            <div>
              <div className={`${styles['ContentButton']}`}>
                <Button onClick={this.handleAdd} type="primary">
                  新增
                </Button>
                <Button onClick={this.handledCurrent} type="primary">
                  打印当前表格
                </Button>
                <Button onClick={this.handDeleteAll} type="primary">
                  全部删除
                </Button>
              </div>
              <div style={{ width: "100%" }}>
                <Table
                  components={components}
                  rowClassName={() => 'editable-row'}
                  bordered
                  dataSource={dataSource}
                  columns={columns}
                  pageSize="10000000"
                  pagintion={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// export default Form.create()(Tests) ;
export default Tests;
