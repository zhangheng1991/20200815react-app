import React from "react";
import echarts from "echarts";
class EchartsBarsCross extends React.Component {
  componentDidMount() {
    const { data, Xdata, color, textFont,ChattTitle } = this.props;
    let MyEcharts = echarts.init(document.getElementById(this.props.id))
    var index = 0;
    // var colorList = ['#f36c6c'];
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
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        show: false
      },
      // grid: {
      //   left: 100,
      //   top: 100,
      //   right: 100,
      //   bottom: 100
      // },
      toolbox: {
        // show: true,
        // feature: {
        //   saveAsImage: {}
        // }
      },
      xAxis: {
        type: 'value',
        min: 0,
        max: 100,
        splitLine: {
          show: false,
          lineStyle: {
            color: '#FFFFFF',
            width: 1,
            type: 'dashed'
          }
        },
        minorSplitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        }


      },
      yAxis: [{
        type: 'category',
        inverse: true,
        axisLine: {
          show: false,
          lineStyle: {
            color: '#193E7D',
            width: 1,
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#193E7D',
            width: 1,

          }
        },
        axisTick: {
          show: false
        },
        axisPointer: {
          label: {
            show: true,
            margin: 30
          }
        },
        data: ['杭州市', '宁波市', '温州市', '湖州市', '嘉兴市', '绍兴市', '金华市', '衢州市', '舟山市', '台州市', '丽水市'],
        axisLabel: {
          margin: 60,
          fontSize: textFont,
          align: 'left',
          color: '#FFFFFF'
        }
      }, {
        type: 'category',
        inverse: false,
        axisLine: {
          show: false,
          lineStyle: {
            color: '#333',
            width: 1,
            type: 'dashed'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#333',
            width: 1,
            type: 'dashed'
          }
        },
        axisTick: {
          show: false
        },
        axisPointer: {
          label: {
            show: true,
            margin: 30
          }
        },

        axisLabel: {
          margin: 10,
          fontSize: textFont,
          fontWeight: 'bold',
          align: 'left',
          // color: 'green',
          color: function (value, index) {
            var color = ['red', 'blue', 'green', '#ed3', '#78d', 'black', 'red', 'red', 'red', 'red', 'red'];
            return color[index];
          }
        }
      }],
      series: [
        {
        z: 2,
        name: '数值',
        type: 'bar',
        // barCategoryGap: '1900%',
        barWidth: "70%",
        showBackground: false,
        data: [166, 186, 182, 18, 153, 147, 13, 125, 11, 102, 100],
        itemStyle: {
          normal: {
            //每根柱子颜色设置
            color: function (params) {
              let colorList = [
                "#F36C6C",
                "#E6CF4E",
                "#20D180",
                "#0093FF",
                "#0093FF",
                "#0093FF",
                "#0093FF",
                "#0093FF",
                "#0093FF",
                "#0093FF",
                "#0093FF",
                "#0093FF",
                "#0093FF",
                "#0093FF",
                "#0093FF"
              ];
              // console.log(params)
              if (params.dataIndex == 0) {
                return "#F36C6C"
              }
              if (params.dataIndex == 1) {
                return "#E6CF4E"
              }
              if (params.dataIndex == 2) {
                return "#20D180"
              }
              else {
                return "#0093FF";
              }
              // return colorList[params.dataIndex];
            }
          }
        },
        label: {
          show: true,
          position: "right",
          right: 100,
          color: '#fff',
          fontSize: textFont,
          formatter: '{c}%'
          // offset: [10, 0]
        },
        markLine: {
          symbol: 'none',
          label: {
            show: false
          },

        }

      }

      ]
    };

    if (MyEcharts) {
      // option.color = ["#009EFA"]
      option.series[0].data = data;
      // option.series[0].label = labelOption;
      option.yAxis[0].data = Xdata;
      // option.series[0].name = "商户排名数据分析";
      // option.series[0].itemStyle.normal.color = color;
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
    const { unit, textFont,height } = this.props;
    return (
      <div>
        <div >
        
          <div id={this.props.id} style={{ width: "100%", height: height }}></div>
        </div>
      </div>
    )
  }
}
export default EchartsBarsCross;