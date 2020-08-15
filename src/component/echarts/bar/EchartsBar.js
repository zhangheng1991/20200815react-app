import React from "react";
// import PublicBox from "../PublicBox";
// import option from "../../../components/charts/EchartsBar";
import echarts from "echarts";
// import style from "../style.less";
// import _ from 'lodash';
class EchartsBar extends React.Component {
  componentDidMount() {
    const { data, Xdata, color, textFont, legendData, unit } = this.props;
    let MyEcharts = echarts.init(document.getElementById(this.props.id))
    const colors = ["#00A2FF", "#F6CE47", "#F2625B"];
   
    const NewData=[
      {
        data:[120, 152, 200, 334, 290, 330, 220, 221],
        name:'总停车数',
        color:"#00A2FF",
      },
      {
        data:[80, 82, 80, 164, 189, 133, 122, 122],
        name:'固定车辆数司',
        color:"#F6CE47",
      },
      {
        data:  [20, 52, 20, 34, 89, 33, 22, 22],
        name:'临时停车数',
        color:"#F2625B",
      },
    ]
    let NewSeries=[];
    NewData.forEach((item, index) => {
      // item.type= 'bar';
      // item.barWidth=index == 0 ? '50%' : '40%';
      // item.yAxisIndex= index;
      // // data: item.data,
      // // name: item.name,
      // item.xAxisIndex=index;
      // item.itemStyle= {
      //   normal: {
      //     show: true,
      //     color: item.color,
      //     barBorderRadius: 1,
      //     borderWidth: 0,
      //   }
      // };
      // item.zlevel= index;
      // item.label= {
      //   normal: {
      //     show: true,
      //     position: 'top',
      //     formatter: '{c}',
      //     fontSize: textFont,
      //   }
      // };
      NewSeries.push( {
        type: 'bar',
        barWidth: index == 0 ? '50%' : '40%',
        yAxisIndex: index,
        data: item.data,
        name: item.name,
        xAxisIndex: index,
        itemStyle: {
          normal: {
            show: true,
            color: item.color,
            barBorderRadius: 1,
            borderWidth: 0,
          }
        },
        zlevel: index,
        label: {
          normal: {
            show: true,
            position: 'top',
            formatter: '{c}',
            fontSize: textFont,
            color:"#fff"
          }
        },
      })
      // NewSeries.push(itemStyle);
    });
    // let ff={series:[]}
    // ff.series=NewSeries
    // console.log(NewSeries)
   
    var index = 0;
    // var colorList = ['#f36c6c'];
    let option = {
      color: ["yellow"],
      title: {
        show: true,
        text: unit,
        textStyle: {
          color:"#FFFFFF",
           fontSize:textFont,
           fontWeight:"normal",
        },
        left: 20,
        top: 20,

      },
      // backgroundColor: '#142058',
      legend: {
        top: 20,
        textStyle: {
          color: "white",
          fontSize: textFont,
          // lineHeight:textFont,
          // padding:[10,10]
        },
        data: legendData,
        right: '2%',
        itemWidth: 16,
        itemHeigth: 16,
        borderRadius: 0,
        icon: "rect",
        padding: [0, 0],
        lineHeight: textFont,
      },
      grid: {
        left: '2%',
        right: '2%',
        bottom: '5%',
        containLabel: true
      },
      tooltip: {
        show: false,
        // formatter(params) {
        //   console.log(params)
        //   ///
        // }
      },
      yAxis: {
        type: 'value',
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#363e83',
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#363e83 ',
          }
        },
        axisLabel: {
          textStyle: {
            color: "white",
            fontSize: textFont,
          },
        },
      },
      xAxis: [{
        type: 'category',
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#363e83',
          }
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#363e83 ',
          }
        },
        axisLabel: {
          inside: false,
          textStyle: {
            color: "white",
            fontSize: textFont,
          },
          // formatter:function(val){
          //     return val.split("").join("\n")
          // },
        },
        data: Xdata
      }, {
        type: 'category',
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#363e83',
          }
        },
        axisLabel: {
          inside: false,
          textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: '12',
          },
          // formatter:function(val){
          //     return val.split("").join("\n")
          // },
        },
        //data: ['会', '不会', '看情况']
      }, {
        type: 'category',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitArea: {
          show: true
        },
        splitLine: {
          show: false
        },
        // data: ['会', '不会', '看情况']
      },

      ],
      series: [
        {
          name: ' ',
          type: 'bar',
          xAxisIndex: 0,
          zlevel: 1,
          itemStyle: {
            normal: {
              color: '#00A2FF',
              // borderWidth: 2,
              // borderColor: '#076aba',
              // shadowBlur: {
              //   shadowColor: 'rgba(255,255,255,0.31)',
              //   shadowBlur: 10,
              //   shadowOffsetX: 0,
              //   shadowOffsetY: 2,
              // },
            }
          },
          barWidth: '50%',
          data: [24, 27, 26, 13, 21, 14, 18, 12, 18, 28, 29, 16],
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: '{c}',
              fontSize: textFont,
              color:"#fff",
            }
          },
        },
        {
          name: ' ',
          type: 'bar',
          xAxisIndex: 1,
          itemStyle: {
            normal: {
              show: true,
              color: '#F6CE47',
              barBorderRadius: 1,
              borderWidth: 0,
            }
          },
          zlevel: 2,
          barWidth: '40%',
          data: [16, 18, 22, 9, 13, 8, 13, 8, 12, 18, 19, 12],
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: '{c}',
              fontSize: textFont,
              color:"#fff",
            }
          },
        }
        ,
        {
          name: ' ',
          type: 'bar',
          xAxisIndex: 2,
          itemStyle: {
            normal: {
              show: true,
              color: '#F2625B',
              barBorderRadius: 1,
              borderWidth: 0,
            }
          },
          zlevel: 3,
          barWidth: '40%',
          data: [11, 14, 16, 8, 10, 5, 8, 3, 7, 9, 7, 9],
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: '{c}',
              fontSize: textFont,
              color:"#fff",
            }
          },
        }
      ]
    };
     // 合并对象
    //  _.merge(option, ff);
    // option.series=NewData;
    if (MyEcharts) {
      NewData.map((item, index) => {
        console.log(item)
        option.series[index].data = item.data;
        option.series[index].name = item.name;
        option.series[index].type = "bar";
        option.series[index].xAxisIndex = index;
        option.series[index].itemStyle = {
          normal: {
            show: true,
            color: item.color,
            barBorderRadius: 1,
            borderWidth: 0,
            textStyle: { //数值样式
              color: '#fff6e0',
            },
          }
        };
        option.series[index].zlevel = index;
        option.series[index].barWidth = index == 0 ? '50%' : '40%';
        option.series[index].label = {
          normal: {
            show: true,
            position: 'top',
            formatter: '{c}',
            fontSize: textFont,
            color:"#fff",
          }
        };
      })
      // option.color = ["#009EFA"]
      // option.series[0].data = data;
      // // option.series[0].label = labelOption;
      // option.yAxis[0].data = Xdata;
      // option.series[0].name = "商户排名数据分析";
      // option.series = NewSeries;
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
    const { unit, textFont, heigth } = this.props;
    return (
      <div>
        <div >
          {/* {
            unit && <span className={`${style["PublicChartsUnit"]}`} style={{ fontSize: textFont + "px" }}>{unit}</span>
          } */}

          <div id={this.props.id} style={{ width: "100%", height: heigth }}></div>
        </div>
      </div>
    )
  }
}
export default EchartsBar;
