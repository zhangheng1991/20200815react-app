import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Canvas} from 'butterfly-dag';
import 'butterfly-dag/dist/index.css';
import mockData from './data.js';

import './index.less';

class Decision extends Component {
  componentDidMount() {
    let root = document.getElementById('dag-canvas');
    this.canvas = new Canvas({
      root: root,
      disLinkable: true, // 可删除连线
      linkable: true,    // 可连线
      draggable: true,   // 可拖动
      zoomable: true,    // 可放大
      moveable: true,    // 可平移
      theme: {
        edge: {
          shapeType: 'AdvancedBezier',
          arrow: true
        }
      }
    });
    this.canvas.draw(mockData);
  }

  render() {
    return (
      <div className='decision'>
        <div className="decision-canvas" id="dag-canvas">
        </div>
      </div>
    );
  }
}

export default Decision;
