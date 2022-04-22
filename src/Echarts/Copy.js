import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Table, InputNumber, Progress, message, Modal, Button, Space, TreeSelect, DatePicker } from 'antd';
import _ from "loadsh";
import moment from "moment";
import style from './component/style.less';
import TouristTransactionVolume from '../pages/echarts/charts/TouristTransactionVolume';
import EchartsLine from "../component/echarts/line/Lines";
import AddFormItem from "./copy/AddFormItem";
import { scaleTimeCat } from '@antv/g2';
const { MonthPicker, RangePicker } = DatePicker;
// const dataR=[
//   {
//     name:"1111",
//     data:[{name:"1111",value:1111}],
//     flag:1,
//   }, {
//     name:"2222",
//     data:[{name:"2222",value:2222}],
//     flag:1,
//   }, {
//     name:"3333",
//     data:[{name:"3333",value:3333}],
//     flag:1,
//   }, {
//     name:"4444",
//     data:[{name:"4444",value:4444}],
//     flag:1,
//   }, {
//     name:"5555",
//     data:[{name:"5555",value:5555}],
//     flag:1,
//   }, {
//     name:"6666",
//     data:[{name:"6666",value:6666}],
//     flag:1,
//   }, {
//     name:"7777",
//     data:[{name:"7777",value:7777}],
//     flag:1,
//   },
// ]
const dataR = [
  {
    value: 700,
    name: '停车场1',
    flag: 1,
  },
  {
    value: 600,
    name: '停车场2',
    flag: 1,
  },
  {
    value: 500,
    name: '停车场3',
    flag: 1,
  },
  {
    value: 400,
    name: '停车场4',
    flag: 1,
  },
  {
    value: 300,
    name: '停车场5',
    flag: 1,
  },
  {
    value: 200,
    name: '停车场6',
    flag: 1,
  },
];
const dataLine = [
  {
    name: '邮件营销',
    type: 'line',
    stack: '总量',
    data: [120, 132, 101, 134, 90, 230, 210],
    dataG: [120, 132, 101, 134, 90, 230, 210],
    flag: 1,
  },
  {
    name: '联盟广告',
    type: 'line',
    stack: '总量',
    data: [220, 182, 191, 234, 290, 330, 310],
    dataG: [220, 182, 191, 234, 290, 330, 310],
    flag: 1,
  },
  {
    name: '视频广告',
    type: 'line',
    stack: '总量',
    data: [150, 232, 201, 154, 190, 330, 410],
    dataG: [150, 232, 201, 154, 190, 330, 410],
    flag: 1,
  },
  {
    name: '直接访问',
    type: 'line',
    stack: '总量',
    data: [320, 332, 301, 334, 390, 330, 320],
    dataG: [320, 332, 301, 334, 390, 330, 320],
    flag: 1,
  },
  {
    name: '搜索引擎',
    type: 'line',
    stack: '总量',
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    dataG: [820, 932, 901, 934, 1290, 1330, 1320],
    flag: 1,
  }
]
const colors = ["red", "yellow", "blue", "gold", "pink"];
const dataO = [{ num: 111111111111111 }, { num: 22222222222222 }, { num: 22222223444444 },
{ num: 555555555555666666663 },
{ num: 123456789012345678901 }];
class CopyCom extends React.Component {
  state = {
    title: '',
    textT: '没有选中！',
    persent: 66,
    dataL: dataR, dataU: dataR,
    time: moment().format("YYYYMMDDHH:mm:ss.SSS"),
    dataG: dataLine,
    dataK: dataLine,
    count: 0,
    loading: false,
    loadingF: false,
    parameter: { name: "name", sort: "ascend" },
    flagParm: "name-up",
    value: undefined,
  };
  componentDidMount() {
    _.forEach({ 'a': 1, 'b': 2 }, function (value, key) {
      console.log(key, value);
    });
    const dataP = [];
    const dataV = [1, 2, 3, 4];
    const dataB = [{ value: 1, name: "1111" }, { value: 2, name: "2222" }, { value: 5, name: "5555" }]
    // console.log(_.filter(dataV, dataB))
    _.forEach(dataB, function (valueF) {//若一个参数，返回的便是其value值
      _.forEach(dataV, function (valueT) {//若一个参数，返回的便是其value值
        if (valueF.value === valueT) {
          // console.log(valueF)
          dataP.push(valueF)
        }
      });
    });
    console.log(dataP)
    const element = document.getElementById('content');
    this.watermark(element);
    // window.addEventListener('scroll', this.throttle(this.handle, 5000));
  }
  onCopy = record => {

    message.info("当前复制:" + record.address, 0.5);//时间秒
    this.setState({ textT: record.address, persent: record.persent });
    // Modal.info({
    //   title: '当前复制:',
    //   content: (
    //     <div>
    //       <p>{record.address}</p>
    //       {/* <p>some messages...some messages...</p> */}
    //     </div>
    //   ),
    //   onOk() {},
    // });
  };
  onChangeNumber = value => {

    this.setState({ persent: value });
  };
  handClick = (obj) => {

    const { dataL } = this.state;
    const data = _.map(dataL, item => ({
      ...item,
      flag: item.name === obj.name ? item.flag === 1 ? 0 : 1 : item.flag,
    }))

    // const dataT=_.map(_.filter(data,item=>item.flag===1),item=>({
    //   ...item
    // }))

    const dataT = _.map(_.filter(data, item => item.flag === 1), item => ({
      ...item
    }))

    // const dataT=_.map(data,item=>({
    //   ...item,
    //   value:item.flag===1?item.value:null,
    // }))

    this.setState({ dataL: data, dataU: dataT, time: moment().format("YYYYMMDDHH:mm:ss.SSS"), })

  }

