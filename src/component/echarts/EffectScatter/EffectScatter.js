import React from "react";
import echarts from "echarts";
class EffectScatter extends React.Component {
  componentDidMount() {
    const { plantCap,datalist,textFont,ChattTitle,id } = this.props;
    let MyEcharts = echarts.init(document.getElementById(id))
  
    var datas = [];
    for (var i = 0; i < plantCap.length; i++) {
      var item = plantCap[i];
      var itemToStyle = datalist[i];
      datas.push({
        name: item.name + '\n' + item.value,
        value: itemToStyle.offset,
        symbolSize: itemToStyle.symbolSize,
        label: {
          normal: {
            textStyle: {
              fontSize:textFont,
              lineHeight:17,
            }
          }
        },
        itemStyle: {
          normal: {
            color: itemToStyle.color,
            opacity: itemToStyle.opacity
          }
        },
      })
    }
    let option = {
      // backgroundColor: '#20203e',
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
      grid: {
        show: false,
        top: 10,
        bottom: 10
      },
      xAxis: [{
        gridIndex: 0,
        type: 'value',
        show: false,
        min: 0,
        max: 100,
        nameLocation: 'middle',
        nameGap: 5
      }],
      yAxis: [{
        gridIndex: 0,
        min: 0,
        show: false,
        max: 100,
        nameLocation: 'middle',
        nameGap: 30
      }],
      legend: {
        // orient: 'vertical',
        // left: 10,
        // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        formatter: function(name) {
        
          // return 'Legend ' + name;
        },
      },
      series: [{
        type: 'effectScatter',
        // symbol: 'circle',
        // symbolSize: 120,
        symbolSize: function (val) {
          return Math.max(val[2] / 200, 8);
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
          normal: {
            show: true,
            formatter: '{b}',
            color: '#fff',
            textStyle: {
              fontSize: textFont
            }
          },
        },
        itemStyle: {
          normal: {
            color: '#00acea'
          }
        },
        data: datas
      }, {
        // name: 'pm2.5',
        type: 'effectScatter',
        data: datas,
        symbolSize: function (val) {
          return Math.max(val[2] / 600, 4);
        },
        label: {
          normal: {
            show: true,
            formatter: '{b}',
            color: '#fff',
            textStyle: {
              fontSize: '20'
            }
          },
        },
        itemStyle: {
          normal: {
            color: '#FF8C00',
            position: 'right',
            show: true
          }
        }
      }]
    };
    if (MyEcharts) {
      MyEcharts.setOption(option)
    }
    window.addEventListener('resize', () => {
      MyEcharts.resize()
    })

  }
  render() {
    const {height,id } = this.props;
    return (
      <div>
          <div id={id} style={{ width: "100%", height: height }}></div>
      </div>
    )
  }
}
export default EffectScatter;