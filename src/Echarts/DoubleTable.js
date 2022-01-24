import React from 'react';
import Dragger from 'react-dragger-r';
import _ from 'loadsh';
import { Table, Select, AutoComplete, Col } from 'antd';
import "./style.less";
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
const dataD = [];
for (let i = 10; i < 38; i++) {
  dataD.push({ title: '我是拖拽' + i.toString(), key: i });
}
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
  
    if (expanded) {
      this.setState({ expandedRowKeys: record.key });
    } else {
      this.setState({ expandedRowKeys: '' });
    }
  };

  handleChange = value => {
   
    // const {columns}=this.state;
    let column = [];
    value.map(item => {
     
      column.push({
        title: item,
        key: item,
        dataIndex: item,
        width: 200,
      });
    });
  
    // this.setState({ columns: column,value:value });
    this.setState({ value: value });
    const NumTotal = _.map(column, record => record.width);
  
    this.setState({ total: _.sum(NumTotal) });
  };
  componentDidMount(){
    this.waterMarker()
  }
  //
  waterMarker(){
      if(document.getElementById("watersMarker")){
      
           const userNme="张衡";
           const userCode="K0410007";
           const cpyName=`${userNme}${userCode}`
           const can=document.createElement('canvas');
           const report =document.getElementsByClassName("content")[0];
           const height =document.getElementById("watersMarker").clientHeight;
           report.appendChild(can);
           can.height=report.clientHeight;
           can.height=height;
          //  can.style.display="none";
           const cans = can.getContext('2d');
           cans.rotate(-35*Math.PI/180);
           cans.font="20px";
           cans.fillStyle="red";
           if(cans.measureText(cpyName).width>180){
               cans.font="20px";
           }
           
          for(let i=report.offsetWidth*(-0.5);i<report.offsetWidth;i+=250){
            for(let j=0;j<document.body.offsetHeight*2;j+=250){
                       cans.fillText(cpyName,i,j);
            }      
          }
          if(document.body.offsetHeight){
                    report.style.backgroundImage=`url(${can.toDataURL("image/png")})`;
          }


      }
  }
  render() {
    const { columns, total, value } = this.state;
    // const NumTotal= _.map(colums,record=>record.width);
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
            
              dataSource={data}
              onExpand={this.onExpand}
              rowKey="key"
              defaultExpandAllRows={true}
              // expandedRowKeys={this.state.expandedRowKeys}
              scroll={{ x: total }}
              expandable={{defaultExpandAllRows:true,expandIconColumnIndex:2,expandIcon:null,  expandedRowRender:record => <p style={{ margin: 0 }}>{record.description}</p>}}
            />
          )}
        </div>
        <div id="watersMarker" style={{position:"relative"}}>
           <div className="content" >
          {dataD.map((item, index) => {
            return (
              // <Col span="6" style={{height:"50px",lineHeight:"50px",background:"white",position:"relative"}}>
              <Dragger
                style={{
                  height: '50px',
                  lineHeight: '50px',
                  background: 'white',
                  position: 'relative',
                  display: 'inline-block',
                  width: '25%',
                }}
                key={index}
              >
                <div >{item.title}</div>
              </Dragger>
              // </Col>
            );
          })}
       
     
        </div>
      </div>
      </div>
    );
  }
}

export default DoubleTable;
