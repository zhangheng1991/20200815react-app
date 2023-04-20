import BaseNode from './node';
import AlisBaseNode from './alis-node';
console.log(BaseNode,"BaseNode")
export default {
  nodes: [
    {
      id: 'Root',
      name: 'Root',
      top: 64,
      left: 172,
      level:1,
      Class: BaseNode,
      // shape: 'circle',
      // className: 'nodeBackground-first'
    },
    {
      id: '0',
      name: 'Book',
      top: 264,
      left: 172,
      data: {
        content: [
          {id: '1', content: 'id', sourceNodeId: '2', targetNodeId: '3'},
          {id: '4', content: 'isbn', sourceNodeId: '5', targetNodeId: '6'},
          {id: '7', content: 'title', sourceNodeId: '8', targetNodeId: '9'},
        ],
      },

      Class: BaseNode,
    },
    {
      id: '1',
      name: 'BookPublisher',
      top: 488,
      left: 74,
      level:2,
      data: {
        content: [
          {
            id: '10',
            content: 'book_id',
            sourceNodeId: '11',
            targetNodeId: '12',
          },
          {
            id: '13',
            content: 'publisher_id',
            sourceNodeId: '14',
            targetNodeId: '15',
          },
        ],
      },

      Class: BaseNode,
    },
    {
      id: '2',
      name: 'Author',
      top: 488,
      left: 950,
      level:2,
      data: {
        content: [
          {id: '16', content: 'id', sourceNodeId: '17', targetNodeId: '18'},
          {id: '19', content: 'name', sourceNodeId: '20', targetNodeId: '21'},
        ],
      },

      Class: BaseNode,
    },
    {
      id: '3',
      name: 'BookAuthor',
      top: 488,
      left: 476,
      level:3,
      data: {
        content: [
          {
            id: '22',
            content: 'book_id',
            sourceNodeId: '23',
            targetNodeId: '24',
          },
          {
            id: '25',
            content: 'author_id',
            sourceNodeId: '26',
            targetNodeId: '27',
          },
        ],
      },

      Class: BaseNode,
    },
    {
      id: '4',
      name: 'Publisher',
      data: {
        content: [
          {id: '28', content: 'id', sourceNodeId: '29', targetNodeId: '30'},
          {id: '31', content: 'name', sourceNodeId: '32', targetNodeId: '33'},
        ],
      },
      top: 754,
      left: 374,
      level:4,
      Class: BaseNode,
    },
    {
      id: '5',
      name: 'Books By Author',
      data: {
        content:
          'SELECT * FROM b INNER JOIN book_author ba ON b.id = ba.book_id GROUP BY ba.author_id',
      },
      top: 744,
      left: 900,
      // Class: AlisBaseNode,
      // Class:BaseNode,
    },
  ],
  edges: [
    {
      source: 'Root',
      target: '0',
      // sourceNode: 'root',
      // targetNode: '0',
    },
    {
      source: '0',
      target: '1',
      // sourceNode: '0',
      // targetNode: '1',
      type: 'endpoint',
    },
    {
      source: '2',
      target: '12',
      sourceNode: '0',
      targetNode: '1',
      type: 'endpoint',
    },
    {
      source: '14',
      target: '18',
      sourceNode: '1',
      targetNode: '2',
      type: 'endpoint',
    },
    {
      source: '23',
      target: '9',
      sourceNode: '3',
      targetNode: '0',
      type: 'endpoint',
    },
    {
      source: '26',
      target: '18',
      sourceNode: '3',
      targetNode: '2',
      type: 'endpoint',
    },
    {
      source: '23',
      target: '33',
      sourceNode: '3',
      targetNode: '4',
      type: 'endpoint',
    },
    {
      source: '23',
      target: '30',
      sourceNode: '3',
      targetNode: '4',
      type: 'endpoint',
    },
  ],
};

