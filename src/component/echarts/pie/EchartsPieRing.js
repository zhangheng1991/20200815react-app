import React from 'react';
import echarts from 'echarts';
class EchartsPieRing extends React.Component {
  componentDidMount() {
    const { data, id, textFont, unit } = this.props;
    let MyEcharts = echarts.init(document.getElementById(id));
    let option = {
      color: ['#52DFF3', '#CD4BD3', '#FECA41', '#2DBA6E', '#6146FA', '#921B56', '#C51648'],
      // backgroundColor: '#0A173B',
      title: {
        text: '',
        left: 'center',
        top: '50%',
        textStyle: {
          fontSize: 22,
          color: '#fff',
          fontWeight: 'normal',
        },
      },
      tooltip: {
        trigger: 'item',
        // formatter: function(params) {
      
        //   return '<div>' + 22 + '</div>';
        // },
      },
      legend: {
        orient: 'vertical',
        right: '5%',
        top: 'center',
        itemWidth: 30,
        itemHeight: 15,
        textStyle: {
          color: 'white',
          fontSize: textFont,
        },
        // formatter(params){
      
        //     return  [
        //       '{a|a}{b|b}'
        //   ].join('\n')
        // },
      //   formatter: [
      //     '{a|这段文本采用样式a}',
      //     '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
      // ].join('\n'),
      formatter: function (name) {
      
            var total = 0;
            var tarValue;
            for (var i = 0, l = data.length; i < l; i++) {
              total += data[i].value;
              if (data[i].name == name) {
                tarValue = data[i].value;
              }
            }
            var p = ((tarValue / total) * 100).toFixed(2);
            return name + " " + " " + p + "%";

      },
      },
      series: [
        {
          type: 'pie',
          roseType: 'radius',
          radius: ['25%', '80%'],
          center: ['45%', '50%'],
          // data: [{
          //   value: 220,
          //   name: '社会组织'
          // }, {
          //   value: 120,
          //   name: '事业单位'
          // },
          // {
          //   value: 189,
          //   name: '工商企业登记注册'
          // }
          // ],
          // label: {
          //   normal: {
          //     position: "inside",
          //     padding: [0, 10],
          //     formatter: '{d}%',
          //     rich: {
          //       font: {
          //         fontSize: textFont,
          //         padding: [5, 0],
          //         color: '#fff'
          //       },
          //       hr: {
          //         height: 0,
          //         borderWidth: 0,
          //         width: '100%',
          //         borderColor: '#fff'
          //       }
          //     }
          //   },
          // },
          label: {
            normal: {
              position: 'inside',
              padding: [0, 10],
              // formatter: '{d}%\n  {b|{b}}',
              formatter: unit == 'number' ? '{c|{c}}' : '{d}%',
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
          labelLine: {
            show: false,
            length: 0,
            length2: 0,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 100,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0,0,0,0.5)',
            },
          },
        },
      ],
    };

    if (MyEcharts) {
      option.series[0].data = data;
      MyEcharts.setOption(option);
    }
    window.addEventListener('resize', () => {
      MyEcharts.resize();
    });
  }
  render() {
    const { id, height } = this.props;
    return (
      <div>
        <div>
          <div id={id} style={{ width: '100%', height: height }} />
        </div>
      </div>
    );
  }
}
export default EchartsPieRing;
