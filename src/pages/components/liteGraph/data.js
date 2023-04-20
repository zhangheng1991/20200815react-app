import Node from './node';
import Edge from './edge';
import BaseGroup from './group';
import BaseEndpoint from './endpoint';


const data = {
  nodes: [
   
    {
      id: 'testGroup1',
      text: 'Flat Slots1',
      group: 'testGroup',
      Class: Node,
      endpoints: [
        {
        id: 'testGroup1_01',
        orientation: [0, -1],
        pos: [0.5, 0],
        color: 'system-green',
        Class: BaseEndpoint, // 绿色系统锚点
        data:[
          {
            name:"111",id:"1111"
          }
        ]
      }, {
        id: 'testGroup1_02',
        orientation: [0, 1],
        pos: [0.33, 0],
        color: 'system-green',
        Class: BaseEndpoint // 绿色系统锚点
      }, {
        id: 'testGroup1_03',
        orientation: [0, 1],
        pos: [0.66, 0],
        color: 'system-green',
        Class: BaseEndpoint // 绿色系统锚点
      }]
    },
    {
      id: 'testGroup2',
      height: 70,
      width: 100,
      text: 'Flat Slots2',
      group: 'testGroup',
      Class: Node,
      endpoints: [{
        id: 'testGroup2_01',
        orientation: [0, -1],
        pos: [0.5, 0],
        color: 'system-green',
        Class: BaseEndpoint // 绿色系统锚点
      }, {
        id: 'testGroup2_02',
        orientation: [0, 1],
        pos: [0.33, 0],
        color: 'system-gray',
        Class: BaseEndpoint // 灰色系统锚点
      }, {
        id: 'testGroup2_03',
        orientation: [0, 1],
        pos: [0.66, 0],
        color: 'system-gray',
        Class: BaseEndpoint // 灰色系统锚点
      }]
    },
    {
      id: 'testGroup3',
      text: 'Flat Slots3',
      group: 'testGroup',
      Class: Node,
      endpoints: [{
        id: 'testGroup3_01',
        orientation: [0, -1],
        pos: [0.5, 0],
        color: 'system-green',
        Class: BaseEndpoint // 绿色系统锚点
      }, {
        id: 'testGroup3_02',
        orientation: [0, 1],
        pos: [0.33, 0],
        color: 'system-gray',
        Class: BaseEndpoint // 灰色系统锚点
      }, {
        id: 'testGroup3_03',
        orientation: [0, 1],
        pos: [0.66, 0],
        color: 'system-gray',
        Class: BaseEndpoint // 灰色系统锚点
      }]
    },
    {
      id: 'Root',
      text: 'Root',
      group: 'testGroup',
      Class: Node,
      endpoints:[
        {
          id: 'Root_1',
          orientation: [0, -1],
          pos: [0.5, 0],
          color: 'system-green',
          Class: BaseEndpoint // 绿色系统锚点
        }
      ]
     
    },
   
  ],
  groups: [ {
    id: 'testGroup',
    options: {
      text: 'Group'
    },
    top: 360,
    left: 100,
    Class: BaseGroup
  }],
  edges: [
     {
    source: 'testGroup3_01',
    target: 'testGroup1_03',
    sourceNode: 'testGroup3',
    targetNode: 'testGroup1',
    type: 'endpoint',
    Class: Edge
  }, {
    source: 'testGroup2_01',
    target: 'testGroup1_02',
    sourceNode: 'testGroup2',
    targetNode: 'testGroup1',
    type: 'endpoint',
    Class: Edge
  }, {
    source: 'Root_1',
    target: 'testGroup1_01',
    sourceNode: 'Root',
    targetNode: 'testGroup1',
    type: 'endpoint',
    Class: Edge
  }, ]
};

export default data;
