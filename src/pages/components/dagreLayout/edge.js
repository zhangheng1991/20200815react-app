import $ from 'jquery';
import {Edge} from 'butterfly-dag';

class RelationEdge extends Edge {
  draw(obj) {
    console.log(obj,"obj")
    let path = super.draw(obj);
    if (this.options.color) {
      $(path).addClass(this.options.color);
    }
    return path;
  }

  drawArrow(isShow) {
    console.log(isShow,"isShow")
    let dom = super.drawArrow(isShow);
    if (this.options.color) {
      $(dom).addClass(this.options.color);
    }
    return dom;
  }

  drawLabel(text) {
    console.log(text,"text")
    let dom = null;
    if (text) {
      dom = $(`<span class="butterflies-label">${text}</span>`)[0];
    }
    return dom;
  }
}

export default RelationEdge;
