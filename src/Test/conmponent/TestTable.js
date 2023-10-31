import React from "react";
import { Table, Select, Input, Tooltip, Popover, Button } from "antd";
import _ from "loadsh";
import style from "./style.less";


const { Option } = Select;

const data = [];
for (let i = 0; i < 3; ++i) {
    data.push({
        key: i.toString(),
        name: 'Screem',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
        chidernList: [],
    });
};

class TestTable extends React.Component {

    state = {
        dataSource: [],
    }


    //一级指标悬浮
    operationFunction = (obj, index) => {
        const content = <div>
            <div>
                <a onClick={this.handClickAddSecond.bind(this, obj, index)}>新增</a>
            </div>
            <div>
                <a onClick={this.handClickDelete.bind(this, obj, index)}>删除</a>
            </div>
        </div>;
        return content;
    };

    //二级指标悬浮
    operationFunctionSecond = (obj, index, indexT) => {
        const content = <div>
            <div>
                <a onClick={this.handClickAddThitry.bind(this, obj, index, indexT)}>新增</a>
            </div>
            <div>
                <a onClick={this.handClickDeleteSecond.bind(this, obj, index, indexT)}>删除</a>
            </div>
        </div>;
        return content;
    };

    operationFunctionThitryLevel = (obj, index, indexT, indexD) => {
        const content = <div>
            <div>
                <a onClick={this.handClickDeleteThitryLevel.bind(this, obj, index, indexT, indexD)}>删除</a>
            </div>
        </div>;
        return content;
    }

    //三级指标新增
    handClickAddThitry = (obj, index, indexT) => {

        const { dataSource } = this.state;
        const ThitryLevel = [
            {
                title: "",
                ThitryWeight: "",
                ThitryLevel: "",
            }
        ]
        const data = _.map(dataSource, (item, indexG) => ({
            ...item,
            SecondaryIndex: index == indexG ? _.map(_.get(item, "SecondaryIndex"), (itemD, indexD) => ({
                ...itemD,
                ThitryLevel: indexT == indexD ? (itemD.ThitryLevel || []).concat(ThitryLevel) : itemD.ThitryLevel
            })) : item.SecondaryIndex
        }));
        this.setState({ dataSource: data });

    }
    //二级指标删除
    handClickDeleteSecond = (obj, index, indexT) => {
        const { dataSource } = this.state;
        const data = _.map(dataSource, (item, indexR) => ({
            ...item,
            SecondaryIndex: index == indexR ? _.map(_.filter(item.SecondaryIndex, (itemD, indexD) => indexD != indexT), itemD => ({
                ...itemD
            })) : item.SecondaryIndex,
        }))
        this.setState({ dataSource: data, });
    }

    //二级指标新增
    handClickAddSecond = (obj, index) => {
        const { dataSource } = this.state;
        const SecondaryIndex = [
            {
                title: "",
                SecondWeight: "",
            }
        ]
        const data = _.map(dataSource, (item, indexT) => ({
            ...item,
            SecondaryIndex: index == indexT ? (item.SecondaryIndex || []).concat(SecondaryIndex) : item.SecondaryIndex
        }));
        this.setState({ dataSource: data });
        // SecondOrderWeight

    }

    functionHeight = (data) => {
        const dataM = _.map(data, item => _.get(item, "ThitryLevel.length"));
        let total = _.max(dataM);
        let num = 0;
        if (total) {
            num = total * 42;
        };
        return num;
    }


    functionLineHeight = (data) => {
        const dataM = _.map(data, item => _.get(item, "ThitryLevel.length"));
        let total = _.max(dataM);
        let num = 0;
        if (total) {
            num = total * 42;
        };
        return total;
    }

