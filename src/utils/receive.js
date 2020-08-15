import  * as receive from "../utils/receive";
import { routerRedux  } from 'dva/router';
import { call, put } from 'redux-saga/effects'

// import { createStore } from 'redux'
// let store = createStore();

var Stomp = require('stompjs'); // 引入JS文件
var step = 0;
var urls = "";
var username , password ;

/**
 * 启动wstomp服务
 * @param param
 * @param userId
 * @param call
 */
export function *connectStomp(param , userId , dispatch ) {

  const {USERNAME , PASSWORD , URL} = param;

  username = USERNAME;
  password = PASSWORD;

  // 切分URL
  urls = URL.split(",");

  if(urls.length > 1){
    connStomp(urls[step%(urls.length)] ,userId , dispatch);
    step++;
  }else{
    connStomp(URL ,userId, dispatch);
  }



}



function connStomp(url , userId , dispatch){


  var client = Stomp.client(url);
  client.heartbeat.outgoing = 3000;
  client.heartbeat.incoming = 3000;

  var on_connect = function() {
    client.subscribe("/topic/event",function(message){
      success( JSON.parse(message.body), dispatch);
    });

    client.subscribe("/topic/"+userId ,function(message){
      console.log(message);
    });
  };

  var on_error =  function(msg) {
    connStomp(urls[step%(urls.length)] ,userId , dispatch);
    step++;
  };

  client.connect(username, password, on_connect , on_error, '/');
}

function success(msg , dispatch){

  if(!msg)return;//如果是空直接退回
  if(msg.code=='1001'){
    dispatch({type:'loadEME'});
  }else if(msg.code=='1002'){
    dispatch({type:'loadEME'});
    //调用弹窗
    dispatch({type:'selectByEMEId' , payload:msg.data });
  }else if(msg.code=='2000'){
    // console.log(msg);
    // dispatch({type:'share/updateShare' , payload:msg.data });
  }
}


function* loadServer() {
  console.log(1231);

}



