import React from 'react';
import echarts from 'echarts';

class EchartsLine extends React.Component {
    componentDidMount() {
        const { xAxisData, piecesData,seriesData, id } = this.props;
        const myLine = echarts.init(document.getElementById(id));

        let option = {
            title: {
                text: 'Distribution of Electricity',
                subtext: 'Fake Data'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        formatter: function (parameter) {
                            // console.log(parameter, "parameter")
                            return parameter.value;
                        }
                    }
                },
                show: true
            },
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                // prettier-ignore
                data: xAxisData,
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} W'
                },
                axisPointer: {
                    snap: true
                }
            },
            visualMap: {
                show: false,
                dimension: 0,
                pieces: piecesData
            },
            series: [
                {
                    name: 'Electricity',
                    type: 'line',
                    smooth: false,
                    // prettier-ignore
                    data: seriesData,
                    markArea: {
                        itemStyle: {
                            color: 'rgba(255, 173, 177, 0.4)'
                        },
                        data: [
                            [
                                {
                                    name: 'Morning Peak',
                                    xAxis: '07:30'
                                },
                                {
                                    xAxis: '10:00'
                                }
                            ],
                            [
                                {
                                    name: 'Evening Peak',
                                    xAxis: '17:30'
                                },
                                {
                                    xAxis: '21:15'
                                }
                            ]
                        ]
                    }
                }
            ]
        };
        if (myLine) {
            myLine.setOption(option);
        }
    }

    render() {
        const { height, id } = this.props;
        return (
            <div>
                <div id={id} style={{ width: '100%', height: height }} />
            </div>
        );
    }
}

export default EchartsLine;
