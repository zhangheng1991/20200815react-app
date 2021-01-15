import React from 'react';
import Lazyload from 'react-lazyload';
import ChinaMap from '../../../component/echarts/map/ChinaMap';
import EchartBox from './../../../component/echarts/container/EchartsBox';

// var geoCoordMap = {
//   //可以在地图上显示的城市的坐标信息
//   北京市: [116.4551, 40.2539],

//   甘肃: [103.5901, 36.3043],

//   新疆: [87.9236, 43.5883],
//   西藏: [91.11, 29.97],
//   四川: [103.9526, 30.7617],

//   河南: [113.4668, 34.6234],

//   福建: [119.4543, 25.9222],

//   湖南: [113.0823, 28.2568],

//   云南: [102.9199, 25.4663],
//   广东: [113.12244, 23.009505],

//   海南: [110.3893, 19.8516],
//   上海: [121.4648, 31.2891],
// };
// var HFData = [
//   // 数据中name的城市名称必须与geoCoordMap中城市名称一致, 不然关联不上，北京到各地区的线路
//   // [{ name: '济南' }, { name: '北京', value: 87 }],
//   [{ name: '北京市',type:1  }, { name: '北京市', value: 11,type:1 }],
//   [{ name: '甘肃' }, { name: '甘肃', value: 22222,type:1  }],
//   [{ name: '新疆' }, { name: '新疆', value: 2222,type:2  }],
//   [{ name: '西藏' }, { name: '西藏', value: 3222,type:1  }],
//   [{ name: '四川' }, { name: '四川', value: 222,type:1  }],
//   [{ name: '河南' }, { name: '河南', value: 222,type:1  }],
//   [{ name: '福建' }, { name: '福建', value: 22,type:3  }],
//   [{ name: '湖南' }, { name: '湖南', value: 22 ,type:1 }],
//   [{ name: '云南' }, { name: '云南', value: 22,type:3  }],
//   [{ name: '广东' }, { name: '广东', value: 78 ,type:4 }],
//   [{ name: '海南' }, { name: '海南', value: 77 ,type:1 }],
//   [{ name: '上海' }, { name: '上海', value: 33333 ,type:1 }],
//   // [{ name: '天津' }, { name: '天津', value: 89 }],
//   // [{ name: '乌鲁木齐' }, { name: '北京', value: 67 }],
//   // [{ name: '乌鲁木齐' }, { name: '乌鲁木齐', value: 67 }],
//   // [{ name: '拉萨' }, { name: '北京', value: 45 }],
//   // [{ name: '拉萨' }, { name: '拉萨', value: 45 }],
//   // [{ name: '昆明' }, { name: '北京', value: 56 }],
//   // [{ name: '昆明' }, { name: '昆明', value: 56 }],
//   // [{ name: '合肥' }, { name: '北京', value: 23 }],
//   // [{ name: '合肥' }, { name: '合肥', value: 23 }],
// ];
class SourceOfTourists extends React.Component {
  static defaultProps = {
    titleFont: 20,
    textFont: 12,
    height: '400px',
    barWidth: 240,
  };

  render() {
    const { textFont, height, HFData, geoCoordMap, id, title } = this.props;
    return (
      <div>
        <Lazyload debounce={300}>
          <EchartBox title={title} titleFontSize={16}>
            {
              <div>
                <ChinaMap
                  textFont={textFont}
                  id={id}
                  geoCoordMap={geoCoordMap}
                  HFData={HFData}
                  height={height}
                />
              </div>
            }
          </EchartBox>
        </Lazyload>
      </div>
    );
  }
}
export default SourceOfTourists;
