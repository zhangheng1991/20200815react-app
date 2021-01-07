/**
 * Created by zhangheng on 2019/5/18.
 */

import * as services from '../services/ServiceCommon';
import { message } from 'antd';
import router from 'umi/router';
export default {
  namespace: 'PublicApi', //models命名空间，需全局唯一
  state: {}, //models存储的数据store

  effects: {
    //查询历史上的今天发生的事件
    *SelectTodayHistory({ payload: values }, { call, put, select }) {
      const back = yield call(services.loadServerDataP, 'today.php', values);
      return back;
    },
    //查询QQ等级
    *SelectQQLever({ payload: values }, { call, put, select }) {
      const back = yield call(services.loadServerDataP, 'qq.level.php', values);
      return back;
    },
    //查询QQ空间访客
    *SelectQQSpaceVisitors({ payload: values }, { call, put, select }) {
      const back = yield call(services.loadServerDataP, 'qq.space.php', values);
      return back;
    },
  },
  reducers: {
    save(state, { payload }) {
      //更新store，用新数据合并state的旧数据
      return { ...state, ...payload };
    },
  },
};
