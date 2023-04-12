import React, { Component } from 'react';
import './style.less';
import  d3 from 'd3';
// import data from './data';

const data = [
    {
        dd: "sss"
    }
]


class NetworkVisualGraph extends Component {
    constructor(props) {
        super(props)
        this.state = {
            svg: null,
            simulation: null
        };
    }
    componentDidMount() {
        this.drawGraph();
    }

    drawGraph = () => {
        // console.log(document.getElementById("networkVisual"),"222");
        console.log(d3,"d3")
        const svg = d3.select('networkVisual')
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%')
            .call(d3.zoom().scaleExtent([0.2, 3]).on('zoom', () => {
                d3.zoomTransform(d3.selectAll());
            }));

        const width = window.innerWidth;
        const height = window.innerHeight - 80;
        const eles = data.elements;

        const simulation = d3.forceSimulation()
            .force('link', d3.forceLink().id(d => d.id).distance(60))
            .force('charge', d3.forceManyBody().strength(-300).distanceMin(100).distanceMax(800))
            .force('collision', d3.forceCollide(40))
            .force('center', d3.forceCenter(width / 2, height / 2));

        this.setState({ svg, simulation }, () => {
            this.initMarker();
            const link = this.initLink(eles.edges);
            const { node } = this.initNode(eles.nodes);
            node.append('title')
                .text((d) => d.id);

            simulation
                .nodes(eles.nodes)
                .on('tick', this.initTicked.bind(this, link, node));

            simulation.force('link')
                .links(eles.edges);
        });
    }

    initMarker() {
        const svg = this.state.svg;
        svg.append('defs').selectAll('marker')
            .data(['back', 'face'])
            .enter().append('marker')
            .attr('id', d => 'marker-' + d)
            .attr('viewBox', '0, 0, 6, 6')
            .attr('refX', 18)
            .attr('refY', 3)
            .attr('markerWidth', 6)
            .attr('markerHeight', 6)
            .attr('orient', 'auto')
            .append('path')
            .attr('d', 'M0 0 L6 3 L0 6 Z')
            .attr('fill', '#999');
    }

    initLink(links) {
        const svg = this.state.svg;
        const gLists = svg.append('g')
            .attr('class', 'links')
            .selectAll('g')
            .data(links)
            .enter().append('g');
        return gLists.append('path')
            .attr('class', 'link')
            .attr('marker-end', (d) => 'url(#marker-face)');
    }

    initNode(nodes) {
        const svg = this.state.svg;
        const gLists = svg.append('g')
            .attr('class', 'nodes')
            .selectAll('g')
            .data(nodes)
            .enter()
            .append('g')
            .attr('class', (d) => 'node-' + d.id)
            .call(d3.drag()
                .on('start', this.dragStarted.bind(this))
                .on('drag', this.dragged.bind(this))
                .on('end', this.dragEnded.bind(this)));

        const circleLists = gLists.append('circle')
            .attr('r', 20)
            .attr('fill', (d) => {
                // TODO:根据节点选择颜色
                return '#81bef4';
            });

        const textLists = gLists.append('text')
            .attr('class', (d) => 'node-icon icon-' + d.id)
            .text(d => {
                // TODO：根据节点选择图标
                return 'ICON';
            });

        return { node: circleLists, textNode: textLists };
    }

    linkArc(d) {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dr = Math.sqrt(dx * dx + dy * dy);
        return 'M' + d.source.x + ',' + d.source.y + 'A0,' + dr + ' 0 0,1 ' + d.target.x + ',' + d.target.y;
    }

    initTicked(link, node) {
        node
            .attr('cx', d => d.x)
            .attr('cy', d => d.y);

        link.attr('d', d => this.linkArc(d))
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);
    }


    dragStarted(d) {
        const simulation = this.state.simulation;
        if (!d3.event.active) simulation.alphaTarget(0.4).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    dragEnded(d) {
        const simulation = this.state.simulation;
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }


    render() {



        return <div className="network-visual">
            <h1>关系图谱</h1>
            <div className="content" id="networkVisual"></div>
        </div>
    }
}
export default NetworkVisualGraph;