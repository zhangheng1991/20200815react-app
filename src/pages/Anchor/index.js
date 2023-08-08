import React from "react";
import { Affix, Button, BackTop } from "antd";
import style from "./style.less";
class AnchorIndex extends React.Component {

    state = {
        top: 180,
    }

    jumpClick = (id,e) => {
        console.log("#333333")
        e.stopPropagation();
        document.querySelector(`#${id}`).scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
        })
    }

    handCickTop=(e)=>{
        e.stopPropagation();
    }

    render() {
        return (
            <div className={`${style["AnchorBox"]}`}>
                {/* <Affix offsetTop={100}>
                    <div style={{display:"none"}}  className={"AffixBox"}>
                        <div onClick={this.jumpClick.bind(this, "AnchorIndex4")}>跳转到标签4</div>
                        <div onClick={this.jumpClick.bind(this, "AnchorIndex3")}>跳转到标签3</div>
                        <div onClick={this.jumpClick.bind(this, "AnchorIndex2")}>跳转到标签2</div>
                        <div onClick={this.jumpClick.bind(this, "AnchorIndex1")}>跳转到标签1</div>
                    </div>
                </Affix> */}
                <BackTop onClick={(e)=>this.handCickTop(e)}>
                    <div className={`${style["AnchorContainer"]}`}>
                        <div onClick={this.jumpClick.bind(this, "AnchorIndex4")}>跳转到标签4</div>
                        <div onClick={this.jumpClick.bind(this, "AnchorIndex3")}>跳转到标签3</div>
                        <div onClick={this.jumpClick.bind(this, "AnchorIndex2")}>跳转到标签2</div>
                        <div onClick={this.jumpClick.bind(this, "AnchorIndex1")}>跳转到标签1</div>
                    </div>
                </BackTop>

                {/* <Affix offsetTop={this.state.top}>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({
                                top: this.state.top + 10,
                            });
                        }}
                    >
                        Affix top
                    </Button>
                </Affix> */}
                <div>
                    <div>
                        <div className={`${style["AnchorIndex"]}`} id="AnchorIndex1">标签1</div>

                    </div>
                    <div>
                        <div className={`${style["AnchorIndex"]}`} id="AnchorIndex2">标签2</div>

                    </div>
                    <div>
                        <div className={`${style["AnchorIndex"]}`} id="AnchorIndex3">标签3</div>

                    </div>
                    <div>
                        <div className={`${style["AnchorIndex"]}`} id="AnchorIndex4">标签4</div>

                    </div>
                </div>
            </div>
        )
    }
}

export default AnchorIndex;