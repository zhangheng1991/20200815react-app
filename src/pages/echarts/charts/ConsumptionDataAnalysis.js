import React from 'react';
import Lazyload from 'react-lazyload';
import EchartBars from './../../../component/echarts/bar/EchartsBarTwice';
import EchartBox from './../../../component/echarts/container/EchartsBox';

class ConsumptionDataAnalysis extends React.Component {
  render() {
    const {
      heigth,
      title,
      ChattTitle,
      id,
      xData,
      lineData,
      lastYearData,
      thisYearData,
      timeLineData,
      legend,
      colors,
    } = this.props;

    return (
      <div>
        <Lazyload debounce={300}>
          <EchartBox title={title}>
            {
              <EchartBars
                unit={ChattTitle}
                xData={xData}
                lineData={lineData}
                lastYearData={lastYearData}
                thisYearData={thisYearData}
                timeLineData={timeLineData}
                legend={legend}
                colors={colors}
                heigth={heigth}
                id={id}
              />
            }
          </EchartBox>
        </Lazyload>
      </div>
    );
  }
}

export default ConsumptionDataAnalysis;
