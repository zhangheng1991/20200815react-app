import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Table, InputNumber, Progress,message ,Modal, Button, Space} from 'antd';
import _ from "loadsh";
import style from './component/style.less';
import moment from "moment";
import TouristTransactionVolume from '../pages/echarts/charts/TouristTransactionVolume';
import EchartsLine from "../component/echarts/line/Lines";
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
const dataR=[
  {
    value: 700,
    name: '停车场1',
    flag:1,
  },
  {
    value: 600,
    name: '停车场2',
    flag:1,
  },
  {
    value: 500,
    name: '停车场3',
    flag:1,
  },
  {
    value: 400,
    name: '停车场4',
    flag:1,
  },
  {
    value: 300,
    name: '停车场5',
    flag:1,
  },
  {
    value: 200,
    name: '停车场6',
    flag:1,
  },
];
const dataLine = [
  {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      data: [120, 132, 101, 134, 90, 230, 210],
      dataG: [120, 132, 101, 134, 90, 230, 210],
      flag:1,
  },
  {
      name: '联盟广告',
      type: 'line',
      stack: '总量',
      data: [220, 182, 191, 234, 290, 330, 310],
      dataG: [220, 182, 191, 234, 290, 330, 310],
      flag:1,
  },
  {
      name: '视频广告',
      type: 'line',
      stack: '总量',
      data: [150, 232, 201, 154, 190, 330, 410],
      dataG: [150, 232, 201, 154, 190, 330, 410],
      flag:1,
  },
  {
      name: '直接访问',
      type: 'line',
      stack: '总量',
      data: [320, 332, 301, 334, 390, 330, 320],
      dataG: [320, 332, 301, 334, 390, 330, 320],
      flag:1,
  },
  {
      name: '搜索引擎',
      type: 'line',
      stack: '总量',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      dataG: [820, 932, 901, 934, 1290, 1330, 1320],
      flag:1,
  }
]
const colors=["red","yellow","blue","gold","pink"];
const dataO=[{num:111111111111111},{num:22222222222222},{num:22222223444444},
  {num:555555555555666666663},
  {num:123456789012345678901}];
class CopyCom extends React.Component {
  state = {
    title: '',
    textT: '没有选中！',
    persent: 66,
    dataL:dataR,dataU:dataR,
    time:moment().format("YYYYMMDDHH:mm:ss.SSS"),
    dataG:dataLine,
    dataK:dataLine,
  };
  componentDidMount(){
    _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
      console.log(key,value);
    });
    const dataP=[];
    const dataV=[1,2,3,4];
    const dataB =[{value:1,name:"1111"},{value:2,name:"2222"},{value:5,name:"5555"}]
    // console.log(_.filter(dataV, dataB))
    _.forEach(dataB,function (valueF) {//若一个参数，返回的便是其value值
      _.forEach(dataV,function (valueT) {//若一个参数，返回的便是其value值
         if(valueF.value===valueT){
              // console.log(valueF)
              dataP.push(valueF)
         }
      });
    });
    console.log(dataP)
  }
  onCopy = record => {
   
    message.info("当前复制:"+record.address,0.5);//时间秒
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
   handClick=(obj)=>{
    
    const {dataL}=this.state;
    const data= _.map(dataL,item=>({
         ...item,
         flag:item.name===obj.name?item.flag===1?0:1:item.flag,
    }))
  
    // const dataT=_.map(_.filter(data,item=>item.flag===1),item=>({
    //   ...item
    // }))

    const dataT=_.map(_.filter(data,item=>item.flag===1),item=>({
      ...item
    }))

    // const dataT=_.map(data,item=>({
    //   ...item,
    //   value:item.flag===1?item.value:null,
    // }))

    this.setState({dataL:data,dataU:dataT, time:moment().format("YYYYMMDDHH:mm:ss.SSS"),})
  
 }

 handClickD=(obj)=>{
 
  const {dataG,dataK}=this.state;
  const dataR= _.map(dataG,item=>({
    ...item,
    flag:item.name===obj.name?item.flag===1?0:1:item.flag,
}))
  const data= _.map(dataK,item=>({
       ...item,
       flag:item.name===obj.name?item.flag===1?0:1:item.flag,
       data:item.name===obj.name?item.flag===1?null:item.dataG:item.data,
  }))
  this.setState({dataK:data,dataG:dataR, time:moment().format("YYYYMMDDHH:mm:ss.SSS"),})
 
}

  render() {
    const { textT, persent,dataL,dataU,time,dataG,dataK} = this.state;
    const data = [];
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
        key:i,
        name: '胡彦祖'+i,
        age: i,
        address: '西湖区湖底公园'+i+"号",
        persent:i,
      })
    }
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width:"20%",
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        width:"10%",
      },
      {
        title: '百分比',
        dataIndex: 'persent',
        key: 'persent',
        width:"10%",
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
        width:"50%",
      },
      {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        width:"10%",
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
      data:dataU,
      height: '400px',
    };
    const EchartsLine1={
      id:"EchartsLine1",height:"400px", chartData:dataK,
    }
  
    const dataME=_.map(_.filter(dataO,item=>({
      num:item.num
    })))
   
    return (
      <div className={`${style['copyBox']}`}>
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
          dataG.map((item,index)=>{
            return(
              <div 
              className={item.flag===1?`${style["elemenTag"]} ${style["selected"]}`:`${style["public"]} ${style["elemenTag"]}`}

              onClick={this.handClickD.bind(this,item)}

              >
               <div className={style.legnedBox}><span className={style.circle} style={{background:colors[index]}}></span>{item.name}</div>

              </div>
            )
          })
        }
        </div>
     
        <Table {...dataT} />
        <TouristTransactionVolume {...TouristTransactionVolume1}  
        key={time}
        //  data={dataL}
         />
        {
          dataL.map((item,index)=>{
            return(
              <div 
              className={item.flag===1?`${style["selected"]}`:`${style["public"]}`}

              onClick={this.handClick.bind(this,item)}

              ><span></span>{item.name}</div>
            )
          })
        }
      </div>
    );
  }
}
export default CopyCom;
