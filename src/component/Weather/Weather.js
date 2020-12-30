import axios from 'axios';
export default {
  
  getWeather(data) {
    let dataW={
        version: 'v3',
        city: '商丘', // 若不提供城市名，会根据本机IP获取当地天气
        appid: '53783933', // 到该网站上注册申请（操作很简单）
        appsecret: 'AYHXKr8a',
    };
    console.log(data);
    axios({
      url: 'https://www.tianqiapi.com/api/',
      method: 'get',
      params: 
        data||dataW
      ,
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      data: [],
    }).then(res => {
        dataW=res.data
    //   console.log(res.data);
      return dataW;
      // let todayData = res.data.data[0];
      // console.log(todayData);
    });
    return dataW;
  },
};
