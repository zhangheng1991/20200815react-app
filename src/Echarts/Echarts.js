import React from "react";
import PublicEcharts from "./public/PublicEcharts";
import { Col } from "antd";
import style from "./public/style.less";
const data = { value: 10, id: "1" }
const data1 = { value: 50, id: "2" }
const data2 = { value: 80, id: "3" }
const PublicData = [
  { value: 20, id: "1" },
  { value: 50, id: "     2" },
  { value: 80, id: "3" }
]
class Echarts extends React.Component {
  render() {
    return (
      <div>
        我是echarts的仪表盘
        <div className={`${style["EchartsBox"]}`}>
            {
              PublicData.map((item,index)=>{
                return(
                  <PublicEcharts id={"SecondEecharts" + item.id} data={item} num={item.id} />
                )
              })
            }

        </div>
        <div className={`${style["EchartsBox"]}`}>

          <PublicEcharts id={"FirstEecharts" + data.id} data={data} num="1" />


          <PublicEcharts id={"FirstEecharts" + data1.id} data={data1} num="2" />

          <PublicEcharts id={"FirstEecharts" + data2.id} data={data2} num="3" />

        </div>


      </div>
    )
  }
}
export default Echarts;