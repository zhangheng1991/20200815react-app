import React from 'react';
import Echarts from 'echarts';
import { Modal, Button, Select, Radio, Table } from 'antd';
import HeaderBody from './component/HeaderBody';
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

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, row, index) => {
      if (index === 0) {
        return {
          children: <a>{text}</a>,
          props: {
            rowSpan: 3,
          },
        };
      }
      if (index === 1 || index === 2) {
        return {
          children: null,
          props: {
            rowSpan: 0,
          },
        };
      }
      if (index === 3) {
        return {
          children: <a>{text}</a>,
          props: {
            rowSpan: 2,
          },
        };
      }
      if (index === 4) {
        return {
          // children: null,
          props: {
            rowSpan: 0,
          },
        };
      }
      // if (index===2) {
      //   return {
      //   children:<a>{text}</a>,
      //   props: {
      //     rowlSpan: 2,
      //     // colSpan: 1,
      //   },
      // };
      // }
      return {
        children: <a>{text}</a>,
        // props: {
        //   rowlSpan: 0,

        // },
      };
    },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    rowSpan: 0,
    render: renderContent,
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
    title: 'Address',
    dataIndex: 'address',
    // render: renderContent,
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
    name: 'John Brown',
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

class Header extends React.Component {
  componentDidMount() {
    if (this.state.visible) {
      this.epieP();
    }
  }
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
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
    console.log(`Selected: ${value}`);
  };

  render() {
    return (
      <div>
        我是echarts第二个页面折线图 ddddddddddddd
        <div>
          <HeaderBody />
          <Button type="primary" onClick={this.showModal}>
            Open Modal
          </Button>
          <Table columns={columns} dataSource={data} bordered />
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
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <div id="MyBoard" style={{ height: '600px' }} />
          </Modal>
        </div>
        <div />
      </div>
    );
  }
}
export default Header;
