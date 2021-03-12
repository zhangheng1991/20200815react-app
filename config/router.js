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
        { path: '/Echarts/HOOKSC', component: '../Echarts/HOOKSC' },
        { path: '/Echarts/Copy', component: '../Echarts/Copy' },
        { path: '/Echarts/Weather', component: '../Echarts/Weather' },
        { path: '/Echarts/PublicInterface', component: '../Echarts/PublicInterface' },
        
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
        { path: '/Hooks', component: './Hooks/Hooks' },
        { path: '/DragDrop', component: './Hooks/DragDrop' },
        { path: '/Pdf', component: './pdf/Pdf' },
      ]
    },

  ]


//   {
//     "data":[
//   {
//     "title": "首页",
//     "url": "/",

//   },
//   {
//     "title": "表格默认选中",
//     "url": "/selectedDefault",
//   },
//   // {
//   //   title: "登录页面",
//   //   url: "/user/login",
//   //   child: [

//   //   ],
//   // },
//   {
//     "title": "表格编辑",
//     "url": "/formEditor",
//   },
//   {
//     "title": "表格拉伸",
//     "url": "/tensileTabler",
//   },
//   {
//     "title": "流星",
//     "url": "/shootingStar",
//   },
//   {
//     "title": "表格",
//     "url": "/table",
//   },
//    {
//     "title": "echarts图表",
//     "url": "/echartsIndex",
//   },
//    {
//     "title": "HOOKS",
//     "url": "/HOOKS",
//   },
//    {
//     "title": "拖拽",
//     "url": "/DragDrop",
//   },
// ],
// "status":1,
// }