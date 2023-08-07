import React from "react";
import moment from "moment";
import StarIndex from "./Index";
class StartIndex extends React.Component {

    state = {
        time: "",
    }

    componentDidMount() {
        this.TimerID = setInterval(() => {
            console.log(1111111)
            this.setState({ time: moment().format('YYYY-MM-DD-HH:MM:ssss') })
        }, 100000)
    }

    componentWillUnmount() {
        window.clearTimeout(this.TimerID)
    }

    render() {
        const { time } = this.state;
        console.log(this,"this")
        return (
            <div>
                <h1>流星来了</h1>
                <StarIndex id={moment().format('YYYY-MM-DD-HH:MM:ssss')} key={moment().format('YYYY-MM-DD-HH:MM:ssss')}  />
                {/* // id={moment().format('YYYY-MM-DD-HH:MM:ssss')} key={time}  id={time}  key={time} */}  
            </div>
        )
    }
}

export default StartIndex;