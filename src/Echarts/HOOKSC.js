import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import Children from './component/ChildrenComponent';
function HOOKSC(props) {
  const [childrenMsg, setChildrenMsg] = useState(0);
  // const [numPages, setNumPages] = useState(null);
  const handT=React.createRef();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    // console.log(props)
    // getChildrenMsg()
    // props.parent.getChildrenMsg(this, 'sssssss');
  }, []);
  //[childrenMsg]
  const getChildrenMsg = (data) => {
    // console.log(data)
    setChildrenMsg(data);
    // this.setState({
    //     childrenMsg: this.refs['children'].state.msg
    // })
}
const handClick = () => {
    // const total=count+1;
    setTotal(total+1)
    // console.log(handT.current)
  };
// console.log(childrenMsg)
  return (
    <div>
      <div>
        {/* <h2>{name}</h2> */}
        <h3>子组件传来的值为：{childrenMsg}</h3>
        <Button
        onClick={() => {
          handClick();
        }}
      >
        点击
      </Button>
        <h3>我要引入子组件了：</h3>
        <hr />
        <Children handT={handT} total={total} getChildrenMsg={getChildrenMsg} />
      </div>
    </div>
  );
}
export default HOOKSC;