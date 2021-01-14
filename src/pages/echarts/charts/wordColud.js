import React from 'react';
import Lazyload from 'react-lazyload';
import WordColuds from './../../../component/echarts/wordCloud/wordColud';
import EchartBox from './../../../component/echarts/container/EchartsBox';

class WordColud extends React.Component {
  render() {
    const { height, id, title, data, ChattTitle, textFont } = this.props;
    return (
      <div>
        {/* <Lazyload debounce={10}> */}
          <EchartBox title={title}>
            {
              <WordColuds
                data={data}
                height={height}
                id={id}
                ChattTitle={ChattTitle}
                textFont={textFont}
              />
            }
          </EchartBox>
        {/* </Lazyload> */}
      </div>
    );
  }
}
export default WordColud;
