import React from 'react';
import EchartBox from './../../../component/echarts/container/EchartsBox';
import EchartsGraph from '../../../component/echarts/graph/EchartsGraph';
class TheOrganization extends React.Component {
  render() {
    const { title, id, height } = this.props;
    return (
      <div>
        <EchartBox title={title}>
          {
            <EchartsGraph
              id={id}
              height={height}
              //   data={data}
            />
          }
        </EchartBox>
      </div>
    );
  }
}
export default TheOrganization;
