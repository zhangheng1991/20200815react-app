import React from 'react';
import { Col, Row, Button } from 'antd';
import echarts from 'echarts';
import moment from 'moment';
//3/4饼状图
import EchartsLine from './charts/echartsLine';
import EchartsBar from './charts/EchartsBar';
import ConsumptionDataAnalysis from './charts/ConsumptionDataAnalysis';
import FoodBeverage from './charts/FoodBeverage';
import NearlyDaysTourists from './charts/NearlyDaysTourists';
import WorldCloud from './charts/wordColud';
import AnalysistouristGender from './charts/AnalysistouristGender';
import DataAnalysisTourists from './charts/DataAnalysisTourists';
import TouristTransaction from './charts/TouristTransaction';
import TouristTransactionVolume from './charts/TouristTransactionVolume';
import NighttimeConsumptionBias from './charts/NighttimeConsumptionBias';
import AgeDistributionVisitors from './charts/AgeDistributionVisitors';
import EachChannelNumber from './charts/EachChannelNumber';
import TheOrganization from './charts/TheOrganization';
import HuangFeiHong from './charts/HuangFeiHong';
import SourceOfTourists from './charts/SourceOfTourists';
import AirQuality from './charts/AirQuality';
import ChinaPneumonia from './charts/ChinaPneumonia';
import ChinaPneumoniaAir from './charts/ChinaPneumoniaAir';
import ChinaEpidemic from './charts/ChinaEpidemic';
class EchartsIndex extends React.Component {
  static defaultProps = {
    span: 8,
  };
  componentDidMount() {
    // this.TimeID = setInterval(() => this.Tick(), 1000);
  }
  state = {
    time: moment().format('YYYYMMDDHH:mmss'),
  };
  Tick() {
    // this.setState({ time: moment().format('YYYYMMDDHH:mmss') });
  }
  componentWillUnmount() {
    clearTimeout(this.TimeID); //清除定时器
  }
  handPdf=()=>{
   
  }
  render() {
    const { span } = this.props;
    const { time } = this.state;
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
      title: '7月餐饮排名数据分析',
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
    const FoodBeverage3 = {
      title: '售票点售票数量',
      data: [100, 152, 200, 334, 390, 330, 220, 300, 400, 500, 600],
      Xdata: [
        '售票点A',
        '售票点B',
        '售票点C',
        '售票点D',
        '售票点E',
        '售票点F',
        '售票点G',
        '售票点H',
      ],
      id: 'FoodBeverage3',
      textFont: '14',
      height: '400px',
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#FFCFA3' }, //柱图渐变色
        // { offset: 0.5, color: '#541B4D' },                 //柱图渐变色
        { offset: 1, color: '#FFA71C' }, //柱图渐变色
      ]),
    };
    const NearlyDaysTourists1 = {
      title: '不同来源地游客占比',
      data: [30, 20, 10, 15, 15, 2, 2, 2, 2, 2],
      Xdata: ['广州', '深圳', '佛山', '东莞', '中山', '珠海', '江门', '肇庆', '惠州', '粤东'],
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#0099F2' }, //柱图渐变色
        // { offset: 0.5, color: '#0059A7' },                 //柱图渐变色
        { offset: 1, color: '#002561' }, //柱图渐变色
      ]),
      id: 'NearlyDaysTourists1',
      textFont: '14',
      height: '400px',
    };
    const WorldCloud1 = {
      title: '词条云',
      id: 'WorldCloud1',
      data: [
        { name: '微信', value: 3328 },
        { name: '南方+', value: 1045 },
        {
          name: '东莞时间网',
          value: 834,
        },
        { name: 'i东莞', value: 804 },
        { name: '新浪微博', value: 532 },
        { name: '今日头条', value: 493 },
        {
          name: '腾讯新闻',
          value: 479,
        },
        { name: '东莞阳光网', value: 387 },
        { name: '东莞日报', value: 289 },
        {
          name: '一点资讯',
          value: 287,
        },
        { name: '东方头条网', value: 233 },
        { name: '南方都市报', value: 228 },
        { name: '新粤网', value: 207 },
        { name: '南方plus', value: 206 },
        { name: '网易新闻', value: 201 },
        { name: '东方头条', value: 180 },
        {
          name: '趣头条',
          value: 178,
        },
        { name: '羊城派', value: 151 },
        { name: '东莞时报', value: 143 },
        {
          name: '莞讯网',
          value: 139,
        },
        { name: '广州日报', value: 137 },
        { name: '东莞阳光台', value: 132 },
        { name: '搜狐新闻', value: 129 },
        {
          name: '今日头条.APP',
          value: 116,
        },
        { name: '东莞阳光平台', value: 108 },
        { name: '腾讯新闻.APP', value: 107 },
        {
          name: '南方网',
          value: 103,
        },
        { name: 'UC头条', value: 98 },
        { name: '凤凰新闻', value: 93 },
        {
          name: '报告诉',
          value: 77,
        },
        { name: '网易新闻.APP', value: 74 },
        { name: '中国小康网', value: 64 },
        { name: '东莞万江', value: 63 },
        { name: '信息时报', value: 59 },
        { name: '中国文明网', value: 58 },
        { name: '东莞网', value: 57 },
        {
          name: '搜狐新闻（自媒体）',
          value: 54,
        },
        { name: '南方日报', value: 54 },
        { name: '搜狐焦点', value: 53 },
        {
          name: '阳光社区',
          value: 52,
        },
        { name: '南方plus.APP', value: 47 },
        { name: '阳光望牛墩', value: 46 },
        {
          name: '中国报道',
          value: 43,
        },
        { name: '新浪新闻', value: 43 },
        { name: '房掌柜', value: 39 },
        { name: '广州日报网', value: 38 },
        {
          name: 'ZAKER',
          value: 38,
        },
        { name: '一点资讯.APP', value: 35 },
        { name: '聚焦东莞', value: 35 },
        {
          name: '广州新闻网',
          value: 35,
        },
        { name: '新浪', value: 31 },
        { name: '东莞服务热线12345', value: 31 },
        { name: '人民网', value: 29 },
        { name: '阳光热线问政平台', value: 26 },
        { name: '党报头条', value: 26 },
        { name: '羊城晚报地方版', value: 24 },
        {
          name: '网易房产',
          value: 23,
        },
        { name: '中国网', value: 22 },
        { name: '金羊网', value: 21 },
        {
          name: '东莞长安',
          value: 21,
        },
        { name: '百家号', value: 21 },
        { name: '澎湃新闻', value: 20 },
        { name: '读特', value: 19 },
        {
          name: '东方头条.APP',
          value: 17,
        },
        { name: '阳光石排', value: 16 },
        { name: '新浪乐居', value: 16 },
        {
          name: '微信邦',
          value: 16,
        },
        { name: '搜狐新闻.APP', value: 16 },
        { name: '人民日报', value: 16 },
        { name: '百度新闻', value: 16 },
        {
          name: '南方都市报.APP',
          value: 15,
        },
        { name: '荔枝网', value: 15 },
        { name: '华人头条', value: 15 },
        {
          name: '广东建设报',
          value: 15,
        },
        { name: '中国', value: 14 },
        { name: '阳光黄江', value: 14 },
        { name: '东方网', value: 14 },
        {
          name: '网易',
          value: 12,
        },
        { name: '搜狐网', value: 12 },
        { name: '和讯', value: 12 },
        { name: '文化莞城', value: 11 },
        {
          name: '聊聊网',
          value: 11,
        },
        { name: '58同镇', value: 11 },
        { name: '凤凰网', value: 10 },
        {
          name: '新浪网',
          value: 9,
        },
        { name: '趣头条.APP', value: 9 },
        { name: '凤岗网', value: 9 },
        { name: '新快网_新快报', value: 8 },
        {
          name: '上游新闻',
          value: 8,
        },
        { name: '东莞市城市综合管理局', value: 8 },
        { name: '大众网', value: 8 },
        {
          name: '中国新闻网',
          value: 7,
        },
        { name: '第一推', value: 7 },
        { name: '大洋网', value: 7 },
        { name: '新浪网', value: 6 },
        {
          name: '新浪看点',
          value: 6,
        },
        { name: '手机和讯网', value: 6 },
      ].slice(),
      height: '400px',
      ChattTitle: 14,
      textFont: 14,
    };
    const AnalysistouristGender1 = {
      title: '游客性别数据分析',
      backGroundType: 2,
      titleFontSize: 16,
      textFont: 16,
      symbols: [
        'path://M18.2629891,11.7131596 L6.8091608,11.7131596 C1.6685112,11.7131596 0,13.032145 0,18.6237673 L0,34.9928467 C0,38.1719847 4.28388932,38.1719847 4.28388932,34.9928467 L4.65591984,20.0216948 L5.74941883,20.0216948 L5.74941883,61.000787 C5.74941883,65.2508314 11.5891201,65.1268798 11.5891201,61.000787 L11.9611506,37.2137775 L13.1110872,37.2137775 L13.4831177,61.000787 C13.4831177,65.1268798 19.3114787,65.2508314 19.3114787,61.000787 L19.3114787,20.0216948 L20.4162301,20.0216948 L20.7882606,34.9928467 C20.7882606,38.1719847 25.0721499,38.1719847 25.0721499,34.9928467 L25.0721499,18.6237673 C25.0721499,13.032145 23.4038145,11.7131596 18.2629891,11.7131596 M12.5361629,1.11022302e-13 C15.4784742,1.11022302e-13 17.8684539,2.38997966 17.8684539,5.33237894 C17.8684539,8.27469031 15.4784742,10.66467 12.5361629,10.66467 C9.59376358,10.66467 7.20378392,8.27469031 7.20378392,5.33237894 C7.20378392,2.38997966 9.59376358,1.11022302e-13 12.5361629,1.11022302e-13',
        'path://M28.9624207,31.5315864 L24.4142575,16.4793596 C23.5227152,13.8063773 20.8817445,11.7111088 17.0107398,11.7111088 L12.112691,11.7111088 C8.24168636,11.7111088 5.60080331,13.8064652 4.70917331,16.4793596 L0.149791395,31.5315864 C-0.786976655,34.7595013 2.9373074,35.9147532 3.9192135,32.890727 L8.72689855,19.1296485 L9.2799493,19.1296485 C9.2799493,19.1296485 2.95992025,43.7750224 2.70031069,44.6924335 C2.56498417,45.1567684 2.74553639,45.4852068 3.24205501,45.4852068 L8.704461,45.4852068 L8.704461,61.6700801 C8.704461,64.9659872 13.625035,64.9659872 13.625035,61.6700801 L13.625035,45.360657 L15.5097899,45.360657 L15.4984835,61.6700801 C15.4984835,64.9659872 20.4191451,64.9659872 20.4191451,61.6700801 L20.4191451,45.4852068 L25.8814635,45.4852068 C26.3667633,45.4852068 26.5586219,45.1567684 26.4345142,44.6924335 C26.1636859,43.7750224 19.8436568,19.1296485 19.8436568,19.1296485 L20.3966199,19.1296485 L25.2043926,32.890727 C26.1862111,35.9147532 29.9105828,34.7595013 28.9625083,31.5315864 L28.9624207,31.5315864 Z M14.5617154,0 C17.4960397,0 19.8773132,2.3898427 19.8773132,5.33453001 C19.8773132,8.27930527 17.4960397,10.66906 14.5617154,10.66906 C11.6274788,10.66906 9.24611767,8.27930527 9.24611767,5.33453001 C9.24611767,2.3898427 11.6274788,0 14.5617154,0 L14.5617154,0 Z',
        'path://M512 292.205897c80.855572 0 146.358821-65.503248 146.358821-146.358821C658.358821 65.503248 592.855572 0 512 0 431.144428 0 365.641179 65.503248 365.641179 146.358821 365.641179 227.214393 431.144428 292.205897 512 292.205897zM512 731.282359c-80.855572 0-146.358821 65.503248-146.358821 146.358821 0 80.855572 65.503248 146.358821 146.358821 146.358821 80.855572 0 146.358821-65.503248 146.358821-146.358821C658.358821 796.273863 592.855572 731.282359 512 731.282359z',
      ],
      color: ['#A194EC', '#66F3EB', '#3B98F8'],
      data: [
        {
          value: 26.5,
          symbol:
            'path://M18.2629891,11.7131596 L6.8091608,11.7131596 C1.6685112,11.7131596 0,13.032145 0,18.6237673 L0,34.9928467 C0,38.1719847 4.28388932,38.1719847 4.28388932,34.9928467 L4.65591984,20.0216948 L5.74941883,20.0216948 L5.74941883,61.000787 C5.74941883,65.2508314 11.5891201,65.1268798 11.5891201,61.000787 L11.9611506,37.2137775 L13.1110872,37.2137775 L13.4831177,61.000787 C13.4831177,65.1268798 19.3114787,65.2508314 19.3114787,61.000787 L19.3114787,20.0216948 L20.4162301,20.0216948 L20.7882606,34.9928467 C20.7882606,38.1719847 25.0721499,38.1719847 25.0721499,34.9928467 L25.0721499,18.6237673 C25.0721499,13.032145 23.4038145,11.7131596 18.2629891,11.7131596 M12.5361629,1.11022302e-13 C15.4784742,1.11022302e-13 17.8684539,2.38997966 17.8684539,5.33237894 C17.8684539,8.27469031 15.4784742,10.66467 12.5361629,10.66467 C9.59376358,10.66467 7.20378392,8.27469031 7.20378392,5.33237894 C7.20378392,2.38997966 9.59376358,1.11022302e-13 12.5361629,1.11022302e-13',
          itemStyle: {
            normal: {
              color: '#2AA3E8', //单独控制颜色
            },
          },
        },
        {},
        {
          value: 73.5,
          symbol:
            'path://M28.9624207,31.5315864 L24.4142575,16.4793596 C23.5227152,13.8063773 20.8817445,11.7111088 17.0107398,11.7111088 L12.112691,11.7111088 C8.24168636,11.7111088 5.60080331,13.8064652 4.70917331,16.4793596 L0.149791395,31.5315864 C-0.786976655,34.7595013 2.9373074,35.9147532 3.9192135,32.890727 L8.72689855,19.1296485 L9.2799493,19.1296485 C9.2799493,19.1296485 2.95992025,43.7750224 2.70031069,44.6924335 C2.56498417,45.1567684 2.74553639,45.4852068 3.24205501,45.4852068 L8.704461,45.4852068 L8.704461,61.6700801 C8.704461,64.9659872 13.625035,64.9659872 13.625035,61.6700801 L13.625035,45.360657 L15.5097899,45.360657 L15.4984835,61.6700801 C15.4984835,64.9659872 20.4191451,64.9659872 20.4191451,61.6700801 L20.4191451,45.4852068 L25.8814635,45.4852068 C26.3667633,45.4852068 26.5586219,45.1567684 26.4345142,44.6924335 C26.1636859,43.7750224 19.8436568,19.1296485 19.8436568,19.1296485 L20.3966199,19.1296485 L25.2043926,32.890727 C26.1862111,35.9147532 29.9105828,34.7595013 28.9625083,31.5315864 L28.9624207,31.5315864 Z M14.5617154,0 C17.4960397,0 19.8773132,2.3898427 19.8773132,5.33453001 C19.8773132,8.27930527 17.4960397,10.66906 14.5617154,10.66906 C11.6274788,10.66906 9.24611767,8.27930527 9.24611767,5.33453001 C9.24611767,2.3898427 11.6274788,0 14.5617154,0 L14.5617154,0 Z',
          itemStyle: {
            normal: {
              color: '#EE2085', //单独控制颜色
            },
          },
        },
      ],
      ChattTitle: '',
      height: '400px',
      id: 'AnalysistouristGender1',
    };
    const DataAnalysisTourists1 = {
      title: '资产游客占比数据分析',
      backGroundType: 2,
      titleFontSize: 16,
      textFont: 16,
      color: ['#9366F5', '#4BB4F6', '#CDBA30'],
      data: [
        {
          value: 2,
          name: '高资产占比',
          valueP: 0.2222,
        },
        {
          value: 3,
          name: '中资产占比',
        },
        {
          value: 4,
          name: '低资产占比',
        },
      ],
      ChattTitle: ' 时间：',
      height: '400px',
      id: 'DataAnalysisTourists333333',
    };
    const TouristTransaction1 = {
      id: 'TouristTransaction1',
      title: '游客交易量占比',
      data: [0.45],
      ChattTitle: '西樵山旅游对佛山市消费贡献度',
      textFont: '25',
      height: '400px',
    };
    const TouristTransactionVolume1 = {
      id: 'TouristTransactionVolume1',
      title: '各个停车场收入',
      TitleUnit: '单位:千元 | 时间：',
      textFont: '16',
      data: [
        {
          value: 700,
          name: '停车场1',
        },
        {
          value: 600,
          name: '停车场2',
        },
        {
          value: 500,
          name: '停车场3',
        },
        {
          value: 400,
          name: '停车场4',
        },
        {
          value: 300,
          name: '停车场5',
        },
        {
          value: 200,
          name: '停车场6',
        },
      ],
      height: '400px',
    };
    const NighttimeConsumptionBias1 = {
      title: '各个停车场停车数',
      backGroundType: 2,
      titleFontSize: 16,
      textFont: 16,
      color: ['#A194EC', '#66F3EB', '#3B98F8'],
      data: [
        {
          value: 25,
          name: '无消费',
          normal: {
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: '#40E8AC', // 100% 处的颜色
                },
                {
                  offset: 1,
                  color: '#23EA8F', // 0% 处的颜色
                },
              ],
            },
          },
        },
        {
          value: 75,
          name: '有消费',
          itemStyle: {
            normal: {
              color: {
                colorStops: [
                  {
                    offset: 0,
                    color: '#1EBCC0', // 100% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#00B9FF', // 0% 处的颜色
                  },
                ],
              },
            },
          },
        },
      ],
      ChattTitle: '各个停车场停车数',
      heigth: '400px',
      id: 'NighttimeConsumptionBias',
    };
    const AgeDistributionVisitors1 = {
      title: '各个停车场停车数',
      backGroundType: 2,
      titleFontSize: 16,
      textFont: 16,
      color: ['#A194EC', '#66F3EB', '#3B98F8'],
      plantCap: [
        {
          name: '18岁以下',
          value: '8102人',
        },
        {
          name: '18岁-25岁',
          value: '25641人 ',
        },
        {
          name: '26岁-35岁',
          value: '20188人 ',
        },
        {
          name: '36岁-45岁',
          value: '11111人',
        },
        {
          name: '46岁-55岁',
          value: '22222人 ',
        },
        {
          name: '56岁-65岁',
          value: '1212人',
        },
        {
          name: '65岁以上',
          value: '222人',
        },
      ],

      datalist: [
        {
          offset: [50, 50],
          symbolSize: 60,
          opacity: 0.95,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#29c0fb',
            },
            {
              offset: 1,
              color: '#2dc5b9',
            },
          ]),
        },
        {
          offset: [38, 70],
          symbolSize: 75,
          opacity: 0.95,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#35d17e',
            },
            {
              offset: 1,
              color: '#49ddb2',
            },
          ]),
        },
        {
          offset: [23, 43],
          symbolSize: 50,
          opacity: 0.95,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#e5d273',
            },
            {
              offset: 1,
              color: '#e4a37f',
            },
          ]),
        },
        {
          offset: [68, 40],
          symbolSize: 40,
          opacity: 0.95,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#277aec',
            },
            {
              offset: 1,
              color: '#57c5ec',
            },
          ]),
        },
        {
          offset: [38, 20],
          symbolSize: 65,
          opacity: 0.95,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#e54948',
            },
            {
              offset: 1,
              color: '#f08456',
            },
          ]),
        },
        {
          offset: [56, 15],
          symbolSize: 68,
          opacity: 0.7,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#11c46e',
            },
            {
              offset: 1,
              color: '#f08456',
            },
          ]),
        },
        {
          offset: [65, 75],
          symbolSize: 65,
          opacity: 0.68,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#ff4141',
            },
            {
              offset: 1,
              color: '#ff8989',
            },
          ]),
        },
      ],
      ChattTitle: '',
      height: '400px',
      id: 'AgeDistributionVisitors2',
    };
    const EachChannelNumber1 = {
      title: '各渠道检票数',
      id: 'EachChannelNumber1',
      data: [166, 186, 182, 218, 153, 147, 513, 125, 711],
      Xdata: ['渠道商', '美团', '携程', '同城', '去哪儿', '驴妈妈', '小程序', '旅游社', '其他'],
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#0099F2' }, //柱图渐变色
        // { offset: 0.5, color: '#0059A7' },                 //柱图渐变色
        { offset: 1, color: '#002561' }, //柱图渐变色
      ]),
      textFont: '16',
      ChattTitle: '',
      height: '400px',
      fontSize: 12,
    };
    const TheOrganization1 = {
      id: 'TheOrganizations1',
      height: '600px',
      title: '树形结构',
      textFont: '16',
      data: [
        {
          name: '中国',
          children: [
            {
              name: '江苏',
              children: [
                {
                  name: '南京',
                  value: 938,
                },
                {
                  name: '苏州',
                  value: 338,
                },
                {
                  name: '徐州',
                  value: 538,
                },
                {
                  name: '无锡',
                  value: 638,
                },
                {
                  name: '昆山',
                  value: 3344,
                },
                {
                  name: '常州',
                  value: 1338,
                },
                {
                  name: '连云港',
                  value: 4338,
                },
              ],
            },
            {
              name: '河南',
              children: [
                {
                  name: '郑州市',
                  value: 338,
                },
                {
                  name: '南阳市',
                  value: 538,
                },
                {
                  name: '信阳市',
                  value: 638,
                },
                {
                  name: '开封市',
                  value: 3344,
                },
                {
                  name: '周口市',
                  value: 1338,
                },
                {
                  name: '新乡市',
                  value: 4338,
                },
                {
                  name: '洛阳市',
                  value: 4338,
                },
                {
                  name: '安阳市',
                  value: 4338,
                },
                {
                  name: '商丘市',
                  value: 938,
                  children: [
                    {
                      name: '梁园区',
                      value: 98,
                      children: [
                        {
                          name: '观堂镇',
                          value: 98,
                          children: [
                            {
                              name: '花坟村',
                              value: 98,
                              children: [
                                {
                                  name: '王大庄村',
                                  value: 98,
                                //   children: [
                                //   {
                                //     name: '中国',
                                //     children: [
                                //       {
                                //         name: '江苏',
                                //         children: [
                                //           {
                                //             name: '南京',
                                //             value: 938,
                                //           },
                                //           {
                                //             name: '苏州',
                                //             value: 338,
                                //           },
                                //           {
                                //             name: '徐州',
                                //             value: 538,
                                //           },
                                //           {
                                //             name: '无锡',
                                //             value: 638,
                                //           },
                                //           {
                                //             name: '昆山',
                                //             value: 3344,
                                //           },
                                //           {
                                //             name: '常州',
                                //             value: 1338,
                                //           },
                                //           {
                                //             name: '连云港',
                                //             value: 4338,
                                //           },
                                //         ],
                                //       },
                                //       {
                                //         name: '河南',
                                //         children: [
                                //           {
                                //             name: '郑州市',
                                //             value: 338,
                                //           },
                                //           {
                                //             name: '南阳市',
                                //             value: 538,
                                //           },
                                //           {
                                //             name: '信阳市',
                                //             value: 638,
                                //           },
                                //           {
                                //             name: '开封市',
                                //             value: 3344,
                                //           },
                                //           {
                                //             name: '周口市',
                                //             value: 1338,
                                //           },
                                //           {
                                //             name: '新乡市',
                                //             value: 4338,
                                //           },
                                //           {
                                //             name: '洛阳市',
                                //             value: 4338,
                                //           },
                                //           {
                                //             name: '安阳市',
                                //             value: 4338,
                                //           },
                                //           {
                                //             name: '商丘市',
                                //             value: 938,
                                //             children: [
                                //               {
                                //                 name: '梁园区',
                                //                 value: 98,
                                //                 children: [
                                //                   {
                                //                     name: '观堂镇',
                                //                     value: 98,
                                //                     children: [
                                //                       {
                                //                         name: '花坟村',
                                //                         value: 98,
                                //                         children: [
                                //                           {
                                //                             name: '王大庄村',
                                //                             value: 98,
                                //                           },
                                //                         ],
                                //                       },
                                //                     ],
                                //                   },
                                //                   {
                                //                     name: '水池铺乡',
                                //                     value: 98,
                                //                     children: [
                                //                       {
                                //                         name: '赵百户',
                                //                         value: 98,
                                //                         children: [
                                //                           {
                                //                             name: '高庄',
                                //                             value: 98,
                                //                           },
                                //                         ],
                                //                       },
                                //                     ],
                                //                   },
                                //                   {
                                //                     name: '谢集镇',
                                //                     value: 98,
                                //                   },
                                //                   {
                                //                     name: '双八镇',
                                //                     value: 98,
                                //                   },
                                //                   {
                                //                     name: '刘口镇',
                                //                     value: 98,
                                //                   },
                                //                   {
                                //                     name: '李庄镇',
                                //                     value: 98,
                                //                   },
                                //                   {
                                //                     name: '王楼乡',
                                //                     value: 98,
                                //                   },
                                //                   {
                                //                     name: '孙福集乡',
                                //                     value: 98,
                                //                   },
                                //                 ],
                                //               },
                                //               {
                                //                 name: '睢园区',
                                //                 value: 38,
                                //               },
                                //               {
                                //                 name: '宁陵县',
                                //                 value: 138,
                                //               },
                                //               {
                                //                 name: '柘城县',
                                //                 value: 938,
                                //               },
                                //               {
                                //                 name: '永城市',
                                //                 value: 938,
                                //               },
                                //               {
                                //                 name: '睢县县',
                                //                 value: 938,
                                //               },
                                //               {
                                //                 name: '民权县',
                                //                 value: 938,
                                //               },
                                //               {
                                //                 name: '虞城县',
                                //                 value: 938,
                                //               },
                                //               {
                                //                 name: '夏邑县',
                                //                 value: 938,
                                //               },
                                //             ],
                                //           },
                                //           {
                                //             name: '鹤壁市',
                                //             value: 4338,
                                //           },
                                //           {
                                //             name: '焦作市',
                                //             value: 4338,
                                //           },
                                //           {
                                //             name: '濮阳市',
                                //             value: 4338,
                                //           },
                                //           {
                                //             name: '许昌市',
                                //             value: 4338,
                                //           },
                                //           {
                                //             name: '漯河市',
                                //             value: 4338,
                                //           },
                                //           {
                                //             name: '三门峡市',
                                //             value: 4338,
                                //           },
                                //           {
                                //             name: '漯河市',
                                //             value: 4338,
                                //           },
                                //           {
                                //             name: '驻马店市',
                                //             value: 4338,
                                //           },
                                //         ],
                                //       },
                                //       {
                                //         name: '山东',
                                //         children: [
                                //           {
                                //             name: '济南',
                                //             value: 938,
                                //           },
                                //           {
                                //             name: '烟台',
                                //             value: 338,
                                //           },
                                //           {
                                //             name: '青岛',
                                //             value: 538,
                                //           },
                                //           {
                                //             name: '威海',
                                //             value: 638,
                                //           },
                                //           {
                                //             name: '枣庄',
                                //             value: 3344,
                                //           },
                                //           {
                                //             name: '淄博',
                                //             value: 1338,
                                //           },
                                //           {
                                //             name: '临沂',
                                //             value: 4338,
                                //           },
                                //         ],
                                //       },
                                //     ],
                                //   },
                                // ]
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: '水池铺乡',
                          value: 98,
                          children: [
                            {
                              name: '赵百户',
                              value: 98,
                              children: [
                                {
                                  name: '高庄',
                                  value: 98,
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: '谢集镇',
                          value: 98,
                        },
                        {
                          name: '双八镇',
                          value: 98,
                        },
                        {
                          name: '刘口镇',
                          value: 98,
                        },
                        {
                          name: '李庄镇',
                          value: 98,
                        },
                        {
                          name: '王楼乡',
                          value: 98,
                        },
                        {
                          name: '孙福集乡',
                          value: 98,
                        },
                      ],
                    },
                    {
                      name: '睢园区',
                      value: 38,
                    },
                    {
                      name: '宁陵县',
                      value: 138,
                    },
                    {
                      name: '柘城县',
                      value: 938,
                    },
                    {
                      name: '永城市',
                      value: 938,
                    },
                    {
                      name: '睢县县',
                      value: 938,
                    },
                    {
                      name: '民权县',
                      value: 938,
                    },
                    {
                      name: '虞城县',
                      value: 938,
                    },
                    {
                      name: '夏邑县',
                      value: 938,
                    },
                  ],
                },
                {
                  name: '鹤壁市',
                  value: 4338,
                },
                {
                  name: '焦作市',
                  value: 4338,
                },
                {
                  name: '濮阳市',
                  value: 4338,
                },
                {
                  name: '许昌市',
                  value: 4338,
                },
                {
                  name: '漯河市',
                  value: 4338,
                },
                {
                  name: '三门峡市',
                  value: 4338,
                },
                {
                  name: '漯河市',
                  value: 4338,
                },
                {
                  name: '驻马店市',
                  value: 4338,
                },
              ],
            },
            {
              name: '山东',
              children: [
                {
                  name: '济南',
                  value: 938,
                },
                {
                  name: '烟台',
                  value: 338,
                },
                {
                  name: '青岛',
                  value: 538,
                },
                {
                  name: '威海',
                  value: 638,
                },
                {
                  name: '枣庄',
                  value: 3344,
                },
                {
                  name: '淄博',
                  value: 1338,
                },
                {
                  name: '临沂',
                  value: 4338,
                },
              ],
            },
          ],
        },
      ],
      OpenHierarchy: 2,
      symbolSize: [50, 20],
      fontSize: 12,
    };
    const TheOrganization2 = {
      id: 'TheOrganizations2',
      height: '300px',
      title: '家庭关系',
      textFont: '16',
      data: [
        {
          name: '爷爷奶奶',
          value: 70,
          children: [
            {
              name: '伯父',
              value: 45,
              children: [
                {
                  name: '堂哥',
                  value: 23,
                },
                {
                  name: '堂姐',
                  value: 20,
                },
                {
                  name: '堂弟',
                  value: 16,
                },
                {
                  name: '堂妹',
                  value: 13,
                },
              ],
            },
            {
              name: '大姑',
              value: 44,
              children: [
                {
                  name: '表哥',
                  value: 22,
                },
                {
                  name: '表姐',
                  value: 20,
                },
                {
                  name: '表弟',
                  value: 11,
                },
                {
                  name: '表妹',
                  value: 7,
                },
              ],
            },
            {
              name: '爸爸',
              value: 42,
              children: [
                {
                  name: '哥哥',
                  value: 22,
                },
                {
                  name: '姐姐',
                  value: 20,
                },
                {
                  name: '我',
                  value: 19,
                },
                {
                  name: '弟弟',
                  value: 17,
                },
                {
                  name: '妹妹',
                  value: 15,
                },
              ],
            },
            {
              name: '叔叔',
              value: 40,
              children: [
                {
                  name: '堂哥',
                  value: 23,
                },
                {
                  name: '堂姐',
                  value: 20,
                },
                {
                  name: '堂弟',
                  value: 11,
                },
                {
                  name: '堂妹',
                  value: 5,
                },
              ],
            },
            {
              name: '小姑',
              value: 40,
              children: [
                {
                  name: '表哥',
                  value: 22,
                },
                {
                  name: '表姐',
                  value: 20,
                },
                {
                  name: '表弟',
                  value: 11,
                },
                {
                  name: '表妹',
                  value: 7,
                },
              ],
            },
          ],
        },
      ],
      OpenHierarchy: -1,
      symbolSize: [50, 20],
      fontSize: 12,
    };
    const TheOrganization3 = {
      id: 'TheOrganizations3',
      height: '300px',
      title: '家庭关系',
      textFont: '16',
      data: [
        {
          name: '外公外婆',
          value: 70,
          children: [
            {
              name: '大舅',
              value: 45,
              children: [
                {
                  name: '表哥',
                  value: 23,
                },
                {
                  name: '表姐',
                  value: 20,
                },
                {
                  name: '表弟',
                  value: 16,
                },
                {
                  name: '表妹',
                  value: 13,
                },
              ],
            },
            {
              name: '大姨',
              value: 44,
              children: [
                {
                  name: '表哥',
                  value: 22,
                },
                {
                  name: '表姐',
                  value: 20,
                },
                {
                  name: '表弟',
                  value: 11,
                },
                {
                  name: '表妹',
                  value: 7,
                },
              ],
            },
            {
              name: '妈妈',
              value: 42,
              children: [
                {
                  name: '哥哥',
                  value: 22,
                },
                {
                  name: '姐姐',
                  value: 20,
                },
                {
                  name: '我',
                  value: 19,
                },
                {
                  name: '弟弟',
                  value: 17,
                },
                {
                  name: '妹妹',
                  value: 15,
                },
              ],
            },
            {
              name: '小舅',
              value: 40,
              children: [
                {
                  name: '表哥',
                  value: 23,
                },
                {
                  name: '表姐',
                  value: 20,
                },
                {
                  name: '表弟',
                  value: 11,
                },
                {
                  name: '表妹',
                  value: 5,
                },
              ],
            },
            {
              name: '小姨',
              value: 40,
              children: [
                {
                  name: '表哥',
                  value: 22,
                },
                {
                  name: '表姐',
                  value: 20,
                },
                {
                  name: '表弟',
                  value: 11,
                },
                {
                  name: '表妹',
                  value: 7,
                },
              ],
            },
          ],
        },
      ],
      OpenHierarchy: -1,
      symbolSize: [50, 20],
      fontSize: 12,
    };
    const TheOrganization4 = {
      id: 'TheOrganizations4',
      height: '300px',
      title: '我的家庭关系',
      textFont: '16',
      data: [
        {
          name: '外公外婆',
          value: 70,
          children: [
            {
              name: '大姨',
              value: 45,
              children: [
                {
                  name: '大表哥',
                  value: 23,
                },
                {
                  name: '大表姐',
                  value: 20,
                },
                {
                  name: '二表姐',
                  value: 20,
                },
                {
                  name: '二表哥',
                  value: 16,
                },
              ],
            },
            {
              name: '大舅',
              value: 45,
              children: [
                {
                  name: '大表哥',
                  value: 23,
                },
                {
                  name: '二表哥',
                  value: 20,
                },
                {
                  name: '大表姐',
                  value: 20,
                },

                {
                  name: '三表哥',
                  value: 16,
                },
              ],
            },
            {
              name: '大姨',
              value: 44,
              children: [
                {
                  name: '大表姐',
                  value: 22,
                },
                {
                  name: '二表姐',
                  value: 20,
                },
                {
                  name: '表弟',
                  value: 11,
                },
              ],
            },
            {
              name: '妈妈',
              value: 42,
              children: [
                {
                  name: '哥哥',
                  value: 22,
                  children: [
                    {
                      name: '侄女',
                      value: 9,
                    },
                    {
                      name: '侄子',
                      value: 5,
                    },
                  ],
                },

                {
                  name: '我',
                  value: 19,
                },
              ],
            },
            {
              name: '小姨',
              value: 40,
              children: [
                {
                  name: '表弟',
                  value: 11,
                },
                {
                  name: '表妹',
                  value: 7,
                },
              ],
            },
            {
              name: '小舅',
              value: 40,
              children: [
                {
                  name: '表弟',
                  value: 11,
                },
                {
                  name: '表妹',
                  value: 5,
                },
              ],
            },
          ],
        },
      ],
      OpenHierarchy: -1,
      symbolSize: [36, 20],
      fontSize: 9,
    };
    const TheOrganization5 = {
      id: 'TheOrganizations5',
      height: '300px',
      title: '我的家庭关系',
      textFont: '16',
      data: [
        {
          name: '爷爷奶奶',
          value: 70,
          children: [
            {
              name: '爸爸',
              value: 42,
              children: [
                {
                  name: '哥哥',
                  value: 22,
                  children: [
                    {
                      name: '侄女',
                      value: 9,
                    },
                    {
                      name: '侄子',
                      value: 5,
                    },
                  ],
                },

                {
                  name: '我',
                  value: 19,
                },
              ],
            },
            {
              name: '大姑姑',
              value: 45,
              children: [
                {
                  name: '表妹',
                  value: 23,
                },
                {
                  name: '表妹',
                  value: 20,
                },
                {
                  name: '表弟',
                  value: 16,
                },
              ],
            },
            {
              name: '二姑姑',
              value: 45,
              children: [
                {
                  name: '表弟',
                  value: 23,
                },
                {
                  name: '表妹',
                  value: 20,
                },
                {
                  name: '表妹',
                  value: 20,
                },
              ],
            },
            {
              name: '小姑姑',
              value: 44,
              children: [
                {
                  name: '表弟',
                  value: 22,
                },
                {
                  name: '表弟',
                  value: 20,
                },
              ],
            },
          ],
        },
      ],
      OpenHierarchy: -1,
      symbolSize: [50, 20],
      fontSize: 12,
    };
    const HuangFeiHong1 = {
      geoCoordMap: {
        上海: [121.4648, 31.2891],
        东莞: [113.8953, 22.901],
        东营: [118.7073, 37.5513],
        中山: [113.4229, 22.478],
        临汾: [111.4783, 36.1615],
        临沂: [118.3118, 35.2936],
        丹东: [124.541, 40.4242],
        丽水: [119.5642, 28.1854],
        乌鲁木齐: [87.9236, 43.5883],
        佛山: [112.8955, 23.1097],
        保定: [115.0488, 39.0948],
        兰州: [103.5901, 36.3043],
        包头: [110.3467, 41.4899],
        北京: [116.4551, 40.2539],
        北海: [109.314, 21.6211],
        南京: [118.8062, 31.9208],
        南宁: [108.479, 23.1152],
        南昌: [116.0046, 28.6633],
        南通: [121.1023, 32.1625],
        厦门: [118.1689, 24.6478],
        台州: [121.1353, 28.6688],
        合肥: [117.29, 32.0581],
        呼和浩特: [111.4124, 40.4901],
        咸阳: [108.4131, 34.8706],
        哈尔滨: [127.9688, 45.368],
        唐山: [118.4766, 39.6826],
        嘉兴: [120.9155, 30.6354],
        大同: [113.7854, 39.8035],
        大连: [122.2229, 39.4409],
        天津: [117.4219, 39.4189],
        太原: [112.3352, 37.9413],
        威海: [121.9482, 37.1393],
        宁波: [121.5967, 29.6466],
        宝鸡: [107.1826, 34.3433],
        宿迁: [118.5535, 33.7775],
        常州: [119.4543, 31.5582],
        广州: [113.5107, 23.2196],
        廊坊: [116.521, 39.0509],
        延安: [109.1052, 36.4252],
        张家口: [115.1477, 40.8527],
        徐州: [117.5208, 34.3268],
        德州: [116.6858, 37.2107],
        惠州: [114.6204, 23.1647],
        成都: [103.9526, 30.7617],
        扬州: [119.4653, 32.8162],
        承德: [117.5757, 41.4075],
        拉萨: [91.1865, 30.1465],
        无锡: [120.3442, 31.5527],
        日照: [119.2786, 35.5023],
        昆明: [102.9199, 25.4663],
        杭州: [119.5313, 29.8773],
        枣庄: [117.323, 34.8926],
        柳州: [109.3799, 24.9774],
        株洲: [113.5327, 27.0319],
        武汉: [114.3896, 30.6628],
        汕头: [117.1692, 23.3405],
        江门: [112.6318, 22.1484],
        沈阳: [123.1238, 42.1216],
        沧州: [116.8286, 38.2104],
        河源: [114.917, 23.9722],
        泉州: [118.3228, 25.1147],
        泰安: [117.0264, 36.0516],
        泰州: [120.0586, 32.5525],
        济南: [117.1582, 36.8701],
        济宁: [116.8286, 35.3375],
        海口: [110.3893, 19.8516],
        淄博: [118.0371, 36.6064],
        淮安: [118.927, 33.4039],
        深圳: [114.5435, 22.5439],
        清远: [112.9175, 24.3292],
        温州: [120.498, 27.8119],
        渭南: [109.7864, 35.0299],
        湖州: [119.8608, 30.7782],
        湘潭: [112.5439, 27.7075],
        滨州: [117.8174, 37.4963],
        潍坊: [119.0918, 36.524],
        烟台: [120.7397, 37.5128],
        玉溪: [101.9312, 23.8898],
        珠海: [113.7305, 22.1155],
        盐城: [120.2234, 33.5577],
        盘锦: [121.9482, 41.0449],
        石家庄: [114.4995, 38.1006],
        福州: [119.4543, 25.9222],
        秦皇岛: [119.2126, 40.0232],
        绍兴: [120.564, 29.7565],
        聊城: [115.9167, 36.4032],
        肇庆: [112.1265, 23.5822],
        舟山: [122.2559, 30.2234],
        苏州: [120.6519, 31.3989],
        莱芜: [117.6526, 36.2714],
        菏泽: [115.6201, 35.2057],
        营口: [122.4316, 40.4297],
        葫芦岛: [120.1575, 40.578],
        衡水: [115.8838, 37.7161],
        衢州: [118.6853, 28.8666],
        西宁: [101.4038, 36.8207],
        西安: [109.1162, 34.2004],
        贵阳: [106.6992, 26.7682],
        连云港: [119.1248, 34.552],
        邢台: [114.8071, 37.2821],
        邯郸: [114.4775, 36.535],
        郑州: [113.4668, 34.6234],
        鄂尔多斯: [108.9734, 39.2487],
        重庆: [107.7539, 30.1904],
        金华: [120.0037, 29.1028],
        铜川: [109.0393, 35.1947],
        银川: [106.3586, 38.1775],
        镇江: [119.4763, 31.9702],
        长春: [125.8154, 44.2584],
        长沙: [113.0823, 28.2568],
        长治: [112.8625, 36.4746],
        阳泉: [113.4778, 38.0951],
        青岛: [120.4651, 36.3373],
        韶关: [113.7964, 24.7028],
      },
      dataT: [
        {
          name: '上海',
          value: 95,
        },
        {
          name: '广州',
          value: 90,
        },
        {
          name: '大连',
          value: 80,
        },
        {
          name: '南宁',
          value: 70,
        },
        {
          name: '南昌',
          value: 60,
        },
        {
          name: '拉萨',
          value: 50,
        },
        {
          name: '长春',
          value: 40,
        },
        {
          name: '包头',
          value: 30,
        },
        {
          name: '重庆',
          value: 20,
        },
        {
          name: '常州',
          value: 10,
        },
      ],
      id: 'HuangFeiHongA',
      textFont: 16,
    };
    const SourceOfTourists1 = {
      geoCoordMap: {
        //可以在地图上显示的城市的坐标信息
        兰州市: [103.5901, 36.3043],
        乌鲁木齐: [87.9236, 43.5883],
        拉萨市: [91.11, 29.97],
        成都: [103.9526, 30.7617],

        开封: [113.4668, 34.6234],

        福州市: [119.4543, 25.9222],

        长沙: [113.0823, 28.2568],

        昆明市: [102.9199, 25.4663],
        西樵山: [113.12244, 23.009505],

        海口市: [110.3893, 19.8516],
        上海: [121.4648, 31.2891],
      },
      HFData: [
        {
          name: '上海',
          value: 295,
          type: 1,
        },
        {
          name: '兰州市',
          value: 1280,
          type: 2,
        },
        {
          name: '乌鲁木齐',
          value: 38880,
          type: 3,
        },
        {
          name: '拉萨市',
          value: 2260,
          type: 4,
        },
        {
          name: '成都',
          value: 4450,
          type: 1,
        },
        {
          name: '开封',
          value: 35640,
          type: 1,
        },
        {
          name: '福州市',
          value: 5530,
          type: 1,
        },
        {
          name: '长沙',
          value: 1120,
          type: 4,
        },
        {
          name: '昆明市',
          value: 44310,
          type: 3,
        },
        {
          name: '西樵山',
          value: 33320,
          type: 3,
        },
        {
          name: '海口市',
          value: 310,
          type: 3,
        },
      ],
      height: '800px',
      barWidth: 200,
      data: [{ name: '1000以下' }, { name: '1000人~10000以下' }, { name: '10000以上' }],
      id: 'SourceOfTouristsG',
      title: '游客来源',
      TitleUnit: '单位： 分钟',
    };
    const ChinaPneumonia1 = {
      id: 'ChinaPneumonia1',
      height: '400px',
      dataList: [
        {
          name: '南海诸岛',
          value: 0,
        },
        {
          name: '北京',
          value: 54,
        },
        {
          name: '天津',
          value: 13,
        },
        {
          name: '上海',
          value: 40,
        },
        {
          name: '重庆',
          value: 75,
        },
        {
          name: '河北',
          value: 13,
        },
        {
          name: '河南',
          value: 83,
        },
        {
          name: '云南',
          value: 11,
        },
        {
          name: '辽宁',
          value: 19,
        },
        {
          name: '黑龙江',
          value: 15,
        },
        {
          name: '湖南',
          value: 69,
        },
        {
          name: '安徽',
          value: 60,
        },
        {
          name: '山东',
          value: 39,
        },
        {
          name: '新疆',
          value: 4,
        },
        {
          name: '江苏',
          value: 31,
        },
        {
          name: '浙江',
          value: 104,
        },
        {
          name: '江西',
          value: 36,
        },
        {
          name: '湖北',
          value: 1052,
        },
        {
          name: '广西',
          value: 33,
        },
        {
          name: '甘肃',
          value: 7,
        },
        {
          name: '山西',
          value: 9,
        },
        {
          name: '内蒙古',
          value: 7,
        },
        {
          name: '陕西',
          value: 22,
        },
        {
          name: '吉林',
          value: 4,
        },
        {
          name: '福建',
          value: 18,
        },
        {
          name: '贵州',
          value: 5,
        },
        {
          name: '广东',
          value: 98,
        },
        {
          name: '青海',
          value: 1,
        },
        {
          name: '西藏',
          value: 0,
        },
        {
          name: '四川',
          value: 44,
        },
        {
          name: '宁夏',
          value: 4,
        },
        {
          name: '海南',
          value: 22,
        },
        {
          name: '台湾',
          value: 3,
        },
        {
          name: '香港',
          value: 5,
        },
        {
          name: '澳门',
          value: 5,
        },
      ],
    };
    const AirQuality1 = {
      source: [
        ['湖南', '112.929238', '28.249957', '90', '28', '66', 'rgba(19,198,249,1)'],
        ['上海', '121.481115', '31.234694', '88', '48', '75', 'rgba(19,198,249,1)'],
        ['湖北', '114.311073', '30.601099', '79', '56', '85', 'rgba(245, 42, 118,1)'],
        ['澳门', '113.545265', '22.170938', '82', '36', '68', 'rgba(245, 42, 118,1)'],
        ['江苏', '119.750934', '33.196174', '82', '36', '68', 'rgba(245, 42, 118,1)'],
      ],
      data: [
        {
          name: '北京',
          value: [116.405285, 39.904989],
          itemStyle: {
            color: 'rgba(19,198,249,1)',
          },
          visualMap: false,
        },
        {
          name: '天津',
          value: [117.190182, 39.12559],
          visualMap: false,
        },
        {
          name: '山西',
          value: [112.549248, 37.857014],
          visualMap: false,
        },
        {
          name: '内蒙古',
          value: [111.670801, 40.818311],
          visualMap: false,
        },
        {
          name: '辽宁',
          value: [123.429096, 41.796767],
          visualMap: false,
        },
      ],
      id: 'AirQuality1',
      height: '400px',
    };
    const ChinaPneumoniaAir1 = {
      id: 'ChinaPneumoniaAir1',
      height: '600px',
      outname: [
        '南海诸岛',
        '北京',
        '天津',
        '上海',
        '重庆',
        '河北',
        '河南',
        '云南',
        '辽宁',
        '黑龙江',
        '湖南',
        '安徽',
        '山东',
        '新疆',
        '江苏',
        '浙江',
        '江西',
        '湖北',
        '广西',
        '甘肃',
        '山西',
        '内蒙古',
        '陕西',
        '吉林',
        '福建',
        '贵州',
        '广东',
        '青海',
        '西藏',
        '四川',
        '宁夏',
        '海南',
        '台湾',
        '香港',
        '澳门',
      ],
      outvalue: [
        1,
        524,
        13,
        140,
        75,
        13,
        83,
        11,
        19,
        15,
        69,
        260,
        39,
        4,
        31,
        104,
        36,
        1052,
        33,
        347,
        9,
        157,
        22,
        4,
        18,
        5,
        2398,
        41,
        0,
        484,
        404,
        22,
        3,
        5,
        225,
      ],
    };
    const ChinaEpidemic1 = {
      id: 'ChinaEpidemic1',
      height: '800px',
      data: [
        {
          name: '北京',
          value: 212,
        },
        {
          name: '天津',
          value: 60,
        },
        {
          name: '上海',
          value: 208,
        },
        {
          name: '重庆',
          value: 337,
        },
        {
          name: '河北',
          value: 126,
        },
        {
          name: '河南',
          value: 675,
        },
        {
          name: '云南',
          value: 117,
        },
        {
          name: '辽宁',
          value: 74,
        },
        {
          name: '黑龙江',
          value: 155,
        },
        {
          name: '湖南',
          value: 593,
        },
        {
          name: '安徽',
          value: 480,
        },
        {
          name: '山东',
          value: 270,
        },
        {
          name: '新疆',
          value: 29,
        },
        {
          name: '江苏',
          value: 308,
        },
        {
          name: '浙江',
          value: 829,
        },
        {
          name: '江西',
          value: 476,
        },
        {
          name: '湖北',
          value: 13522,
        },
        {
          name: '广西',
          value: 139,
        },
        {
          name: '甘肃',
          value: 55,
        },
        {
          name: '山西',
          value: 74,
        },
        {
          name: '内蒙古',
          value: 34,
        },
        {
          name: '陕西',
          value: 142,
        },
        {
          name: '吉林',
          value: 42,
        },
        {
          name: '福建',
          value: 179,
        },
        {
          name: '贵州',
          value: 56,
        },
        {
          name: '广东',
          value: 797,
        },
        {
          name: '青海',
          value: 15,
        },
        {
          name: '西藏',
          value: 1,
        },
        {
          name: '四川',
          value: 282,
        },
        {
          name: '宁夏',
          value: 34,
        },
        {
          name: '海南',
          value: 79,
        },
        {
          name: '台湾',
          value: 10,
        },
        {
          name: '香港',
          value: 15,
        },
        {
          name: '澳门',
          value: 9,
        },
      ],
    };
    return (
      <div style={{ background: '#dfdfdf' }} id="padr">
        <Button onClick={this.handPdf} type="primart">导出PDF</Button>
        <Row>
          <Col span="24">
            <ChinaEpidemic {...ChinaEpidemic1} />
          </Col>
          <Col span="24">
            <ChinaPneumoniaAir {...ChinaPneumoniaAir1} />
          </Col>
          <Col span="12">
            <ChinaPneumonia {...ChinaPneumonia1} />
          </Col>
          <Col span="12">
            <AirQuality {...AirQuality1} />
          </Col>
          <Col span="24">
            <SourceOfTourists {...SourceOfTourists1} key={time} />
          </Col>
          <Col span="12">
            <TheOrganization {...TheOrganization5} />
          </Col>
          <Col span="12">
            <TheOrganization {...TheOrganization4} />
          </Col>
          <Col span="24">
            <TheOrganization {...TheOrganization3} />
          </Col>
          <Col span="24">
            <TheOrganization {...TheOrganization2} />
          </Col>
          <Col span="24">
            <TheOrganization {...TheOrganization1} />
          </Col>
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
            <FoodBeverage {...FoodBeverage3} />
          </Col>
          <Col span={span}>
            <NearlyDaysTourists {...NearlyDaysTourists1} />
          </Col>
          <Col span={span}>
            <WorldCloud {...WorldCloud1} />
          </Col>
          <Col span={span}>
            <AnalysistouristGender {...AnalysistouristGender1} />
          </Col>

          {/* 这两个报错   "echarts-liquidfill": "^2.0.6", echarts-liquidfil版本要用2.0.6的 */}
          <Col span={span}>
            <DataAnalysisTourists {...DataAnalysisTourists1} />
          </Col>
          <Col span={span}>
            <TouristTransaction {...TouristTransaction1} />
          </Col>


          <Col span={span}>
            <TouristTransactionVolume {...TouristTransactionVolume1} />
          </Col>
          <Col span={span}>
            <NighttimeConsumptionBias {...NighttimeConsumptionBias1} />
          </Col>
          <Col span={span}>
            <AgeDistributionVisitors {...AgeDistributionVisitors1} />
          </Col>
          <Col span={span}>
            <EachChannelNumber {...EachChannelNumber1} />
          </Col>
          <Col span="24">
            <HuangFeiHong {...HuangFeiHong1} />
          </Col>
        </Row>
      </div>
    );
  }
}
export default EchartsIndex;
