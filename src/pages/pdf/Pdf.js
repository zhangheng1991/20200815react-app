import React, { useState, useEffect } from 'react';
import { Button, Spin, Alert } from 'antd';
import PdfOne from './component/pdfOne';
import PdfTwo from './component/pdfTwo';
import htmlTocanvas from 'html2canvas';
import jsPDF from 'jspdf';
// import EchartChart from "../echarts/echartsIndex";
import EchartsLine from '../echarts/charts/echartsLine';
const CANVAS_SCALE = 3.0;

const PdfCim = () => {
  //   state = { loading: false };
  const [loading, setLoading] = useState(false);
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
    document.body.onmousewheel = function() {
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
    }).then(function(canvas) {
      console.log(canvas);
      const { width, height } = element.getBoundingClientRect();
      const pageData = canvas.toDataURL('image/jpeg', 0.2);
      pdf.addImage(pageData, 'JPEG', 0, 0, width / 2, height / 2);
      document.body.removeEventListener('mousewheel', scrollFun, { passive: false });
      pdf.save(fileName);
      document.body.onousewheel = function() {
        return false;
      };
      setLoading(false);
    });
  
  };

  console.log(loading);
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
  return (
    <div id="lizi">
      <div>
        <Button type="primary" onClick={handPdf}>
          导出PDF
        </Button>
      </div>
      <Spin spinning={loading} tip="正在生成PDF，请勿操作页面...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
        <div id="page">
          <PdfOne />
          <PdfTwo />
          {/* <EchartChart /> */}
          <EchartsLine {...EchartsLine1} />
        </div>
      </Spin>
    </div>
  );
};

export default PdfCim;
