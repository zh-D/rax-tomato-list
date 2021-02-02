/* eslint-disable @iceworks/best-practices/no-http-url */
/* eslint-disable @iceworks/best-practices/recommend-functional-component */
import { createElement, Component, createRef } from 'rax';
import Canvas from 'rax-canvas';
import F2 from '@antv/f2';
import request from 'universal-request';

interface Data {
  date: string;
  value: number;
  name: string;
}

let yesterday;
let today;
let tomorrow;
let day;

export default class GroupHistograms extends Component {
  state = {
    date: new Date(), // 当前日期Date对象
    today: new Date().getDate(), // 当前日期 如2021/1/31
    dataSource: [],
  };
  constructor(props) {
    super(props);
    // @ts-ignore
    this.raxCanvasDemo = createRef();
    // @ts-ignore
    this.tomorrow = this.tomorrow.bind(this);
    this.yesterday = this.yesterday.bind(this);
  }

  draw() {
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

  componentDidMount() {
    // 直接发起网络请求

    day = this.state.date.toLocaleDateString().split('/').join('-');
    console.log('今天', day);

    request({
      url: 'http://localhost:8888/todo/getBar',
      method: 'GET',
      data: { day },
    }).then((response) => {
      this.setState(
        {
          dataSource: response.data.data,
        },
        () => {
          this.draw();
          console.log(this.state.dataSource);
        },
      );
    });
  }
  yesterday() {
    const temp = this.state.date.getTime() - 1 * (1000 * 60 * 60 * 24);
    const yester = new Date();
    yester.setTime(temp);
    this.setState(
      {
        today: yester.toLocaleDateString(),
        date: yester,
      },
      () => {
        day = this.state.today;
        day = day.split('/').join('-');
        console.log('昨天是：', day);
        request({
          url: 'http://localhost:8888/todo/getBar',
          method: 'GET',
          data: { day },
        }).then((response) => {
          this.setState(
            {
              dataSource: response.data.data,
            },
            () => {
              // @ts-ignore
              this.draw();
              console.log(this.state.dataSource);
            },
          );
        });
      },
    );
  }
  tomorrow() {
    const temp = this.state.date.getTime() + 1 * (1000 * 60 * 60 * 24);
    const yester = new Date();
    yester.setTime(temp);
    this.setState(
      {
        today: yester.toLocaleDateString(),
        date: yester,
      },
      () => {
        day = this.state.today;
        day = day.split('/').join('-');
        console.log('明天是：', day);
        request({
          url: 'http://localhost:8888/todo/getBar',
          method: 'GET',
          data: { day },
        }).then((response) => {
          this.setState(
            {
              dataSource: response.data.data,
            },
            () => {
              this.draw();
              console.log(this.state.dataSource);
            },
          );
        });
        // 请求在这里进行
        // 如果需要重新画图也在这里画
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
            width: 720,
            height: 375,
          }}
          // @ts-ignore
          ref={this.raxCanvasDemo}
          id="canv1"
        />
        <view
          style={{
            position: 'absolute',
            transform: 'translateX(-50%)',
          }}
        >
          <button className="btn" onClick={this.yesterday}>
            前一天
          </button>
          <button className="btn" onClick={this.tomorrow}>
            后一天
          </button>
        </view>
      </view>
    );
  }
}
