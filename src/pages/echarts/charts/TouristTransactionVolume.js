import React from 'react';
import EchartsPieRing from './../../../component/echarts/pie/EchartsPieRing';
import EchartBox from './../../../component/echarts/container/EchartsBox';
class TouristTransactionVolume extends React.Component {
  render() {
    const { title, id, TitleUnit, textFont, data, height } = this.props;
    return (
      <div>
        <EchartBox title={title}>
          {
            <EchartsPieRing
              TitleUnit={TitleUnit}
              textFont={textFont}
              id={id}
              data={data}
              height={height}
            />
          }
        </EchartBox>{' '}
      </div>
    );
  }
}
export default TouristTransactionVolume;
