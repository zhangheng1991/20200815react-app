import React from "react";

import echarts from "echarts";
var labelOption = {
  show: true,
  formatter: '{c}',
  fontSize: 16,
  rich: {
    name: {
      textBorderColor: '#fff'
    }
  }
};

class EchartsBarsCoss extends React.Component {
  componentDidMount() {
    const { data, Xdata, color,textFont,ChattTitle } = this.props;
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
      grid: {
        left: 100,
        top: 20,
        // right: 100,
        bottom: 20
      },
      toolbox: {
        // show: true,
        // feature: {
        //   saveAsImage: {}
        // }
      },
      xAxis: {
        type: 'value',
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
        inverse: false,
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
      },
        {
        type: 'category',
        inverse: true,
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


      }
      ],
      series: [{
        z: 2,
        name: '数值',
        type: 'bar',
        // barCategoryGap: '1900%',
        barWidth: "60%",
        showBackground: false,
        data: [166, 186, 182, 18, 153, 147, 13, 125, 11, 102, 100],
        itemStyle: {
          emphasis:{
            barBorderRadius: 0,
          },
          normal: {
            barBorderRadius:[0, 20, 20, 0],
            color: function (series) {
              return new echarts.graphic.LinearGradient(
                0, 0, 1, 0,
                [{
                  offset: 0,
                  color: '#DCC75F'
                },

                {
                  offset: 1,
                  color: '#FB4849'
                }
                ])
            },

          }
        },
        label: {
          show: true,
          position: "right",
          right:100,
          color: '#fff',
          fontSize: textFont,
          formatter: '{c}'
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

    console.log(option);

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
          <div id={this.props.id} style={{ width: "100%", height:height }}></div>
      
      </div>
    )
  }
}
export default EchartsBarsCoss;
