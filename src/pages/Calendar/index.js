import React from "react";
import { Calendar, Alert } from 'antd';
import moment from 'moment';


class CalendarCom extends React.Component {

    state = {
        value: moment(moment().format("YYYYMMDD")),
        selectedValue: moment(moment().format("YYYYMMDD")),
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

        const { value, selectedValue } = this.state;
        return (
            <div>
                <div>
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