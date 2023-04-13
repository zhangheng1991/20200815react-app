import React, { Component } from 'react'
import d3 from 'd3'
import './chart.css'

import { List, message, Avatar, Spin } from 'antd';
// import InfiniteScroll from 'react-infinite-scroller';

export class Chart1 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nodes: [],
            links: []
        }
    }

    componentWillMount() {

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.nodes.length && nextProps.nodes != this.props.nodes) {
            this.setState({
                nodes: nextProps.nodes,
                links: nextProps.links
            }, function () {
                this.drawChart()
            })
        }
    }

    componentDidMount() {
        console.log(this.props,d3,"d3")
        if (this.props.nodes && this.props.nodes.length&&d3) {
            this.drawChart();
        }
    }

    _force = null;
    _svg = null;
    drawChart = () => {
        // 获取数据
        var graph = this.state;
        // 移除旧元素
        console.log(d3,"d3")
        d3.select(".d3").selectAll('*').remove();

        var width = 880,
            height = 700;
        // 设置颜色
        var color = d3.scale.category20();
        // 设置布局
        this._force = d3.layout.force()
            .charge(-1500)//排斥力
            .linkDistance(50)//距离
            .size([width, height])
            .nodes(graph.nodes)
            .links(graph.links)
            .start();

        // 设置平移和缩放
        var zoom = d3.behavior.zoom()//缩放配置，
            .scaleExtent([0.4, 2])//缩放比例
            .on("zoom", zoomed);

        function zoomed() {//缩放函数
            d3.selectAll("g").attr("transform",//svg下的g标签移动大小
                "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
        }

        // 设置画布
        this._svg = d3.select(".d3").append("svg")
            .attr("width", width)
            .attr("height", height)
            .call(zoom);

        // 设置连线
        var link = this._svg.append("g").selectAll(".link")
            .data(graph.links)
            .enter()
            .append("line")
            .attr("class", "link");
        // .style("stroke", "#000")
        // .style("stroke-width", function (d) {
        //     return Math.sqrt(d.value);
        // });

        //边上的文字（人物之间的关系）            
        // var edges_text = this._svg.selectAll(".linetext")
        //     .data(graph.links)
        //     .enter()
        //     .append("text")
        //     .attr("class", "linetext")
        //     .text(function (d) {
        //         return d.type;
        //     })
        //     .style("fill-opacity", 1.0);

        // 设置节点
        var node = this._svg.selectAll(".node")
            .data(graph.nodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .call(this._force.drag)
        // 节点圆
        node.append("circle")
            .attr("r", 10)//圆的大小
            .style("fill", function (d) {
                return color(d.group);
            })
        // 节点文字
        node.append("text")
            .attr("dx", 15)
            .attr("dy", ".25em")
            .attr("y", function (d) {
                // 多行文字显示
                if (d.name.length <= 17) {
                    d3.select(this).append('tspan').attr("ix", 0)
                        .text(function () { return d.name; });
                } else {//大于16个字符时，
                    var top = d.name.substring(0, 17) + "...";
                    d3.select(this).append('tspan').attr("ix", 0).text(top);
                    // var sum = d.name.length / 17
                    // console.log(d.name,sum);
                    // for (let i = 0; i < sum+1; i++) {
                    //     // const element = array[i];
                    //     var top = d.name.substring(i * 17, (i + 1) * 17);
                    //     d3.select(this).append('tspan').attr("ix", i).text(top);
                    // }
                }
            })

        // 添加箭头
        this._svg.append("g").append("defs").selectAll("marker")
            .data(["suit", "licensing", "resolved"])
            .enter().append("marker")
            .attr("id", function (d) { return d; })
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 25)
            .attr("refY", 0)
            .attr("markerWidth", 6)
            .attr("markerHeight", 6)
            .attr("orient", "auto")
            .append("path")
            .attr("d", "M0,-5L10,0L0,5 L10,0 L0, -5")
            .style("stroke", "#4679BD")
            .style("opacity", "0.6");

        //坐标计算
        this._force.on("tick", function () {

            link.attr("x1", function (d) {
                return d.source.x;
            })
                .attr("y1", function (d) {
                    return d.source.y;
                })
                .attr("x2", function (d) {
                    return d.target.x;
                })
                .attr("y2", function (d) {
                    return d.target.y;
                });
            d3.selectAll("circle")
                .attr("cx", function (d) {
                    return d.x;
                })
                .attr("cy", function (d) {
                    return d.y;
                });

            d3.selectAll("text")
                .attr("x", function (d) {
                    return d.x;
                })
                .attr("y", function (d) {
                    return d.y;
                });

            d3.selectAll("tspan")
                .attr("x", function (d) {
                    return d.x;
                })
                .attr("y", function (d) {
                    return d.y + (this.getAttribute('ix') * 20);
                });

            //更新连接线上文字的位置
            // edges_text.attr("x", function (d) { return (d.source.x + d.target.x) / 2; });
            // edges_text.attr("y", function (d) { return (d.source.y + d.target.y) / 2; });
            //End Changed11
        });

    }
    render() {
        return <div>
            <div className="d3" id='d33' style={{ background: '#ccc', width: '880px' }} />
            <div className="infinite-container">
                <List
                    dataSource={this.state.nodes}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <h3 style={{ width: '200px' }}>{item.type}</h3>
                            <h5 style={{ width: '1800px' }}>{item.name}</h5>
                        </List.Item>
                    )}
                >
                </List>

            </div>
        </div >

    }
}

