/**
 * Created by zhangheng on 2019/5/18.
 */

import * as services from './../services/ServiceCommon';
import {message} from "antd";
import router from 'umi/router';
export default{
  namespace: 'Login',                             //models命名空间，需全局唯一
  state: {
    dataList: []
  },                                      //models存储的数据store
  reducers: {
    save(state, { payload }) {                    //更新store，用新数据合并state的旧数据
      return { ...state, ...payload };
    }
  },
  effects: {
    *UserLogin({ payload: values }, { call, put, select }) {   //dispatch请求的方法
      console.log(1111)
      // const { dataList } = yield select(state => state.system); //获取models中的state
      const back = yield call(services.post,"umi/userLogin", values);  //call,请求services里面的接口以及传参，可继续往后面加参数，跟JavaScript的call一样
      console.log(back)
      if(back.status==200&&back.data.data.username=="admin"&&back.data.data.password=="123456"){
        message.success('登陆成功');
        sessionStorage.setItem("userInfo", JSON.stringify(back.data.data));
        router.push('/');
      }else{
        if(back.data.data.username !="admin" &&back.data.data.password =="123456"){
          message.error("输入的用户名不正确，请输入admin");
        }
        if(back.data.data.username =="admin"&& back.data.data.password !="123456"){
          message.error("输入的密码不正确，请输入123456");
        }
        if(back.data.data.username !="admin"&&back.data.data.password !="123456"){
          message.error("用户名和密码都不对。用户名请输入admin，密码请输入123456");
        }
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
  },
  subscriptions: {                                             //订阅，在app.start()即启动项目时被执行
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        // 进入 '/manager/system' 路由，会发起一个名叫 'save' 的 effect
        if (pathname === '/manager/system') {
          console.log(1111)
					//do sth... dispatch({ type: 'save', payload: query });
				}
      })
    }
  }
}
// import {post} from "./../services/ServiceCommon";
// export default {
//   namespace:"Login",
//   state:{
//     id:"111"
//   },
//   effect:{
  
//     *getChartStyleById({ payload:values } , {select, call, put }){ // 根据主键获取信息
//       debugger;
//       console.log(111)
//       const data = yield call(post,`/getById`, values);
//       // return data.data;
//       yield put({
//         type: 'save',
//         payload:{
//           id:"2222"
//         }
//       })
//     },
//   },
//   reducers: {
//     save( state,action ) {
//       return { ...state,...action.payload };
//     }
//   }
// }
