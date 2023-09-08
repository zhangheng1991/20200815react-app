import React from "react";
import { Table } from 'antd';
import { DndProvider, DragSource, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
// import reactDnd from "react-dnd"
import BodyRow from "./BodyRow";

import style from "./style.less";
// console.log(reactDnd,"reactDnd")
// console.log( DndProvider, DragSource,DropTarget,"DropTarget")

const dataD=[];

for(let i=1;i<101;i++){

    dataD.push({
        key:i,
        code:i,
        name:`李四${i}`,
        age:20+i,
        address:"中国江苏省南京市建邺区"
    })
}

class DragSortingTable extends React.Component {
    state = {
        data:[
            {
                key: '1',
                code:1,
                name: '张三11111111111111111',
                age: "1111111111111111111111",
                address: '中国江苏省南京市建邺区',
            },
            {
                key: '2',
                code:2,
                name: '李四22222222222222222',
                age: "2222222222222222222222",
                address: '中国浙江省杭州市西湖区',
            },
            {
                key: '3',
                code:3,
                name: '王二33333333333333333',
                age: "3333333333333333333333",
                address: '中国河南省郑州市管城区',
            },
            {
                key: '4',
                code:4,
                name: '张三44444444444444444',
                age: "4444444444444444444444",
                address: '中国江苏省南京市建邺区',
            },
            {
                key: '5',
                code:5,
                name: '李四55555555555555555',
                age: "5555555555555555555555",
                address: '中国浙江省杭州市西湖区',
            },
            {
                key: '6',
                code:6,
                name: '王二66666666666666666',
                age: "66666666666666666666666",
                address: '中国河南省郑州市管城区',
            },
        ],
    };


    componentWillReceiveProps() {
        // console.log(reactDnd,"reactDnd")
    }

    moveRow = (dragIndex, hoverIndex) => {
        const { data } = this.state;
        const dragRow = data[dragIndex];

        this.setState(
            update(this.state, {
                data: {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragRow]],
                },
            }),
        );
    };

    classNameType=()=>{
        const {type}=this.props;
        let className ="DndProviderLandscape"
        if(type==="landscape"){
            className ="DndProviderLandscape";
        
        }else if(type==="portrait"){
            className ="DndProviderPortrait";
        }else{
            className ="DndProviderLandscape";
        }
        return className;
    }

    render() {

        let dragingIndex = -1;
        const rowSource = {
            beginDrag(props) {
                dragingIndex = props.index;
                return {
                    index: props.index,
                };
            },
        };

        const rowTarget = {
            drop(props, monitor) {
                const dragIndex = monitor.getItem().index;
                const hoverIndex = props.index;

                // Don't replace items with themselves
                if (dragIndex === hoverIndex) {
                    return;
                }

                // Time to actually perform the action
                props.moveRow(dragIndex, hoverIndex);

                // Note: we're mutating the monitor item here!
                // Generally it's better to avoid mutations,
                // but it's good here for the sake of performance
                // to avoid expensive index searches.
                monitor.getItem().index = hoverIndex;
            },
        };

        const DragableBodyRow = DropTarget('row', rowTarget, (connect, monitor) => ({
            connectDropTarget: connect.dropTarget(),
            isOver: monitor.isOver(),
        }))(
            DragSource('row', rowSource, connect => ({
                connectDragSource: connect.dragSource(),
            }))(BodyRow),
        );

        const components = {
            body: {
                row: DragableBodyRow,
            },
        };


        const columns = [
            {
                title: '排序',
                dataIndex: 'code',
                key: 'code',
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                render:(tex,record)=>{
                    return(
                        <div style={{width:"300px"}}>{tex}</div>
                    )
                }
            },
        ];

        const { data } = this.state;
        console.log(data, "Data")
        const {className}=this.props;
        return (
            <div className={`${style.DndProvider} ${style[this.classNameType()]} `}>
                 {/* ${style.DndProviderPortrait} */}
                <DndProvider backend={HTML5Backend}>
                    <Table
                        columns={columns}
                        dataSource={data}
                        components={components}
                        scroll={{x:2000}}
                        // pagination={false}
                        onRow={(record, index) => ({
                            index,
                            moveRow: this.moveRow,
                        })}
                    />
                </DndProvider>
            </div>
        );
    }
}

export default DragSortingTable;