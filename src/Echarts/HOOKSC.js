import React, { useState, useEffect } from 'react';
import { Button, Table } from 'antd';
import _ from "loadsh";
import Children from './component/ChildrenComponent';


let GetInfo = {};


function HOOKSC(props) {
  const [childrenMsg, setChildrenMsg] = useState(0);
  // const [numPages, setNumPages] = useState(null);
  const handT = React.createRef();
  const [total, setTotal] = useState(0);
  useEffect(() => {


    //  if(window.frames["iframed"]){

    //  }
    return () => {
      // setTotal(10);
    };

    // getChildrenMsg()
    // props.parent.getChildrenMsg(this, 'sssssss');
  }, [total]);
  //[childrenMsg]
  const getChildrenMsg = data => {

    setChildrenMsg(data);
    // this.setState({
    //     childrenMsg: this.refs['children'].state.msg
    // })
  };
  const handClick = () => {
    console.log(GetInfo, "GetInfo")
    const data = _.get(GetInfo, "handT");
    console.log(data,"data")
    // const total=count+1;
    setTotal(total + 1);

  };

  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
      children: [
        {
          key: '22',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
          children: [
            {
              key: '23',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
              children: [
                {
                  key: '24',
                  name: '胡彦祖',
                  age: 42,
                  address: '西湖区湖底公园1号',
                },
                {
                  key: '25',
                  name: '胡彦祖',
                  age: 42,
                  address: '西湖区湖底公园1号',
                },
                {
                  key: '26',
                  name: '胡彦祖',
                  age: 42,
                  address: '西湖区湖底公园1号',
                }
              ]
            },
            {
              key: '27',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
              children: [
                {
                  key: '28',
                  name: '胡彦祖',
                  age: 42,
                  address: '西湖区湖底公园1号',
                },
                {
                  key: '212',
                  name: '胡彦祖',
                  age: 42,
                  address: '西湖区湖底公园1号',
                },
                {
                  key: '2222',
                  name: '胡彦祖',
                  age: 42,
                  address: '西湖区湖底公园1号',
                }
              ]
            },
            {
              key: '222222',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
              children: [
                {
                  key: '233333',
                  name: '胡彦祖',
                  age: 42,
                  address: '西湖区湖底公园1号',
                },
                {
                  key: '23545',
                  name: '胡彦祖',
                  age: 42,
                  address: '西湖区湖底公园1号',
                },
                {
                  key: '24545454',
                  name: '胡彦祖',
                  age: 42,
                  address: '西湖区湖底公园1号',
                }
              ]
            }
          ]
        }
      ]
    },
  ];

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];



  const refGetInfo = (ref) => {
    if (ref) {
      GetInfo = ref;
    }
  }


  return (
    <div>
      <div>
        {/* <h2>{name}</h2> */}
        <Table dataSource={dataSource} columns={columns} />
        <h3>子组件传来的值为：{childrenMsg}</h3>
        {/* <iframe name="iframed" width="100%" height="600px"  src="https://www.baidu.com"></iframe> */}
        <Button
          onClick={() => {
            handClick();
          }}
          type="primary"
        >
          父组件按钮点击
        </Button>
        <h3>我要引入子组件了：</h3>
        <hr />
        <Children handT={handT} total={total} getChildrenMsg={getChildrenMsg} refGetInfo={refGetInfo} />
      </div>
    </div>
  );
}
export default HOOKSC;
