import React from 'react';
import { Col, Row } from 'antd';
import echarts from 'echarts';
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
    const FoodBeverage3 = {
      title: '餐饮排名数据分析',
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
      title: '餐饮排名数据分析',
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
    //
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
          value: 50,
          symbol:
            'path://M18.2629891,11.7131596 L6.8091608,11.7131596 C1.6685112,11.7131596 0,13.032145 0,18.6237673 L0,34.9928467 C0,38.1719847 4.28388932,38.1719847 4.28388932,34.9928467 L4.65591984,20.0216948 L5.74941883,20.0216948 L5.74941883,61.000787 C5.74941883,65.2508314 11.5891201,65.1268798 11.5891201,61.000787 L11.9611506,37.2137775 L13.1110872,37.2137775 L13.4831177,61.000787 C13.4831177,65.1268798 19.3114787,65.2508314 19.3114787,61.000787 L19.3114787,20.0216948 L20.4162301,20.0216948 L20.7882606,34.9928467 C20.7882606,38.1719847 25.0721499,38.1719847 25.0721499,34.9928467 L25.0721499,18.6237673 C25.0721499,13.032145 23.4038145,11.7131596 18.2629891,11.7131596 M12.5361629,1.11022302e-13 C15.4784742,1.11022302e-13 17.8684539,2.38997966 17.8684539,5.33237894 C17.8684539,8.27469031 15.4784742,10.66467 12.5361629,10.66467 C9.59376358,10.66467 7.20378392,8.27469031 7.20378392,5.33237894 C7.20378392,2.38997966 9.59376358,1.11022302e-13 12.5361629,1.11022302e-13',
        },
        {},
        {
          value: 50,
          symbol:
            'path://M28.9624207,31.5315864 L24.4142575,16.4793596 C23.5227152,13.8063773 20.8817445,11.7111088 17.0107398,11.7111088 L12.112691,11.7111088 C8.24168636,11.7111088 5.60080331,13.8064652 4.70917331,16.4793596 L0.149791395,31.5315864 C-0.786976655,34.7595013 2.9373074,35.9147532 3.9192135,32.890727 L8.72689855,19.1296485 L9.2799493,19.1296485 C9.2799493,19.1296485 2.95992025,43.7750224 2.70031069,44.6924335 C2.56498417,45.1567684 2.74553639,45.4852068 3.24205501,45.4852068 L8.704461,45.4852068 L8.704461,61.6700801 C8.704461,64.9659872 13.625035,64.9659872 13.625035,61.6700801 L13.625035,45.360657 L15.5097899,45.360657 L15.4984835,61.6700801 C15.4984835,64.9659872 20.4191451,64.9659872 20.4191451,61.6700801 L20.4191451,45.4852068 L25.8814635,45.4852068 C26.3667633,45.4852068 26.5586219,45.1567684 26.4345142,44.6924335 C26.1636859,43.7750224 19.8436568,19.1296485 19.8436568,19.1296485 L20.3966199,19.1296485 L25.2043926,32.890727 C26.1862111,35.9147532 29.9105828,34.7595013 28.9625083,31.5315864 L28.9624207,31.5315864 Z M14.5617154,0 C17.4960397,0 19.8773132,2.3898427 19.8773132,5.33453001 C19.8773132,8.27930527 17.4960397,10.66906 14.5617154,10.66906 C11.6274788,10.66906 9.24611767,8.27930527 9.24611767,5.33453001 C9.24611767,2.3898427 11.6274788,0 14.5617154,0 L14.5617154,0 Z',
        },
      ],
      ChattTitle: ' 时间：',
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
      id: 'DataAnalysisTourists24',
    };
    const TouristTransaction1 = {
      id: 'TouristTransaction1',
      title: '游客交易量占比',
      data: [0.6],
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
          symbolSize: 95,
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
          symbolSize: 90,
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
          symbolSize: 90,
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
      textFont:"16",
      ChattTitle:"",
      height:"400px"
    };
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
        </Row>
      </div>
    );
  }
}
export default EchartsIndex;
