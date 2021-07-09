import * as service from "../services/DataServiceCommon";
export default{
    namespace:"TestModel",
    state:{
       tableList:[],
    },
    effect:{

    },
    reducers:{
        save(state ,{payload}){
           return {...state,...payload}
        }
    },
    subscriptions: {                                             //订阅，在app.start()即启动项目时被执行
        setup({ dispatch, history }) {
          return history.listen(({ pathname, query }) => {
            // 进入 '/manager/system' 路由，会发起一个名叫 'save' 的 effect
            if (pathname === '/manager/system') {
           
                        //do sth... dispatch({ type: 'save', payload: query });
                    }
          })
        }
      }
}