import React from "react";
import { Document, Page } from 'react-pdf';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';
import logger from 'logging-library';
import { Tabs, Anchor, Upload, message, Button, Icon } from 'antd';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Papa from 'papaparse';
// const txtToJson = require("txt-file-to-json");

import tetToJson from "txt-file-to-json";

import 'react-photo-view/dist/react-photo-view.css';
import style from "./style.less";
const pdfUrl = require('./component/Report.pdf');
const JpgUrl = require('./component/fengjing.jpg');
var fileTxt = require("./component/txt.txt");
const type = 'docx';
const typeE = 'xlsx';

const typeP = 'jpg';

const typeT = 'txt';

const { Link } = Anchor;
const { TabPane } = Tabs;


class WordIndex extends React.Component {

    state = {
        activeKey: "pdf"
    }

    onError = e => {
        console.log(e, "E");
        console.log(logger, "logger")
        logger.logError(e, 'error in file-viewer');
    };


    callback = (key) => {
        console.log(key);
        this.setState({ activeKey: key })
    }

    jumpClick = (id) => {
        document.querySelector(`#${id}`).scrollIntoView(true)
    }

    beforeUpload = (file, fileList) => {
        console.log(file, fileList, "file, fileList");
        // let dd = tetToJson({ data: file});
        // console.log(dd, "dd");
        //  const sss=Papa.parse(file);
        //  console.log(sss,"sss")
        var readerTxt = new FileReader();

        readerTxt.readAsText(file)
        console.log(readerTxt, "readerTxt")

        // const reader = new FileReader();
        // reader.onload = (e) => {
        //     const content = e.target.result;

        // }

    }

    mousewheel=()=>{
        console.Consolelog(33333)
    }


    render() {
        const { activeKey } = this.state;
        // var readerTxt = new FileReader();

        // readerTxt.readAsText(fileTxt)
        // console.log(readerTxt,"readerTxt")

        const props = {
            name: 'file',
            // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            // headers: {
            //   authorization: 'authorization-text',
            // },
            // onChange(info) {
            //   if (info.file.status !== 'uploading') {
            //     console.log(info.file, info.fileList);
            //   }
            //   if (info.file.status === 'done') {
            //     message.success(`${info.file.name} file uploaded successfully`);
            //   } else if (info.file.status === 'error') {
            //     message.error(`${info.file.name} file upload failed.`);
            //   }
            // },
            beforeUpload: this.beforeUpload
        };

        // const dataInJSON = tetToJson({ filePath: "./component/txt.txt" });

        // console.log(dataInJSON,"dataInJSON")
        const str = "1 2 3 4 5 6 7    8";
        console.log(str.replaceAll(" ", ","), str.split(" "), "Ddddd", str.replaceAll(/\t/g, ","))

        let strting = 'hello   world          hello    lll';
        let newStr = strting.replaceAll(/(\s+)/g, ' ').replaceAll(" ", ",");
        console.log(newStr); // hello world hello javascript

        return (
            <div className={`${style["PreviewBox"]}`} mousewheel={this.mousewheel}>
                {/* <div id="anchor">位置</div> */}

                <Tabs activeKey={activeKey} onChange={this.callback}>
                    <TabPane tab="pdf预览" key="pdf">
                        <h2>pdf预览</h2>
                        <Upload {...props}>
                            <Button>
                                <Icon type="upload" /> Click to Upload
                            </Button>
                        </Upload>
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
                            <div style={{ height: '23000px' }}>
                                <Viewer fileUrl={pdfUrl} />
                            </div>
                        </Worker>
                    </TabPane>
                    <TabPane tab="pdf预览2" key="pdfS">
                        <h2>pdf预览</h2>
                        <FileViewer
                            fileType={"pdf"}
                            filePath={pdfUrl}
                            errorComponent={CustomErrorComponent}
                            onError={this.onError}
                        />
                    </TabPane>
                    <TabPane tab="word预览" key="word">
                        <h2>word预览</h2>
                        <FileViewer
                            fileType={type}
                            filePath={require('./component/zhangword.docx')}
                            errorComponent={CustomErrorComponent}
                            onError={this.onError}
                        />
                    </TabPane>
                    <TabPane tab="excel预览(格式xlsx)" key="excel">
                        <h2>excel预览(格式xlsx)</h2>
                        {/* <div onClick={this.jumpClick.bind(this, "excel")}>点击跳转</div> */}
                        <div className={style.headerFileBox}>

                            <div className={style.headerFile}> </div>
                            <FileViewer
                                fileType={typeE}
                                filePath={require('./component/zhangheng.xlsx')}
                                errorComponent={CustomErrorComponent}
                                onError={this.onError}
                            />
                        </div>

                        {/* <div id="excel">位置</div> */}
                    </TabPane>
                    <TabPane tab="图片预览" key="jpg">
                        <h2>图片预览</h2>
                        <FileViewer
                            fileType={"jpg"}
                            filePath={JpgUrl}
                            errorComponent={CustomErrorComponent}
                            onError={this.onError}
                        />

                    </TabPane>
                    <TabPane tab="视频预览" key="video">
                        <h2>视频预览</h2>
                        <FileViewer
                            fileType={"mp4"}
                            filePath={require('./component/海上风暴.mp4')}
                            errorComponent={CustomErrorComponent}
                            onError={this.onError}
                        />

                    </TabPane>

                    <TabPane tab="图片预览" key="picture">
                        <h2>图片预览</h2>
                        <PhotoProvider>
                            <PhotoView src={JpgUrl}>
                                <img src={JpgUrl} alt="" style={{ width: "600px", height: "300px" }} />
                            </PhotoView>
                        </PhotoProvider>
                    </TabPane>

                    {/* <TabPane tab="TXT文档" key="TXT">
                        <h2>TXT文档</h2>
                        <FileViewer
                            fileType={"txt"}
                            filePath={require('./component/txt.txt')}
                            errorComponent={CustomErrorComponent}
                            onError={this.onError}
                        />

                    </TabPane> */}

                </Tabs>
                {/* <div onClick={this.jumpClick.bind(this, "anchor")}>点击跳转</div> */}
            </div>
        )
    }
}

export default WordIndex;