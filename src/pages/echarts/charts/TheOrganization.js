import React from 'react';
import Lazyload from 'react-lazyload';
import EchartBox from './../../../component/echarts/container/EchartsBox';
import EchartsGraph from '../../../component/echarts/graph/EchartsGraph';

class TheOrganization extends React.Component {
  render() {
    const { title, id, height, data,OpenHierarchy,symbolSize } = this.props;
    return (
      <div>
        <Lazyload debounce={300}>
          <EchartBox title={title}>
            {<EchartsGraph id={id} height={height} data={data}OpenHierarchy={OpenHierarchy} symbolSize={symbolSize} />}
          </EchartBox>
        </Lazyload>
      </div>
    );
  }
}
export default TheOrganization;