  handClickD = (obj) => {

    const { dataG, dataK } = this.state;
    const dataR = _.map(dataG, item => ({
      ...item,
      flag: item.name === obj.name ? item.flag === 1 ? 0 : 1 : item.flag,
    }))
    const data = _.map(dataK, item => ({
      ...item,
      flag: item.name === obj.name ? item.flag === 1 ? 0 : 1 : item.flag,
      data: item.name === obj.name ? item.flag === 1 ? null : item.dataG : item.data,
    }))
    this.setState({ dataK: data, dataG: dataR, time: moment().format("YYYYMMDDHH:mm:ss.SSS"), })

  }



  handThrou = () => {
    // this.throttle(this.handle.bind(this,this), 5000);
    const { count } = this.state;
    this.setState({ count: count + 1, loading: true })
    this.seachFunction({ id: 21111 })
  }

  throttle = function (func, delay) {
    console.log("throttle", func, delay)
    var timer = null;
    var startTime = Date.now();
    // return function () {
    console.log("function")
    var curTime = Date.now();
    var remaining = delay - (curTime - startTime);
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    if (remaining <= 0) {
      func.apply(context, args);
      startTime = Date.now();
      console.log("11111")
    } else {
      timer = setTimeout(func, remaining);
      console.log("2222")
      console.log(this)
    }
    // }
  }

  handle(obj) {
    const that = obj;
    const { count } = that.state;
    console.log(obj, "obj")
    console.log(Math.random(), "handle", `第${count}点击事件`);
    this.setState({ loading: false })

  }
  handThrouD = () => {
    // this.throttle(this.handle.bind(this,this), 5000);
    const { count } = this.state;
    this.setState({ count: count + 1, loadingF: true })
    this.seachFunction({ id: 21111 })
  }

  fetchData = (data) => {
    console.log(data, "data")
    this.setState({ loadingF: false, loading: false })
  }

  seachFunction = _.debounce(this.fetchData, 5000)

  handChange = (pagination, filters, sorter, extra) => {
    console.log(pagination, filters, sorter, extra)
    const data = { name: sorter.field, sort: sorter.order }
    this.setState({ parameter: data })
  }

  handleClick = (name) => {
    console.log(name, "name")
  }

  columsSort = (key, a, b) => {
    console.log(key, a, b)
    if (a[key]) {
      return a[key][this.columsSort(b[key], "zh")];
      // return a[key]-b[key]
    }
  }

  handleUp = (key, name) => {
    console.log(key, name)
    this.setState({ flagParm: key + "-" + name })
  }

