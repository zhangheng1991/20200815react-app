/**
 * 对ServiceCommon类的扩充。主要直接返回一个message对象
 */
import request from '../utils/request';
import axios from 'axios';
import config from '../utils/PlatConfig';
import * as service from './ServiceCommon';
import { message } from 'antd';

export function messgeTip(text) {
  message.success(text);
}

export function back(msg , flag){

  if(msg.status==1 && flag){
    message.success(msg.text);
  }

  return msg;
}

function redictSSOPage(error){
  if(error.message=='Network Error' && config.IS_SSO)
    window.location.href=config.SSO_URL;
}

function filterMessage(data){
  if(data.data!=null ){
    return data.data;
  }
}

export async function query() {
  return request('/api/users');
}


export function *insert(url,values) {
  let data = yield service.insert(url,values);
  return filterMessage(data);
}

export function *loadData(url) {

  let data = yield service.loadData(url);
  return filterMessage(data);

}

/**
 * 加载远程数据
 */
export function *loadServerData(url,item) {
  // console.log(url);
  // console.log(item);
  let data = yield service.loadServerData(url , item);
  return filterMessage(data);

}


export function *deleteById(url,sendData) {

  let data = yield service.deleteById(url , sendData);
  return filterMessage(data);


}


export function *post(url,sendData) {

  let data = yield service.post(url , sendData);
  return filterMessage(data);

}

export function *updateById(url,sendData) {
  let data = yield service.updateById(url , sendData);
  return filterMessage(data);
}

/**
 * 加载配置信息
 * @returns {Promise.<T>}
 */
export function loadConfig() {


  return axios.header("config.json")
      .then((response)=>{
        return filterMessage(response);
      })
      .catch(function (error) {
        // console.log(error);
        redictSSOPage(error);
      });

}


export async function isUnique(url ,callback , message , sendData ) {
  axios.get(config.SERVER_URL+ url , { params: sendData } )
    .then(function (result) {
      if(result.data && result.data.result>0){
        return callback(message);
      }else{
        return callback();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
