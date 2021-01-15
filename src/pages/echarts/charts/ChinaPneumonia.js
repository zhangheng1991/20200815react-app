import React from 'react';
import Lazyload from 'react-lazyload';
import MapPneumonia from '../../../component/echarts/map/MapPneumonia';
import EchartBox from './../../../component/echarts/container/EchartsBox';
class ChinaPneumonia extends React.Component {
  render() {
    const { dataList, id, height } = this.props;
    return (
      <div>
        <Lazyload debounce={300}>
          <EchartBox>{<MapPneumonia dataList={dataList} id={id} height={height} />}</EchartBox>
        </Lazyload>
      </div>
    );
  }
}
export default ChinaPneumonia;