  watermark(element, config) {
    // 获取元素的坐标
    function getOffset(el) {
      if (el.offsetParent) {
        return {
          x: el.offsetLeft + getOffset(el.offsetParent).x,
          y: el.offsetTop + getOffset(el.offsetParent).y,
        };
      }
      return {
        x: el.offsetLeft,
        y: el.offsetTop,
      };
    }
    if (!element) return;
    // 默认配置
    const _config = {
      text1: '011330/张衡',   //文本1
      text2: moment().format("YYYYMMDD"),   // 文本2
      start_x: 0,      // x轴起始位置
      start_y: 0,      // y轴起始位置
      space_x: 100,    // x轴间距
      space_y: 20,     // y轴间距
      width: 300,      // 宽度
      height: 100,      // 长度
      fontSize: 18,    // 字体
      color: '#aaa',   // 字色
      alpha: 0.4,      // 透明度
      rotate: 20,       // 倾斜度
    };
    // 替换默认配置
    if (arguments.length === 2 && typeof arguments[1] === "object") {
      const src = arguments[1] || {};
      for (let key in src) {
        if (src[key] && _config[key] && src[key] === _config[key]) {
          continue;
        } else if (src[key]) {
          _config[key] = src[key];
        }
      }
    }
    // 节点的总宽度
    const total_width = element.scrollWidth;
    // 节点的总高度
    const total_height = element.scrollHeight;
    // 创建文本碎片，用于包含所有的插入节点
    const mark = document.createDocumentFragment();
    // 水印节点的起始坐标
    const position = getOffset(element);
    console.log(position, "position")
    let x = position.x + _config.start_x, y = position.y + _config.start_y;
    // 先循环y轴插入水印
    do {
      console.log(x, y)
      // 再循环x轴插入水印
      do {
        // 创建单个水印节点
        const item = document.createElement('div');
        item.className = 'watermark-item';
        // 设置节点的样式
        item.style.position = "absolute";
        item.style.zIndex = 99999;
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        item.style.width = `${_config.width}px`;
        item.style.height = `${_config.height}px`;
        item.style.fontSize = `${_config.fontSize}px`;
        item.style.color = _config.color;
        item.style.textAlign = 'center';
        item.style.opacity = _config.alpha;
        item.style.filter = `alpha(opacity=${_config.alpha * 100})`;
        // item.style.filter = `opacity(${_config.alpha * 100}%)`;
        item.style.webkitTransform = `rotate(-${_config.rotate}deg)`;
        item.style.MozTransform = `rotate(-${_config.rotate}deg)`;
        item.style.msTransform = `rotate(-${_config.rotate}deg)`;
        item.style.OTransform = `rotate(-${_config.rotate}deg)`;
        item.style.transform = `rotate(-${_config.rotate}deg)`;
        item.style.pointerEvents = 'none';    //让水印不遮挡页面的点击事件
        // 创建text1水印节点
        const text1 = document.createElement('div');
        text1.appendChild(document.createTextNode(_config.text1));
        item.append(text1);
        // 创建text2水印节点
        const text2 = document.createElement('div');
        text2.appendChild(document.createTextNode(_config.text2));
        item.append(text2);
        // 添加水印节点到文本碎片
        mark.append(item);
        // x坐标递增
        x = x + _config.width + _config.space_x;
        // 超出文本右侧坐标停止插入
      } while (total_width + position.x > x + _config.width);
      // 重置x初始坐标
      x = position.x + _config.start_x;
      // y坐标递增
      y = y + _config.height + _config.space_y;
      // 超出文本底部坐标停止插入
    } while (total_height + position.y > y + _config.height);
    // 插入文档碎片
    element.append(mark);
  }
  onChangeT = value => {
    console.log(value);
    this.setState({ value });
  };

  range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  disabledDate = (current) => {
    // Can not select days before today and today
    // moment().subtract(1,"moments".format("YYYY-MM-DD"))
    console.log(moment(current).format("YYYYMMDD"), moment().endOf('day').format("YYYYMMDD"), moment().subtract(-1, "months").format("YYYY-MM-DD"))
    // return current &&  moment().endOf('day')<current<moment().subtract(-1,"months");
    // return current && current< moment().endOf('day')&&current<moment().subtract(-1,"months");
    // return current &&(current< moment().endOf('day')||moment().subtract(-1,"months")<current) ;
    return current && (current < moment().subtract(15, "day") || moment().subtract(-15, "day") < current);
  }

