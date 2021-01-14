import React from 'react';
import Lazyload from 'react-lazyload';
import PictorialBar from './../../../component/echarts/bar/PictorialBar';
import EchartBox from './../../../component/echarts/container/EchartsBox';

class AnalysistouristGender extends React.Component {
  render() {
    const { titleFont, textFont, height, title, ChattTitle, id, data, symbols } = this.props;

    return (
      <div>
        <Lazyload debounce={300}>
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
        </Lazyload>
      </div>
    );
  }
}
export default AnalysistouristGender;