    columns = () => {
        const columnsList = [
            {
                title: '一级指标', dataIndex: 'PrimaryIndex', key: 'PrimaryIndex',
                with: "12.5%",
                render: (text, record, index) => {
                    return (
                        <Popover placement="right" content={this.operationFunction(record, index)} trigger="hover">
                            <Input defaultValue={text} onChange={this.handChange.bind(this, record, "PrimaryIndex", index)} />
                        </Popover>
                    )
                }
            },
            {
                title: '指标权重', dataIndex: 'IndexWeight', key: 'IndexWeight',
                with: "12.5%",
                render: (text, record, index) => {
                    return (
                        <Input defaultValue={text} onChange={this.handChange.bind(this, record, "IndexWeight", index)} />
                    )
                }
            },
            {
                title: '二级指标', dataIndex: 'SecondaryIndex', key: 'SecondaryIndex',
                with: "12.5%",
                className: "SecondaryIndexTd",
                render: (text, record, index) => {
                    return (
                        <div>
                            {
                                _.get(record, "SecondaryIndex", []).map((item, indexT) => {
                                    return (
                                        <div className={_.get(record, "SecondaryIndex", []).length > 1 && style.SecondaryIndexBox} style={{ display: "flex", alignItems: "center", height: this.functionHeight(_.get(record, "SecondaryIndex", [])) || "auto" }}>
                                            <div className={style.SecondaryIndex}>
                                                <Popover placement="right" content={this.operationFunctionSecond(record, index, indexT)} trigger="hover">
                                                    <Input defaultValue={item.title} onChange={this.handChangeSencond.bind(this, record, "title", index, indexT)} />
                                                </Popover>

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            },
            {
                title: '二级指标权重', dataIndex: 'SecondWeight', key: 'SecondWeight',
                with: "12.5%",
                className: "SecondaryIndexTd",
                render: (text, record, index) => {
                    return (
                        <div>
                            {
                                _.get(record, "SecondaryIndex", []).map((item, indexT) => {
                                    return (
                                        <div className={_.get(record, "SecondaryIndex", []).length > 1 && style.SecondaryIndexBox} style={{ display: "flex", alignItems: "center", height: this.functionHeight(_.get(record, "SecondaryIndex", [])) || "auto" }}>
                                            <div className={style.SecondaryIndex}>
                                                {/* <Popover placement="right" content={this.operationFunctionSecond(record, index, indexT)} trigger="hover"> */}
                                                <Input defaultValue={item.SecondWeight} onChange={this.handChangeSencond.bind(this, record, "SecondWeight", index, indexT)} />
                                                {/* </Popover> */}

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            },
            {
                title: '三级指标', dataIndex: 'ThreeLevel ', key: 'ThreeLevel',
                className: "SecondaryIndexTd",
                with: "12.5%",
                render: (text, record, index) => {
                    return (
                        <div>
                            {
                                _.get(record, "SecondaryIndex", []).map((item, indexT) => {
                                    return (
                                        <div className={_.get(record, "SecondaryIndex", []).length > 1 && style.ThitryLevelBox}>
                                            <div className={style.ThitryLevel} style={{ height: this.functionHeight(_.get(record, "SecondaryIndex", [])),  }}>
                                                {
                                                    _.get(item, "ThitryLevel", []).map((itemD, indexD) => {
                                                        return (
                                                            <div className={_.get(record, "ThitryLevel", []).length > 1 && style.ThitryLevelIndex} style={{ width: "100%" }}>
                                                                <div >
                                                                    <Popover placement="right" content={this.operationFunctionThitryLevel(record, index, indexT, indexD)} trigger="hover">
                                                                        <Input defaultValue={itemD.ThitryLevel} onChange={this.handChangeThitryLevel.bind(this, record, "ThitryLevel", index, indexT, indexD)} />
                                                                    </Popover>

                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            },
            {
                title: '三级指标权重', dataIndex: 'ThreeLevelEeight', key: 'ThreeLevelEeight',
                className: "SecondaryIndexTd",
                with: "12.5%",
                render: (text, record, index) => {
                    return (
                        <div>
                            {
                                _.get(record, "SecondaryIndex", []).map((item, indexT) => {
                                    return (
                                        <div className={_.get(record, "SecondaryIndex", []).length > 1 && style.ThitryLevelBox}>
                                            <div className={style.ThitryLevel} style={{ height: this.functionHeight(_.get(record, "SecondaryIndex", [])),  }}>
                                                {
                                                    _.get(item, "ThitryLevel", []).map((itemD, indexD) => {
                                                        return (
                                                            <div className={_.get(record, "ThitryLevel", []).length > 1 && style.ThitryLevelIndex} style={{ width: "100%" }}>
                                                                <div >
                                                                    <Input defaultValue={itemD.ThreeLevelEeight} onChange={this.handChangeThitryLevel.bind(this, record, "ThreeLevelEeight", index, indexT, indexD)} />

                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            },
            {
                title: '目标值', dataIndex: 'TargetValue', key: 'TargetValue',
                className: "SecondaryIndexTd",
                with: "12.5%",
                render: (text, record, index) => {
                    return (
                        <div>
                            {
                                _.get(record, "SecondaryIndex", []).map((item, indexT) => {
                                    return (
                                        <div className={_.get(record, "SecondaryIndex", []).length > 1 && style.ThitryLevelBox}>
                                            <div className={style.ThitryLevel} style={{ height: this.functionHeight(_.get(record, "SecondaryIndex", [])), }}>
                                                {
                                                    _.get(item, "ThitryLevel", []).map((itemD, indexD) => {
                                                        return (
                                                            <div className={_.get(record, "ThitryLevel", []).length > 1 && style.ThitryLevelIndex} style={{ width: "100%" }}>
                                                                <div >
                                                                    <Input defaultValue={itemD.TargetValue} onChange={this.handChangeThitryLevel.bind(this, record, "TargetValue", index, indexT, indexD)} />

                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            },
            {
                title: '评价方法', dataIndex: 'EvaluationMethod', key: 'EvaluationMethod',
                className: "SecondaryIndexTd",
                with: "12.5%",
                render: (text, record, index) => {
                    return (
                        <div>
                            {
                                _.get(record, "SecondaryIndex", []).map((item, indexT) => {
                                    return (
                                        <div className={_.get(record, "SecondaryIndex", []).length > 1 && style.ThitryLevelBox}>
                                            <div className={style.ThitryLevel} style={{ height: this.functionHeight(_.get(record, "SecondaryIndex", [])), }}>
                                                {
                                                    _.get(item, "ThitryLevel", []).map((itemD, indexD) => {
                                                        return (
                                                            <div className={_.get(record, "ThitryLevel", []).length > 1 && style.ThitryLevelIndex} style={{ width: "100%" }}>
                                                                <div >
                                                                    {/* <Input defaultValue={itemD.EvaluationMethod} onChange={this.handChangeThitryLevel.bind(this, record, "EvaluationMethod", index, indexT, indexD)} /> */}
                                                                    <Select defaultValue={itemD.EvaluationMethod} onChange={this.handChangeSelectThitryLevel.bind(this, record, "EvaluationMethod", index, indexT, indexD)} style={{width:"100%"}}>
                                                                        <Option value="jack">Jack</Option>
                                                                        <Option value="lucy">Lucy</Option>
                                                                        <Option value="Yiminghe">yiminghe</Option>
                                                                    </Select>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            },
            // {
            //     title: 'Action', key: 'operation', render: (text, record, index) => <div>
            //         <a onClick={this.handClickDelete.bind(this, record, index)}>删除</a>
            //         <a>Publish</a>
            //     </div>
            // },
        ];
        return columnsList;
    };

    //二级指标修改
    handChangeSencond = (obj, type, index, indexT, e) => {

        const { dataSource } = this.state;

        const data = _.map(dataSource, (item, indexD) => ({
            ...item,
            SecondaryIndex: index == indexD ? _.map(item.SecondaryIndex, (itemG, indexG) => ({
                ...itemG,
                [type]: indexG == indexT ? e.target.value : itemG[type]
            })) : item.SecondaryIndex
        }));
        this.setState({ dataSource: data, });
    }

    //三级指标修改

    handChangeThitryLevel = (obj, type, index, indexT, indexK, e) => {
        console.log(obj, type, index, indexT, indexK, e, "obj,type,index, indexT, indexD,e")

        const { dataSource } = this.state;

        const data = _.map(dataSource, (item, indexD) => ({
            ...item,
            SecondaryIndex: index == indexD ? _.map(item.SecondaryIndex, (itemG, indexG) => ({
                ...itemG,
                ThitryLevel: indexG == indexT ? _.map(itemG.ThitryLevel, (itemH, indexH) => {
                    console.log('itemH', itemH);
                    console.log('indexH', indexH);
                    console.log('indexD', indexD);
                    console.log('itemG.ThitryLevel', itemG.ThitryLevel);
                    return {
                        ...itemH,
                        [type]: indexH == indexK ? e.target.value : itemH[type]
                    }
                }) : itemG.ThitryLevel
            })) : item.SecondaryIndex
        }));
        console.log(data, "data45566")
        this.setState({ dataSource: data, });

    };

    handChangeSelectThitryLevel= (obj, type, index, indexT, indexK, value) => {
        console.log(obj, type, index, indexT, indexK, value, "obj,type,index, indexT, indexD,e")

        const { dataSource } = this.state;

        const data = _.map(dataSource, (item, indexD) => ({
            ...item,
            SecondaryIndex: index == indexD ? _.map(item.SecondaryIndex, (itemG, indexG) => ({
                ...itemG,
                ThitryLevel: indexG == indexT ? _.map(itemG.ThitryLevel, (itemH, indexH) => {
                    console.log('itemH', itemH);
                    console.log('indexH', indexH);
                    console.log('indexD', indexD);
                    console.log('itemG.ThitryLevel', itemG.ThitryLevel);
                    return {
                        ...itemH,
                        [type]: indexH == indexK ? value : itemH[type]
                    }
                }) : itemG.ThitryLevel
            })) : item.SecondaryIndex
        }));
        console.log(data, "data45566")
        this.setState({ dataSource: data, });

    };

    handClickDeleteThitryLevel = (obj, index, indexT, indexK) => {
        const { dataSource } = this.state;
        console.log(indexK,"indexK")
        const data = _.map(dataSource, (item, indexD) => ({
            ...item,
            key:Math.random(),
            SecondaryIndex: index == indexD ? _.map(item.SecondaryIndex, (itemG, indexG) => {
                console.log(_.filter(itemG.ThitryLevel, (itemH, indexH) => indexH != indexK),"111111111111111111111111111");
                return ({
                    ...itemG,
                    ThitryLevel: indexG == indexT ? _.map(_.filter(itemG.ThitryLevel, (itemH, indexH) => indexH != indexK), itemH => ({
                        ...itemH,
                    })) : itemG.ThitryLevel
                })
            }) : item.SecondaryIndex
        }));
        console.log(data, "data45566")
        // data[0].key = Math.random();
        this.setState(()=>({
            dataSource: data
        }))
        // setTimeout(()=>{
        //     this.setState({ dataSource: data, });
        // },10)
    }


    //一级指标新增
    handClickAddFirst = () => {
        const { dataSource } = this.state;
        const dataNew = [
            {
                PrimaryIndex: "一级",
                key: dataSource.length,
            }
        ];
        this.setState({ dataSource: dataSource.concat(dataNew) })
    }
    //一级指标删除
    handClickDelete = (obj, index) => {
        const { dataSource } = this.state;
        const data = _.map(_.filter(dataSource, (item, indexT) => index != indexT), item => ({
            ...item,
        }));
        this.setState({ dataSource: data });
    }
    //一级指标修改
    handChange = (record, type, index, e) => {
        const { dataSource } = this.state;

        const data = _.map(dataSource, (item, indexT) => ({
            ...item,
            [type]: index == indexT ? e.target.value : item[type]
        }));
        this.setState({ dataSource: data });
    }

    render() {

        const { dataSource } = this.state;
        console.log(dataSource, "dataSource")

        return (
            <div className={style.TestTable}>
                <div className={style.headerBoxButton}>
                    <Button type="primary" onClick={this.handClickAddFirst}>新增</Button>
                </div>
                <div>
                    <Table
                        className="components-table-demo-nested"
                        columns={this.columns()}
                        dataSource={dataSource}
                        rowKey={"key"}
                        pagination={false}
                        bordered
                    />
                </div>
            </div>
        )
    }
}

export default TestTable;