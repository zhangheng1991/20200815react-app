import React from 'react';
// import PublicBox from '../PublicBox';
// import option from "../../../components/charts/EchartsBar";
import echarts from 'echarts';
// import style from '../style.less';
// import EchartsReact from  "echarts-for-react";
import './china.json';
// import 'echarts-gl'
// import china from  "china";
// echarts.registerMap('china', china)
class chinaMap extends React.Component {
  static defaupltProps = {
    height: 400,
  };

  componentDidMount() {
    const { data, Xdata, geoCoordMap, HFData, dataT2, ChattTitle, textFont } = this.props;
    console.log(HFData)
    let MyEcharts = echarts.init(document.getElementById(this.props.id));
    if (HFData) {
      var color1 = ['#F6CF12', '#00FE2A', '#FA3C00', '#FFFFFF']; //绿  黄  红
      geoCoordMap['南澳'] = [113.12244, 23.009505];

      var GZData = [];
      var tempData = ['南澳', GZData];

      HFData.map((item, index) => {
        var arr = [];
        arr.push(item);
        arr.push({
          name: '南澳',
        });
        GZData.push(arr);
      });

      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [fromCoord, toCoord],
              value: dataItem[0].value,
              type: dataItem[1].type, //数值
            });
          }
        }
        return res;
      };

      var color = ['#00ff78', '#ff971b', '#acff43', '#ff73b7', '#ffff46', '#27bbfe'];
      var series = [
        {
          type: 'map',
          map: 'china',
          //    width: '100%',
          geoIndex: 1,
          zlevel: 1,
          //    aspectScale: 0.75, //长宽比
          showLegendSymbol: false, // 存在legend时显示
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
              textStyle: {
                color: '#fff',
              },
            },
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: 'rgba(128, 128, 128, 0)',
              borderColor: '#49a7d5', //省市边界线00fcff 516a89
            },
            emphasis: {
              areaColor: 'rgba(128, 128, 128, 0)',
            },
          },
          data: [
            {
              name: '南海诸岛',
              value: 0,
              itemStyle: {
                normal: {
                  opacity: 0,
                  label: {
                    show: false,
                  },
                },
              },
            },
          ],
        },
      ];

      series.push(
        {
          name: tempData[0],
          type: 'lines',
          zlevel: 3,
          symbolSize: 25,
          //  symbol: ['none', 'circle'],
          effect: {
            show: true,
            period: 6,
            trailLength: 0,
            // symbol: planePath,
            // symbolSize: 6,
          },
          lineStyle: {
            normal: {
              color: function (params) {
                var num = params.data.numValue;
                // console.log(params.data.type);
                var type = params.data.type;
                if (type == 1) {
                  return color1[0];
                }
                if (type == 2) {
                  return color1[1];
                }
                if (type == 3) {
                  return color1[2];
                }
                if (type == 4) {
                  return color1[3];
                }
              },
              width: 1.5,
              opacity: 1,
              curveness: 0.2,
            },
          },
          data: convertData(tempData[1]),
        },
        {
          name: tempData[0],
          type: 'effectScatter',
          symbolSize: 10,
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            brushType: 'stroke',
          },
          label: {
            normal: {
              show: true,
              position: 'right',
              formatter: '{b}',
            },
          },
          symbolSize: function (val) {
            // console.log(val);
            return 10;
          },
          itemStyle: {
            normal: {
              //                fontSize: 80,
            },
          },
          data: tempData[1].map(function (dataItem) {
            console.log(dataItem)
            return {
              name: dataItem[0].name,
              value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
            };
          }),
        },
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 4,
          symbolSize: 10,
          label: {
            normal: {
              show: true,
              position: 'right',
              formatter: '{b}',

              color: 'white',
            },
          },
          itemStyle: {
            normal: {
              color: 'white',
            },
          },
          rippleEffect: {
            brushType: 'stroke',
            period: 4, //动画时间，值越小速度越快
            brushType: 'stroke', //波纹绘制方式 stroke, fill
            scale: 5, //波纹圆环最大限制，值越大波纹越大
          },
          data: [
            {
              name: tempData[0],
              value: geoCoordMap[tempData[0]],
              visualMap: true,
            },
          ],
        },
      );

      var option = {
        tooltip: {
          show:true,
          trigger: 'item',
          formatter: function (params) {
            console.log(params)
            if (params.seriesType == 'scatter' && params.name != tempData[0]) {
              return (
                '<br>' +
                params.seriesName +
                ' ---> ' +
                params.data.name +
                '<br />数量：' +
                params.data.value[2]
              );
            } else if (params.seriesType == 'lines') {
              return (
                '<br>' +
                params.data.fromName +
                ' ---> ' +
                params.data.toName +
                '<br />数量：' +
                params.data.value
              );
            } else {
              return params.name;
            }
          },
        },
        visualMap: {
          show: true,
          min: 0,
          max: 40100,
          calculable: true,
          left: '20',
          // top: 'bottom',
          z: 10,
          text: ['高', '低'], // 文本，默认为数值文本
          calculable: true, //显示最大值和最小值
          textStyle: {
            color: '#ffffff',
          },
          itemHeight: 100,
          bottom: 20,
          color: ['#FA3C00', '#00FE2A', '#F6CF12'],
        },
        geo: {
          map: 'china',
          // aspectScale: 0.75,
          zoom: 0.98,
          // zlevel: 2,
          label: {
            emphasis: {
              show: false,
            },
          },
          roam: false, //是否允许缩放
          itemStyle: {
            opacity: 1, // 透明度
            // color: '#4575b4',//地图颜色
            borderWidth: 10, //分界线宽度
            borderColor: '#4FF5FD', //分界线颜色
            normal: {
              borderColor: '#4FF5FD', //省市边界线00fcff 516a89
              // borderColor: '#fff',
              borderWidth: 1,
              color: 'red',
              areaColor: '#000E3D',
              shadowBlur: 8,
              shadowColor: '#4FF5FD',
              // fontWeightL: 700,
              label: {
                show: true,
              },
              areaStyle: {
                color: '#4FF5FD',
              }, //设置地图背景色的颜色设置,
              color: '#000E3D', //刚才说的图例颜色设置
            },
            emphasis: {
              // color: '#fff',
              areaColor: '#136499',
            },
            borderColor: '#4FF5FD', //省市边界线00fcff 516a89
          },
          regions: [
            //右下角南海诸岛
            {
              name: '南海诸岛',
              itemStyle: {
                // 隐藏地图
                normal: {
                  opacity: 0, // 为 0 时不绘制该图形
                },
              },
              label: {
                show: false, // 隐藏文字
              },
            },
          ],
        },
        series: series,
      };
    }
    if (MyEcharts) {
      console.log(option);
      MyEcharts.setOption(option);
    }
    window.addEventListener('resize', () => {
      MyEcharts.resize();
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  render() {
    const {  height,id } = this.props;
    return (
      <div>
        <div >
          <div
            id={id}
            style={{ width: '100%', height: height ? height : '600px' }}
          ></div>
        </div>
      </div>
    );
  }
}
export default chinaMap;
