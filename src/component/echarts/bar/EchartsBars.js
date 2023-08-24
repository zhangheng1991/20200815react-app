import React from 'react';
import echarts from 'echarts';
class EchartsBars extends React.Component {
  componentDidMount() {
    const { data, Xdata, color, ChattTitle, textFont,id } = this.props;
    let MyEcharts = echarts.init(document.getElementById(id));
    let option = {
      title: {
        show: true,
        text: ChattTitle,
        textStyle: {
          color: '#FFFFFF',
          fontSize: textFont,
          fontWeight: 'normal',
        },
        left: 20,
        top: 20,
      },
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          // shadowStyle:{
          //   color:"red",
          // }
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['7.24', '7.25', '7.26', '7.27', '7.28', '7.29', '7.30'],
          axisTick: {
            alignWithLabel: false,
          },
          axisLine: {
            lineStyle: {
              show: true,
              color: '#0099F3',
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: '#fff6e0',
            fontSize: this.props.textFont,
          },
        },
      ],
      yAxis: {
        type: 'value',
        axisLine: {
          show: false,
          lineStyle: {
            show: false,
            color: '#193E7D',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#fff6e0',
          fontSize: this.props.textFont,
        },
        splitLine: {
          lineStyle: {
            show: false,
            color: '#193E7D',
          },
        },
      },
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '40%',
          data: [10, 52, 200, 334, 390, 330, 220],
          itemStyle: {
            normal: {
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: {
                  //数值样式
                  color: '#fff6e0',
                  fontSize: this.props.textFont,
                },
              },
            },
          },
        },
      ],
    };
    if (MyEcharts) {
      option.color = ['#009EFA'];
      option.series[0].data = data;
      // option.series[0].label = labelOption;
      option.xAxis[0].data = Xdata;
      option.series[0].name = '游客数量';
      option.series[0].itemStyle.normal.color = color;
      MyEcharts.setOption(option);

      MyEcharts.on('mousemove', function(params) {
        // console.log(params,"params")
        // console.log(option,"option")
        // 获取序列号
        // var seriesIndex = params.seriesIndex;
        // // 修改样式
        // option.series[seriesIndex].itemStyle.emphasis.itemStyle.color = 'red';
        // // 更新图表
        // option.color="blue";
        // option.itemStyle.borderColor="yellow";
        // option.itemStyle.borderWidth="10";
        // option.itemStyle
        // option.borderColor="yellow";
        // option.series[0].itemStyle.normal.color.colorStops[0].color="red";
        // option.series[0].itemStyle.normal.color.colorStops[0].color="yellow";
        // option.tooltip.axisPointer.shadowStyle.color="yellow";
        // MyEcharts.setOption(option);
        
      });

    }
    window.addEventListener('resize', () => {
      MyEcharts.resize();
    });
  }
  render() {
    const { id, height } = this.props;
    return (
      <div>
          <div id={id} style={{ width: '100%', height: height }} />
      </div>
    );
  }
}
export default EchartsBars;
