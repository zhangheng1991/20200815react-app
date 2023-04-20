import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Canvas from './canvas';
import mockData from './data.js';

import './index.less';
import './iconfont.less';
import 'butterfly-dag/dist/index.css';

class RelationalBook extends Component {
  constructor() {
    super();
    this.canvas = null;
  }
  componentDidMount() {
    let root = document.getElementById('dag-canvas');
    this.canvas = new Canvas({
      root: root,
      disLinkable: true, // 可删除连线
      linkable: true,    // 可连线
      draggable: true,   // 可拖动
      zoomable: false,    // 可放大
      moveable: true,    // 可平移
      layout: {
        // type: 'dagreLayout',
        options: {
          // rankdir: 'TB',
          nodesep: 100,
          ranksep: 60,
          controlPoints: false,
        },
      },
      theme: {
        edge: {
          shapeType: "Bezier",   // 'AdvancedBezier',
          arrow: true,
          arrowPosition: 0.5,
          shapeType: "AdvancedBezier",
          arrow: true,
          arrowPosition: 0.8,
          // arrowShapeType: {color:"red"},  //自定义箭头样式
          dragEdgeZindex: 10000, 
        },
        endpoint: {
          position: "top",        //限制锚点位置['Top', 'Bottom', 'Left', 'Right'],
          linkableHighlight: true,//连线时会触发point.linkable的方法，可做高亮
          limitNum: 10,        //限制锚点的连接数目
          expandArea: {        //锚点过小时，可扩大连线热区
            left: 10,
            right: 10,
            top: 10,
            botton: 10
          }
        },
      }
    });
    console.log(mockData, "mockData")
    this.canvas.setMinimap(false);
    this.canvas.draw(mockData);//dataObj  mockData
    // this.canvas.draw(mockData, () => {
    //   this.canvas.focusCenterWithAnimate();
    // });
  }
  render() {
    const {id,height}=this.props;
    return (
      <div className='relational-books-page'>
        <div className="flow-canvas" id="dag-canvas" style={{height:height||"500px"}}>
        </div>
      </div>
    );
  }
}

export default RelationalBook;
