/**
 * Created by zhangheng on 2019/5/18.
 */

// ref: https://umijs.org/config/
import routers from './router';
export default {
  history: 'hash',//開起hash模式
  exportStatic: {
    htmlSuffix: false,
    dynamicRoot: true,
  },
  treeShaking: true,
  targets: { //配置浏览器最低版本,比如兼容ie11
    ie: 11
  }, 
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      // antd: true,
      // dva: {
      //   immer: true,
      // },
      antd: true,
      dva: {
        dynamicImport: true, //是否启用按需加载
        hmr: true //是否启用 dva 的 热更新
      },
      dynamicImport: { //实现路由级的动态加载
        webpackChunkName: true //实现有意义的异步文件名
      },
          
      // dynamicImport: false,
      title: '测试项目',
      dll: {
        exclude: [],
        include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch', 'antd/es',"axios"]
      },
      umi:true,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /utils\//,
          /pages\//,
          /models\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  routes:routers ,
  proxy: {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
}
