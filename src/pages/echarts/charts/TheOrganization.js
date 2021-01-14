import React from 'react';
import EchartBox from './../../../component/echarts/container/EchartsBox';
import EchartsGraph from '../../../component/echarts/graph/EchartsGraph';
import Lazyload from 'react-lazyload';
class TheOrganization extends React.Component {
  render() {
    const { title, id, height } = this.props;
    return (
      <div>
        <Lazyload debounce={300}>
          <EchartBox title={title}>
            {
              <EchartsGraph
                id={id}
                height={height}
                //   data={data}
              />
            }
          </EchartBox>
        </Lazyload>
      </div>
    );
  }
}
export default TheOrganization;
