import React from 'react';
import echarts from 'echarts';
class EchartsPies extends React.Component {
  componentDidMount() {
    const { data, id, textFont, ChattTitle, subtextTitle } = this.props;
    let MyEcharts = echarts.init(document.getElementById(id));
    let option = {
      title: {
        text: ChattTitle,
        x: 'center',
        y: 'center',
        zlevel: 3, //层级
        textStyle: {
          fontWeight: '20',
          color: '#303030',
          fontSize: textFont,
        },
        // subtext:subtextTitle,
        // subtextStyle:{
        //   color:"#FFFFFF",
        //   fontSize:textFont,
        //   fontWeight:"normal",
        //   align:"left",
        //   verticalAlign:"top",
        // },
      },
      tooltip: {
        trigger: 'item',
        // formatter: '{a} <br/>{b}: {c} ({d}%)',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 10,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        formatter: function(name) {
          console.log(name + 1111);
          // return 'Legend ' + name;
        },
      },
      // graphic: {       //图形中间文字
      //   type: "text",
      //   left: "center",
      //   top: "center",
      //   style: {
      //     text:"游客占比",
      //     textAlign: "center",
      //     fill: "#fff",
      //     fontSize: 20,
      //     color:"#ffffff",
      //     width:"80"
      //   }
      // },

      series: [
        {
          // name: '访问来源',
          type: 'pie',
          radius: [50, 110],
          center: ['50%', '50%'],
          avoidLabelOverlap: false,
          // roseType: 'area',
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: textFont,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: true,
            length: 30,
            length2: 50,
          },
          label: {
            normal: {
              formatter: ' {c|{c}%}  \n  {b|{b}}  \n\n', //图形外文字上下显示
              borderWidth: 20,
              borderRadius: 4,
              padding: [0, 10], //文字和图的边距
              rich: {
                a: {
                  color: '#ffffff',
                  fontSize: textFont,
                  lineHeight: textFont,
                },
                b: {
                  //name 文字样式
                  fontSize: textFont,
                  lineHeight: textFont,
                  color: '#ffffff',
                },
                c: {
                  //value 文字样式
                  fontSize: textFont,
                  lineHeight: textFont,
                  color: '#ffffff',
                  align: 'center',
                },
              },
            },
          },
          //   itemStyle: {
          //     normal: {//颜色渐变
          //         color: new echarts.graphic.LinearGradient(
          //             0, 0, 0, 1,
          //             [
          //                 {offset: 0, color: '#0095FF'},
          //                 {offset: 0.5, color: '#0CB9FF'},
          //                 {offset: 1, color: '#0095FF'}
          //             ]
          //         )
          //     }
          // }
          // data: [
          //   { value: 335, name: '直接访问' },
          //   { value: 310, name: '邮件营销' },
          //   { value: 234, name: '联盟广告' },
          //   { value: 135, name: '视频广告' },
          //   { value: 1548, name: '搜索引擎' }
          // ]
        },
        // 内圆
        {
          name: '访问来源',
          type: 'pie',
          zlevel: 2, //层级
          radius: ['0', '40%'],
          center: ['50%', '50%'],
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: 'rgba(0,0,0,.3)',
              color: '#fff',
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,
          data: [100],
        },
      ],
    };
    if (MyEcharts) {
      option.series[0].name = '西樵山风景';
      option.series[0].data = data;
      option.color = ['#E9C675', '#2E86EB'];
      // option.series[0].itemStyle.normal.color=new echarts.graphic.LinearGradient(
      //   0, 0, 0, 1,
      //   [
      //     { offset: 0, color: '#DE0113' },                   //柱图渐变色
      //     { offset: 0.5, color: '#641947' },                 //柱图渐变色
      //     { offset: 1, color: '#00266C' },                   //柱图渐变色
      //   ]
      // );
      MyEcharts.setOption(option);
    }
    window.addEventListener('resize', () => {
      // const myChart = echarts.init(document.getElementById('chart-left'))
      // const myChart1 = echarts.init(document.getElementById('chart-btm'))
      MyEcharts.resize();
      // myChart1.resize()
    });
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log(this.props);
  }
  render() {
    const { height, id } = this.props;
    return (
      <div>
        <div>
          <div id={id} style={{ width: '100%', height: height ? height : '400px' }} />
        </div>
      </div>
    );
  }
}
export default EchartsPies;
