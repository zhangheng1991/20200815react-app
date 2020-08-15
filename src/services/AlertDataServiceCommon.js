/**
 * 带有提示信息的服务层。
 */
import request from '../utils/request';
import axios from 'axios';
import config from '../utils/PlatConfig';
import * as service from './DataServiceCommon';
import { message } from 'antd';


export function back(msg , flag){

  if(msg.status==1 && flag){
    message.success(msg.text);
  }else if(msg.status==0 && msg.text!=null){
    message.error(msg.text)
  }

  return msg;
}

/**
 * 打印提示
 * @param msg
 */
export function alertMsg(status,text){
  message.success(text);
}

  export function *loadData(url) {

  let msg =yield  service.loadData(url);

}

export function *insert(url,values ,flag=false) {

  let msg = yield service.insert(url,values);
  back(msg , flag);
  return msg;

}

/**
 * 加载远程数据
 */
export function *loadServerData(url,item ,flag=false) {
  // console.log(url);
  // console.log(22222);
  // console.log(item);
  // console.log(3333);
  let msg =yield service.loadServerData(url,item);
  back(msg,flag);
  //console.log(msg)
  return msg;

}


export function *deleteById(url,sendData,flag=true) {

   let  msg = yield service.deleteById(url,sendData);
  back(msg,flag);
  return msg;

}


export function *post(url,sendData,flag=true) {

  let msg =yield service.post(url,sendData);
  back(msg,flag);
  return msg;

}

export function *updateById(url,sendData,flag=true) {

  let msg =yield service.updateById(url,sendData);
  back(msg,flag);
  return msg;


}



