import React from 'react';
import WordColuds from './../../../component/echarts/wordCloud/wordColud';
import EchartBox from './../../../component/echarts/container/EchartsBox';

class WordColud extends React.Component{
    render(){
        const {height,id,title,data,ChattTitle,textFont}=this.props;
        return(
            <div>
               <EchartBox title={title}>
                   {
                       <WordColuds data={data} height={height} id={id} ChattTitle={ChattTitle} textFont={textFont} />
                   }
               </EchartBox>
            </div>
        )
    }
}
export default WordColud;