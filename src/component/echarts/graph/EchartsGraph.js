import React from 'react';
import echarts from 'echarts';

class EchartsGraph extends React.Component {
  componentDidMount() {
    const { data, OpenHierarchy,symbolSize,fontSize,id } = this.props;

    let MyEcharts = echarts.init(document.getElementById(id));
    const option = {
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
      },
      series: [
        {
          type: 'tree',
          data: data,
          left: 0,
          right: 0,
          top: 20,
          // bottom: 40,
          symbol: 'rectangle',
          symbolSize:symbolSize?symbolSize: [50, 20],
          orient: 'vertical',
          // edgeShape: 'curve',//默认曲线
          edgeShape: 'polyline', //直线
          // roam: true,
          // expandAndCollapse: true,
          // edgeForkPosition: '0',
          // edgeForkPosition:'20%',
          // initialTreeDepth :2,
          initialTreeDepth :OpenHierarchy?OpenHierarchy:-1,//-1，null全部展开
          label: {
            position: 'insideTop',
            // verticalAlign: 'middle',
            // align: 'right',
            top: '20',
            fontSize: fontSize?fontSize:10,
            color: '#FFFFFF',
          },

          leaves: {
            label: {
              show: true,
              // position: 'right',
              // verticalAlign: 'middle',
              // align: 'left',
            },
          },

          itemStyle: {
            color: '#3C70F0',
            borderColor: '#3C70F0',
          },

          lineStyle: {
            curveness: 0,
          },

          animationDurationUpdate: 750,
        },
      ],
    };
    if (MyEcharts) {
      MyEcharts.setOption(option);
    }
    window.addEventListener('resize', () => {
      MyEcharts.resize();
    });
  }

  render() {
    const { height } = this.props;
    return (
      <div>
        <div id={this.props.id} style={{ width: '100%', height: height }} />
      </div>
    );
  }
}
export default EchartsGraph;
