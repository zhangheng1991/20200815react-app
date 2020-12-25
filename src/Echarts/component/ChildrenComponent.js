import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
function MyHooks(props) {
  const {total,handT}=props;
  const [count, setCount] = useState(0);
  // const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    console.log(props);
    // props.getChildrenMsg('我是子组件的默认穿过去的值');
  }, []);
  const handClick = () => {
    // const total=count+1;
    setCount(count+1)
    props.getChildrenMsg(count+1);
  };
  return (
    <div >
       <h3>父级点击事件传过来的值：{total}</h3>
      <Button
        onClick={() => {
          handClick();
        }}
        ref={handT}
        type="primary"
      >
        子组件按钮点击
      </Button>
    </div>
  );
}
export default MyHooks;
// export default class Children extends Component {
//     state = {
//         name: '我是子组件',
//         msg: '子组件传值给父组件'
//     }
//     componentDidMount(){
//         this.props.parent.getChildrenMsg(this, "sssssss")
//     }
//     toParent = () => {
//         // console.log(this.props.parent.getChildrenMsg.bind(this, this.state.msg))
//         this.props.parent.getChildrenMsg(this, this.state.msg)

//     }

//     render() {
//         return (
//             <div>
//                 <h2>{ this.state.name }</h2>
//                 <button onClick={ this.toParent }>子组件传入给父组件</button>
//             </div>
//         )
//     }
// }
