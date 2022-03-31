import React, { useState, useEffect, useRef } from 'react';
import { Button, Spin, Alert, message } from 'antd';
import moment from "moment";
import _ from "loadsh";
import PdfOne from './component/pdfOne';
import PdfTwo from './component/pdfTwo';
import EchartsIndex from "../echarts/echartsIndex";
import htmlTocanvas from 'html2canvas';
import jsPDF from 'jspdf';
// import EchartChart from "../echarts/echartsIndex";
import EchartsLine from '../echarts/charts/echartsLine';
import styles from "./component/style.less";
import html2canvas from 'html2canvas';
const CANVAS_SCALE = 3.0;
//要加载Js 相对路径
const context = require.context("./", true, /js$/);
const periodId = moment().format("YYYYMMDD");
const dataG = [
  {
    title: "1111111",
    name: "222222224444"
  },
  {
    title: "11111114444",
    name: "22222222"
  },
  {
    title: "11111114",
    name: "22222222"
  },
  {
    title: "1111111",
    name: "222222224"
  },
  {
    title: "1111111345345",
    name: "22222222"
  },
  {
    title: "111111134",
    name: "22222222"
  },
  {
    title: "1111111",
    name: "22222222"
  },
  {
    title: "1111111",
    name: "22222222"
  },
]
const PdfCim = (props) => {
  //   state = { loading: false };
  const [loading, setLoading] = useState(false);
  const [pageCotentList, setpageCotentList] = useState([])
  const pageListRef = useRef();
  const waterMarker = () => {
    const userNme = "张衡";
    const userCode = "K0410007";
    if (document.getElementById("PDFG")) {

    }
  }
  useEffect(() => {
    setpageCotentList([
      ["component/pdfOne.js"],
      ["component/pdfTwo.js"],
      ["component/pdfThree.js"],
      ["component/pdfFour.js"],
      // ["../echarts/echartsIndex.js"],

    ])
    waterMarker();
  }, [])
  const scrollFun = e => {
    if (e && e.preventDefault) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.returnvalue = false;
    }
    return false;
  };
  const handPdf = () => {
    document.body.onmousewheel = function () {
      return false;
    };
    setLoading(true);
    document.addEventListener('mousewheel', scrollFun, { passive: false });
    const element = document.getElementById('page');
    const canvasDomHomeWidth = element.clientWidth;
    const canvasDomHomeHeight = element.clientHeight;
    const pdf = new jsPDF('', 'pt', [canvasDomHomeWidth / 1.5, canvasDomHomeHeight / 1.5]);
    const fileName = '我的页面.pdf';
    htmlTocanvas(element, {
      allowTaint: true,
      scale: CANVAS_SCALE,
    }).then(function (canvas) {

      const { width, height } = element.getBoundingClientRect();
      const pageData = canvas.toDataURL('image/jpeg', 0.2);
      canvas.fillStyle = '#fff';
      canvas.background = '#fff'; 
      pdf.addImage(pageData, 'JPEG', 0, 0, width / 2, height / 2);
      document.body.removeEventListener('mousewheel', scrollFun, { passive: false });
      pdf.save(fileName);
      document.body.onousewheel = function () {
        return false;
      };
      setLoading(false);
    });

  };


  const EchartsLine1 = {
    data: '',
    title: 'XXX1公司员工薪资分布',
    chartData: [
      {
        name: '本科及以上',
        value: 555555,
        unit: '元',
      },
      {
        name: '高中',
        value: 666666,
        unit: '元',
      },
      {
        name: '初中及以下',
        value: 777777,
        unit: '元',
      },
      {
        name: '其他',
        value: 888888,
        unit: '元',
      },
    ],
    height: '400px',
    color: ['#FF8700', '#ffc300', '#00e473', '#009DFF'],
    id: 'EchartsLine1111',
  };


  const html2canvasPromise = documentBody => new Promise((resolve, reject) => {
    html2canvas(documentBody, {
      scale: CANVAS_SCALE, //添加scale参数
      allowTaint: true,
      // background: 'red',
      background: "#dfdfdf",// 如果指定的div没有设置背景色会默认成黑色,这里是个坑
      fillStyle:"#dfdfdf",
      backgroundColo:"#dfdfdf",
    }).then((canvas) => {
      resolve(canvas)
    }).catch((e) => {
      reject(e)
    })
  })
  const handPdfDall = () => {
    document.body.onmousewheel = function () {
      return false;
    };
    setLoading(true);
    document.addEventListener('mousewheel', scrollFun, { passive: false });
    const pages = pageListRef.current.children;
    const canvasDomHomeWidth = pages[1].clientWidth;
    const pageoneHeight = 946;
    const PDF = new jsPDF('', 'pt', [canvasDomHomeWidth / 2.08, (_.sum(_.map(pages, 'clientHeight')) + pageoneHeight) / 2.08]);
    // PDF.setFontSize(18);
    // PDF.text('INVOICE', 550, "", { align: 'right' });
    let YScroll = 0;
    const fileName = `日报${"p"}.pdf`;
    PDF.background = "red";
    PDF.fillStyle = 'red'; 
    try {
      const pageone = pages[0];
      setTimeout(() => {
        Promise.all(_.map(pages, item => html2canvasPromise(item))).then((canvasDoms) => {
          for (let i = 0; i < canvasDoms.length; i++) {
            const canvas = canvasDoms[i];
            canvas.fillStyle = '#fff';
            canvas.background = '#fff'; 
            const { width, height } = pages[i].getBoundingClientRect();
            const canvasData = canvas.toDataURL('image/jpeg', 0.2);
            PDF.addImage(canvasData, 'JPEG', 0, YScroll / 2.08, width / 2.08, height / 2.08);
            YScroll += height;
          }
          pageone.style.display = "none";
          document.body.removeEventListener("mousewheel", scrollFun, { passive: false })
          // PDF.setFontSize(18);
          // PDF.text('INVOICE', 550, col2y, {align:'right'});
          PDF.save(fileName);
          setLoading(false);

        });
      }, 0);
      document.body.onmousewheel = function () { return true; }
    } catch (e) {
      message.error("pafout e", e)
    }


  }

  //返回的模块
  const moudleRender = (moduleName, pro = {}, index) => {
    const contentKeysFind = _.find(context.keys(), n => `./${moduleName}` === n);
    if (contentKeysFind) {
      const Compent = context(contentKeysFind).default || context(contentKeysFind);
      return (
        <Compent
          {...props}
          {...pro}
          pageIndex={index}
        />
      )
    }
    return "";
  }
  return (
    <div id="lizi">
      <div className={styles.Box}>
        {
          dataG.map((item, index) => {
            return (
              <div>
                <span className={styles.lengedTitle}>
                  <span></span>
                  {item.title}</span>
                <span className={styles.lengedName}>{item.name}</span>
              </div>
            )
          })
        }
      </div>
      <div>
        {/* <Button type="primary" onClick={handPdf}>
          导出PDF
        </Button> */}

        <Button type="primary" onClick={handPdfDall}>
          导出PDF
        </Button>

      </div>
      <Spin spinning={loading} tip="正在生成PDF，请勿操作页面...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
        {/* <div id="page">
          <PdfOne />
          <EchartsLine {...EchartsLine1} />
        </div> */}

        <div id="PDFG" ref={pageListRef} >

          {
            _.map(pageCotentList, (moduleList, index) => {
              if (_.isEmpty(moduleList)) {
                return <div key={index} id={`pageList_${index}`} style={{ display: "none" }}></div>
              }
              if (loading === false && moduleList[0].indexOf("pdfOne") !== -1) {
                return (
                  <div key={index} id={`pageList_${index}`} style={{ display: "none" }} className={styles.PDFpage}>
                    <div>
                      {
                        moudleRender(moduleList[0], { periodId: "20210322" }, index + Math.random())
                      }
                    </div>
                  </div>
                )
              }
              return (
                <div className={styles.PDFpage}>
                  {
                    _.map(moduleList, (n) => {
                      if (_.isString(n)) {
                        return (
                          <div className={styles.moduleContent}>
                            {
                              moudleRender(moduleList[0], { periodId: "20210322" }, index + Math.random())
                            }
                          </div>
                        )
                      }
                      return n;
                    })
                  }
                </div>
              )
            })
          }

        </div>
      </Spin>
    </div>
  );
};

export default PdfCim;
