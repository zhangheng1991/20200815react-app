import React from "react";
import echarts from "echarts";
import "echarts-liquidfill";
class EchartsLiquidfill extends React.Component {
  componentDidMount() {
    const { data,  textFont,id } = this.props;
    let MyEcharts = echarts.init(document.getElementById(id))
    let option = {
      title: {
        text: ' '
      },
      series: [{
        type: 'liquidFill',
        data: data,
        center: ['50%', '50%'],
        radius: '65%',
        color: ["#1A2B5A"],
        backgroundStyle: {
          color: '#E3F7FF'
        },
        backgroundStyle: {
          borderWidth: 1,
          color: '#216EA0'
      },
        label: {
          show: true,
          color: '#F8B62D',
          insideColor: '#F8B62D',
          fontSize: textFont,
          align: 'center',
          baseline: 'bottom',
          position:['50%','35%'],
        },
        outline: {
          show: true,
          borderDistance: 8,
          itemStyle: {
            color: 'none',
            borderColor: '#18A0FF',
            borderWidth: 15,
            // shadowBlur: 20,//阴影
            // shadowColor: '#18A0FF',
          }
        },
        itemStyle: {
          normal: {
            barBorderRadius: 30,
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1, [
              {
                offset: 0,
                color: '#74BCFF',
              },
              {
                offset: 1,
                color: '#18A0FF',
              },


            ],
            ),
          },
        },
      }]
    }
    if (MyEcharts) {
      MyEcharts.setOption(option)
    }
    window.addEventListener('resize', () => {
      MyEcharts.resize()
    })

  }
 
  render() {
    const { height,id } = this.props;
    return (
      <div>
          <div id={id} style={{ width: "100%", height: height }}></div>
      </div>
    )
  }
}
export default EchartsLiquidfill;