  disabledDateTime = () => {
    return {
      disabledHours: () => this.range(0, 24).splice(4, 20),
      disabledMinutes: () => this.range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }

  disabledRangeTime = (_, type) => {
    if (type === 'start') {
      return {
        disabledHours: () => this.range(0, 60).splice(4, 20),
        disabledMinutes: () => this.range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    }
    return {
      disabledHours: () => this.range(0, 60).splice(20, 4),
      disabledMinutes: () => this.range(0, 31),
      disabledSeconds: () => [55, 56],
    };
  }
  render() {
    const { textT, persent, dataL, dataU, time, dataG, dataK, parameter, flagParm } = this.state;
    console.log(flagParm.match(/(\S*)-/)[1], flagParm.match(/-(\S*)/)[1])
    const data = [];
    const dataD = []
    const dataSource = [
      // {
      //   key: '1',
      //   name: '胡彦斌',
      //   age: 32,
      //   address: '西湖区湖底公园1号',
      //   persent: 50,
      // },
      // {
      //   key: '2',
      //   name: '胡彦祖',
      //   age: 42,
      //   address: '西湖区湖底公园2号',
      //   persent: 90,
      // },
    ];

    for (let i = 1; i <= 100; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
      dataSource.push({
        key: i,
        name: '胡彦祖' + i,
        age: i,
        address: '西湖区湖底公园' + i + "号",
        persent: i,
      })

      dataD.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });

    }
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: "20%",
        onFilter: (value, record) => record.name.indexOf(value) === 0,
        sorter: (a, b) => a.name.length - b.name.length,
        defaultSortOrder: "ascend",
        sortDirections: ["ascend", "descend", "ascend"],
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        width: "10%",
        sorter: (a, b) => a.age - b.age,
        sortDirections: ["ascend", "descend", "ascend"],
      },
      {
        title: '百分比',
        dataIndex: 'persent',
        key: 'persent',
        width: "10%",
        sorter: (a, b) => a.persent - b.persent,
        sortDirections: ["ascend", "descend", "ascend"],
      },
      {
        title: <span>住址<span onClick={this.handleClick.bind(this, "address")}>自定义</span></span>,
        dataIndex: 'address',
        key: 'address',
        width: "50%",
        sorter: (a, b) => a.address.length - b.address.length,
        defaultSortOrder: "ascend",
        sortDirections: ["ascend", "descend", "ascend"],
      },
      {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        width: "10%",
        render: (text, record) => (
          <CopyToClipboard text={record.address} onCopy={this.onCopy.bind(this, record)}>
            <span className={`${style['copyText']}`}>复制</span>
          </CopyToClipboard>
        ),
      },
    ];
    const dataT = {
      dataSource: dataSource,
      columns: columns,
    };
    const TouristTransactionVolume1 = {
      id: 'TouristTransactionVolumeY',
      title: '各个停车场收入',
      TitleUnit: '单位:千元 | 时间：',
      textFont: '16',
      // data: [
      //   {
      //     value: 700,
      //     name: '停车场1',
      //   },
      //   {
      //     value: 600,
      //     name: '停车场2',
      //   },
      //   {
      //     value: 500,
      //     name: '停车场3',
      //   },
      //   {
      //     value: 400,
      //     name: '停车场4',
      //   },
      //   {
      //     value: 300,
      //     name: '停车场5',
      //   },
      //   {
      //     value: 200,
      //     name: '停车场6',
      //   },
      // ],
      data: dataU,
      height: '400px',
    };
    const EchartsLine1 = {
      id: "EchartsLine1", height: "400px", chartData: dataK,
    }

    const dataME = _.map(_.filter(dataO, item => ({
      num: item.num
    })))





    const columnsData = {
      name: "Name",
      age: "Age",
      sex: "Sex",
      phone: "Phone",
      address: "Address",
    }
    const columnsD = _.map(Object.keys(columnsData), key => ({
      title: <div style={{ display: "flex", alignItems: "center" }}>
        <div>{columnsData[key]}</div>
        <div>
          <div style={{ cursor: "pointer", color: flagParm === key + "-" + "up" ? "#1890ff" : "", transform: "scale(0.8)" }} onClick={this.handleUp.bind(this, key, "up")}>↑</div>
          <div style={{ cursor: "pointer", color: flagParm === key + "-" + "down" ? "#1890ff" : "", transform: "scale(0.8)" }} onClick={this.handleUp.bind(this, key, "down")}>↓</div>
        </div>
      </div>,
      key,
      dataIndex: key,
      align: "center",
      // sorter: (a, b) => a[key] - b[key],
      // sorter: (a, b) => this.columsSort.bind(this,key,a,b),
      // defaultSortOrder: "ascend",
      // sortDirections: ["ascend", "descend", "ascend"],
    }))
    const dataV = {
      dataSource: dataD,
      columns: columnsD,
    }
    console.log(columnsD, "columnsD")

    const treeData = [
      {
        title: 'Node1',
        value: '0-0',
        key: '0-0',
        children: [
          {
            title: 'Child Node1',
            value: '0-0-1',
            key: '0-0-1',
          },
          {
            title: 'Child Node2',
            value: '0-0-2',
            key: '0-0-2',
          },
        ],
      },
      {
        title: 'Node2',
        value: '0-1',
        key: '0-1',
      },
    ];

    const dataUR = [[111, 3333], [444, 5555], [66666, 5555]];
    let dataMK = [];
    dataUR.map((item, index) => {
      console.log(item, index)
      dataMK = dataMK.concat(item)
    })

    console.log(dataMK, "dataMK", [...new Set(dataMK)])

    //数据排序

    const dataNB = [{ id: 3, num: 3, name: "zhangheng3" }, { id: 5, num: 5, name: "zhangheng5" },
    { id: 1, num: 1, name: "zhangheng1" }, { id: 2, num: 23, name: "zhangheng2" }, { id: 4, num: 4, name: "zhangheng4" },];

    const dataHu = _.sortBy(dataNB, function (item) {
      return item.num;
    })
    console.log(dataHu, "dataHu")
    //_.orderBy(users, ['user', 'age'], ['asc', 'desc']);
    const dataKL = _.orderBy(dataNB, ["num", "id"], ["desc"]);
    const dataKK = _.orderBy(dataNB, ["id", "num"], ["desc"]);
    console.log(dataKL, "dataKL")
    console.log(dataKK, "dataKK")

    return (
      <div>
        <AddFormItem />

        <div className={`${style['copyBox']}`} id="content">
          <RangePicker
            disabledDate={this.disabledDate}
            disabledTime={this.disabledRangeTime}
            showTime={{
              hideDisabledOptions: true,
              defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
            }}
            format="YYYY-MM-DD HH:mm:ss"
          />

          <TreeSelect
            style={{ width: '100%' }}
            value={this.state.value}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            treeData={treeData}
            placeholder="Please select"
            treeDefaultExpandAll
            onChange={this.onChangeT}
          />
          <Button type="primary" onClick={this.handThrouD} loading={this.state.loadingF}>防抖截留</Button>
          <Button type="primary" onClick={this.handThrou} loading={this.state.loading}>防抖节流</Button>
          {/* <div className={style.Mytest}>渣渣辉</div> */}
          {/* <div className={style.MytestD}>左上</div>
        <div className={style.MytestT}>右上</div>
        <div className={style.MytestL}>左下</div>
        <div className={style.MytestR}>右下</div> */}
          <InputNumber
            min={0}
            max={100}
            // defaultValue={persent}
            value={persent}
            onChange={this.onChangeNumber}
          />
          <h2>当前百分比：{persent}</h2>
          <Progress
            strokeColor={{
              '0%': '#108ee9',
              '20': 'red',
              '40': 'green',
              '60': 'blue',
              '80%': 'yellow',
              '100%': '#87d068',
            }}
            percent={persent}
          />
          <h2>当前选中复制：{textT}</h2>
          <EchartsLine   {...EchartsLine1}
          //  key={time}
          />
          <div className={style.Top}>
            {
              dataG.map((item, index) => {
                return (
                  <div
                    className={item.flag === 1 ? `${style["elemenTag"]} ${style["selected"]}` : `${style["public"]} ${style["elemenTag"]}`}

                    onClick={this.handClickD.bind(this, item)}

                  >
                    <div className={style.legnedBox}><span className={style.circle} style={{ background: colors[index] }}></span>{item.name}</div>

                  </div>
                )
              })
            }
          </div>
          <Table {...dataV} onChange={this.handChange} />
          <Table {...dataT} onChange={this.handChange} />
          <TouristTransactionVolume {...TouristTransactionVolume1}
            key={time}
          //  data={dataL}
          />
          {
            dataL.map((item, index) => {
              return (
                <div
                  className={item.flag === 1 ? `${style["selected"]}` : `${style["public"]}`}

                  onClick={this.handClick.bind(this, item)}

                ><span></span>{item.name}</div>
              )
            })
          }
        </div>
      </div>
    );
  }
}
export default CopyCom;
