import React from 'react';
import Lazyload from 'react-lazyload';
import EchartsMap from './../../../component/echarts/map/EchartsMap';
import EchartBox from './../../../component/echarts/container/EchartsBox';

class HuangFeiHong extends React.Component {
  render() {
    const { title, textFont, id, height, ChattTitle, TitleUnit, geoCoordMap, dataT } = this.props;
    return (
      <div>
        <Lazyload debounce={300}>
          <EchartBox title={title}>
            {
              <EchartsMap
                TitleUnit={TitleUnit}
                ChattTitle={ChattTitle}
                textFont={textFont}
                id={id}
                geoCoordMap={geoCoordMap}
                dataT={dataT}
                height={height}
              />
            }
          </EchartBox>
        </Lazyload>
      </div>
    );
  }
}

export default HuangFeiHong;
