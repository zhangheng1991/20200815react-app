import React from 'react';
import Lazyload from 'react-lazyload';
import EchartsPies from './../../../component/echarts/pie/EchartsPies';
import EchartBox from './../../../component/echarts/container/EchartsBox';

class NighttimeConsumptionBias extends React.Component {
  render() {
    const {
      titleFont,
      textFon,
      heigth,
      title,
      backGroundType,
      titleFontSize,
      data,
      ChattTitle,
      textFont,
      id,
    } = this.props;
    return (
      <div>
         <Lazyload debounce={300}>
        <EchartBox title={title} >
          {
            <EchartsPies
              ChattTitle={ChattTitle}
              textFont={textFont}
              id={id}
              data={data}
              heigth={heigth}
              subtextTitle={ChattTitle}
            />
          }
        </EchartBox>
        </Lazyload>
      </div>
    );
  }
}
export default NighttimeConsumptionBias;
