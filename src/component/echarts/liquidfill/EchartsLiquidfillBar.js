import React from "react";
import echarts from "echarts";
import "echarts-liquidfill";
import style from "./style.less";
class EchartsLiquidfillBar extends React.Component {
  componentDidMount() {
    const { data, Xdata, color, textFont } = this.props;
    let MyEcharts = echarts.init(document.getElementById(this.props.id))
    var val1data2 = [{
      value: 2,
      name: '高资产占比',
    },
    {
      value: 3,
      name: '中资产占比',
    },
    {
      value: 4,
      name: '低资产占比',
    }
    ]

    var arr = ['middleLost', 0.6, data, '今日完成进度']
    var FillData = 0.6;
    let option = {

      title: {
        top: '40%',
        left: 'center',
        text: data[0].name+(data[0].valueP*100).toFixed(2)+"%",
        textStyle: {
          color: '#FFFFFF',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 14
        },
        // subtext: '(占所有数据的的' + (arr[1] * 10000 / 100).toFixed(2) + '%)',
        subtextStyle: {
          color: '#fff',
          fontSize: 12
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: function (res) {
          // console.log(res)
          if (res.componentSubType == 'liquidFill') {
            return res.seriesName + ': ' + (res.value * 100).toFixed(2) + '%';
            // return (res.value * 10000 / 100).toFixed(2) + '%';
          } else {
            return '<span class="ii" style="background:' + res.color + ' "></span>' + res.name + ":" + res.percent + '%';
          }
        }
      },
      legend: {
        show: false,
        left: "auto",
        orient: "vertical",
        left: 30,
        top: 20,
        itemWidth: 16,
        itemHeight: 16,
        borderRadius: 0,
        icon: "rect",
        textStyle: {
          color: "#ffffff",
          fontSize: textFont,
        },
        margin: [5]
      },
      series: [
        {
          type: 'liquidFill',
          // itemStyle: {
          //   normal: {
          //     opacity: 1,
          //     shadowBlur: 0,
          //     shadowColor: 'blue'
          //   }
          // },
          name: data[0].name,
          data: [{
            value: data[0].valueP.toFixed(2),
            itemStyle: {
              normal: {
                color: '#53d5ff',
                opacity: 1
              }
            }
          }],
          //  background: '#fff',
          color: ['#0C88C6'],
          center: ['50%', '50%'],
          /*  backgroundStyle: {
                color: '#fff'
            },*/
            backgroundStyle: {
              borderWidth: 1,
              color: '#216EA0'
          },
          label: {
            normal: {
              formatter: function (params) {
                // console.log(params)
              },
              formatter:"",
              textStyle: {
                show: true,
                color: '#F8B62D',
                insideColor: '#F8B62D',
                fontSize: textFont,
                align: 'center',
                baseline: 'bottom',
                position: ['50%', '35%'],
              }
            }
          },
          outline: {
            itemStyle: {
              borderColor: '#86c5ff',
              borderWidth: 0
            },
            borderDistance: 0
          }
        },
        {
          type: 'pie',
          radius: ['65%', '50%'],
          color: color,
          hoverAnimation: false, ////设置饼图默认的展开样式
          label: {
            show: true,
            normal: {
              formatter: '{b}\n{d}%',
              show: true,
              position: '',
              color: '#FFFFFF',
              fontSize: textFont,
            },
          },
          labelLine: {
            normal: {
              show: false
            }
          },

          // itemStyle: { // 此配置
          //   normal: {
          //     borderWidth: 2,
          //     borderColor: '#fff',
          //   },
          //   emphasis: {
          //     borderWidth: 0,
          //     shadowBlur: 2,
          //     shadowOffsetX: 0,
          //     shadowColor: 'rgba(0, 0, 0, 0.5)'
          //   }
          // },
          data: data
        }
      ]
    }
    MyEcharts.on('click', function (params) {
      console.log(params)
      if (params.componentType == "series") {

      }
    })
    if (MyEcharts) {
      MyEcharts.setOption(option)
    }
    window.addEventListener('resize', () => {
      // const myChart = echarts.init(document.getElementById('chart-left'))
      // const myChart1 = echarts.init(document.getElementById('chart-btm'))
      MyEcharts.resize()
      // myChart1.resize()
    })

  }
 
  render() {
    const { unit, textFont, ChattTitle,height } = this.props;
    return (
      <div>
        <div>
          <div id={this.props.id} style={{ width: "100%", height: height }}></div>
          <div className={`${style["LiquidfillTitle"]}`}>
            <span style={{ fontSize: textFont + "px" }}>{ChattTitle}</span>
          </div>
        </div>
      </div>
    )
  }
}
export default EchartsLiquidfillBar;