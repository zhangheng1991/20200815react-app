import React from 'react';
import EchartsBars from './../../../component/echarts/bar/EchartsBars';
import EchartBox from './../../../component/echarts/container/EchartsBox';
class FoodBeverage extends React.Component {
  render() {
      const {title,textFont,id,Xdata,data,color,height,ChattTitle}=this.props;
    return (
      <div>
        <EchartBox title={title}>
          {
            <EchartsBars
            id={id} textFont={textFont} Xdata={Xdata} data={data} color={color} height={height}
            />
          }
        </EchartBox>
      </div>
    );
  }
}

export default FoodBeverage;
