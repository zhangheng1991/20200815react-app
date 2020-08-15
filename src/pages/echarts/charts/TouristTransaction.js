import React from 'react';
import EchartsLiquidfill from './../../../component/echarts/liquidfill/EchartsLiquidfill';
import EchartBox from './../../../component/echarts/container/EchartsBox';

class TouristTransaction extends React.Component{
    render(){
        const {titleFont, textFont,ChattTitle,data,id,title,height} = this.props;
        return(
            <div>
                <EchartBox title={title} >
                    {
                         <EchartsLiquidfill ChattTitle={ChattTitle} textFont={textFont} id={id} data={data} height={height}/>
                    }
                </EchartBox>
            </div>
        )
    }
}
export default TouristTransaction;