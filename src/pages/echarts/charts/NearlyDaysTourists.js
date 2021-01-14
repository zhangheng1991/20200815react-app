import React from 'react';
import Lazyload from 'react-lazyload';
import EchartsBarsCross from './../../../component/echarts/bar/EchartsBarsCross';
import EchartBox from './../../../component/echarts/container/EchartsBox';
class NearlyDaysTourists extends React.Component {
  render() {
    const { span, title, data, height, color, id, Xdata, textFont } = this.props;
    return (
      <div>
        <Lazyload debounce={300}>
          <EchartBox title={title}>
            {
              <EchartsBarsCross
                data={data}
                Xdata={Xdata}
                height={height}
                color={color}
                id={id}
                textFont={textFont}
              />
            }
          </EchartBox>
        </Lazyload>
      </div>
    );
  }
}

export default NearlyDaysTourists;
