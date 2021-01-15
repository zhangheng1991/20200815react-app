import React from 'react';
import Lazyload from 'react-lazyload';
import EchartsBaiduMap from '../../../component/echarts/map/EchartsBaiduMap';
import EchartBox from './../../../component/echarts/container/EchartsBox';
class AirQuality extends React.Component {
  render() {
    const { id, height, data, source } = this.props;
    return (
      <div>
        <Lazyload debounce={300}>
          <EchartBox>
            {<EchartsBaiduMap id={id} data={data} height={height} source={source} />}
          </EchartBox>
        </Lazyload>
      </div>
    );
  }
}
export default AirQuality;
