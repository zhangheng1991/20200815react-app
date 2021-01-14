import React from 'react';
import Lazyload from 'react-lazyload';
import EchartsLiquidfill from './../../../component/echarts/liquidfill/EchartsLiquidfill';
import EchartBox from './../../../component/echarts/container/EchartsBox';

class TouristTransaction extends React.Component {
  render() {
    const { titleFont, textFont, ChattTitle, data, id, title, height } = this.props;
    return (
      <div>
        <Lazyload debounce={300}>
          <EchartBox title={title}>
            {
              <EchartsLiquidfill
                ChattTitle={ChattTitle}
                textFont={textFont}
                id={id}
                data={data}
                height={height}
              />
            }
          </EchartBox>
        </Lazyload>
      </div>
    );
  }
}
export default TouristTransaction;
