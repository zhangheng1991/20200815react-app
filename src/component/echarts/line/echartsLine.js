import React from 'react';
import echarts from 'echarts';

class EchartsLine extends React.Component {
  componentDidMount() {
    const { chartData, color, id } = this.props;
    const myLine = echarts.init(document.getElementById(id));
    let dashedPic =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC';

    let arrName = [];
    let arrValue = [];
    let sum = 0;
    let pieSeries = [],
      lineYAxis = [];

    // 数据处理
    chartData.forEach((v, i) => {
      arrName.push(v.name);
      arrValue.push(v.value);
      sum = sum + v.value;
    });

    // 图表option整理
    chartData.forEach((v, i) => {
      pieSeries.push({
        name: '学历',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
        center: ['30%', '50%'],
        label: {
          show: false,
        },
        data: [
          {
            value: v.value,
            name: v.name,
          },
          {
            value: sum - v.value,
            name: '',
            itemStyle: {
              color: 'rgba(45,48,100,0.0)',
            },
          },
        ],
      });
      pieSeries.push({
        name: '',
        type: 'pie',
        silent: true,
        z: 1,
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
        center: ['30%', '50%'],
        label: {
          show: false,
        },
        data: [
          {
            value: 7.5,
            itemStyle: {
              color: '#E3F0FF',
            },
          },
          {
            value: 2.5,
            name: '',
            itemStyle: {
              color: 'rgba(0,0,0,0)',
            },
          },
        ],
      });
      v.percent = ((v.value / sum) * 100).toFixed(1) + '%';
      lineYAxis.push({
        value: i,
        textStyle: {
          rich: {
            circle: {
              color: color[i],
              padding: [0, 5],
            },
          },
        },
      });
    });

    let option = {
      //   backgroundColor: '#fff',
      color: color,
      grid: {
        top: '15%',
        bottom: '54%',
        left: '30%',
        containLabel: false,
      },
      yAxis: [
        {
          type: 'category',
          inverse: true,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            formatter: function(params) {
              let item = chartData[params];
            
              return (
                '{line|}{circle|●}{name|' +
                item.name +
                '}{bd||}{percent|' +
                item.percent +
                '}{value|' +
                item.value +
                '}{unit|元}'
              );
            },
            interval: 0,
            inside: true,
            textStyle: {
              color: '#FFFFFF',
              fontSize: 14,
              rich: {
                line: {
                  width: "15%",
                  height: 1,
                  // backgroundColor: { image: dashedPic },
                  backgroundColor: '#FFFFFF',
                  border: '1px dashed red',
                },
                name: {
                  color: '#FFFFFF',
                  fontSize: 14,
                },
                bd: {
                  color: '#FFFFFF',
                  padding: [0, 5],
                  fontSize: 14,
                },
                percent: {
                  color: '#FFFFFF',
                  fontSize: 14,
                },
                value: {
                  color: '#FFFFFF',
                  fontSize: 16,
                  fontWeight: 500,
                  padding: [0, 0, 0, 20],
                },
                unit: {
                  fontSize: 14,
                },
              },
            },
            show: true,
          },
          data: lineYAxis,
        },
      ],
      xAxis: [
        {
          show: false,
        },
      ],
      series: pieSeries,
    };
    if (myLine) {
      myLine.setOption(option);
    }
  }

  render() {
    const { height, id } = this.props;
    return (
      <div>
        <div id={id} style={{ width: '100%', height: height }} />
      </div>
    );
  }
}

export default EchartsLine;
