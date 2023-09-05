import React from "react"
import moment from "moment";
import { ConfigProvider, Select } from "antd";
import style from "./style.less";
import zhCN from 'antd/es/locale/zh_CN';
import enCN from 'antd/es/locale/en_US';
const { Option } = Select;
class TimeFormatter extends React.Component {

    state = {
        time: moment(),
        value: "zhCN"
    }

    componentDidMount() {
        this.timeID = setInterval(() => {
            this.time()
        }, 1000)
    }

    time = () => {
        this.setState({ time: moment() })
    }
    componentWillUnmount() {
        window.clearInterval(this.time)
    }

    handClickChange = (value) => {
        console.log(value, "value");
        this.setState({ value: value })
    }

    render() {
        const { time, value } = this.state;
        return (
            <div>
                <ConfigProvider locale={  value==="zhCN"?zhCN:enCN}>
                    <div className={style.timeBox}>
                        {/* <div>
                            <Select onChange={this.handClickChange} value={value}>
                                <Option value="zhCN">中文</Option>
                                <Option value="enCN">英文</Option>
                            </Select>
                        </div> */}
                        <div>
                            <div className={style.time}>{moment(time).format("YYYY-MM-DD  dddd")}</div>
                            {/* <div className={style.time}>{moment(time).format("DD-MMM HH:mm") }</div>
                            <div className={style.time}>{moment(time).format("DD-MMMM HH:mm") }</div> */}
                            <div className={style.time}>{moment(time).format("HH:mm:ss  a")}</div>
                        </div>
                    </div>
                </ConfigProvider>
            </div>
        )
    }
}

export default TimeFormatter