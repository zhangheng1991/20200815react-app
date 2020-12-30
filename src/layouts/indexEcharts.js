import React from "react";
import styles from './index.less';
import Link from 'umi/link';
import { Menu } from "antd";
import { connect } from "dva";
const { SubMenu } = Menu;
const MenuData = [
  {
    title: "首页",
    url: "/",
  },
  // {
  //   title: "测试",
  //   url: "/Test",
  // },
  // {
  //   title: "登录页面",
  //   url: "/user/login",
  //   child: [

  //   ],
  // },
  // {
  //   title: "新的测试",
  //   url: "/Tests",
  // },
  {
    title: "表格拉伸",
    url: "/Echarts/Header",
  },
  {
    title: "流星",
    url: "/Echarts/Echarts",
  },
  {
    title: "表格",
    url: "/Echarts/DoubleTable",
  },
  {
    "title": "HOOKSC传值",
    "url": "/Echarts/HOOKSC",
  },
  {
    "title": "复制功能",
    "url": "/Echarts/Copy",
  },
  {
    "title": "天气",
    "url": "/Echarts/Weather",
  },
  
]
@connect(({ Index }) => ({ Index }))
class BasicLayout extends React.Component {
  state = {
    keyId: '/',
  }
  componentWillMount() {

    const { dispatch } = this.props;
    dispatch({
      type: "Index/homePage", payload: { username:"admin"}
    })

    const url = this.props.keyId && this.props.keyId ? this.props.keyId : "";
    if (url) {
      this.setState({ keyId: url })
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // console.log(1111)
    // console.log(nextProps.keyId)
    if (nextProps.keyId &&  nextProps.keyId != this.state.keyId) {
      this.setState({ keyId: nextProps.keyId })
    }
  }
  // shouldComponentUpdate(nextStates) { // 应该使用这个方法，否则无论state是否有变化都将会导致组件重新渲染
  //   console.log(nextStates)
  // }
  handleClick = (e) => {
    // console.log(e);

    this.setState({
      keyId: e.key,
    });
  }
  render() {
    const {Index}=this.props;
    const {NavData}=Index;
    // console.log(NavData)
    const loop = data => data.map((item, index) => {
      if (item.child && item.child.length > 0) {
        return (
          <SubMenu key={item.url} title={<span title={item.title}>{item.title}</span>} >
            {loop(item.child)}
          </SubMenu>
        )
      }
      else {
        return (
          <Menu.Item key={item.url}>
            <Link title={item.title} to={item.url} >{item.title}</Link>
            {/* <Link title={item.title} to={`${item.url}?id=${item.title}`} >{item.title}</Link> */}
          </Menu.Item>
        )
      }
    })
    return (
      <div className={styles.normal}>
        {/* <div className={styles.Header}>
          <h1 className={styles.title}>Yay! Welcome to echarts!</h1>
        </div> */}
        <div className={styles.NormalBodyS}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.keyId]}
            mode="horizontal"
          >
            {/* {loop(NavData&&NavData.length>0?NavData:MenuData)} */}
            {loop(MenuData)}
          </Menu>
          {this.props.children}
        </div>

      </div>
    );
  }
}

export default BasicLayout;
