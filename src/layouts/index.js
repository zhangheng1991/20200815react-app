import React from 'react';
import styles from './index.less';
import Link from 'umi/link';
import { Menu } from 'antd';
import axios from 'axios';
import { connect } from 'dva';
const { SubMenu } = Menu;
const MenuData = [
  {
    title: '首页',
    url: '/',
  },
  {
    title: '测试',
    url: '/Test',
  },
  // {
  //   title: "登录页面",
  //   url: "/user/login",
  //   child: [

  //   ],
  // },
  {
    title: '新的测试',
    url: '/Tests',
  },
  {
    title: 'EchartsO',
    url: '/Echarts/Header',
  },
  {
    title: 'EchartsT',
    url: '/Echarts/Echarts',
  },
  {
    title: '表格',
    url: '/Echarts/DoubleTable',
  },
  {
    "title": "流程图",
    "url": "/RelationChart",
  },
];
@connect(({ Index }) => ({ Index }))
class BasicLayout extends React.Component {
  state = {
    keyId: '/',
  };
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'Index/homePage',
      payload: { username: 'admin' },
    });
    this.userFunction();
    // this.getWeather();
    const url =
      this.props.location && this.props.location.pathname ? this.props.location.pathname : '';
    if (url) {
      this.setState({ keyId: url });
    }
  }
  userFunction() {
    const { dispatch } = this.props;
    dispatch({
      type: 'Index/SelectListD',
      payload: { username: 'admin' },
    }).then(res => {

    });
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      nextProps.location &&
      nextProps.location.pathname &&
      nextProps.location.pathname != this.state.keyId
    ) {
      this.setState({ keyId: nextProps.location.pathname });
    }
  }
  // shouldComponentUpdate(nextStates) { // 应该使用这个方法，否则无论state是否有变化都将会导致组件重新渲染

  // }
  handleClick = e => {

    this.setState({
      keyId: e.key,
    });
  };

  // getWeather() {
  //   axios({
  //     url: 'https://www.tianqiapi.com/api/',
  //     method: 'get',
  //     params: {
  //       version: 'v3',
  //       city: '商丘', // 若不提供城市名，会根据本机IP获取当地天气
  //       appid: '53783933', // 到该网站上注册申请（操作很简单）
  //       appsecret: 'AYHXKr8a',
  //     },
  //     headers: {
  //       'Content-type': 'application/x-www-form-urlencoded',
  //     },
  //     data: [],

  //     // let todayData = res.data.data[0];

  //   });
  // }

  render() {
    const { Index } = this.props;
    const { NavData } = Index;

    const loop = data =>
      data &&
      data.map((item, index) => {
        if (item.children && item.children.length > 0) {
          return (
            <SubMenu key={item.url} title={<span title={item.title}>{item.title}</span>}>
              {/* <Link title={item.title} to={item.url} >{item.title}</Link> */}
              {loop(item.children)}
            </SubMenu>
          );
        } else {
          return (
            <Menu.Item key={item.url}>
              {/* <Link title={item.title} to={`${item.url}?id=${item.title}`} >{item.title}</Link> */}
              <Link title={item.title} to={item.url}>
                {item.title}
              </Link>
            </Menu.Item>
          );
        }
      });

    return (
      <div className={styles.normal}>
        <div className={styles.Header}>
          <h1 className={styles.title}>Yay! Welcome to echarts!</h1>
        </div>
        <div className={styles.NormalBody} >
          <div className={styles.NormalBodyMenu}>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.keyId]} mode="horizontal" >
              {loop(NavData && NavData.length > 0 ? NavData : MenuData)}
            </Menu>
          </div>
          <div className={styles.NormalBodyContent}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default BasicLayout;
