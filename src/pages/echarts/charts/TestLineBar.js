import React from 'react';
import Lazyload from 'react-lazyload';
import LineBar from './../../../component/echarts/line/LineBar';
import EchartBox from './../../../component/echarts/container/EchartsBox';

class AgeDistributionVisitors extends React.Component {
    static defaultProps = {
        // titleFont: 20,
        // textFont: 16,
        // heigth: "400px",
    };

    render() {
        const {
            textFont,
            height,
            xAxisData,
            piecesData,
            seriesData,
            id,
            title,
            titleFontSize,
            background
        } = this.props;
        return (
            <div>
                <Lazyload debounce={300}>
                    <EchartBox backGroundType={2} title={title} titleFontSize={titleFontSize} background={background}>
                        {
                            <LineBar
                                xAxisData={xAxisData}
                                height={height}
                                piecesData={piecesData}
                                seriesData={seriesData}
                                textFont={textFont}
                                id={id}
                            />
                        }
                    </EchartBox>
                </Lazyload>
            </div>
        );
    }
}
export default AgeDistributionVisitors;
