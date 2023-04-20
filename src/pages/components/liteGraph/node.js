import { Node } from 'butterfly-dag';
import $ from 'jquery';
import _ from "loadsh";


class BaseNode extends Node {
  constructor(opts) {
    super(opts);
    this.titleBox = null;
    this.options = opts;
    this.childData = _.get(opts, "endpoints") || [];
  }


  mounted() {
    this.childData.forEach((({ sourceNodeId, targetNodeId }) => {
      this.addEndpoint({
        id: sourceNodeId,
        type: 'source',
        dom: document.getElementById(sourceNodeId)
      });
      this.addEndpoint({
        id: targetNodeId,
        type: 'target',
        dom: document.getElementById(targetNodeId)
      });
    }));

  }




  draw = (data) => {
    console.log(data, "data11")
    // console.log(_.get(data, "options.position"),"hhh")
    const positionList=_.get(data, "options.position")||[0,0];
    let container = $('<div class= "test-base-node"></div>')
 
      // left: 172 + (_ - get(item， "posision[a]")) * 400,
      //   top: 64 + (_.get(item, "posision[1]")  @) 200,
      // .css('left',172 + (_.get(positionList, "[0]")) * 400)  
      // .css('top', 64 + (_.get(data, "options.posision[1]")) * 200)
      // .css('top', 62 + (_.get(positionList, "[1]")) * 200)
      .css('left', data.left)
      .css('top', data.top)
      // .css('width', data.options.width)
      // .css('height', data.options.height)
      .attr('id', data.id);
    let containerBox = $(`<div class="base-node-box" style="width:"100%"></div>`);
    this._createChildNode(containerBox);

    if (this.widEndpointDom) {
      container.append(this.widEndpointDom);
    }

    container.append(`<span class='text'>${data.options.text}</span>`);

    if (_.get(data, "id") !== "Root") {
      container.append(containerBox)
    }
    return container[0];
  }

  WidthFunction = (data) => {
    let width = "";
    width = data && data.length > 0 ? (100 / data.length) : "";
    return width;
  }

  nodeFunction = (data) => {
    let pamsList = ``;
    data.forEach((item, index) => {
      pamsList += `<div class="txtName" title=${item.name}>${item.name}</div>`
    })
    return pamsList;
  }

  _createChildNode(dom) {
    console.log(this.childData, "this.childData")
    // console.log($(".base-node-box"), "base-node-box1")
    $.each(this.childData, (i, { id, content, data, sourceNodeId, targetNodeId }) => {
      console.log(id, content, sourceNodeId, targetNodeId, "i")
      if (content) {
        dom.append(`
        <div class="content" style="width:${this.WidthFunction(this.childData) + "%"}"  >
          <div class="text" title=${content}>${content}</div>
          <div>${this.nodeFunction(data || [])}</div>
        </div>`);
      } else {
        dom.append(`
        <div  >
         
       
        </div>`);
      }

    });

    let childNode = dom.find('.content');

    // this._onRemovedNode(childNode);
    // this._onEditNode(childNode);
  }
}
export default BaseNode;
