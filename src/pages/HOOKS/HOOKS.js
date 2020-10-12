import React, { useState, useEffect } from 'react';
import FileViewer from 'react-file-viewer';
import logger from 'logging-library';
import { CustomErrorComponent } from 'custom-error';

const file = 'timg.jpg';
const type = 'jpg';

function MyHooks() {
  const [count, setCount] = useState(0);
  useEffect(() => {});
  const handClick = () => {
    setCount(count - 1);
  };
 const  onError=(e) =>{
    logger.logError(e, 'error in file-viewer');
  }
  return (
    <div>
     <FileViewer
        fileType={type}
        filePath={require('./timg.jpg')}
        errorComponent={CustomErrorComponent}
        onError={onError}/>
       {/* <iframe width="100%" height="500px" src="https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87&hs=2&pn=0&spn=0&di=169950&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=3892521478%2C1695688217&os=733181249%2C216344720&simid=4289427427%2C709582725&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=&bdtype=0&oriquery=%E5%9B%BE%E7%89%87&objurl=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fp7rtwg_z%26e3Bkwthj_z%26e3Bv54AzdH3Ftrw1AzdH3Fwa_cm_8d_a8naaaaa8m98c88d8c0m8dmdbd988_3r2_z%26e3Bip4s&gsm=1&islist=&querylist="></iframe> */}
      <div onClick={() => setCount(count + 1)}>点击</div>
      <div onClick={() => handClick()}>点击</div>
      <p>{count}</p>
      sdfsdfsdf
    </div>
  );
}

export default MyHooks;
