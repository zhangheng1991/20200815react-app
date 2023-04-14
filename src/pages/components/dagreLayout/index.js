import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Select, Slider } from 'antd';
import _ from "loadsh";
import mockData from './data';
import node from './base_node';
import RelationEdge from './edge';
import DagreCanvas from './dagre-canvas';

import './index.less';
import 'antd/dist/antd.css';
import 'butterfly-dag/dist/index.css';

const Option = Select.Option;
class DagreLayout extends Component {
    constructor() {
        super();
        this.canvas = null;
        this.state = {
            addNodesStatus: true,
            shapeType: "AdvancedBezier"
        };
    }

    componentDidMount() {
        const { data } = this.props;
        if (_.get(data, "nodes")) {
            this.DagreLayoutInitialization()
        }

    }

    DagreLayoutInitialization = () => {
        const { id, data, handClick, shapeType } = this.props;
        const { } = this.state;
        const nodes = _.map(_.get(data, "nodes"), item => ({
            ...item,
            Class: node,
        }))

        let dataObj = {
            edges: data.edges,
            nodes: nodes,
        }
        if (id) {
            let root = document.getElementById(id || "dag-canvas");
            this.canvas = new DagreCanvas({
                root: root,
                disLinkable: true, // 可删除连线
                linkable: true,    // 可连线
                draggable: true,   // 可拖动
                zoomable: false,    // 可放大
                moveable: true,    // 可平移
                layout: {
                    type: 'dagreLayout',
                    options: {
                        rankdir: 'TB',
                        nodesep: 100,
                        ranksep: 50,
                        controlPoints: false,
                    },
                },
                theme: {
                    edge: {
                        // shapeType <String> 线条类型可以是：Bezier(贝塞尔曲线)，
                        // Flow(折线)，Straight(直线)，Manhattan(曼哈顿路由线)，
                        // AdvancedBezier(更美丽的贝塞尔曲线)，Bezier2-1，Bezier2-2，
                        // Bezier2-3(二阶贝塞尔曲线)，BrokenLine(折线)；默认为Straight
                        shapeType: "AdvancedBezier",
                        arrow: true,
                        arrowPosition: 0.5,
                        Class: RelationEdge
                    }
                }
            });
            this.canvas.on('events', (Obj) => {
                // eslint-disable-next-line no-console

                if (Obj.type === "node:click") {
                    console.log(Obj);
                    if (handClick) {
                        handClick(Obj)
                    }

                    // const nodeNew=_.map(nodes,item=>({
                    //     ...item,
                    //     className:item.id==data.node.id?'nodeBackground-color nodeSelect': 'nodeBackground-color'
                    // }))

                    // const nodeNew = _.map(_.get(data, "nodes"), item => ({
                    //     ...item,
                    //     Class: node,
                    //     className:item.id==Obj.node.id?'nodeBackground-color nodeSelect': 'nodeBackground-color'
                    // }))
                    // let dataObjNew = {
                    //     edges: data.edges,
                    //     nodes: nodeNew,
                    // }
                    // // dataObj.nodes=nodeNew;
                    // console.log(dataObjNew,"dataObjNew")
                    // this.canvas.draw(dataObjNew);//dataObj  mockData
                }

            });

            this.canvas.draw(dataObj);//dataObj  mockData

        }

    }

    // 添加节点
    addNodes = () => {
        if (!this.state.addNodesStatus) {
            return;
        }
        this.canvas.addNodes([
            {
                id: 'test8',
                name: 'test8',
                Class: node,
                color: '#c6e5ff'
            },
            {
                id: 'test9',
                name: 'test9',
                Class: node,
                color: '#c6e5ff'
            }
        ]);
        this.canvas.addEdges([
            {
                source: 'test4',
                target: 'test8',
            },
            {
                source: 'test4',
                target: 'test9',
            },
        ]);
        this.canvas.drageReDraw();
        this.setState({
            addNodesStatus: false
        });
    }

