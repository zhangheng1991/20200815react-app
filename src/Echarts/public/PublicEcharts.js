import React from "react";
import Echarts from "echarts";
import style from "./style.less";
class PublicEcharts extends React.Component {
  componentDidMount() {
    this.PublicPie(this.props.data)
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }
  PublicPie(data) {
    const MyPie = Echarts.init(document.getElementById(this.props.id));
    console.log(data)
   if(data&&data.value>0){
    MyPie.setOption({
      backgroundColor: 'rgba(16, 26, 73, 0.5)',
      title: {
        show: false,
      },
      series: [
        {
          type: 'gauge',
          min: 0,
          max: 100,
          radius: '90%',
          center: ['50%', '50%'],
          axisLine: {
            show: true,
            lineStyle: {
              width: 10,
              shadowBlur: 5,
              color: [
                [0.33, 'red'],
                [0.66, ' yellow'],
                [1, 'blue'],
              ],
            },
          },
          axisTick: {
            show: true,
            length: 20,
            lineStyle: {
              width: 5,
              color: 'auto',
            },

          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 12,
              color: '#27e4ae',
            },
          },
          splitLine: {
            show: true,
            length: 30,
            lineStyle: {
              width: 5,
              color: 'auto',
            },
          },
          pointer: {
            show: true,
            width: '5',
            length: '70%',
          },
          detail: {
            formatter: '{value}%',
            offsetCenter: ['0', '50%'],
            textStyle: {
              fontSize: 24,
              color: '#27e4ae',
            },
          },
          itemStyle: {
            color: 'yellow',
            borderColor: 'green',
            borderWidth: 5,
          },
          data: [{ value: data.value }],
        },
        {// 指针外环
          type: 'pie',
          hoverAnimation: false,
          legendHoverLink: false,
          radius: ['10%', '10%'],
          'z': 10,
          label: {
            'normal': {
              'show': false,
            },
          },
          labelLine: {
            normal: {
              'show': false,
            },
          },
          'data': [{
            value: 100,
            itemStyle: {
              normal: {
                color: 'yellow',
              },
            },
          }],
        },
        {// 指针内环
          'type': 'pie',
          'hoverAnimation': false,
          legendHoverLink: false,
          'radius': ['0%', '5%'],
          z: 10,
          label: {
            normal: {
              show: false,
            },
          },
          labelLine: {
            normal: {
              'show': false,
            },
          },
          data: [{
            'value': 100,
            itemStyle: {
              normal: {
                color: 'red',
              },
            },
          }],
        }],
    });
   }
  }
  render() {
    return (
      <div> 
        我是测试echrts的仪表盘第{this.props.num}个图
        {
          this.props.data&&this.props.data.value?<div style={{ height: "300px" }} id={this.props.id}></div>:"--"
        }
        
      </div>
    )
  }
}
export default PublicEcharts;