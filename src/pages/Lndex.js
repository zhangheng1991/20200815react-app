import styles from './index.css';
import Link from 'umi/link';
import React, { useEffect, useState, createContext } from 'react';
import { connect } from "dva";
import { Button, Table } from "antd";
import PropTypes from "prop-types";
import LndexChildren from "./LndexChildren";
const data = [
  {
    title: "1212123",
    key: "1212124h",

  },
  {
    title: "1212123",
    key: "121212f",
  },
  {
    title: "121212",
    key: "121212g",

  },
]
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
function Index(props) {
  // console.log(config)
  console.log(props)
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18)
  const [sex, setSex] = useState('男')
  const [work, setWork] = useState('前端程序员')
  useEffect(() => {
    // console.log(userContent)
    // console.log(`useEffect=>You clicked ${count} times`)
  })
  const handClick = () => {
    setCount(count + 1)
    setSex("女");
    setWork("测试");
  }
  return (
    <div>三生三世
      <div>
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
