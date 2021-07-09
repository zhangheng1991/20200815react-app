import React from 'react';
import Echarts from 'echarts';
import _ from "loadsh";
import { Modal, Button, Select, Radio, Table,Tag,message  } from 'antd';
import moment from "moment";
import HeaderBody from './component/HeaderBody';
import style from "./style.less";
const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  // if (index === 4) {
  //   obj.props.colSpan = 0;
  // }
  return obj;
};
const mergeCells=(text, data, key, index)=> {
 
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


class Header extends React.Component {
  componentDidMount() {
    if (this.state.visible) {
      this.epieP();
    }
  }
  state = { visible: false,
  list:[],
 };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
  
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    
    this.setState({
      visible: false,
    });
  };
  epieP() {
    if (this.state.visible) {
      const MyPie = Echarts.init(document.getElementById('MyBoard'));
      var data_val = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
      ];
      var xAxis_val = [
        '0:00',
        '1:00',
        '2:00',
        '3:00',
        '4:00',
        '5:00',
        '6:00',
        '7:00',
        '8:00',
        '9:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
        '24:00',
      ];
      var data_val1 = [0, 0, 0, 0, 0, 0, 0];
      var dataT = [];
      MyPie.setOption({
        backgroundColor: '#FFFFFF',
        grid: {
          left: 10,
          top: '10%',
          bottom: 20,
          right: 40,
          containLabel: true,
        },
        tooltip: {
          show: true,
          // backgroundColor: '#FFFFFF',
          borderColor: 'yellow',
          borderWidth: 1,
          formatter: '时间:' + '{b};' + '百分比:' + '{c}',
          extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 1)',
        },
        legend: {
          right: 0,
          top: 0,
          data: [''],
          textStyle: {
            color: '#5c6076',
          },
        },
        // title: {
        //     text: '跑步数据检测',
        //     x:'4.5%',
        //     top: '1%',
        //     textStyle:{
        //     color :'#5c6076'
        //     }
        // },
        xAxis: {
          data: xAxis_val,
          boundaryGap: false,
          axisLine: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: 'blue',
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          ayisLine: {
            show: false,
          },
          axisLabel: {
            formatter: '{value} %',
            textStyle: {
              color: 'gold',
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'blue',
            },
          },
          axisLabel: {
            show: true,
            formatter: '{value} %', //右侧Y轴文字显示
            textStyle: {
              color: '#ebf8ac',
            },
          },
          axisLine: {
            lineStyle: {
              color: 'black',
            },
          },
        },

        series: [
          {
            type: 'bar',
            name: 'linedemo',

            tooltip: {
              show: false,
            },
            animation: false,
            barWidth: 1.4,
            hoverAnimation: false,
            data: data_val,
            itemStyle: {
              normal: {
                color: '#f17a52',
                opacity: 0.6,
                label: {
                  show: false,
                },
              },
            },
          },
          {
            type: 'line',
            name: '距离',

            animation: false,
            symbol: 'circle',

            hoverAnimation: false,
            data: data_val1,
            itemStyle: {
              normal: {
                color: '#f17a52',
                opacity: 0,
              },
            },
            lineStyle: {
              normal: {
                width: 1,
                color: '#384157',
                opacity: 1,
              },
            },
          },
          {
            type: 'line',
            name: 'linedemo',
            smooth: true,
            symbolSize: 10,
            animation: false,
            lineWidth: 1.2,
            hoverAnimation: false,
            data: data_val,
            symbol: 'circle',
            itemStyle: {
              normal: {
                color: 'yellow',
                shadowBlur: 40,
                label: {
                  show: false,
                  position: 'top',
                  textStyle: {
                    color: 'yellow',
                  },
                },
              },
            },
            areaStyle: {
              normal: {
                color: '#434959',
                opacity: 1,
              },
            },
          },
        ],
      });
    }
  }
  handleChange = value => {
   
  };
   columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record,index) => {
        const obj = {
          children: text !== null ? text : '',
          props: {}
        }
        obj.props.rowSpan =mergeCells(text, this.data, 'name', index,record.name)
        return obj
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      rowSpan: 0,
      render: (text, record,index) => {
        const obj = {
          children: text !== null ? text : '',
          props: {}
        }
        obj.props.rowSpan =mergeCells(text, this.data, 'age', index,record.name)
        return obj
      },
    },
    {
      title: 'Home phone',
      // colSpan: 2,
      rowSpan: 0,
      dataIndex: 'tel',
      // render: (value, row, index) => {
      //   const obj = {
      //     children: value,
      //     props: {},
      //   };
      //   if (index === 2) {
      //     obj.props.rowSpan = 2;
      //   }
      //   // These two are merged into above cell
      //   if (index === 3) {
      //     obj.props.rowSpan = 0;
      //   }
      //   if (index === 4) {
      //     obj.props.colSpan = 0;
      //   }
      //   return obj;
      // },
    },
    {
      title: 'Phone',
      // colSpan: 0,
      dataIndex: 'phone',
      // render: renderContent,
    },
    {
      title: '状态',
      dataIndex: 'age',
      // render: renderContent,
      render: (text, record,index) => {
      
        const obj = {
          children: record.status !== null&&record.status===1 ? "已完成" :"未完成",
          props: {}
        }
        obj.props.rowSpan =mergeCells(text, this.data, 'age', index,record.name)
        return obj
      },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      // render: renderContent,
    },
    {
      title: '操作',
      dataIndex: 'operate',
      render: (text,record)=><div onClick={this.handClickConfirm.bind(this,record)}>确定</div>,
    },
  ];
  
   data = [
   
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      tel: '0571-22098909',
      phone: 18889898989,
      address: 'New York No. 1 Lake Park',
      status:1,
    },
    {
      key: '2',
      name: 'John Brown',
      tel: '0571-22098333',
      phone: 18889898888,
      age: 32,
      address: 'London No. 1 Lake Park',
      status:1,
    },
    {
      key: '23',
      name: 'John Brown',
      tel: '0571-22098333',
      phone: 18889898888,
      age: 92,
      address: 'London No. 1 Lake Park',
      status:2,
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Sidney No. 1 Lake Park',
      status:2,
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'London No. 2 Lake Park',
      status:2,
    },
    {
      key: '5',
      name: 'Jake White',
      age: 28,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Dublin No. 2 Lake Park',
      status:2,
    },
    {
      key: '6',
      name: 'Jake White',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Dublin No. 2 Lake Park',
      status:1,
    },
  ];
  handClickConfirm=(obj)=>{
    const {list}=this.state;
    let data=list;
    data.push({...obj,
      key:moment().format("YYYYMMDDHH:mm:ss.SSS")
    })
    this.setState({list:[...new Set(data)]})
    
  }
  onClose=(e,objD)=>{
    const {list}=this.state;
     
      const data=_.map(_.filter(list,item=>e.key!==item.key),item=>(
        {
          ...item
        }
      ))
     
      this.setState({list:[...new Set(data)]})
  }

   columnsR = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      width: 150,
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      render: (text,record)=><div onClick={this.handClickConfirm.bind(this,record)}>确定</div>,
    },
  ];
  
   dataR = [];
 

   dataSource = [
    {
      name: '张三',
      sex: '男',
      age: 12,
      phone: 12345678900,
      address: '河南',
      id: 1,
      flag: 1,
      code:"015780",
    },
    {
      name: '李四',
      sex: '男',
      age: 12,
      phone: 12345678900,
      address: '河南',
      id: 2,
      flag: 1,
      code:"015781",
    },
    {
      name: '王二',
      sex: '男',
      age: 12,
      phone: 12345678900,
      address: '河南',
      id: 3,
      flag: 2,
      code:"015782",
    },
    {
      name: '刘大',
      sex: '男',
      age: 12,
      phone: 12345678900,
      address: '河南',
      id: 4,
      flag: 3,
      code:"015783",
    },
    {
      name: '胡六',
      sex: '男',
      age: 12,
      phone: 12345678900,
      address: '河南',
      id: 5,
      flag: 4,
      code:"015784",
    },
    {
      name: '杨七',
      sex: '男',
      age: 12,
      phone: 12345678900,
      address: '河南',
      id: 6,
      flag: 1,
      code:"015785",
    },
  ];
  render() {
    const {list}=this.state;
    for (let i = 0; i < 100; i++) {
      this.dataR.push({
        key: i,
        name: `Edward King ${i}`,
        age:1+i,
        address: `London, Park Lane no. ${i}`,
      });
    }
    const dataU=_.map(this.dataSource,item=>item.name);
   
    const dataY=_.map(_.filter(this.dataSource,item=>item.name !=="杨七"),item=>({
      ...item
    }));
  
    return (
      <div>
        我是echarts第二个页面折线图 ddddddddddddd
        <div>
          <HeaderBody />
          <Button type="primary" onClick={this.showModal}>
            添加
          </Button>
          <div className={style.TagBox} >
        {
          list.map((item,index)=>{
            return(
              <div className={style.TagText} key={item.key}>
                   <div className={style.TagContainer} title={item.name+"("+item.code+")"}>
                   <Tag closable={true} onClose={this.onClose.bind(this,item)}>  {item.name}({item.code})</Tag>
                   {
                     list.length-1===index?"":"  --->"
                   }
               
                   </div>
              </div>
            )
          })
        }
        </div>
       
          <Select
            mode="tags"
            // size={size}
            placeholder="Please select"
            defaultValue={['a10', 'c12']}
            onChange={this.handleChange}
            style={{ width: '100%' }}
          >
            {children}
          </Select>
          <Table columns={this.columns} dataSource={this.data} bordered  rowKey="key"/>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            width={800}
          >
             <Table columns={this.columnsR} dataSource={this.dataSource} bordered  rowKey="name"/>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            {/* <div id="MyBoard" style={{ height: '600px' }} /> */}
          </Modal>
        </div>
        <div />
        <Table columns={this.columnsR} dataSource={this.dataR} bordered  rowKey="name" pagination={{pageSize:10,total:100 }}/>
      </div>
    );
  }
}
export default Header;
