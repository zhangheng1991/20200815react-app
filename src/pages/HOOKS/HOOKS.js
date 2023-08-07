import React, { useState, useEffect } from 'react';
import FileViewer from 'react-file-viewer';
import logger from 'logging-library';
import { connect } from "dva";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { CustomErrorComponent } from 'custom-error';
// import {Pdf} from 'react-pdf-js';
// import Pdf from 'react-pdf-js';
// import { Anchor } from 'antd';
import { Tabs } from 'antd';
import { Document, Page } from 'react-pdf';

import SignalVertical from './SignalVertical/SignalVertical';
import SignalHorizontal from './SignalHorizontal/SignalHorizontal';
import MultiVertical from './MultiVertical/MultiVertical';
import MultiHorizontal from './MultiHorizontal/MultiHorizontal';
import VirtualVertical from './VirtualVertical/VirtualVertical';
import DragSortingTable from "./../../Echarts/comm/DragSortingTable";
import style from './style.less';
// const { Link } = Anchor;
// const file = '11.jpg';
const type = 'docx';



const { TabPane } = Tabs;
function MyHooks(props) {
  const [count, setCount] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setPageNumber(numPages);
  }
  useEffect(() => {
    homePage()
    SelectListD()
    //hooks写法调用接口形式也可以用老的写法
    // props.dispatch({
    //   type: "Index/homePage", payload: { username: "admin" }
    // })
    console.log(count, "count")
    console.log(props, "props");
    return function cleanup() {
      stepConfig()
      // setCount(1)
    }
  }, []);//count 改变就会调用接口


  const handClick = () => {
    setCount(count + 1);
    stepConfig()

  };

  const stepConfig = () => {
    props.stepConfig(`点击传值${count}`)
  }

  const homePage = () => {
    props.homePage({ username: "admin" }).then((res) => {
      console.log(res, "res")
    })
  }

  const SelectListD = () => {
    props.SelectListD({ username: "admin" }).then((res) => {
      console.log(res, "res")
    })
  }
  // if(count){
  //   setCount(333)
  // }
  const onError = e => {
    logger.logError(e, 'error in file-viewer');
  };
  console.log(props.type, "props.type")
  console.log(props, "props")
  // const onDocumentLoadSuccess=()=> {
  //   // setNumPages(numPages);
  // }
  // console.log(NavData, "NavData")

  const callback = (key) => {
    console.log(key);
  }
  return (
    <div className={style.box}>
      <div>
        props.type:
        {props.type}
        <Document
          file="./11.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>

      <Tabs defaultActiveKey="6" onChange={callback}>
        <TabPane tab="单行垂直列表" key="1">
          <SignalVertical />
        </TabPane>
        <TabPane tab="单行水平列表" key="2">
          <SignalHorizontal />
        </TabPane>
        <TabPane tab="多行垂直列表拖拽" key="3">
          <MultiVertical />
        </TabPane>
        <TabPane tab="多行水平列表拖拽" key="4">
          <MultiHorizontal />
        </TabPane>
        <TabPane tab="大数据量垂直列表" key="5">
          <VirtualVertical />
        </TabPane>
        <TabPane tab="表格拖拽" key="6">
          <DragSortingTable />
        </TabPane>
      </Tabs>
      {/* <Document
        file="./11.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={100} />
      </Document> */}
      {/* <Pdf file="./11.pdf">

    </Pdf> */}
      {/* <Anchor>
        <Link href="#components-anchor-demo-basic" title="Basic demo" />
        <Link href="#components-anchor-demo-static" title="Static demo" />
        <Link href="#API" title="API">
          <Link href="#Anchor-Props" title="Anchor Props" />
          <Link href="#Link-Props" title="Link Props" />
        </Link>
      </Anchor> */}
      {/* <iframe
        src="https://view.officeapps.live.com/op/view.aspx?src=http://storage.xuetangx.com/public_assets/xuetangx/PDF/1.xls"
        width="100%"
        height="100%"
        frameborder="1"
      />
      <iframe
        src="http://yl.yjc.lsx.com/op/view.aspx?src=http%3A%2F%2Foa.new1.com%2FXXX.xls"
        width="100%"
        height="100%"
        frameborder="1"
      /> */}
      <FileViewer
        fileType={type}
        filePath={require('./11.docx')}
        errorComponent={CustomErrorComponent}
        onError={onError}
      />
      {/* <iframe width="100%" height="500px" src="https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87&hs=2&pn=0&spn=0&di=169950&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=3892521478%2C1695688217&os=733181249%2C216344720&simid=4289427427%2C709582725&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=&bdtype=0&oriquery=%E5%9B%BE%E7%89%87&objurl=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fp7rtwg_z%26e3Bkwthj_z%26e3Bv54AzdH3Ftrw1AzdH3Fwa_cm_8d_a8naaaaa8m98c88d8c0m8dmdbd988_3r2_z%26e3Bip4s&gsm=1&islist=&querylist="></iframe> */}
      <div onClick={() => setCount(count + 1)}>点击</div>
      <div onClick={() => handClick()}>点击33333333333333333333333333333333333</div>
      <p>{count}</p>
      sdfsdfsdf
    </div>
  );
}

const mapDispatchToprops = {
  SelectListD: query => ({
    type: "Index/SelectListD", payload: query || {}
  }),
  homePage: query => ({
    type: "Index/homePage", payload: query || {}
  }),
  stepConfig: query => ({
    type: "Index/stepConfig", payload: query || {}
  })
}
const mapStateProps = state => ({
  type: state.Index.type
})

// export default connect(({ Index }) => ({ Index }))(MyHooks);
export default connect(mapStateProps, mapDispatchToprops)(MyHooks);
