/**
 * Created by zhangheng on 2019/5/18.
 */
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './Tests.less';
import Echarts from 'echarts';
import { Table, Input, Button, Popconfirm, Form, Drawer } from 'antd';
import EditableCell from './TestChildren';
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
const dataP =[
  {
    title:"右面",
    key:"right",
  },
  {
    title:"底部",
    key:"bottom",
  },
  {
    title:"左面",
    key:"left",
  },
  {
    title:"顶部",
    key:"top",
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
      visible:false,
      placement:"right",
      name:"右面",
    };
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'TestModel/save',
      payload: { tableList: this.data },
    });
  }
  componentWillReceiveProps(nextProsp) {
    //实时监听表格数据发生变化
    if (nextProsp.TestModel.tableList && nextProsp.TestModel.tableList != this.state.dataSource) {
      this.setState({ dataSource: nextProsp.TestModel.tableList });
    }
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
   this.setState({visible:true,placement:obj.key,name:obj.title})
  };

   onClose = () => {
    this.setState({visible:false})
  };

  render() {
    const { dataSource } = this.state;
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
    return (
      <div>
        {/* <div className={styles.backGround}></div> */}
        <div className={styles.content}>
          {
            dataP.map((item,index)=>{
              return(
                <Button type="primary" onClick={this.showDrawer.bind(this,item)} key={item.key}>
                   {item.title}
              </Button>
              )
            })
          }
        
          <Drawer
            title={"抽屉方向("+this.state.name+")"}
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
            <div>
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
    );
  }
}
// export default Form.create()(Tests) ;
export default Tests;
