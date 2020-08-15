/**
 * Created by zhangheng on 2019/5/18.
 */
import React from "react";
import styles from './Tests.less';
import Echarts from "echarts";

class Tests extends React.Component {

  componentDidMount(){
    this.MyCharts();

  }
  MyCharts(){
    const MyCharts = Echarts.init(document.getElementById('MyCharts'));
    MyCharts.setOption({

     
      animation: false,
      backgroundColor:'white',
        title: {
            show: false
        },
        series: [{
            type: "gauge",
            min: 0,
            max: 100,
            radius: "90%",
            center: ["50%", "50%"],
            axisLine: {
                show: true,
                lineStyle: {
                    width: 10,
                    shadowBlur: 5,
                    color: [
                  [0.33,'#e54261'],
                  [0.66,' #4876e5'],
                  [1,'#27e4ae']
                    ]
                }
            },
            axisTick: {
                show: true,
                length:20,
                lineStyle:{
                    width: 5,
                    color:'auto'
                }
                
            },
            axisLabel: {
                show: true,
                textStyle: {
                  fontSize: 12,
                  color: "#27e4ae"
                }
            },
            splitLine: {
                show: true,
                length:30,
                lineStyle:{
                    width: 5,
                    color:'auto'
                }
            },
           pointer: {
                show: true,
                width: 20,
                length: 400,
            },
            detail: {
                formatter: '{value}%',
                offsetCenter: ['0', '50%'],
                textStyle: {
                    fontSize: 24,
                    color: "#27e4ae"
                }
            },
            itemStyle:{
                 "color": "#27e4ae",
                 "borderColor":"#27e4ae",
                 "borderWidth": 10,
                 "shadowOffsetX":11,
                 "shadowOffsetY":11,
                 "shadowColor":"red",
                 "shadowBlur":10,
            },
            data: [{value: 5}]
        },
                {//指针外环
                "type": 'pie',
                "hoverAnimation": false,
                "legendHoverLink": false,
                "radius": ['15', '20'],
                "backgroundColor":"red",
                "z": 1000,
                "label": {
                    "normal": {
                        "show": false
                    }
                },
                "labelLine": {
                    "normal": {
                        "show": false
                    }
                },
                "data": [{
                    "value": 100,
                    itemStyle: {
                        normal: {
                            color: "red"
                        }
                    }
                }]
            },
            {//指针内环
                "type": 'pie',
                "hoverAnimation": false,
                "legendHoverLink": false,
                "backgroundColor":"red",
                "radius": ['10', '10'],
                "z": 10,
                "label": {
                    "normal": {
                        "show": false
                    }
                },
                "labelLine": {
                    "normal": {
                        "show": false
                    }
                },
                "data": [{
                    "value": 100,
                    itemStyle: {
                        normal: {
                            color: "red"
                        }
                    }
                }]
            }]
    });
  }
  render() {
    return (
      <div>
        <div className={styles.backGround}></div>
        <div className={styles.content}>
         <div>我是头部!!!!!!!!</div>
         <div id="MyCharts" style={{height:"400px"}}></div>
          <div className={styles.First}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>10</div>

          </div>
          <div className={styles.Second}>
            <div></div>
          </div>
          <div className={styles.Three}>
            <div></div>
          </div>
          <div className={styles.Four}>
            <div></div>
          </div>
          <div className={styles.Five}>
            <div></div>
          </div>
        </div>

      </div>
    )
  }
}
export default Tests;
