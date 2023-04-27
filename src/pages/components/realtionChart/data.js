import Node from './node';
import Edge from './edge';
import BaseGroup from './group';
import BaseEndpoint from './endpoint';


const data = {
  nodes: [

    {
      id: 'root',
      text: 'Root',
      Class: Node,
      endpoints: [{
        id: 'root-1',
        orientation: [0, 0],
        pos: [0.5, 1],
        color: 'system-green',
        Class: BaseEndpoint
      }]
    }, 
    {
    id: 'test',
    text: 'Test',
    Class: Node,
    endpoints: [
      {
      id: 'test-1',
      orientation: [0, -1],
      pos: [0.5, 0],
      color: 'system-green',
      Class: BaseEndpoint
    },
    {
      id: 'test-2',
      orientation: [0, 0],
      pos: [0.2, 0.9],
      color: 'system-green',
      Class: BaseEndpoint
    },

    {
      id: 'test-3',
      orientation: [0, 0],
      pos: [0.8, 0.9],
      color: 'system-green',
      Class: BaseEndpoint
    },
    {
      id: 'test-4',
      orientation: [0, 0],
      pos: [0.5, 1],
      color: 'system-green',
      Class: BaseEndpoint
    },
  ]
  },
   {
    id: 'title',

    text: 'Title',
    Class: Node,
    endpoints: [{
      id: 'title-1',
      orientation: [0, -1],
      pos: [0.5, 0],
      color: 'system-green',
      Class: BaseEndpoint
    }, {
      id: 'title-2',
      orientation: [0, 0],
      pos: [0.2, 0.9],
      color: 'system-green',
      Class: BaseEndpoint
    }, {
      id: 'title-3',
      orientation: [0, 0],
      pos: [0.8, 0.9],
      color: 'system-green',
      Class: BaseEndpoint
    }]
  }, 
  {
    id: 'txt',
    text: 'Txt',
    Class: Node,
    endpoints: [{
      id: 'txt-1',
      orientation: [0, -1],
      pos: [0.5, 0],
      color: 'system-green',
      Class: BaseEndpoint
    },
    {
      id: 'txt-2',
      orientation: [0, 0],
      pos: [0.2, 0.9],
      color: 'system-green',
      Class: BaseEndpoint
    }, {
      id: 'txt-3',
      orientation: [0, 0],
      pos: [0.8, 0.9],
      color: 'system-green',
      Class: BaseEndpoint
    }, {
      id: 'txt-4',
      orientation: [0, 0],
      pos: [0.5, 1],
      color: 'system-green',
      Class: BaseEndpoint
    }
  ]
  }, 
   {
    id: 'fly',
    text: 'Fly',
    Class: Node,
    endpoints: [{
      id: 'fly-1',
      orientation: [0, -1],
      pos: [0.5, 1],
      color: 'system-green',
      Class: BaseEndpoint
    }]
  }],
  // groups: [{
  //   id: 'testGroup',
  //   options: {
  //     text: 'Group'
  //   },
  //   top: 360,
  //   left: 100,
  //   Class: BaseGroup
  // }],
  edges: [
    {
      source: 'root-1',
      target: 'test-1',
      sourceNode: 'root',
      targetNode: 'test',
      type: 'endpoint',
      Class: Edge
    }, 
    {
      source: 'root-1',
      target: 'txt-1',
      sourceNode: 'root',
      targetNode: 'txt',
      type: 'endpoint',
      Class: Edge
    }, 
    {
    source: 'test-4',
    target: 'title-1',
    sourceNode: 'test',
    targetNode: 'title',
    type: 'endpoint',
    Class: Edge
  }, 
  {
    source: 'txt-4',
    target: 'title-1',
    sourceNode: 'txt',
    targetNode: 'title',
    type: 'endpoint',
    Class: Edge
  },
  {
    source: 'title-3',
    target: 'fly-1',
    sourceNode: 'title',
    targetNode: 'fly',
    type: 'endpoint',
    Class: Edge
  }
]
};

export default data;
