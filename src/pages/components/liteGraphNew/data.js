import Node from './node';
import Edge from './edge';
import BaseGroup from './group';
import BaseEndpoint from './endpoint';


const data = {
  nodes: [
    {
      id: 'Root',
      top: 60,
      left: 260,
      width: 70,
      height: 30,
      text: 'Root',
      Class: Node,
      endpoints: [{
        id: 'Root-0',
        orientation: [1, 0],
        pos: [0, 0.5],
        color: 'system-green',
        Class: BaseEndpoint
      }]
    },
    {
      id: '0',
      top: 100,
      left: 100,
      width: 70,
      height: 30,
      text: 'A + B',
      Class: Node,
      endpoints: [{
        id: 'right',
        orientation: [0, -1],
        pos: [0.5, 0],
        color: 'system-green',
        Class: BaseEndpoint
      },
      {
        id: 'right-1',
        orientation: [0, 1],
        pos: [0.22, 0],
        content: "222",
        data: [
          {
            name: "111", id: "1111"
          },
          {
            name: "222", id: "222"
          },
        ],
        color: 'system-green',
        Class: BaseEndpoint
      }]
    }, {
      id: '1',
      top: 100,
      left: 250,
      height: 90,
      width: 140,
      text: 'A + B + C',
      Class: Node,
      endpoints: [{
        id: 'left_2',
        orientation: [0, -1],
        pos: [0.5, 0],
        color: 'system-green',
        Class: BaseEndpoint
      }, {
        id: 'left_3',
        orientation: [-1, 0],
        pos: [0, 0.8],
        color: 'system-green',
        Class: BaseEndpoint
      }, {
        id: 'right_1',
        orientation: [1, 0],
        pos: [0, 0.7],
        color: 'system-green',
        Class: BaseEndpoint
      }]
    }, {
      id: 'knob',
      top: 200,
      left: 100,
      height: 100,
      width: 70,
      text: 'Knob',
      Class: Node,
      endpoints: [{
        id: 'knbo_1',
        orientation: [1, 0],
        pos: [0, 0.5],
        color: 'system-green',
        Class: BaseEndpoint
      }]
    },
    {
      id: 'customShapes',
      top: 111,
      left: 568,
      height: 60,
      width: 140,
      text: 'Custom Shapes',
      Class: Node,
      endpoints: [{
        id: 'custom_01',
        orientation: [-1, 0],
        pos: [0, 0.8],
        color: 'system-green',
        Class: BaseEndpoint
      }]
    }],
  //   groups: [{
  //     id: 'testGroup',
  //     options: {
  //       text: 'Group'
  //     },
  //     top: 360,
  //     left: 100,
  //     Class: BaseGroup
  //   }],
  edges: [
    {
      source: 'Root-0',
      target: 'right',
      sourceNode: 'Root',
      targetNode: '0',
      type: 'endpoint',
      Class: Edge
    },
    {
      source: 'right',
      target: 'left_2',
      sourceNode: '0',
      targetNode: '1',
      type: 'endpoint',
      Class: Edge
    }, {
      source: 'knbo_1',
      target: 'left_3',
      sourceNode: 'knob',
      targetNode: '1',
      type: 'endpoint',
      Class: Edge
    }, {
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
      source: 'widgest_1',
      target: 'testGroup1_01',
      sourceNode: 'widgest',
      targetNode: 'testGroup1',
      type: 'endpoint',
      Class: Edge
    }, {
      source: 'gamepad_1',
      target: 'log_event_01',
      sourceNode: 'gamepad',
      targetNode: 'logEvent',
      type: 'endpoint',
      Class: Edge
    }, {
      source: 'right_1',
      target: 'custom_01',
      sourceNode: '1',
      targetNode: 'customShapes',
      type: 'endpoint',
      Class: Edge
    }]
};

export default data;