export default Chart1



// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { push } from 'react-router-redux';
// import * as d3 from 'd3';
// import { Row, Form } from 'antd';

// // import { chartReq} from './actionCreator';
// // import './Chart.less';

// const WIDTH = 1900;
// const HEIGHT = 580;
// const R = 30;

// let simulation;

// class Chart extends Component {
//  constructor(props, context) {
//   super(props, context);
//   this.print = this.print.bind(this);
//   this.forceChart = this.forceChart.bind(this);
//   this.state = {
//     nodeData: [
//         {
//           name: 'Node 1',
//           x: 300,
//           y: 300
//         },
//         {
//           name: 'Node 2',
//           x: 800,
//           y: 300
//         },
//         {
//           name: 'Node 3',
//           x: 550,
//           y: 100
//         },
//         {
//           name: 'Node 4',
//           x: 550,
//           y: 500
//         }
//       ],
//     relationData: [
//         {
//           source: 0,
//           target: 1,
//           symbolSize: [5, 20],
//           label: {
//             show: true
//           },
//           lineStyle: {
//             width: 5,
//             curveness: 0.2
//           }
//         },
//         {
//           source: 'Node 2',
//           target: 'Node 1',
//           label: {
//             show: true
//           },
//           lineStyle: {
//             curveness: 0.2
//           }
//         },
//         {
//           source: 'Node 1',
//           target: 'Node 3'
//         },
//         {
//           source: 'Node 2',
//           target: 'Node 3'
//         },
//         {
//           source: 'Node 2',
//           target: 'Node 4'
//         },
//         {
//           source: 'Node 1',
//           target: 'Node 4'
//         }
//       ],
//   };
//  }

//  componentWillMount() {
// //   this.props.dispatch(push('/Chart'));
//  }

//  componentDidMount() {
// //   this.print();
//  }

//  print() {
//   let callback = (res) => { // callback获取后台返回的数据，并存入state
//    let nodeData = res.data.nodes;
//    let relationData = res.data.rels;
//    this.setState({
//     nodeData: res.data.nodes,
//     relationData: res.data.rels,
//    });
//    let nodes = [];
//    for (let i = 0; i < nodeData.length; i++) {
//     nodes.push({
//      id: (nodeData[i] && nodeData[i].id) || '',
//      name: (nodeData[i] && nodeData[i].name) || '',
//      type: (nodeData[i] && nodeData[i].type) || '',
//      definition: (nodeData[i] && nodeData[i].definition) || '',
//     });
//    }
//    let edges = [];
//    for (let i = 0; i < relationData.length; i++) {
//     edges.push({
//      id: (relationData[i] && (relationData[i].id)) || '',
//      source: (relationData[i] && relationData[i].start.id) || '',
//      target: (relationData[i] && relationData[i].end.id) || '',
//      tag: (relationData[i] && relationData[i].name) || '',
//     });
//    }
//    this.forceChart(nodes, edges); // d3力导向图内容
//   };
// //   this.props.dispatch(chartReq({ param: param }, callback));
//  }

//  // func
//  forceChart(nodes, edges) {
//   this.refs['theChart'].innerHTML = '';

//   // 函数内其余代码请看拆解代码
//   }

//    render() {
  
//     return (
//      <Row style={{ minWidth: 900,height:"500px" }}>
//       <div className="outerDiv">
//        <div className="theChart" id="theChart" ref="theChart">
  
//        </div>
//       </div>
//      </Row>
//     );
//    }
//   }

//   Chart.propTypes = {
//    dispatch: PropTypes.func.isRequired,
//   };
  
//   function mapStateToProps(state) {
//    return {
  
//    };
//   }
  
//   const WrappedChart = Form.create({})(Chart);
// //   export default connect(mapStateToProps)(WrappedChart);
// export default WrappedChart;

