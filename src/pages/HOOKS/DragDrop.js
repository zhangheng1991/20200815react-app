import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Tabs } from 'antd';
import SignalVertical from './SignalVertical/SignalVertical';
import SignalHorizontal from './SignalHorizontal/SignalHorizontal';
import MultiVertical from './MultiVertical/MultiVertical';
import MultiHorizontal from './MultiHorizontal/MultiHorizontal';
import VirtualVertical from './VirtualVertical/VirtualVertical';
import DragSortingTable from "./../../Echarts/comm/DragSortingTable";
const { Sider, Content } = Layout;
const { TabPane } = Tabs;
const App = () => {
  const [currentKey, setCurrentKey] = React.useState('1')
  const handleSelectMenu = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    setCurrentKey(key)
  }
  const callback = (key) => {
    console.log(key);
  }
  return (
    <div className="App">
      {/* style={{width: window.innerWidth, height: window.innerHeight}} */}
      <div>
        <Layout >
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {

            }}
            onCollapse={(collapsed, type) => {

            }}
            style={{ minHeight: "660px", position: "fixed" }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onSelect={handleSelectMenu}>
              <Menu.Item key="1">
                <span className="nav-text">单行垂直列表</span>
              </Menu.Item>
              <Menu.Item key="2">
                <span className="nav-text">单行水平列表</span>
              </Menu.Item>
              <Menu.Item key="3">
                <span className="nav-text">多行垂直列表拖拽</span>
              </Menu.Item>
              <Menu.Item key="4">
                <span className="nav-text">多行水平列表拖拽</span>
              </Menu.Item>
              <Menu.Item key="5">
                <span className="nav-text">大数据量垂直列表</span>
              </Menu.Item>
              <Menu.Item key="6">
                <span className="nav-text">表格拖拽</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '24px 16px 0 220px' }}>
              {currentKey === '1' ? <SignalVertical /> : null}
              {currentKey === '2' ? <SignalHorizontal /> : null}
              {currentKey === '3' ? <MultiVertical /> : null}
              {currentKey === '4' ? <MultiHorizontal /> : null}
              {currentKey === '5' ? <VirtualVertical /> : null}
              {currentKey === '6' ? <DragSortingTable /> : null}

            </Content>
          </Layout>
        </Layout>
      </div>
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
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
      </div>

    </div>
  );
};

export default App;
