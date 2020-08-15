import React from 'react';
import EchartsLiquidfillBar from './../../../component/echarts/liquidfill/EchartsLiquidfillBar';
import EchartBox from './../../../component/echarts/container/EchartsBox';

class DataAnalysisTourists extends React.Component {
  render() {
    const {
      titleFont,
      textFont,
      height,
      color,
      id,
      title,
      backGroundType,
      titleFontSize,
      data,
    } = this.props;
    return (
      <div>
        <EchartBox title={title}>
          {
            <EchartsLiquidfillBar
              textFont={textFont}
              color={color}
              height={height}
              id={id}
              data={data}
            />
          }
        </EchartBox>
      </div>
    );
  }
}
export default DataAnalysisTourists;
