/**
 * Created by zhangheng on 2019/5/18.
 */

import * as services from '../services/ServiceCommon';
import {message} from "antd";
import router from 'umi/router';
export default{
  namespace: 'Index',                             //models命名空间，需全局唯一
  state: {
    NavData: [],//导航数据
    TableList:[],
  },                                      //models存储的数据store
  subscriptions: {                                             //订阅，在app.start()即启动项目时被执行
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        console.log(pathname)
        // 进入 '/manager/system' 路由，会发起一个名叫 'save' 的 effect
        // if (pathname === '/manager/system') {
        //   console.log(1111)
				// 	//do sth... dispatch({ type: 'save', payload: query });
				// }
      })
    }
  },
  effects: {
    *homePage({ payload: values }, { call, put, select }) {   //dispatch请求的方法
      console.log(1111)
      // const { dataList } = yield select(state => state.system); //获取models中的state
      //call,请求services里面的接口以及传参，可继续往后面加参数，跟JavaScript的call一样
      console.log(sessionStorage.getItem("userInfo"))
      if(sessionStorage.getItem("userInfo")){
        const back = yield call(services.loadServerData,"react/umi/homePage", values); 
        if(back.data.status==1){
          yield put({
            type:"save",
            payload:{
              NavData:back.data.data
            }
          })
        }
      }else{
        router.push('/user/login');
        // router.push('/');
        
      }
     
      // if (data && data.code == 0) {
      //   const data_ = data.data.content;
      //   yield put({ //put,必须发出action save，此action被reducer监听，从而达到更新state数据的目的
      //     type: 'save',                                        
      //     payload: {
      //       dataList: data_ || []
      //     }
      //   });
      //   return data_;                                          //返回response，可选
      // }                                                        
    },
    *SelectList( {payload:values},{call,put,select}){
      const back = yield call(services.loadServerData,"users/list", values); 
      console.log(back)
      yield put({
        type:"save",
        payload:{
          TableList:back.data.data
        }
      })
    },
  },
  reducers: {
    save(state, { payload }) {                    //更新store，用新数据合并state的旧数据
      return { ...state, ...payload };
    }
  },
  
}

