import React from 'react';
import ChartContainer from '@/charts/container/ChartContainer';
import style from '../style.less';
import { Tabs } from 'antd';
import TouristTransactionVolume from './TouristTransactionVolume';
const { TabPane } = Tabs;

class TouristTransactions extends React.Component {
  callback = (key) => {
    console.log(key);
  };
  render() {
    const TouristTransactionVolume2 = {
      id: 'TouristTransactionVolume2',
      titleFont: 20,
      textFont: 16,
      data: [0.6],
      title: '游客交易量占比',
      backGroundType: '2',
      titleFontSize: '16',
      ChattTitle:"西樵山旅游对佛山市消费贡献度",
      height:"123px"
    };
    const TouristTransactionVolume3 = {
      id: 'TouristTransactionVolume3',
      titleFont: 20,
      textFont: 16,
      data: [0.6],
      title: '游客交易量占比',
      backGroundType: '2',
      titleFontSize: '16',
      ChattTitle:"西樵山旅游对佛山市消费贡献度",
      height:"123px"
    };
    const TouristTransactionVolume4 = {
      id: 'TouristTransactionVolume4',
      titleFont: 20,
      textFont: 16,
      data: [0.6],
      title: '游客交易量占比',
      backGroundType: '2',
      titleFontSize: '16',
      ChattTitle:"西樵山旅游对佛山市消费贡献度",
      height:"123px"
    };
    return (
      <div>
        <div className={`${style['TouristTransactions']}`}>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="佛山市" key="1">
              <TouristTransactionVolume {...TouristTransactionVolume2} />
            </TabPane>
            <TabPane tab="南海区" key="2">
              <TouristTransactionVolume {...TouristTransactionVolume3} />
            </TabPane>
            <TabPane tab="西樵镇" key="3">
              <TouristTransactionVolume {...TouristTransactionVolume4} />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
export default TouristTransactions;
