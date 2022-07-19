/**
 * Created by zhangheng on 2019/5/18.
 */
import React from 'react';
import { Row, Col, Checkbox, Transfer, Button,Icon } from 'antd';
import { Select, Table } from 'antd';
import { connect } from 'dva';
import style from './index.less';
import TestCom from "./test/TestCom";
import TestOneCom from "./test/testOneCom";
import _ from "loadsh";
const { Option } = Select;
const data = [
  {
    title: '1111',
    key: '12312',
    id: 'eeee',
  },
  {
    title: '1111eee',
    key: '12312fff',
    id: 'gggggg',
  },
  {
    title: 'eeeee',
    key: 'rrrrr',
    id: 'hhhhh',
  },
];
@connect(({ Index }) => ({ Index }))
//
class Test extends React.Component {
  state = {
    selectedRowKeys: [1], // Check here to configure the default column
    mockData: [],
    targetKeys: [],
    dataListNew: [
      {
        title: "类型1",
        type: 1,
        name: "文件",
        data: [
          {
            title: "文件1",
            type: 1,
            name: "文件",
            key: "1-1",
          },
          {
            title: "文件2",
            type: 1,
            name: "文件",
            key: "1-2",
          },
          {
            title: "文件3",
            type: 1,
            name: "文件",
          },
          {
            title: "文件4",
            type: 1,
            name: "文件",
          },
          {
            title: "文件5",
            type: 1,
            name: "文件",
          },
          {
            title: "文件6",
            type: 1,
            name: "文件",
          },
        ]
      },
      {
        title: "类型2",
        type: 2,
        name: "对账",
        data: [
          {
            title: "对账1",
            type: 2,
            name: "对账",
          },
          {
            title: "对账3",
            type: 2,
            name: "对账",
          },
          {
            title: "对账3",
            type: 2,
            name: "对账",
          },
        ]
      },
      {
        title: "类型3",
        type: 3,
        name: "导出",
        data: [
          {
            title: "导出1",
            type: 3,
            name: "导出",
          },
          {
            title: "导出2",
            type: 3,
            name: "导出",
          },
        ]
      },
    ],
    dataLis: [
      {
        title: "文件1",
        type: 1,
        name: "文件",
        key: "1-1",
      },
      {
        title: "文件2",
        type: 1,
        name: "文件",
        key: "1-2",
      },
      {
        title: "文件3",
        type: 1,
        name: "文件",
        key: "1-3",
      },
      {
        title: "文件4",
        type: 1,
        name: "文件",
        key: "1-4",
      },
      {
        title: "文件5",
        type: 1,
        name: "文件",
        key: "1-5",
      },
      {
        title: "文件6",
        type: 1,
        name: "文件",
        key: "1-6",
      },
      {
        title: "对账1",
        type: 2,
        name: "对账",
        key: "2-1",
      },
      {
        title: "对账2",
        type: 2,
        name: "对账",
        key: "2-2",
      },
      {
        title: "对账3",
        type: 2,
        name: "对账",
        key: "2-3",
      },
      {
        title: "导出1",
        type: 3,
        name: "导出",
        key: "3-1",
      },
      {
        title: "导出2",
        type: 3,
        name: "导出",
        key: "3-2",
      },
      {
        title: "导出3",
        type: 3,
        name: "导出",
        key: "3-3",
      },
      {
        title: "导出4",
        type: 3,
        name: "导出",
        key: "3-4",
      },
      {
        title: "文件1",
        type: 1,
        name: "文件",
        key: "1-1",
      },
      {
        title: "文件2",
        type: 1,
        name: "文件",
        key: "1-2",
      },
      {
        title: "文件3",
        type: 1,
        name: "文件",
        key: "1-3",
      },
      {
        title: "文件4",
        type: 1,
        name: "文件",
        key: "1-4",
      },
      {
        title: "文件5",
        type: 1,
        name: "文件",
        key: "1-5",
      },
      {
        title: "文件6",
        type: 1,
        name: "文件",
        key: "1-6",
      },
      {
        title: "对账1",
        type: 2,
        name: "对账",
        key: "2-1",
      },
      {
        title: "对账2",
        type: 2,
        name: "对账",
        key: "2-2",
      },
      {
        title: "对账3",
        type: 2,
        name: "对账",
        key: "2-3",
      },
      {
        title: "导出1",
        type: 3,
        name: "导出",
        key: "3-1",
      },
      {
        title: "导出2",
        type: 3,
        name: "导出",
        key: "3-2",
      },
      {
        title: "导出3",
        type: 3,
        name: "导出",
        key: "3-3",
      },
      {
        title: "导出4",
        type: 3,
        name: "导出",
        key: "3-4",
      },
      {
        title: "文件1",
        type: 1,
        name: "文件",
        key: "1-1",
      },
      {
        title: "文件2",
        type: 1,
        name: "文件",
        key: "1-2",
      },
      {
        title: "文件3",
        type: 1,
        name: "文件",
        key: "1-3",
      },
      {
        title: "文件4",
        type: 1,
        name: "文件",
        key: "1-4",
      },
      {
        title: "文件5",
        type: 1,
        name: "文件",
        key: "1-5",
      },
      {
        title: "文件6",
        type: 1,
        name: "文件",
        key: "1-6",
      },
      {
        title: "对账1",
        type: 2,
        name: "对账",
        key: "2-1",
      },
      {
        title: "对账2",
        type: 2,
        name: "对账",
        key: "2-2",
      },
      {
        title: "对账3",
        type: 2,
        name: "对账",
        key: "2-3",
      },
      {
        title: "导出1",
        type: 3,
        name: "导出",
        key: "3-1",
      },
      {
        title: "导出2",
        type: 3,
        name: "导出",
        key: "3-2",
      },
      {
        title: "导出3",
        type: 3,
        name: "导出",
        key: "3-3",
      },
      {
        title: "导出4",
        type: 3,
        name: "导出",
        key: "3-4",
      },
      {
        title: "文件1",
        type: 1,
        name: "文件",
        key: "1-1",
      },
      {
        title: "文件2",
        type: 1,
        name: "文件",
        key: "1-2",
      },
      {
        title: "文件3",
        type: 1,
        name: "文件",
        key: "1-3",
      },
      {
        title: "文件4",
        type: 1,
        name: "文件",
        key: "1-4",
      },
      {
        title: "文件5",
        type: 1,
        name: "文件",
        key: "1-5",
      },
      {
        title: "文件6",
        type: 1,
        name: "文件",
        key: "1-6",
      },
      {
        title: "对账1",
        type: 2,
        name: "对账",
        key: "2-1",
      },
      {
        title: "对账2",
        type: 2,
        name: "对账",
        key: "2-2",
      },
      {
        title: "对账3",
        type: 2,
        name: "对账",
        key: "2-3",
      },
      {
        title: "导出1",
        type: 3,
        name: "导出",
        key: "3-1",
      },
      {
        title: "导出2",
        type: 3,
        name: "导出",
        key: "3-2",
      },
      {
        title: "导出3",
        type: 3,
        name: "导出",
        key: "3-3",
      },
      {
        title: "导出4",
        type: 3,
        name: "导出",
        key: "3-4",
      },
      {
        title: "文件1",
        type: 1,
        name: "文件",
        key: "1-1",
      },
      {
        title: "文件2",
        type: 1,
        name: "文件",
        key: "1-2",
      },
      {
        title: "文件3",
        type: 1,
        name: "文件",
        key: "1-3",
      },
      {
        title: "文件4",
        type: 1,
        name: "文件",
        key: "1-4",
      },
      {
        title: "文件5",
        type: 1,
        name: "文件",
        key: "1-5",
      },
      {
        title: "文件6",
        type: 1,
        name: "文件",
        key: "1-6",
      },
      {
        title: "对账1",
        type: 2,
        name: "对账",
        key: "2-1",
      },
      {
        title: "对账2",
        type: 2,
        name: "对账",
        key: "2-2",
      },
      {
        title: "对账3",
        type: 2,
        name: "对账",
        key: "2-3",
      },
      {
        title: "导出1",
        type: 3,
        name: "导出",
        key: "3-1",
      },
      {
        title: "导出2",
        type: 3,
        name: "导出",
        key: "3-2",
      },
      {
        title: "导出3",
        type: 3,
        name: "导出",
        key: "3-3",
      },
      {
        title: "导出4",
        type: 3,
        name: "导出",
        key: "3-4",
      },
      {
        title: "文件1",
        type: 1,
        name: "文件",
        key: "1-1",
      },
      {
        title: "文件2",
        type: 1,
        name: "文件",
        key: "1-2",
      },
      {
        title: "文件3",
        type: 1,
        name: "文件",
        key: "1-3",
      },
      {
        title: "文件4",
        type: 1,
        name: "文件",
        key: "1-4",
      },
      {
        title: "文件5",
        type: 1,
        name: "文件",
        key: "1-5",
      },
      {
        title: "文件6",
        type: 1,
        name: "文件",
        key: "1-6",
      },
      {
        title: "对账1",
        type: 2,
        name: "对账",
        key: "2-1",
      },
      {
        title: "对账2",
        type: 2,
        name: "对账",
        key: "2-2",
      },
      {
        title: "对账3",
        type: 2,
        name: "对账",
        key: "2-3",
      },
      {
        title: "导出1",
        type: 3,
        name: "导出",
        key: "3-1",
      },
      {
        title: "导出2",
        type: 3,
        name: "导出",
        key: "3-2",
      },
      {
        title: "导出3",
        type: 3,
        name: "导出",
        key: "3-3",
      },
      {
        title: "导出4",
        type: 3,
        name: "导出",
        key: "3-4",
      },
      {
        title: "文件1",
        type: 1,
        name: "文件",
        key: "1-1",
      },
      {
        title: "文件2",
        type: 1,
        name: "文件",
        key: "1-2",
      },
      {
        title: "文件3",
        type: 1,
        name: "文件",
        key: "1-3",
      },
      {
        title: "文件4",
        type: 1,
        name: "文件",
        key: "1-4",
      },
      {
        title: "文件5",
        type: 1,
        name: "文件",
        key: "1-5",
      },
      {
        title: "文件6",
        type: 1,
        name: "文件",
        key: "1-6",
      },
      {
        title: "对账1",
        type: 2,
        name: "对账",
        key: "2-1",
      },
      {
        title: "对账2",
        type: 2,
        name: "对账",
        key: "2-2",
      },
      {
        title: "对账3",
        type: 2,
        name: "对账",
        key: "2-3",
      },
      {
        title: "导出1",
        type: 3,
        name: "导出",
        key: "3-1",
      },
      {
        title: "导出2",
        type: 3,
        name: "导出",
        key: "3-2",
      },
      {
        title: "导出3",
        type: 3,
        name: "导出",
        key: "3-3",
      },
      {
        title: "导出4",
        type: 3,
        name: "导出",
        key: "3-4",
      },
      {
        title: "文件1",
        type: 1,
        name: "文件",
        key: "1-1",
      },
      {
        title: "文件2",
        type: 1,
        name: "文件",
        key: "1-2",
      },
      {
        title: "文件3",
        type: 1,
        name: "文件",
        key: "1-3",
      },
      {
        title: "文件4",
        type: 1,
        name: "文件",
        key: "1-4",
      },
      {
        title: "文件5",
        type: 1,
        name: "文件",
        key: "1-5",
      },
      {
        title: "文件6",
        type: 1,
        name: "文件",
        key: "1-6",
      },
      {
        title: "对账1",
        type: 2,
        name: "对账",
        key: "2-1",
      },
      {
        title: "对账2",
        type: 2,
        name: "对账",
        key: "2-2",
      },
      {
        title: "对账3",
        type: 2,
        name: "对账",
        key: "2-3",
      },
      {
        title: "导出1",
        type: 3,
        name: "导出",
        key: "3-1",
      },
      {
        title: "导出2",
        type: 3,
        name: "导出",
        key: "3-2",
      },
      {
        title: "导出3",
        type: 3,
        name: "导出",
        key: "3-3",
      },
      {
        title: "导出4",
        type: 3,
        name: "导出",
        key: "3-4",
      },
    
    
    ],
    offsetWidth:0,
  };
  saveRef = React.createRef()
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'Index/SelectList',
      payload: {},
    });
    this.getMock();
    // console.log(this.saveRef.current, "this.saveRef")
    // console.log(document.getElementById("process").offsetWidth, "offsetWidth")
    this.setState({ offsetWidth: _.get(document.getElementById("process"), "offsetWidth") || 1200 })
  }
  onChange = value => {

  };
  onSearch = value => {

  };
  dataSource = [
    {
      name: '张三',
      sex: '男',
      age: 12,
      phone: 12345678900,
      address: '河南',
      id: 1,
      flag: 1,
    },
    {
      name: '李四',
      sex: '男',
      age: 12,
      phone: 12345678900,
      address: '河南',
      id: 2,
      flag: 1,
    },
    {
      name: '王二',
      sex: '男',
      age: 12,
      phone: 12345678900,
      address: '河南',
      id: 3,
      flag: 2,
    },
    {
      name: '刘大',
      sex: '男',
      age: 12,
      phone: 12345678900,
      address: '河南',
      id: 4,
      flag: 3,
    },
    {
      name: '胡六',
      sex: '男',
      age: 12,
      phone: 12345678900,
      address: '河南',
      id: 5,
      flag: 4,
    },
    {
      name: '杨七',
      sex: '男',
      age: 12,
      phone: 12345678900,
      address: '河南',
      id: 6,
      flag: 1,
    },
  ];

  columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '性别',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '电话',
      dataIndex: 'sex',
      key: 'sex',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  onSelectChange = (selectedRowKeys, selectedRows) => {

    this.setState({ selectedRowKeys });
  };

  // componentDidMount() {
  //   this.getMock();
  // }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
        flag: i,
      };
      if (data.flag < 15) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };

  handleChange = targetKeys => {

    this.setState({ targetKeys });
  };

  renderFooter = () => (
    <Button size="small" style={{ float: 'right', margin: 5 }} onClick={this.getMock}>
      reload
    </Button>
  );

  handAdd = (obj) => {
    const { dataListNew } = this.state;
    // console.log(obj, "obj")
    const data = obj;
    // data.title=obj.name;
    const dataC = data;
    data.data = [dataC]
    // delete data.data;

    // console.log(data, "data")
    // item.data.concat(data)
    const dataList = _.map(dataListNew, item => ({
      ...item,
      data: item.type === obj.type ? _.concat(item.data, data) : item.data
    }))
    // console.log(dataList, "dataList")
    // this.setState({dataListNew:dataList})

  }

  handDelete=(obj)=>{
       console.log(obj,"obj")
  }

  render() {
    const { Index } = this.props;
    const { TableList } = Index;
    const { selectedRowKeys, dataListNew, dataLis, offsetWidth } = this.state;

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      getCheckboxProps: record => ({
        disabled: record.flag === 3, // Column configuration not to be checked
        flag: record.flag,
      }),
    };

    const dataList = [
      {
        title: "文件1",
        type: 1,
      },
      {
        title: "文件2",
        type: 1,
      },
      {
        title: "文件3",
        type: 1,
      },
      {
        title: "文件4",
        type: 1,
      },
      {
        title: "文件5",
        type: 1,
      },
      {
        title: "文件6",
        type: 1,
      },
      {
        title: "对账1",
        type: 2,
      },
      {
        title: "对账2",
        type: 2,
      },
      {
        title: "对账3",
        type: 2,
      },
      {
        title: "导出1",
        type: 3,
      },
      {
        title: "导出2",
        type: 3,
      },
    ]

    // console.log(offsetWidth, 150)
    const fiedLine = parseInt(offsetWidth / 150)
    // console.log(fiedLine, "fiedLine")

    const dataLine = _.chunk(dataLis, fiedLine);
    // console.log(dataLine, "dataLine")
    

    return (
      <div className={`${style['IndexBox']}`}>

        <div className={style.process} id="process">
          <div className={style.processBox}>
            {
              dataLine.map((item, index) => {
                console.log(index,"index")
                // console.log(item, "item")
                // return <div className={style.processBoxContent}> <div className={style.file}>
                //   {item.title}
                // </div>  </div>
                // className={(index % 2 === 0)?`${style["processBoxSecond"]}`:(index % 2 === 1)?`${style["processBoxSecond"]} ${style["processBoxSecondN"]}`:`${style["processBoxSecond"]} ${style["processBoxSecondFive"]}`}>
                // className={(index % 2 === 0)?`${style["processBoxSecond"]}`:`${style["processBoxSecond"]} ${style["processBoxSecondN"]}`}
                // className={(index % 3 === 0)?`${style["processBoxSecond"]}`:(index % 3 === 1)?`${style["processBoxSecond"]} ${style["processBoxSecondN"]}`:`${style["processBoxSecond"]} ${style["processBoxSecondFive"]}`}>
                return <div style={{width:"1462px !important"}}  className={index % 2 === 0?`${style["processBoxSecond"]}`:`${style["processBoxSecond"]} ${style["processBoxSecondN"]}`}>
                  {
                    item.map((itemD, key) => {
                      // console.log(key,fiedLine,"key","fiedLine")
                      // console.log(fiedLine,"fiedLine")

                      if (key + 1 === fiedLine) {
                        return <div className={`${style["processBoxContent"]} ${style["processBoxContentF"]}`} style={{marginRight:index % 2 === 1?"8px":"0px"}}> <div className={style.file}>
                          {itemD.title} <span className={style.deleteBox} onClick={this.handDelete.bind(this,itemD)}>×</span>
                        </div> <div><Icon style={{cursor:"pointer"}} type="plus-circle" /></div>  <Icon type="arrow-down" /> </div>
                      } if (index % 2 === 0) {
                        return <div className={style.processBoxContent}> <div className={style.file}>
                          {itemD.title}<span className={style.deleteBox} onClick={this.handDelete.bind(this,itemD)}>×</span>
                        </div> <div><Icon style={{cursor:"pointer"}} type="plus-circle" /><Icon type="arrow-right" /></div> </div>
                      }

                      // if (index % 2 === 1) {
                      //   return <div className={style.processBoxContent}> <div className={style.file}>
                      //     {itemD.title}-four
                      //   </div> <div>+→</div> </div>
                      // }
                      // if (index % 3 === 2) {
                      //   return <div className={`${style["processBoxContent"]} ${style["processBoxContentFive"]}`}> <div className={style.file}>
                      //     {itemD.title}-five
                      //   </div> <div>+→</div> </div>
                      // }
                      
                      
                      return <div className={`${style["processBoxContent"]} ${style["processBoxContentT"]}`}> <div><Icon  type="arrow-left" /><Icon style={{cursor:"pointer"}} type="plus-circle" /></div> <div className={style.file}>
                        {itemD.title}<span className={style.deleteBox} onClick={this.handDelete.bind(this,itemD)}>×</span>
                      </div> </div>
                    })
                  }
                </div>

              })
            }
          </div>

          {/* <div className={style.process} id="process">
          <div className={style.processBox}>
            {
              dataLis.map((item, index) => {
                return <div className={style.processBoxContent}> <div className={style.file}>
                  {item.title}
                </div>  </div>

              })
            }
          </div> */}


          {/* <div className={style.processBox}>
            {
              dataLis.map((item,index)=>{
                if(item.type===2){
                  return <div className={style.processBoxContent}> <div className={style.file}>
                  {item.title}
                </div>  <span></span><p></p></div>
                }
               
              })
            }
          </div>
          <div className={style.processBox}>
            {
              dataLis.map((item,index)=>{
                if(item.type===3){
                  return <div className={style.processBoxContent}> <div className={style.file}>
                  {item.title}
                </div> </div>
                }
               
              })
            }
          </div> */}
        </div>

        <div className={style.process}>
          <div className={style.processBox}>
            {/* {
              dataListNew.map((item, index) => {
                console.log(item, "item")
                return <div className={style.processBoxContainer}>
                  {
                    item.data.map((itemD, index) => {
                      if (itemD.type !== 3) {
                        return <div className={style.processBoxContent}> <div className={style.file}>
                          {itemD.title}
                        </div>  <span onClick={this.handAdd.bind(this, itemD)} className={style.fileContent}>+</span><span className={style.fileLine}></span><p></p></div>
                      } else {
                        return <div className={style.processBoxContent}> <div className={style.file}>
                          {itemD.title}
                        </div> </div>
                      }


                    })
                  }

                </div>
                // if (item.type ) {

                //   {
                //     item.data.map((itemD, index) => {

                //         // <div></div>
                //         return <div className={style.processBoxContent}> <div className={style.file}>
                //           {itemD.title}
                //         </div>  <span></span><p></p></div>

                //     })
                //   }
                // }
              })
            } */}
          </div>
        </div>
        {/* <TestOneCom /> */}
        {/* <div className={style.process}>
          <div className={style.processBox}>
            {
              dataList.map((item, index) => {
                if (item.type === 1) {
                  // <div></div>
                  return <div className={style.processBoxContent}> <div className={style.file}>
                    {item.title}
                  </div>  <span></span><p></p></div>
                }

              })
            }
          </div>
          <div className={style.arrow}> → </div>
          <div className={style.processBox}>
            {
              dataList.map((item, index) => {

                if (item.type === 2) {
                  return <div className={style.processBoxContent}> <div className={style.reconciliation}>
                    {item.title}
                  </div> <span></span><p></p> </div>
                }

              })
            }
          </div>
          <div className={style.arrow}>+ →</div>
          <div className={style.processBox}>
            {
              dataList.map((item, index) => {

                if (item.type === 3) {
                  return <div className={style.processBoxContent}><div className={style.export}>
                    {item.title}
                  </div> </div>
                }
              })
            }
          </div>
        </div> */}

        <TestCom />
        111
        <Table
          rowKey="id"
          dataSource={TableList && TableList.length > 0 ? TableList : this.dataSource}
          columns={this.columns}
          pagination={true}
          pageSize="3"
          rowSelection={rowSelection}
        />
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          // onSearch={this.onSearch}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="jackee">Jack</Option>
          <Option value="lucyee">Lucy</Option>
          <Option value="tomee">Tom</Option>
        </Select>
        {data.map((item, index) => {
          return (
            <Row>
              <Col span={4}>{item.title}</Col>
              <Col span={12}>
                <Checkbox> {item.id}</Checkbox>
                {item.id}
              </Col>

              <Col span={8}>{item.key}</Col>
            </Row>
          );
        })}
        <Row>
          <Col span={4}>eeee</Col>
          <Col span={12}>dgerergergerg</Col>

          <Col span={8}>水水水水水水水水</Col>
        </Row>
        <Transfer
          dataSource={this.state.mockData}
          showSearch
          listStyle={{
            width: 250,
            height: 300,
          }}
          operations={['to right', 'to left']}
          targetKeys={this.state.targetKeys}
          onChange={this.handleChange}
          render={item => `${item.title}-${item.description}`}
          footer={this.renderFooter}
          placeholder="wwwwwww"
          locale={{ searchPlaceholder: "请输入搜索条件" }}
        />
      </div>
    );
  }
}
export default Test;
