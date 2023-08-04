import React from "react";
import moment from "moment";
import StarIndex from "./Index";
class StartIndex extends React.Component{
    render(){
        return(
            <div>

                <StarIndex id={moment().format('YYYY-MM-DD-HH:MM:ssss')} />
            </div>
        )
    }
}

export default StartIndex;