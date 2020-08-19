import React from 'react';
import PictorialBar from './../../../component/echarts/bar/PictorialBar';
import EchartBox from './../../../component/echarts/container/EchartsBox';

class AnalysistouristGender extends React.Component {
  render() {
    const { titleFont, textFont, height, title, ChattTitle, id, data, symbols } = this.props;
    
    return (
      <div>
        <EchartBox title={title}>
          {
            <PictorialBar
              ChattTitle={ChattTitle}
              height={height}
              textFont={textFont}
              id={id}
              symbols={symbols}
              data={data}
            />
          }
        </EchartBox>
      </div>
    );
  }
}
export default AnalysistouristGender;
