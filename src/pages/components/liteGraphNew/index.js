import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Canvas,Arrow } from 'butterfly-dag';
import _ from "loadsh";
import mockData from './data.js';

import Node from './node';
import Edge from './edge';
import BaseGroup from './group';
import BaseEndpoint from './endpoint';

import 'butterfly-dag/dist/index.css';
import './index.less';
class LiteGraph extends Component {
    constructor() {
        super();
    }
    componentDidMount() {

        const { data, id } = this.props;
        if (_.get(data, "nodes")) {
            this.DagreLayoutInitialization()
        }
        // let root = document.getElementById(id || "dag-canvas");
        // this.canvas = new Canvas({
        //     root: root,
        //     disLinkable: false, // 可删除连线
        //     linkable: true,    // 可连线
        //     draggable: true,   // 可拖动
        //     zoomable: false,    // 可放大
        //     moveable: true,    // 可平移
        //     layout: {
        //         type: 'dagreLayout',
        //         options: {
        //             // rankdir: 'TB',
        //             nodesep: 250,
        //             ranksep: 100,
        //             controlPoints: false,
        //         },
        //     },
        //     theme: {
        //         edge: {
        //             // shapeType <String> 线条类型可以是：Bezier(贝塞尔曲线)，
        //             // Flow(折线)，Straight(直线)，Manhattan(曼哈顿路由线)，
        //             // AdvancedBezier(更美丽的贝塞尔曲线)，Bezier2-1，Bezier2-2，
        //             // Bezier2-3(二阶贝塞尔曲线)，BrokenLine(折线)；默认为Straight
        //             shapeType: "AdvancedBezier",
        //             arrow: true,
        //             arrowPosition: 0.5,
        //             isExpandWidth: true,
        //             // defaultAnimate:true,
        //             dragEdgeZindex: 10000,
        //             // Class: RelationEdge,
        //             isExpandWidth: true
        //         }
        //     }
        // });

        // this.canvas.draw(mockData, () => {
        //     this.canvas.setGridMode(true, {
        //         isAdsorb: false,         // 是否自动吸附,默认关闭
        //         theme: {
        //             //   shapeType: 'circle',     // 展示的类型，支持line & circle
        //             gap: 20,               // 网格间隙
        //             // background: 'rgba(0, 0, 0, 0.65)',     // 网格背景颜色
        //             circleRadiu: 1.5,        // 圆点半径
        //             // circleColor: 'rgba(255, 255, 255, 0.8)'    // 圆点颜色
        //         }
        //     });
        // });
    }

    positionFunction = (data, index) => {
        // let pos = [0.5, 0];
        let poc = [(1 / data.length) * index, 0]
        return poc;
    }

    DagreLayoutInitialization = () => {
        const { id, data, handClick, shapeType } = this.props;
        // const { } = this.state;
        console.log(data, "data")
        const orientation = [0, -1];
        const pos = [0.5, 0];
        const nodes = _.map(_.get(data, "nodes"), (item, index) => ({
            ...item,
            Class: Node,
            endpoints: _.map(item.endpoints, (itemD, indexD) => ({
                ...itemD,
                Class: BaseEndpoint, // 灰色系统锚点
                orientation: item.id === "Root" ? [0, 1] : itemD.content ? [0, 1] : orientation,
                pos: itemD.content ? this.positionFunction(item.endpoints, indexD) : pos,
            }))
        }))

        const edges = _.map(_.get(data, "edges"), item => ({
            ...item,
            Class: Edge,
        }))

        const groups = _.map(_.get(data, "groups"), item => ({
            ...item,
            Class: BaseGroup,
        }))

        let dataObj = {
            edges: edges,
            nodes: nodes,
            groups: groups
        }
        console.log(dataObj, "dataObj")
        if (id) {
            let root = document.getElementById(id || "dag-canvas");
            this.canvas = new Canvas({
                root: root,
                disLinkable: false, // 可删除连线
                linkable: false,    // 可连线
                draggable: true,   // 可拖动
                zoomable: false,    // 可放大
                moveable: true,    // 可平移
                layout: {
                    type: 'dagreLayout',
                    options: {
                        rankdir: 'TB',//"BT","LR","RL","TB",
                        nodesep: 200,
                        ranksep: 80,
                        controlPoints: false,
                    },
                },
                theme: {
                    edge: {
                        // shapeType <String> 线条类型可以是：Bezier(贝塞尔曲线)，
                        // Flow(折线)，Straight(直线)，Manhattan(曼哈顿路由线)，
                        // AdvancedBezier(更美丽的贝塞尔曲线)，Bezier2-1，Bezier2-2，
                        // Bezier2-3(二阶贝塞尔曲线)，BrokenLine(折线)；默认为Straight
                        shapeType: "Manhattan",
                        arrow: true,
                        arrowPosition: 0.8,
                        isExpandWidth: true,
                        // defaultAnimate:true,
                        dragEdgeZindex: 100,
                        // Class: RelationEdge,
                        isExpandWidth: true,
                        width: 100,   // 选填，默认8px
                        height: 100,  // 选填，默认8px
                        // arrowShapeType:"fontSize:30px",
                    }
                }
            });

            // 自行注册的
         
            // Arrow.registerArrow([{
            //     key: 'Root',
            //     type: 'svg',
            //     width: 20,   // 选填，默认8px
            //     height: 20,  // 选填，默认8px
            //     // content: require('umi-6') // 引用外部svg
            // }, {
            //     key: 'yourArrow1',
            //     type: 'pathString',
            //     // content: 'M5 0 L0 -2 Q 1.0 0 0 2 Z' // path的d属性
            // }]);

            this.canvas.on('events', (Obj) => {
                // eslint-disable-next-line no-console

                if (Obj.type === "node:click") {
                    console.log(Obj);
                    if (handClick) {
                        handClick(Obj)
                    }
                }

            });
            // this.canvas.setMinimap(true);
            this.canvas.draw(dataObj);//dataObj  mockData

        }

    }

    render() {
        const { id, height } = this.props;
        return (
            <div className='litegraph-page'>
                <div className='litegraph-canvas' id={id || 'dag-canvas'} style={{ height: height || "500px" }}></div>
            </div>
        );
    }
}

export default LiteGraph;
