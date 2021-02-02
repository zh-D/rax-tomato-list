/* eslint-disable @iceworks/best-practices/no-http-url */
/* eslint-disable @iceworks/best-practices/recommend-functional-component */
import { createElement, Component, createRef } from 'rax';
import Canvas from 'rax-canvas';
import F2 from '@antv/f2';
import request from 'universal-request';
let week;

export default class HeatMap extends Component {
  state = {
    date: new Date(), // 当前Date
    day: new Date().getDay(), // 今天星期几0-6
    thisWeekBegin: new Date(new Date().getTime() - new Date().getDay() * 24 * (1000 * 60 * 60 * 24)), // 这周第一天的Date对象 星期日
    dataSource: [],
  };
  constructor(props) {
    super(props);
    // @ts-ignore
    this.raxCanvasDemo = createRef();
    this.lastWeek = this.lastWeek.bind(this);
    this.nextWeek = this.nextWeek.bind(this);
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
      hour: {
        type: 'cat',
        values: ['3', '6', '9', '12', '15', '18', '21', '24'],
      },
      week: {
        type: 'cat',
        values: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'],
      },
    });

    chart.tooltip({
      custom: true,
      showXTip: true,
      showYTip: true,
      snap: true,
      crosshairsType: 'xy',
      crosshairsStyle: {
        lineDash: [2],
      },
    });

    chart
      .polygon()
      .position('hour*week')
      .color('value', '#BAE7FF-#1890FF-#0050B3')
      .style({
        lineWidth: 1,
        stroke: '#fff',
      })
      .animate({
        appear: {
          animation: 'fadeIn',
          duration: 800,
        },
      });
    chart.render();
  }

  componentDidMount() {
    week = this.state.thisWeekBegin.toLocaleDateString().split('/').join('-');

    request({
      url: 'http://localhost:8888/todo/getHeat',
      method: 'GET',
      data: { week },
    }).then((response) => {
      this.setState(
        {
          dataSource: response.data.data,
        },
        () => {
          this.draw();
        },
      );
    });
  }

  lastWeek() {
    const lastWeekBeginTemp = this.state.thisWeekBegin.getTime() - 7 * (1000 * 60 * 60 * 24);
    // var lastWeekEndTemp = this.state.thisWeekEnd.getTime() - 7 * (1000 * 60 * 60 * 24);
    const lastWeekBegin = new Date();
    lastWeekBegin.setTime(lastWeekBeginTemp);
    // var lastWeekEnd = new Date();
    // lastWeekEnd.setTime(lastWeekEndTemp);
    this.setState(
      {
        thisWeekBegin: lastWeekBegin,
        // thisWeekEnd: lastWeekEnd,
      },
      () => {
        // 请求写在这里
        week = this.state.thisWeekBegin.toLocaleDateString().split('/').join('-');
        console.log('上周一是', week);
        // console.log('上周末是', this.state.thisWeekEnd.toLocaleDateString());
        request({
          url: 'http://localhost:8888/todo/getHeat',
          method: 'GET',
          data: { week },
        }).then((response) => {
          this.setState(
            {
              dataSource: response.data.data,
            },
            () => {
              this.draw();
            },
          );
        });
      },
    );
  }

  nextWeek() {
    console.log(this.state.date.getDay());
    console.log(this.state.thisWeekBegin);
    const nextWeekBeginTemp = this.state.thisWeekBegin.getTime() + 7 * (1000 * 60 * 60 * 24);
    const nextWeekBegin = new Date();
    nextWeekBegin.setTime(nextWeekBeginTemp);
    this.setState(
      {
        thisWeekBegin: nextWeekBegin,
      },
      () => {
        week = this.state.thisWeekBegin.toLocaleDateString().split('/').join('-');
        console.log('下周一是', week);
        request({
          url: 'http://localhost:8888/todo/getHeat',
          method: 'GET',
          data: { week },
        }).then((response) => {
          this.setState(
            {
              dataSource: response.data.data,
            },
            () => {
              this.draw();
            },
          );
        });
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
          id="canv2"
        />
        <view
          style={{
            position: 'absolute',
            transform: 'translateX(-50%)',
          }}
        >
          <button className="btn" onClick={this.lastWeek}>
            前一周
          </button>
          <button className="btn" onClick={this.nextWeek}>
            后一周
          </button>
        </view>
      </view>
    );
  }
}