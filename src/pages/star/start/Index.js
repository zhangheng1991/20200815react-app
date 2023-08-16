// import React from "react";

// class AppIndex extends React.Component {
//     render() {
//         return (
//             <div>d

//                 ddd

//                 <canvas id="stars"></canvas>
//             </div>
//         )
//     }
// }




import React from 'react';
// import { Col } from 'antd';
import moment from "moment";
import style from './style.less';
const data = { value: 10, id: '1' };
const data1 = { value: 50, id: '2' };
const data2 = { value: 80, id: '3' };
const PublicData = [{ value: 20, id: '1' }, { value: 50, id: '     2' }, { value: 80, id: '3' }];

var context;

var arr = new Array();
var starCount = 20000;

var rains = new Array();
var rainCount = 100;
let windowWidth = window.innerWidth; //当前的窗口的高度
//创建一个星星对象
let Star = function () {
    this.x = windowWidth * Math.random(); //横坐标
    this.y = 5000 * Math.random(); //纵坐标
    this.text = '.'; //文本
    this.color = 'white'; //颜色

    //产生随机颜色
    this.getColor = function () {
        var _r = Math.random();

        if (_r < 0.5) {
            this.color = '#333';
        } else {
            this.color = 'white';
        }
    };

    //初始化
    this.init = function () {
        this.getColor();
    };
    //绘制
    this.draw = function () {
        context.fillStyle = this.color;
        context.fillText(this.text, this.x, this.y);
    };
};
/*流星雨开始*/

let MeteorRain = function () {
    this.x = -1;
    this.y = -1;
    this.length = -1; //长度
    this.angle = 30; //倾斜角度
    this.width = -1; //宽度
    this.height = -1; //高度
    this.speed = 1; //速度
    this.offset_x = -1; //横轴移动偏移量
    this.offset_y = -1; //纵轴移动偏移量
    this.alpha = 1; //透明度
    this.color1 = ''; //流星的色彩
    this.color2 = ''; //流星的色彩
    /****************初始化函数********************/
    this.init = function () //初始化
    {
        this.getPos();
        this.alpha = 1; //透明度
        this.getRandomColor();
        //最小长度，最大长度
        var x = Math.random() * 80 + 150;
        this.length = Math.ceil(x);
        //                  x = Math.random()*10+30;
        this.angle = 30; //流星倾斜角
        x = Math.random() + 0.5;
        this.speed = Math.ceil(x); //流星的速度
        var cos = Math.cos((this.angle * 3.14) / 180);
        var sin = Math.sin((this.angle * 3.14) / 180);
        this.width = this.length * cos; //流星所占宽度
        this.height = this.length * sin; //流星所占高度
        this.offset_x = this.speed * cos;
        this.offset_y = this.speed * sin;
    };

    /**************获取随机颜色函数*****************/
    this.getRandomColor = function () {
        var a = Math.ceil(255 - 240 * Math.random());
        //中段颜色
        this.color1 = 'rgba(' + a + ',' + a + ',' + a + ',1)';
        //结束颜色
        this.color2 = 'black';
    };

    /***************重新计算流星坐标的函数******************/
    this.countPos = function () //
    {
        //往左下移动,x减少，y增加
        this.x = this.x - this.offset_x;
        this.y = this.y + this.offset_y;
    };

    /*****************获取随机坐标的函数*****************/
    this.getPos = function () //
    {
        //横坐标200--1200

        this.x = Math.random() * window.innerWidth; //窗口高度
        //纵坐标小于600
        this.y = Math.random() * window.innerHeight; //窗口宽度
    };
    /****绘制流星***************************/
    this.draw = function () //绘制一个流星的函数
    {
        context.save();
        context.beginPath();
        context.lineWidth = 2; //宽度
        context.globalAlpha = this.alpha; //设置透明度
        //创建横向渐变颜色,起点坐标至终点坐标
        var line = context.createLinearGradient(
            this.x,
            this.y,
            this.x + this.width,
            this.y - this.height,
        );

        //分段设置颜色
        line.addColorStop(0, 'white');
        line.addColorStop(0.3, this.color1);
        line.addColorStop(0.6, this.color2);
        context.strokeStyle = line;
        //起点
        context.moveTo(this.x, this.y);
        //终点
        context.lineTo(this.x + this.width, this.y - this.height);
        context.closePath();
        context.stroke();
        context.restore();
    };
    this.move = function () {
        //清空流星像素
        var x = this.x + this.width - this.offset_x;
        var y = this.y - this.height;
        context.clearRect(x - 3, y - 3, this.offset_x + 5, this.offset_y + 5);
        //                  context.strokeStyle="red";
        //                  context.strokeRect(x,y-1,this.offset_x+1,this.offset_y+1);
        //重新计算位置，往左下移动
        this.countPos();
        //透明度增加
        this.alpha -= 0.002;
        //重绘
        this.draw();
    };
};
class AppIndex extends React.Component {
    state = {
        Flagt: false,
        time:"",
    };

