/**
 * Created by zhangheng on 2019/5/18.
 */
export default
  [
    {
      path: '/Echarts', component: '../EchartsLayout/index',
      routes: [
        { path: '/Echarts/DoubleTable', component: '../Echarts/DoubleTable' },
        { path: '/Echarts/Header', component: '../Echarts/Header' },
        { path: '/Echarts/Echarts', component: '../Echarts/Echarts' },
      ]
    },
    {
      path: '/user', component: '../user/user',
      routes: [
        
        { path: '/user/login', component: './Login' },
      ]
    },
    // { path: '/Tests', component: '../Test/Tests' },//开启没有导航
    {
      path: '/', component: '../layouts/index',
      routes: [
        { path: '/', component: './Lndex' },
        { path: '/Test', component: './Test' },
        { path: '/Tests', component: '../Test/Tests' },//有导航
        { path: '/echartsIndex', component: './echarts/echartsIndex' },
      ]
    },

  ]
