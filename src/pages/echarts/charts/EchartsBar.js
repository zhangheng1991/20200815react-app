import React from 'react';
import echarts from 'echarts';
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
      </div>
    );
  }
}
export default EchartsBar;