    pageClick = () => {

        this.init();
        //画星星
        for (var i = 0; i < starCount; i++) {
            var star = new Star();
            star.init();
            star.draw();
            arr.push(star);
        }

        //画流星
        for (var i = 0; i < rainCount; i++) {
            var rain = new MeteorRain();
            rain.init();
            rain.draw();
            rains.push(rain);
        }

        this.drawMoon(); //绘制月亮
        this.playStars(); //绘制闪动的星星
        this.playRains(); //绘制流星
        this.TimeID = setInterval(() => this.Tick(), 10);
        this.TimeIDd = setInterval(() => this.Tickd(), 10);
    }

    pageLoad = () => {
        console.log(111111111111111)
        // alert("ddddd")
        // this.pageClick();
    }

    firstLoad=false;

    componentDidMount() {
        const { Flagt } = this.state;
        //页面加载的时候
        // window.onload = function() {
        // if (Flagt) {
        // window.location.reload()

        // window.addEventListener("mousedown", this.pageClick, true)
        // window.addEventListener("load", this.pageLoad, true);
        console.log(22222222222)
        if(!this.firstLoad){
            this.firstLoad=true;
            setTimeout(() => {
                this.setState({ Flagt: true })
                this.pageClick();
            }, 10)
        }
       

    }

    componentWillUnmount() {
        this.setState({ Flagt: false })
        window.location.reload(true);
        // window.removeEventListener("addEventListener",this.pageClick())
        // window.removeEventListener("load", this.pageLoad())
        // window.clearInterval(this.timer);
    }

    componentWillReceiveProps(){
        console.log(this,"this")
        //  if(!this.firstLoad&&moment().format("YYYYMMDD HH:mm:ssss")!=this.state.time){
        
        //   this.setState({time:moment().format("YYYYMMDD HH:mm:ssss")});
        //   this.setState({ Flagt: true })
        //   this.pageClick();
        //   this.firstLoad=true;
        //   console.log("Ffffff")
        //  }
    }

    //初始化画布及context
    init = () => {
        const { id } = this.props;
        //获取canvas
        var stars = document.getElementById(id || 'starsId');
        if (stars) {
            // windowWidth = window.innerWidth; //当前的窗口的高度
            stars.width = windowWidth;
            stars.height = window.innerHeight;
            //获取context
            context = stars.getContext('2d');
        }
    };

    //画月亮
    drawMoon = () => {
        var moon = new Image();
        //  moon.src = "images/moon.jpg"
        context.drawImage(moon, -5, -10);
    };
    //星星闪起来
    playStars = () => {
        for (var n = 0; n < starCount; n++) {
            arr[n].getColor();
            arr[n].draw();
        }
        // setTimeout(this.playStars(), 100);
    };
    Tick = () => {
        this.playStars();
    };
    Tickd = () => {
        this.playRains();
    };
    //绘制流星
    playRains = () => {
        for (var n = 0; n < rainCount; n++) {
            var rain = rains[n];
            rain.move(); //移动
            if (rain.y > window.innerHeight) {
                //超出界限后重来
                context.clearRect(rain.x, rain.y - rain.height, rain.width, rain.height);
                rains[n] = new MeteorRain();
                rains[n].init();
            }
        }
        // setTimeout(this.playRains(),2);
    };

    render() {
        const { id } = this.props;
        const { Flagt } = this.state;
        const style = { position: "absolute", top: "0", left: "0", width: "100%", height: "100%", bottom: "0", right: "0", background: "black",display:Flagt?"blcok":"none" };
        console.log(Flagt,"Flagt")
        return (
            <div>
                {
                    Flagt ? <canvas id={id || "starsId"} style={style} /> : <div></div>
                }

            </div>
        );
    }
}
export default AppIndex;
