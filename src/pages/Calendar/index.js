import React from "react";
import { Calendar, Alert } from 'antd';
import moment from 'moment';
import _ from "loadsh";
import style from "./style.less";

const dataH = [];

for (let i = 1; i < 101; i++) {

    dataH.push({
        key: i,
        name: `李四${i}`,

    })
}

class CalendarCom extends React.Component {

    state = {
        value: moment(moment().format("YYYYMMDD")),
        selectedValue: moment(moment().format("YYYYMMDD")),
        data: dataH,
    };

    onSelect = value => {
        this.setState({
            value,
            selectedValue: value,
        });
    };

    onPanelChange = value => {
        this.setState({ value });
    };



    render() {

        const { value, selectedValue, data } = this.state;

        // const str = 'HelloWorldlklkasdasdWorldffff';
        const str = 'HelloWorld"#{dlkl}"ka{sdasdWorld}rldf"#{dlkl}"fff';
        const pattern = "World";
        const rr=`select * from abacus_position where book ="#{book}" and department ="#{department}"or book ="#book"`;
        var regex = /(?<=\{)(.+?)(?=\})/g;;
        
        console.log(rr.match(regex),"regex")

        
        // const result = str.match(pattern);
        console.log(str.match(/"(\S*)"/),"result");
        // console.log(str.split("World"))

        var s = "HelloWorldlklkasdasdWorldffff";
        var a = s.indexOf("World");
        var b = s.indexOf("/", a);
        var c = s.substring(a, b);
        var d = s.slice(a, b);
       
        // console.log(a,"a")
        console.log(  _.split(str, 'World'))
        // _.split('a-b-c', '-', 2);

        var str2 = "abcdefgname='test'sddfhskshjsfsjdfps";
        var reg = /name='((\w|-|\s)+)/ig;

        return (
            <div>
                <div className={style.contentTex}>
                    {
                        data.map((item, index) => {
                            return (
                                <div className={style.contentBox} key={item.key}> <div title={item.name}>{item.name}</div></div>
                            )
                        })
                    }
                </div>
                <div className={style.Calendar}>
                    <Alert
                        message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
                    />
                    <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
                </div>
            </div>
        )
    }
}

export default CalendarCom;