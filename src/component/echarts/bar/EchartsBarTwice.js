import React from "react";
import echarts from "echarts";
class EchartsBarTwice extends React.Component {
  componentDidMount() {
    const { xData,  ChattTitle,textFont,lastYearData,thisYearData,timeLineData,colors,legend,id } = this.props;
    let MyEcharts = echarts.init(document.getElementById(id))
    // var background = "#0e2147"; //背景 
    // let textColor = "#fff";
    let lineColor = "#193E7D";
    let borderData = [];
    let scale = 0;//边框
    borderData = xData.map(item => {
      return scale;
    });

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
      baseOption: {
        // backgroundColor: background,
        timeline: {
          show: false,
          top: 0,
          data: []
        },
        legend: {
          top: 0,
          left: 20,
          itemWidth: 14,
          itemHeight: 14,
          // itemGap: 343,
          // icon: 'horizontal',vertical
          orient:"horizontal",
          textStyle: {
            show: true,
            color: "#FFFFFF",
            fontSize:textFont
          },
          data: legend
        },
        grid: [{
          show: false,
          left: '10%',
          top: '10%',
          bottom: '8%',
          right: '20%',
          containLabel: true,
          width: '35%'
        }, {
          show: false,
          left: '51%',
          top: '10%',
          bottom: '8%',
          width: '0%'
        }, {
          show: false,
          right: '10%',
          top: '10%',
          bottom: '8%',
          containLabel: true,
          width: '35%',
          // left: '50%',
        }],
        xAxis: [{
          type: 'value',
          inverse: true,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          position: 'top',
          axisLabel: {
            show: true,
            color: "#FFFFFF",
            fontSize:textFont
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: lineColor
            }
          },
        }, {
          gridIndex: 1,
          show: false
        }, {
          gridIndex: 2,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          position: 'top',
          axisLabel: {
            show: true,
            color: "#FFFFFF",
            fontSize:textFont
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: lineColor
            }
          },
        }],
        yAxis: [
          {
          type: 'category',
          inverse: true,
          position: 'right',
          axisLine: {
            show: true,
            lineStyle: {
              color: lineColor
            }
          },

          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            color: "#FFFFFF",
            fontSize:textFont
          },
          data: xData
        }, 
        {
          gridIndex: 1,
          type: 'category',
          inverse: true,
          position: 'left',
          show:false,
          axisLine: {
            show: true
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            padding: [30, 0, 0, 0],
            textStyle: {
              color: '#ffffff',
              fontSize: textFont,
              color: "#FFFFFF"
            },
            align: "center"

          },
          data: xData.map(function (value) {
            return {
              value: value,
              textStyle: {
                align: 'center'
              }
            }
          })
        }, {
          gridIndex: 2,
          type: 'category',
          inverse: true,
          // position: 'left',
          axisLine: {
            show: true,
            lineStyle: {
              color: lineColor
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            color: "#FFFFFF",
            fontSize:textFont
          },
          data: xData
        }],
        series: []

      },
      options: []
    }
    option.baseOption.timeline.data.push(timeLineData[0])
    option.options.push({
      series: [
        {
        name: legend[0],
        type: "bar",
        barWidth: "50%",
        stack: "1",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: colors[0].start
            },
            {
              offset: 1,
              color: colors[0].end
            }
            ]),
          }
        },
        label: {
          normal: {
            show: true, //开启显示
            position: 'left', //在上方显示
            fontSize: textFont,
            color: "#FFFFFF"
          }
        },
        data: lastYearData,
        animationEasing: "elasticOut"
      },
      {
        // name: "2017",
        type: "bar",
        barWidth: "50%",
        stack: "1",
        itemStyle: {
          normal: {
            show: true, //开启显示
            position: 'top', //在上方显示
            color: colors[0].borderColor

          }
        },
        data: borderData
      },
      {
        name:legend[1],
        type: "bar",
        stack: "2",
        barWidth: "50%",
        xAxisIndex: 2,
        yAxisIndex: 2,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: colors[1].start
            },
            {
              offset: 1,
              color: colors[1].end
            }
            ]),
          }
        },
        label: {
          normal: {
            show: true, //开启显示
            position: 'right', //在上方显示
            fontSize: textFont,
            color: "#FFFFFF"
          }
        },
        data: thisYearData,
        animationEasing: "elasticOut"
      },
      {
        name: "2018",
        type: "bar",
        xAxisIndex: 2,
        yAxisIndex: 2,
        barWidth: "50%",
        stack: "2",
        itemStyle: {
          normal: {
            color: colors[1].borderColor

          }
        },
        data: borderData
      },
      ]
    });
    if (MyEcharts) {
      MyEcharts.setOption(option)
    }
    window.addEventListener('resize', () => {
      MyEcharts.resize()
    })

  }
 
  render() {
    const { id,heigth } = this.props;
    return (
      <div>
          <div id={id} style={{ width: "100%", height: heigth}}></div>
      </div>
    )
  }
}
export default EchartsBarTwice;