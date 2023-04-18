import {Node} from 'butterfly-dag';
import $ from 'jquery';
import _ from "loadsh";
class BaseNode extends Node {
  constructor(opts) {
    super(opts);
  }

  draw = (opts) => {
    console.log(opts,"opts")
    let container =_.get(opts,"options.flag")? $('<div class="mind-map-node mind-map-nodeNew"></div>')
      .css('top', opts.top)
      .css('left', opts.left)
      .attr('id', opts.id): $('<div class="mind-map-node"></div>')
      .css('top', opts.top)
      .css('left', opts.left)
      .attr('id', opts.id);
    let titleDom = $(`<div class="title">${opts.options.title}<div>`);

    container.append(titleDom);

    return container[0];
  }
}

export default BaseNode;
