import React from 'react';
import Lazyload from 'react-lazyload';
import EchartsAirMap from '../../../component/echarts/map/EchartsAirMap';
import EchartBox from './../../../component/echarts/container/EchartsBox';
class ChinaEpidemic extends React.Component {
  render() {
    const { data, id, height } = this.props;
    return (
      <div>
        <Lazyload debounce={300}>
          <EchartBox>{<EchartsAirMap data={data} id={id} height={height} />}</EchartBox>
        </Lazyload>
      </div>
    );
  }
}
export default ChinaEpidemic;
