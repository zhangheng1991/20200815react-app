import React from 'react';
import echarts from 'echarts';
import Lazyload from 'react-lazyload';
import EchartBars from './../../../component/echarts/bar/EchartsBar';
import EchartBox from './../../../component/echarts/container/EchartsBox';
class EchartsBar extends React.Component {
  render() {
    const {
      titleFont,
      textFont,
      heigth,
      title,
      backGroundType,
      titleFontSize,
      ChattTitle,
      id,
      Xdata,
      data,
      legendData,
    } = this.props;
    return (
      <div>
         <Lazyload debounce={300}>
        <EchartBox title={title}>
          {
            <EchartBars
              id={ChattTitle}
              textFont={textFont}
              Xdata={Xdata}
              data={data}
              legendData={legendData}
              heigth={heigth}
            />
          }
        </EchartBox>
        </Lazyload>
      </div>
    );
  }
}
export default EchartsBar;
