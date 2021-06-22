import React from 'react';
import echarts from 'echarts';

class EchartsLine extends React.Component {
    state={
        chartData:[],
    }
    UNSAFE_componentWillReceiveProps(nextProps){
          console.log(nextProps)
          if(nextProps.chartData &&nextProps.chartData !=this.state.chartData){
              this.setState({chartData:nextProps.chartData})
              this.EChartsFunc(nextProps.chartData);
          }
    }
  componentDidMount() {
    const { chartData, color, id } = this.props;
    this.EChartsFunc(chartData);
  }
  EChartsFunc(chartData){
    const {  color, id } = this.props;
  
    const myLine = echarts.init(document.getElementById(id));
  

    let option = {
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series:chartData
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
