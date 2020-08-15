import React from "react";
import echarts from "echarts";
class EchartsBars extends  React.Component {
  componentDidMount() {
    const { data, Xdata, color,ChattTitle,textFont } = this.props;
    let MyEcharts = echarts.init(document.getElementById(this.props.id))
    let option = {
      title: {
        show: true,
        text: ChattTitle,
        textStyle: {
          color:"#FFFFFF",
           fontSize:textFont,
           fontWeight:"normal",
        },
        left: 20,
        top: 20,

      },
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['7.24', '7.25', '7.26', '7.27', '7.28', '7.29', '7.30'],
          axisTick: {
            alignWithLabel: false

          },
          axisLine: {
            lineStyle: {
              show: true,
              color: "#0099F3",

            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#fff6e0",
            fontSize: this.props.textFont,
          }
        }
      ],
      yAxis:
      {
        type: 'value',
        axisLine: {
          show: false,
          lineStyle: {
            show: false,
            color: "#193E7D",

          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {

          color: "#fff6e0",
          fontSize: this.props.textFont,
        },
        splitLine: {
          lineStyle: {
            show: false,
            color: "#193E7D",

          },
        }
      },
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: "40%",
          data: [10, 52, 200, 334, 390, 330, 220],
          itemStyle: {
            normal: {
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  color: '#fff6e0',
                  fontSize: this.props.textFont
                },
              }
            },

          },
        },

      ]
    }
    if (MyEcharts) {
      option.color = ["#009EFA"]
      option.series[0].data = data;
      // option.series[0].label = labelOption;
      option.xAxis[0].data = Xdata;
      option.series[0].name = "游客数量";
      option.series[0].itemStyle.normal.color = color;
      MyEcharts.setOption(option)
    }
    window.addEventListener('resize', () => {
      // const myChart = echarts.init(document.getElementById('chart-left'))
      // const myChart1 = echarts.init(document.getElementById('chart-btm'))
      MyEcharts.resize()
      // myChart1.resize()
    })

  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }
  render() {
    const { unit,textFont,height } = this.props;
    return (
      <div>
        <div >
        
          <div id={this.props.id} style={{ width: "100%", height: height }}></div>
        </div>
      </div>
    )
  }
}
export default EchartsBars;
