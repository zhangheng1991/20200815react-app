import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from 'butterfly-dag';
import mockData from './data.js';

import 'butterfly-dag/dist/index.css';
import './index.less';
class LiteGraph extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        let root = document.getElementById('dag-canvas');
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
                    nodesep: 240,
                    ranksep: 100,
                    controlPoints: false,
                },
            },
            theme: {
                edge: {
                    shapeType: 'AdvancedBezier',
                    arrow: true,
                    arrowPosition: 0.9,
                    dragEdgeZindex: 900,
                }
            }
        });
        this.canvas.draw(mockData, () => {
            // this.canvas.setGridMode(true, {
            //     isAdsorb: false,         // 是否自动吸附,默认关闭
            //     theme: {
            //         shapeType: 'circle',     // 展示的类型，支持line & circle
            //         gap: 20,               // 网格间隙
            //         background: 'rgba(0, 0, 0, 0.65)',     // 网格背景颜色
            //         circleRadiu: 1.5,        // 圆点半径
            //         circleColor: 'rgba(255, 255, 255, 0.8)'    // 圆点颜色
            //     }
            // });
        });
    }
    render() {
        return (
            <div className='litegraph-page'>
                <div className='litegraph-canvas' id='dag-canvas'></div>
            </div>
        );
    }
}

export default LiteGraph;
