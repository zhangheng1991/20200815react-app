import React from 'react';
import echarts from "echarts";
import Lazyload from 'react-lazyload';
import EchartsBarsCross from './../../../component/echarts/pie/EchartsBarsCoss';
import EchartBox from './../../../component/echarts/container/EchartsBox';

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
         <Lazyload debounce={300}>
        <EchartBox title={title} >
          {<EchartsBarsCross id={id} textFont={textFont} Xdata={Xdata} data={data} color={color}
           ChattTitle={ChattTitle} height={height}/>}
        </EchartBox>
        </Lazyload>
      </div>
    )
  }
}
export default EachChannelNumber;
