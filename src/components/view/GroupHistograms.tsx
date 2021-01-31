import { createElement, Component, render, createRef } from 'rax';
import Canvas from 'rax-canvas';
import DriverUniversal from 'driver-universal';
import F2 from '@antv/f2';
import view from 'rax-view';
import request from 'universal-request';

interface Data {
  date: string;
  value: number;
  name: string;
}

const data = [
  {
    name: '未完成',
    date: '2021-01-12 0:00',
    value: 18.9,
  },
  {
    name: '未完成',
    date: '2021-01-12 3:00',
    value: 28.8,
  },
  {
    name: '未完成',
    date: '2021-01-12 6:00',
    value: 39.3,
  },
  {
    name: '未完成',
    date: '2021-01-12 9:00',
    value: 81.4,
  },
  {
    name: '未完成',
    date: '2021-01-12 12:00',
    value: 47,
  },
  {
    name: '未完成',
    date: '2021-01-12 15:00',
    value: 20.3,
  },
  {
    name: '未完成',
    date: '2021-01-12 18:00',
    value: 24,
  },
  {
    name: '未完成',
    date: '2021-01-12 21:00',
    value: 35.6,
  },
  {
    name: '已完成',
    date: '2021-01-12 0:00',
    value: 12.4,
  },
  {
    name: '已完成',
    date: '2021-01-12 3:00',
    value: 23.2,
  },
  {
    name: '已完成',
    date: '2021-01-12 6:00',
    value: 34.5,
  },
  {
    name: '已完成',
    date: '2021-01-12 9:00',
    value: 99.7,
  },
  {
    name: '已完成',
    date: '2021-01-12 12:00',
    value: 52.6,
  },
  {
    name: '已完成',
    date: '2021-01-12 15:00',
    value: 35.5,
  },
  {
    name: '已完成',
    date: '2021-01-12 18:00',
    value: 37.4,
  },
  {
    name: '已完成',
    date: '2021-01-12 21:00',
    value: 42.4,
  },
];

let yesterday;
let today;
let tomorrow;

export default class GroupHistograms extends Component {
  state = {
    date: new Date(), //当前日期Date对象
    today: new Date().getDate(), //当前日期 如2021/1/31
    dataSource: [],
  };
  constructor(props) {
    super(props);
    // @ts-ignore
    this.raxCanvasDemo = createRef();
    //@ts-ignore
    this.tomorrow = this.tomorrow.bind(this);
    this.yesterday = this.yesterday.bind(this);
  }

  componentDidMount() {
    // 直接发起网络请求

    today = this.state.date.toLocaleDateString().split('/').join('-');
    console.log('今天', today);

    request({
      url: 'https://alibaba.github,io/rax/',
      method: 'GET',
      data: { today },
    }).then((response) => {
      this.setState({
        dataSource: response.data.data,
      });
    });

    // @ts-ignore
    const { id } = this.raxCanvasDemo.current.props;
    console.log(id);
    const chart = new F2.Chart({
      id,
      pixelRatio: window.devicePixelRatio,
    });
    chart.source(this.state.dataSource, {
      date: {
        formatter: function formatter(val) {
          return val.slice(-5, -3);
        },
      },
    });
    chart.tooltip({
      custom: true, // 自定义 tooltip 内容框
      onChange(obj) {
        // @ts-ignore
        const legend = chart.get('legendController').legends.top[0]; // 获取 legend
        const tooltipItems = obj.items;
        const legendItems = legend.items;
        const map = {};
        legendItems.map((item) => {
          map[item.name] = F2.Util.mix({}, item);
        });
        tooltipItems.map((item) => {
          const { name, value } = item;
          // @ts-ignore
          if (map[name]) {
            // @ts-ignore
            map[name].value = value;
          }
        });
        legend.setItems(Object.values(map));
      },
      onHide(tooltip) {
        // @ts-ignore
        const legend = chart.get('legendController').legends.top[0];
        // @ts-ignore
        legend.setItems(chart.getLegendItems().country);
      },
    });

    chart.interval().position('date*value').color('name').adjust({
      type: 'dodge',
      marginRatio: 0.05,
    });
    chart.render();
  }
  yesterday() {
    var temp = this.state.date.getTime() - 1 * (1000 * 60 * 60 * 24);
    var yester = new Date();
    yester.setTime(temp);
    this.setState(
      {
        today: yester.toLocaleDateString(),
        date: yester,
      },
      () => {
        yesterday = this.state.today;
        console.log('昨天是：', yesterday);
        request({
          url: 'https://alibaba.github,io/rax/',
          method: 'GET',
          data: { yesterday },
        }).then((response) => {
          this.setState({
            dataSource: response.data.data,
          });
        });
        //请求在这里进行
        //如果需要重新画图也在这里画
      },
    );
  }
  tomorrow() {
    var temp = this.state.date.getTime() + 1 * (1000 * 60 * 60 * 24);
    var yester = new Date();
    yester.setTime(temp);
    this.setState(
      {
        today: yester.toLocaleDateString(),
        date: yester,
      },
      () => {
        tomorrow = this.state.today;
        console.log('明天是：', tomorrow);
        request({
          url: 'https://alibaba.github,io/rax/',
          method: 'GET',
          data: { tomorrow },
        }).then((response) => {
          this.setState({
            dataSource: response.data.data,
          });
        });
        //请求在这里进行
        //如果需要重新画图也在这里画
      },
    );
  }

  render() {
    return (
      <view
        style={{
          height: 400,
          width: 750,
          position: 'relative',
        }}
      >
        <Canvas
          style={{
            display: 'block',
            width: 750,
            height: 375,
          }}
          //@ts-ignore
          ref={this.raxCanvasDemo}
          id="canv1"
        />
        <view
          style={{
            position: 'absolute',
            transform: 'translateX(-50%)',
          }}
        >
          <button onClick={this.yesterday}>前一天</button>
          <button onClick={this.tomorrow}>后一天</button>
        </view>
      </view>
    );
  }
}

// useEffect(() => {
//   fetch['GET/todo/getHeat'](
//     {
//       // 这里是请求参数
//     },
//     {
//       // 第二参为可选配置
//       // 请求头 content-type，默认是 'application/json'
//       contentType: 'application/json',
//     },
//   ).then((res) => {
//     // 使用返回值
//     setData(res.data);
//   });
// }, []);
