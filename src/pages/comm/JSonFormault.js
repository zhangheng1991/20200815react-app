import React from "react";
// import "./public/jquery";
// import "./public/json2"
// import "./public/ace";

class JSonFormault extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <div id="input" style={{height:"400px"}}>
                            "name":"在线JSON格式化工具",
                            "url": "//www.ip138.com/",
                            "description": "JSON格式化/压缩工具由JS在本地完成，您的所有输入都不会提交到服务端"
                                            </div>
                    </div>
                    <div className="form-group">
                        <div className="form-inline">
                            <button className="btn btn-primary" data-type="beauty"
                                type="button">格式化</button>
                            <button className="btn btn-primary" type="button">压缩</button>
                        </div>
                        <iframe src="../template/index.html"></iframe>
                    </div>
                </form>
            </div>
        )
    }
}

export default JSonFormault;