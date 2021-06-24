
import React, { useEffect, useState, createContext,useRef } from 'react';
import { connect } from "dva";
import { Button } from "antd";
import PropTypes from "prop-types";
import LndexChildren from "./LndexChildren";
// import styles from './index.css';
// import Link from 'umi/link';
// const data = [
//   {
//     title: "1212123",
//     key: "1212124h",

//   },
//   {
//     title: "1212123",
//     key: "121212f",
//   },
//   {
//     title: "121212",
//     key: "121212g",

//   },
// ]
// @connect( ({ Index }) => ({Index }))
// class Index extends React.Component {

//   componentWillMount() {
//     console.log(this.props)
//     const {dispatch}=this.props;
//     dispatch({
//       type:"Index/homepage",payload:{aa:"111"}
//     })
//     console.log(sessionStorage.getItem("userInfo"))
//   }

//   render() {
//     // const {id} =this.props;
//     console.log(this.props)
//     return (
//       <div className={styles.normal}>
//         <h1>小丑欢迎您！！！！！</h1>
//         <div className={styles.welcome} />
//         {
//           data.map((item, index) => {
//             return (
//               <div key={item.key}>{item.title}</div>
//             )
//           })
//         }
//         {/* <Button >ssss</Button>
//         <ul className={styles.list}>
//           <div>
//             <Link to="/user/login">login</Link>
//             <Link to="/Echarts/Echarts">echarts</Link>
//           </div>
//           <div>
//             <Link to="/Test">测试</Link>
//           </div>
//           <div>
//             <Link to="/Tests">新的</Link>
//           </div>

//           {/* <Link to="/user">user</Link> */}


//           {/* <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
//           <li>
//             <a href="https://umijs.org/guide/getting-started.html">
//               Getting Started
//             </a>
//           </li>
//         </ul> */}

//       </div>
//     );
//   }
// }
const CountContext = createContext();
const Index=(props)=> {
  // console.log(config)
  // console.log(props)
  const timer= useRef();
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18)
  const [sex, setSex] = useState('男')
  const [work, setWork] = useState('前端程序员')
  const [qingchu,setQingchu]=useState(true);
  const [nums, setNums] = useState(0);
  const QingFunction=()=>{
    setQingchu(false)
  }
  const [isOnline, setIsOnline] = useState(null);
  const [numberT, setNumberT] = useState(0);
  const Tick=()=>{
    setNumberT(numberT+1)
  }
  console.log(numberT)
  useEffect(() => {
    console.log(timer)
    // console.log(userContent)
    // console.log(`useEffect=>You clicked ${count} times`)
    // return () => {
    //   QingFunction();
    // };
    // function handleStatusChange(status) {
    //   setIsOnline(status.isOnline);
    // }
    // timer.current =setInterval(() => Tick(), 100)
    // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // return () => {
    //   ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    console.log('count: ', count);
    // goStart(1 );
    return () => {
      console.log('component will unmount')
      setCount(0)
    }
    // };
  },[])

  const goStart = (index) => {
    // setStatus(index)
    timer.current = setInterval(() => {

        console.log(timer)
//注意此处，不是直接通过setNums(),修改里面的值，因为闭包原因，如果通过这种方式会一直为1，通过测试，不是更改值方式的原因，如果通过useReducer更改值也不会改变依然是1
        setNums(n => {
           return n + 1
        });
    },1000)
}
const goClear = () => {
  console.log(timer)
  // timer.current.clearInterval();
 clearInterval(timer.current);
}

  console.log(qingchu,"1111111111111111111111111",count,nums)
  const handClick = (e) => {
    console.log(e)
    setCount(count + 1)
    setSex("女");
    setWork("测试");
    setAge(age+1);
  }
  return (
    <div>三生三世
      <div>
      <Button type="primary" onClick={()=>{goStart(1)}}>开始</Button>
      <Button type="primary" onClick={()=>{goClear(1)}}>清除</Button>
      {/* <div onClick={()=>{goStart(1)}}>开始</div>
      <div onClick={()=>{goClear(1)}}>清除</div> */}
        <p>You clicked {count} times</p>
        <Button type="primary" onClick={handClick}>click me</Button>
        <div>
          <p>JSPang 今年:{age}岁</p>
          <p>性别:{sex}</p>
          <p>工作是:{work}</p>

        </div>
      </div>

      <CountContext.Provider value={count}>
        <LndexChildren  value={count}/>
      </CountContext.Provider>
    </div>
  )
}
Index.prototype = {
  time: PropTypes.string.isRequired,
  homePage:PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  NavData:state.Index.NavData
})

const mapDispatchToProps = {
  homePage:"Index/homePage"
}
// export default Index;
export default connect(mapStateToProps, mapDispatchToProps)(Index);
