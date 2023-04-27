import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from 'butterfly-dag';
import _ from "loadsh";
import Node from './node';
import Edge from './edge';
import BaseGroup from './group';
import BaseEndpoint from './endpoint';

import mockData from './data.js';

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


    }

    DagreLayoutInitialization = () => {
        const { id, data, handClick, shapeType } = this.props;
        let root = document.getElementById(id || "dag-canvas");

        const nodes = _.map(_.get(data, "nodes"), (item, index) => ({
            ...item,
            Class: Node,
            endpoints: _.map(item.endpoints, (itemD, indexD) => ({
                ...itemD,
                Class: BaseEndpoint, // 灰色系统锚点
                // orientation: item.id === "Root" ? [0, 1] : itemD.type === 2 ? [0, 0] : itemD.content ? [0, 1] : orientation,
                // pos: itemD.content ? this.positionFunction(item.endpoints, indexD) : itemD.type === 2 ? [0.5, 1.07] : pos,

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
        this.canvas.draw(dataObj)//dataObj  mockData
    }


    render() {
        const { id, height } = this.props;
        console.log(height, "height")
        return (
            <div className='litegraph-page'>
                <div className='litegraph-canvas' id={id || 'dag-canvas'} style={{ height: height || "500px" }}></div>
            </div>
        );
    }
}

export default LiteGraph;