    // 删除节点
    removeNodes = () => {
        this.canvas.removeNodes(['test8', 'test9']);
        this.canvas.removeEdges([
            {
                source: 'test4',
                target: 'test8',
            },
            {
                source: 'test4',
                target: 'test9',
            },
        ]);
        this.canvas.drageReDraw();
        this.setState({
            addNodesStatus: true
        });
    }

    // 配置项改变
    optionsChange(obj, key, value) {
        console.log(obj, key, value)
        // let oldOptions = this.canvas.layout.options;
        let oldOptions = _.get(this.canvas, obj);
        let newOptions = { ...oldOptions, [key]: value };
        console.log(newOptions,"newOptions")
        this.canvas.drageReDraw(newOptions);
    }
    optionsChangeLine = (key, value) => {
        // console.log(key, value)
        // const { optionsChangeLine } = this.props;
        // if (optionsChangeLine()) {
        //     optionsChangeLine(value)
        // }
        // console.log(key, value, "value")
        // console.log(this.canvas.theme.edge, "222")
        let oldOptions = this.canvas.theme.edge;
        let newOptions = { ...oldOptions, [key]: value };
        // console.log(newOptions, "newOptions")
        // this.setState({ shapeType: value })
        // this.canvas.drageReDrawEdges(newOptions);

        // this.DagreLayoutInitialization()
    }
    render() {
        const { id, height } = this.props;
        return (
            <div className='dagreLayout-page'>
                <div className='operate-bar' style={{display:"none"}}>
                    <div className='operate-bar-title'>属性配置</div>
                    <div className='operate-item'>
                        <div className='operate-node'>增删节点:</div>
                        <Button onClick={this.addNodes}>添加节点</Button>
                        <Button onClick={this.removeNodes}>删除节点</Button>
                    </div>
                    <div className='operate-item'>
                        <div className='operate-rankdir'>布局方向:</div>
                        <Select defaultValue="TB" style={{ width: 120 }} onChange={this.optionsChange.bind(this, "layout.options", 'rankdir')}>
                            <Option value="TB">TB</Option>
                            <Option value="BT">BT</Option>
                            <Option value="LR">LR</Option>
                            <Option value="RL">RL</Option>
                        </Select>
                    </div>
                    <div className='operate-item'>
                        <div className='operate-align'>对齐方向:</div>
                        <Select defaultValue='默认' style={{ width: 120 }} onChange={this.optionsChange.bind(this, "layout.options", 'align')}>
                            <Option value={undefined}>默认</Option>
                            <Option value="UL">UL</Option>
                            <Option value="UR">UR</Option>
                            <Option value="DL">DL</Option>
                            <Option value="DR">DR</Option>
                        </Select>
                    </div>

                    <div className='operate-item'>
                        <div className='operate-align'>连接线:</div>
                        <Select defaultValue='默认' style={{ width: 120 }} onChange={this.optionsChangeLine.bind(this, 'shapeType')}>
                            <Option value="Bezier">贝塞尔曲线</Option>
                            <Option value="Flow">折线</Option>
                            <Option value="Manhattan">曼哈顿路由线</Option>
                            <Option value="AdvancedBezier">更美丽的贝塞尔曲线</Option>
                            <Option value="Bezier2-1">Bezier2-1</Option>
                            <Option value="Bezier2-2">Bezier2-2</Option>
                            <Option value="Bezier2-3">Bezier2-3</Option>
                            <Option value="BrokenLine">折线</Option>

                        </Select>
                    </div>
                    <div className='operate-item'>
                        <div className='operate-nodesep'>水平间距:</div>
                        <Slider defaultValue={40} onAfterChange={this.optionsChange.bind(this, "layout.options", 'nodesep')} />
                    </div>
                    <div className='operate-item'>
                        <div className='operate-ranksep'>层间距:</div>
                        <Slider defaultValue={40} onAfterChange={this.optionsChange.bind(this, "layout.options", 'ranksep')} />
                    </div>
                </div>
                <div style={{ height: height || "400px",padding:"10px" }}>
                    <div className="flow-canvas" id={id || "dag-canvas"}>
                    </div>

                </div>
            </div>
        );
    }
}

export default DagreLayout;
