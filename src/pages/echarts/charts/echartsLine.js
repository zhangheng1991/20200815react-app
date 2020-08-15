import React from 'react';
import EchartLine from './../../../component/echarts/line/echartsLine';
import EchartBox from './../../../component/echarts/container/EchartsBox';
import { Col, Row } from 'antd';
class EchartsLine extends React.Component {
  static defaultProps = {
    span: 12,
  };
  render() {
    const { span,title,chartData,height,color,id } = this.props;
    return (
      <div>
        <EchartBox title={title}>{
          <EchartLine chartData={chartData} height={height}  color={color} id={id}/>
          }</EchartBox>
      </div>
    );
  }
}
export default EchartsLine;
