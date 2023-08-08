import React from "react";
import { Document, Page } from 'react-pdf';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import FileViewer from 'react-file-viewer';
import { CustomErrorComponent } from 'custom-error';
import logger from 'logging-library';
import { Tabs } from 'antd';
const pdfUrl = require('./component/Report.pdf');
const type = 'docx';
const typeE = 'xlsx';




const { TabPane } = Tabs;


class WordIndex extends React.Component {

    state = {
        activeKey: "pdf"
    }

    onError = e => {
        logger.logError(e, 'error in file-viewer');
    };


    callback = (key) => {
        console.log(key);
        this.setState({ activeKey: key })
    }

    render() {
        const { activeKey } = this.state;

        return (
            <div>

                <Tabs activeKey={activeKey} onChange={this.callback}>
                    <TabPane tab="pdf预览" key="pdf">
                        <h2>pdf预览</h2>
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
                            <div style={{ height: '23000px' }}>
                                <Viewer fileUrl={pdfUrl} />
                            </div>
                        </Worker>
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
                        <FileViewer
                            fileType={typeE}
                            filePath={require('./component/zhangheng.xlsx')}
                            errorComponent={CustomErrorComponent}
                            onError={this.onError}
                        />

                    </TabPane>
                </Tabs>

            </div>
        )
    }
}

export default WordIndex;