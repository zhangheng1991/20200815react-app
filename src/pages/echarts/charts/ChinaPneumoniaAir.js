import React from 'react';
import Lazyload from 'react-lazyload';
import AirbubblesMap from '../../../component/echarts/map/AirbubblesMap';
import EchartBox from './../../../component/echarts/container/EchartsBox';
class ChinaPneumoniaAir extends React.Component {
  render() {
    const { outvalue, outname, id, height } = this.props;
    return (
      <div>
        <Lazyload debounce={300}>
          <EchartBox>{<AirbubblesMap outvalue={outvalue} 
          outname={outname} id={id} height={height} />}</EchartBox>
        </Lazyload>
      </div>
    );
  }
}
export default ChinaPneumoniaAir;
