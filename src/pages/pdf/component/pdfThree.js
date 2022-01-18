import React from "react";
import ChinaEpidemic from "../../echarts/charts/ChinaEpidemic";
import ChinaPneumonia from '../../echarts/charts/ChinaPneumonia';
class pdfThree extends React.Component {
    render() {
        const ChinaEpidemic1 = {
            id: 'ChinaEpidemic1n',
            height: '800px',
            data: [
                {
                    name: '北京',
                    value: 212,
                },
                {
                    name: '天津',
                    value: 60,
                },
                {
                    name: '上海',
                    value: 208,
                },
                {
                    name: '重庆',
                    value: 337,
                },
                {
                    name: '河北',
                    value: 126,
                },
                {
                    name: '河南',
                    value: 675,
                },
                {
                    name: '云南',
                    value: 117,
                },
                {
                    name: '辽宁',
                    value: 74,
                },
                {
                    name: '黑龙江',
                    value: 155,
                },
                {
                    name: '湖南',
                    value: 593,
                },
                {
                    name: '安徽',
                    value: 480,
                },
                {
                    name: '山东',
                    value: 270,
                },
                {
                    name: '新疆',
                    value: 29,
                },
                {
                    name: '江苏',
                    value: 308,
                },
                {
                    name: '浙江',
                    value: 829,
                },
                {
                    name: '江西',
                    value: 476,
                },
                {
                    name: '湖北',
                    value: 13522,
                },
                {
                    name: '广西',
                    value: 139,
                },
                {
                    name: '甘肃',
                    value: 55,
                },
                {
                    name: '山西',
                    value: 74,
                },
                {
                    name: '内蒙古',
                    value: 34,
                },
                {
                    name: '陕西',
                    value: 142,
                },
                {
                    name: '吉林',
                    value: 42,
                },
                {
                    name: '福建',
                    value: 179,
                },
                {
                    name: '贵州',
                    value: 56,
                },
                {
                    name: '广东',
                    value: 797,
                },
                {
                    name: '青海',
                    value: 15,
                },
                {
                    name: '西藏',
                    value: 1,
                },
                {
                    name: '四川',
                    value: 282,
                },
                {
                    name: '宁夏',
                    value: 34,
                },
                {
                    name: '海南',
                    value: 79,
                },
                {
                    name: '台湾',
                    value: 10,
                },
                {
                    name: '香港',
                    value: 15,
                },
                {
                    name: '澳门',
                    value: 9,
                },
            ],
        };
        const ChinaPneumonia2 = {
            id: 'ChinaPneumonia1m',
            height: '400px',
            dataList: [
                {
                    name: '南海诸岛',
                    value: 0,
                },
                {
                    name: '北京',
                    value: 54,
                },
                {
                    name: '天津',
                    value: 13,
                },
                {
                    name: '上海',
                    value: 40,
                },
                {
                    name: '重庆',
                    value: 75,
                },
                {
                    name: '河北',
                    value: 13,
                },
                {
                    name: '河南',
                    value: 83,
                },
                {
                    name: '云南',
                    value: 11,
                },
                {
                    name: '辽宁',
                    value: 19,
                },
                {
                    name: '黑龙江',
                    value: 15,
                },
                {
                    name: '湖南',
                    value: 69,
                },
                {
                    name: '安徽',
                    value: 60,
                },
                {
                    name: '山东',
                    value: 39,
                },
                {
                    name: '新疆',
                    value: 4,
                },
                {
                    name: '江苏',
                    value: 31,
                },
                {
                    name: '浙江',
                    value: 104,
                },
                {
                    name: '江西',
                    value: 36,
                },
                {
                    name: '湖北',
                    value: 1052,
                },
                {
                    name: '广西',
                    value: 33,
                },
                {
                    name: '甘肃',
                    value: 7,
                },
                {
                    name: '山西',
                    value: 9,
                },
                {
                    name: '内蒙古',
                    value: 7,
                },
                {
                    name: '陕西',
                    value: 22,
                },
                {
                    name: '吉林',
                    value: 4,
                },
                {
                    name: '福建',
                    value: 18,
                },
                {
                    name: '贵州',
                    value: 5,
                },
                {
                    name: '广东',
                    value: 98,
                },
                {
                    name: '青海',
                    value: 1,
                },
                {
                    name: '西藏',
                    value: 0,
                },
                {
                    name: '四川',
                    value: 44,
                },
                {
                    name: '宁夏',
                    value: 4,
                },
                {
                    name: '海南',
                    value: 22,
                },
                {
                    name: '台湾',
                    value: 3,
                },
                {
                    name: '香港',
                    value: 5,
                },
                {
                    name: '澳门',
                    value: 5,
                },
            ],
        };
        return (
            <div>
                <ChinaEpidemic {...ChinaEpidemic1} />
                <ChinaPneumonia {...ChinaPneumonia2} />
                </div>
        )
    }
}
export default pdfThree;