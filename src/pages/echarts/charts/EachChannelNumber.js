import React from 'react';
import EchartsBarsCross from './../../../component/echarts/pie/EchartsBarsCoss';
import EchartBox from './../../../component/echarts/container/EchartsBox';
import echarts from "echarts";


class EachChannelNumber extends React.Component {
//   static defaultProps={
//     titleFont: 20,
//     textFont: 16,
//     heigth:"360px",
//   }
  render() {
    const {titleFont, textFont,height,title,id,ChattTitle,Xdata,data,color} = this.props;
    
    return (
      <div>
        <EchartBox title={title} >
          {<EchartsBarsCross id={id} textFont={textFont} Xdata={Xdata} data={data} color={color}
           ChattTitle={ChattTitle} height={height}/>}
        </EchartBox>
      </div>
    )
  }
}
export default EachChannelNumber;
