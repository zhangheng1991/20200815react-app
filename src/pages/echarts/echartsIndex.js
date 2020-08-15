import React from 'react';
import { Col, Row } from 'antd';
import echarts from 'echarts';
//3/4饼状图
import EchartsLine from './charts/echartsLine';
import EchartsBar from './charts/EchartsBar';
import ConsumptionDataAnalysis from './charts/ConsumptionDataAnalysis';
import FoodBeverage from './charts/FoodBeverage';
import NearlyDaysTourists from "./charts/NearlyDaysTourists";
import WorldCloud from "./charts/wordColud";
class EchartsIndex extends React.Component {
  static defaultProps = {
    span: 12,
  };
  render() {
    const { span } = this.props;
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
      id: 'EchartsLine1',
    };

    const EchartsBar1 = {
      title: '各个停车场停车数',
      backGroundType: 2,
      titleFontSize: 16,
      textFont: 16,
      color: ['#A194EC', '#66F3EB', '#3B98F8'],
      data: [
        [120, 152, 200, 334, 290, 330, 220, 221],
        [80, 82, 80, 164, 189, 133, 122, 122],
        [20, 52, 20, 34, 89, 33, 22, 22],
      ],
      Xdata: [
        '停车场1',
        '停车场2',
        '停车场3',
        '停车场4',
        '停车场5',
        '停车场6',
        '停车场7',
        '停车场8',
      ],
      legendData: ['总停车数', '固定车辆数司', '临时停车数'],
      ChattTitle: '时间',
      heigth: '400px',
      id: 'NumberParkingSpaces',
    };
    const ConsumptionDataAnalysis1 = {
      title: '各个停车场停车数-(单位：月)',
      backGroundType: 2,
      titleFontSize: 16,
      textFont: 16,
      color: ['#A194EC', '#66F3EB', '#3B98F8'],
      xData: ['小于18', '18-25', '26-35', '36-45', '46-55', '56-65', '大于66'],
      lineData: [100, 100, 100, 100, 100, 100, 100],
      lastYearData: [3, 20, 62, 34, 55, 65, 33],
      thisYearData: [11, 38, 23, 39, 66, 66, 79],
      timeLineData: [1],
      legend: ['男', '女'],
      background: '#0e2147', //背景
      textColor: '#fff',
      lineColor: '#193E7D',
      colors: [
        {
          borderColor: 'rgba(227,161,96,1)',
          // start: "rgba(227,161,96,0.8)",
          // end: "rgba(227,161,96,0.3)"
          start: '#E12770',
          end: '#E12770',
        },
        {
          borderColor: 'rgba(0,222,255,1)',
          // start: "rgba(0,222,255,0.3)",
          // end: "rgba(0,222,255,0.8)"
          start: '#01C7E7',
          end: '#01C7E7',
        },
      ],
      // ChattTitle: " 时间：" + moment().format("YYYY/MM/DD"),
      heigth: '400px',
      id: 'NumberParkingSpaces2',
    };
    const FoodBeverage1 = {
      title: '餐饮排名数据分析',
      data: [10, 52, 200, 334, 390, 330, 220, 300, 400, 500, 600],
      Xdata: [
        '小肥羊',
        '德庄火锅',
        '迪欧咖啡',
        '佳客来牛排',
        '味千拉面',
        '吉祥馄沌',
        '布丁',
        '答案奶茶',
        '猫货串串',
        '顺鱼鱼馆',
      ],
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#E10012' }, //柱图渐变色
        // { offset: 0.5, color: '#541B4D' },                 //柱图渐变色
        { offset: 1, color: '#0B2468' }, //柱图渐变色
      ]),
      id: 'FoodBeverage1',
      textFont: '14',
      height: '400px',
    };
    const FoodBeverage2 = {
      title: '餐饮排名数据分析',
      data: [120, 152, 200, 334, 890, 330, 220],
      Xdata: ['7.24', '7.25', '7.26', '7.27', '7.28', '7.29', '7.30'],
      id: 'FoodBeverage2',
      textFont: '14',
      height: '400px',
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#E724FC' }, //柱图渐变色
        // { offset: 0.5, color: '#A61CF0' },                 //柱图渐变色
        { offset: 1, color: '#6012ED' }, //柱图渐变色
      ]),
    };
    const NearlyDaysTourists1={
      title: '餐饮排名数据分析',
      data: [30, 20, 10, 15, 15,2, 2, 2, 2,2],
      Xdata: ['广州', '深圳', '佛山', '东莞', '中山', '珠海', '江门', '肇庆', '惠州',"粤东"],
      color:new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [
          { offset: 0, color: '#0099F2' },                   //柱图渐变色
          // { offset: 0.5, color: '#0059A7' },                 //柱图渐变色
          { offset: 1, color: '#002561' },                   //柱图渐变色
        ]
      ),
      id: 'NearlyDaysTourists1',
      textFont: '14',
      height: '400px',
    }
    const WorldCloud1={
      title:"词条云",
      id:"WorldCloud1",
     data : [{ name: '微信', value: 3328 }, { name: '南方+', value: 1045 }, {
        name: '东莞时间网',
        value: 834
      }, { name: 'i东莞', value: 804 }, { name: '新浪微博', value: 532 }, { name: '今日头条', value: 493 }, {
        name: '腾讯新闻', value: 479
      }, { name: '东莞阳光网', value: 387 }, { name: '东莞日报', value: 289 }, {
        name: '一点资讯',
        value: 287
      }, { name: '东方头条网', value: 233 }, { name: '南方都市报', value: 228 }, { name: '新粤网', value: 207 },
      { name: '南方plus', value: 206 }, { name: '网易新闻', value: 201 }, { name: '东方头条', value: 180 }, {
        name:
          '趣头条', value: 178
      }, { name: '羊城派', value: 151 }, { name: '东莞时报', value: 143 }, {
        name: '莞讯网', value:
          139
      }, { name: '广州日报', value: 137 }, { name: '东莞阳光台', value: 132 }, { name: '搜狐新闻', value: 129 }, {
        name: '今日头条.APP', value: 116
      }, { name: '东莞阳光平台', value: 108 }, { name: '腾讯新闻.APP', value: 107 }, {
        name: '南方网', value: 103
      }, { name: 'UC头条', value: 98 }, { name: '凤凰新闻', value: 93 }, {
        name: '报告诉',
        value: 77
      }, { name: '网易新闻.APP', value: 74 }, { name: '中国小康网', value: 64 }, { name: '东莞万江', value: 63 },
      { name: '信息时报', value: 59 }, { name: '中国文明网', value: 58 }, { name: '东莞网', value: 57 }, {
        name:
          '搜狐新闻（自媒体）', value: 54
      }, { name: '南方日报', value: 54 }, { name: '搜狐焦点', value: 53 }, {
        name: '阳光社区',
        value: 52
      }, { name: '南方plus.APP', value: 47 }, { name: '阳光望牛墩', value: 46 }, {
        name: '中国报道', value: 43
      }, { name: '新浪新闻', value: 43 }, { name: '房掌柜', value: 39 }, { name: '广州日报网', value: 38 }, {
        name:
          'ZAKER', value: 38
      }, { name: '一点资讯.APP', value: 35 }, { name: '聚焦东莞', value: 35 }, {
        name: '广州新闻网',
        value: 35
      }, { name: '新浪', value: 31 }, { name: '东莞服务热线12345', value: 31 }, { name: '人民网', value: 29 },
      { name: '阳光热线问政平台', value: 26 }, { name: '党报头条', value: 26 }, { name: '羊城晚报地方版', value: 24 }, {
        name:
          '网易房产', value: 23
      }, { name: '中国网', value: 22 }, { name: '金羊网', value: 21 }, {
        name: '东莞长安', value: 21
      }, { name: '百家号', value: 21 }, { name: '澎湃新闻', value: 20 }, { name: '读特', value: 19 }, {
        name:
          '东方头条.APP', value: 17
      }, { name: '阳光石排', value: 16 }, { name: '新浪乐居', value: 16 }, {
        name: '微信邦', value:
          16
      }, { name: '搜狐新闻.APP', value: 16 }, { name: '人民日报', value: 16 }, { name: '百度新闻', value: 16 }, {
        name:
          '南方都市报.APP', value: 15
      }, { name: '荔枝网', value: 15 }, { name: '华人头条', value: 15 }, {
        name: '广东建设报',
        value: 15
      }, { name: '中国', value: 14 }, { name: '阳光黄江', value: 14 }, { name: '东方网', value: 14 }, {
        name:
          '网易', value: 12
      }, { name: '搜狐网', value: 12 }, { name: '和讯', value: 12 }, { name: '文化莞城', value: 11 }, {
        name: '聊聊网', value: 11
      }, { name: '58同镇', value: 11 }, { name: '凤凰网', value: 10 }, {
        name: '新浪网', value:
          9
      }, { name: '趣头条.APP', value: 9 }, { name: '凤岗网', value: 9 }, { name: '新快网_新快报', value: 8 }, {
        name:
          '上游新闻', value: 8
      }, { name: '东莞市城市综合管理局', value: 8 }, { name: '大众网', value: 8 }, {
        name: '中国新闻网', value:
          7
      }, { name: '第一推', value: 7 }, { name: '大洋网', value: 7 }, { name: '新浪网', value: 6 }, {
        name: '新浪看点',
        value: 6
      }, { name: '手机和讯网', value: 6 },].slice(),
    height:"400px",
    ChattTitle:14,
    textFont:14,
    }
    //
    return (
      <div>
        <Row>
          <Col span={span}>
            <EchartsLine {...EchartsLine1} />
          </Col>
          <Col span={span}>
            <EchartsBar {...EchartsBar1} />
          </Col>
          <Col span={span}>
            <ConsumptionDataAnalysis {...ConsumptionDataAnalysis1} />
          </Col>
          <Col span={span}>
            <FoodBeverage {...FoodBeverage1} />
          </Col>
          <Col span={span}>
            <FoodBeverage {...FoodBeverage2} />
          </Col>
          <Col span={span}>
            <NearlyDaysTourists {...NearlyDaysTourists1} />
          </Col>
          <Col span={span}>
            <WorldCloud {...WorldCloud1} />
          </Col>
          
        </Row>
      </div>
    );
  }
}
export default EchartsIndex;
