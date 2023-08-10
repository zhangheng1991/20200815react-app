import React from "react";
import style from   "./style.less";
class StarSky extends React.Component {
    render() {
        return (
            <div>
                <div className={style.starsBox}>
                    <div id="stars" className={style.stars}></div>
                    <div id="stars2" className={`${style["stars2"]}`}></div>
                    <div id="stars3" className={`${style["stars3"]}`}></div>
                    <div id="title" className={`${style["title"]}`}>简约 星空</div>
                </div>
            </div>
        )
    }
}

export default StarSky;