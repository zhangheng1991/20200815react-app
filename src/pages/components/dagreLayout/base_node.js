import $ from 'jquery';
import { Node } from 'butterfly-dag';
import _ from "loadsh";
import './base_node.less';

class BaseNode extends Node {
  constructor(opts) {
    super(opts);
    this.options = opts;
  }

  nodeFunction = (data) => {
    let pamsList = ``;
    data.forEach((item, index) => {
      pamsList += `<div><div class="txtName">${item.name}</div>
      </div>`
    })
    return pamsList;
  }

  WidthFunction=(data)=>{
     let width="";
     width = data&&data.length>0? (100 / data.length)+"%":"";
     return width;
  }

  draw = (opts) => {
    console.log(opts, "opts")
    let container = $('<div class="relation-node"></div>')
      .css('top', opts.top)
      .css('left', opts.left)
      .attr('id', opts.id)
      .addClass(opts.options.className);
    let attributeList = _.get(opts, "options.list") || [];
    let pamsList = ``;

    attributeList.forEach((item, index) => {
      pamsList += `<div  class=${"box-container"}  style="width:${this.WidthFunction(attributeList)}"><div class="stepName">${item.stepName}</div>
      <div>${this.nodeFunction(item.Children)}</div>
      </div>`
    })




    let logoContainer =_.get(opts,"id")=== "root"?$(`<div >
    <div  >${opts.options.name}</div>
   
    </div>`):$(`<div class="logo-container">
    <div  class="header-container">${opts.options.name}</div>
    <div >
       <div class="dra-container">${pamsList}</div>
    </div>
    </div>`);
    logoContainer.addClass(opts.options.className);

    container.append(logoContainer);

    return container[0];
  }
}

export default BaseNode;
