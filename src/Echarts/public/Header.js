import React from "react";
import style from "./style.less";
class Echarts extends React.Component{
  render(){
    return(
      <div className={`${style["EchartsHeader"]}`}>
        echarts头部
        {this.props.children}
      </div>
    )
  }
}
export default Echarts;