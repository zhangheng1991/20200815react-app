import React from 'react';
import Lazyload from 'react-lazyload';
import EffectScatter from './../../../component/echarts/EffectScatter/EffectScatter';
import EchartBox from './../../../component/echarts/container/EchartsBox';

class AgeDistributionVisitors extends React.Component {
  static defaultProps = {
    // titleFont: 20,
    // textFont: 16,
    // heigth: "400px",
  };

  render() {
    const {
      titleFont,
      textFont,
      height,
      ChattTitle,
      plantCap,
      datalist,
      id,
      data,
      title,
      backGroundType,
      titleFontSize,
    } = this.props;
    return (
      <div>
        <Lazyload debounce={300}>
          <EchartBox backGroundType={2} title={title} titleFontSize={titleFontSize}>
            {
              <EffectScatter
                ChattTitle={ChattTitle}
                height={height}
                plantCap={plantCap}
                datalist={datalist}
                textFont={textFont}
                id={id}
              />
            }
          </EchartBox>
        </Lazyload>
      </div>
    );
  }
}
export default AgeDistributionVisitors;
