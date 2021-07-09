import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import Children from './ChildrenComponent';
function HOOKSC(props) {
  const [childrenMsg, setChildrenMsg] = useState(0);
  // const [numPages, setNumPages] = useState(null);
  const [total, setTotal] = useState(0);
  useEffect(() => {
   
    // getChildrenMsg()
    // props.parent.getChildrenMsg(this, 'sssssss');
  }, [childrenMsg]);
  const getChildrenMsg = (data) => {
    
    setChildrenMsg(data);
    // this.setState({
    //     childrenMsg: this.refs['children'].state.msg
    // })
}
const handClick = () => {
    // const total=count+1;
    setTotal(total+1)
  };

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
        <Children total={total} getChildrenMsg={getChildrenMsg} />
      </div>
    </div>
  );
}
export default HOOKSC;

// import React, {Component} from 'react'
// import Children from './ChildrenComponent'

// export default class Parent extends Component {
//   state = {
//     name: '我是父组件',
//     msg: '父组件传值给子组件',
//     childrenMsg: ''
// }
//   componentDidMount(){
//     // this.getChildrenMsg()
//   }
//     getChildrenMsg = (result, msg) => {
//         // 很奇怪这里的result就是子组件那bind的第一个参数this，msg是第二个参数
//         this.setState({
//             childrenMsg: msg
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h2>{ this.state.name }</h2>
//                 <h3>子组件传来的值为：{ this.state.childrenMsg }</h3>
//                 <h3>我要引入子组件了：</h3>
//                 <hr/>
//                 <Children parent={ this } />
//             </div>
//         )
//     }
// }
