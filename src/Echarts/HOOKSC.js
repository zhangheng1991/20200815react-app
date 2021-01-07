import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import Children from './component/ChildrenComponent';
function HOOKSC(props) {
  const [childrenMsg, setChildrenMsg] = useState(0);
  // const [numPages, setNumPages] = useState(null);
  const handT = React.createRef();
  const [total, setTotal] = useState(0);
  useEffect(() => {
  //  console.log( window.parent.document)
 
  //  if(window.frames["iframed"]){
  //   console.log( window.frames["iframed"].document)
  //  }
    return () => {
      // setTotal(10);
    };
    // console.log(props)
    // getChildrenMsg()
    // props.parent.getChildrenMsg(this, 'sssssss');
  }, [total]);
  //[childrenMsg]
  const getChildrenMsg = data => {
    // console.log(data)
    setChildrenMsg(data);
    // this.setState({
    //     childrenMsg: this.refs['children'].state.msg
    // })
  };
  const handClick = () => {
    // console.log( window.frames["iframed"])
    // const total=count+1;
    setTotal(total + 1);
    // console.log(handT.current)
  };
  // console.log(total);
  return (
    <div>
      <div>
        {/* <h2>{name}</h2> */}
        <h3>子组件传来的值为：{childrenMsg}</h3>
        <iframe name="iframed" width="100%" height="600px"  src="https://www.baidu.com"></iframe>
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
        <Children handT={handT} total={total} getChildrenMsg={getChildrenMsg} />
      </div>
    </div>
  );
}
export default HOOKSC;
