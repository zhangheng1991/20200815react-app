import request from '../utils/request';
import axios from 'axios';
import config from '../utils/PlatConfig';
import { message } from 'antd';

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

export async function query() {
  return request('/api/users');
}

/**
 * 将token获取出来并且放入session中
 */
function saveTokenToSession(data){
  if(data.data && data.data.tokenId){
    window.sessionStorage.setItem("tokenId" ,data.data.tokenId );
  }
}

/**
 * 从session中获取tokenid
 */
function getTokenId(){
  return window.sessionStorage.getItem("tokenId");
}


export function insert(url,values) {
  axios.defaults.headers.common['Auth'] = getTokenId();
  return axios.post(config.SERVER_URL + url,values)
    .then((response)=>{
      saveTokenToSession(response);
      return response;
    })
    .catch(function (error) {
      redictSSOPage(error);
    });
}

export function loadData(url) {

  axios.defaults.headers.common['Auth'] = getTokenId();
  return axios.get(config.SERVER_URL + url,{})
    .then((response)=>{
      saveTokenToSession(response);
      return response;
    })
    .catch(function (error) {
      redictSSOPage(error);
    });

}

/**
 * 加载远程数据
 */
export function loadServerData(url,item) {
  console.log(config)
  // axios.defaults.headers.common['Auth'] = getTokenId();
  // console.log(url);
  // console.log(item);
  return axios.get(config.SERVER_URL+url, { params: item })
    .then((response)=>{
      //console.log(response)
      saveTokenToSession(response);
      return response;
    })
    .catch(function (error) {
      redictSSOPage(error);
    });

}

/**
 * 加载远程数据临时使用
 */
export function test_loadServerData(url,item) {
  // axios.defaults.headers.common['Auth'] = getTokenId();
  return axios.get(url, { params: item })
    .then((response)=>{
      saveTokenToSession(response);
      return response;
    })
    .catch(function (error) {
      redictSSOPage(error);
    });

}

export function deleteById(url,sendData) {
  axios.defaults.headers.common['Auth'] = getTokenId();
  return axios.get(config.SERVER_URL + url,{
    params: sendData
  })
    .then((response)=>{
      saveTokenToSession(response);
      return response;
    })
    .catch(function (error) {
      redictSSOPage(error);
    });
}


export function post(url,sendData) {
  // axios.defaults.headers.common['Auth'] = getTokenId();
  console.log(sendData)
  return axios.post(config.SERVER_URL + url,sendData)
    .then((response)=>{
      saveTokenToSession(response);
      return response;
    })
    .catch(function (error) {
      redictSSOPage(error);
    });


}

export function updateById(url,sendData) {
  axios.defaults.headers.common['Auth'] = getTokenId();
  return axios.patch(config.SERVER_URL + url,sendData)
    .then((response)=>{
      saveTokenToSession(response);
      return response;
    })
    .catch(function (error) {
      redictSSOPage(error);
    });

}

/**
 * 加载配置信息
 * @returns {Promise.<T>}
 */
export function loadConfig() {
  axios.defaults.headers.common['Auth'] = getTokenId();
  return axios.header("config.json")
    .then((response)=>{
      saveTokenToSession(response);
      return response;
    })
    .catch(function (error) {
      redictSSOPage(error);
    });

}

