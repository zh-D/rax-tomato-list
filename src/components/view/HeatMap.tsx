/* eslint-disable @iceworks/best-practices/no-http-url */
/* eslint-disable @iceworks/best-practices/recommend-functional-component */
import { createElement, Component, createRef } from 'rax';
import Canvas from 'rax-canvas';
import F2 from '@antv/f2';
import request from 'universal-request';
import view from 'rax-view';

interface Data {
  hour: number;
  week: number;
  value: number;
}

const data = [
  [0, 0, 10],
  [0, 1, 19],
  [0, 2, 8],
  [0, 3, 24],
  [0, 4, 67],
  [0, 5, 67],
  [0, 6, 67],
  [1, 0, 92],
  [1, 1, 58],
  [1, 2, 78],
  [1, 3, 117],
  [1, 4, 48],
  [1, 5, 117],
  [1, 6, 48],
  [2, 0, 35],
  [2, 1, 15],
  [2, 2, 123],
  [2, 3, 64],
  [2, 4, 52],
  [2, 5, 64],
  [2, 6, 52],
  [3, 0, 72],
  [3, 1, 132],
  [3, 2, 114],
  [3, 3, 19],
  [3, 4, 16],
  [3, 5, 19],
  [3, 6, 16],
  [4, 0, 38],
  [4, 1, 5],
  [4, 2, 8],
  [4, 3, 117],
  [4, 4, 115],
  [4, 5, 117],
  [4, 6, 115],
  [5, 0, 88],
  [5, 1, 32],
  [5, 2, 12],
  [5, 3, 6],
  [5, 4, 120],
  [5, 5, 6],
  [5, 6, 120],
  [6, 0, 13],
  [6, 1, 44],
  [6, 2, 88],
  [6, 3, 98],
  [6, 4, 96],
  [6, 5, 98],
  [6, 6, 96],
  [7, 0, 31],
  [7, 1, 1],
  [7, 2, 82],
  [7, 3, 32],
  [7, 4, 30],
  [7, 5, 32],
  [7, 6, 30],
];
const source = [];
for (let i = 0; i < data.length; i++) {
  const item = data[i];
  const obj = {};
  // @ts-ignore
  obj.hour = item[0];
  // @ts-ignore
  obj.week = item[1];
  // @ts-ignore
  obj.value = item[2];
  // @ts-ignore
  source.push(obj);
}
console.log(source);

let thisMonday;
let nextMonday;
let lastMonday;
let week;

export default class HeatMap extends Component {
  state = {
    date: new Date(), // 当前Date
    day: new Date().getDay(), // 今天星期几0-6
    thisWeekBegin: new Date(new Date().getTime() - new Date().getDay() * 24 * (1000 * 60 * 60 * 24)), // 这周第一天的Date对象 星期日
    // thisWeekEnd: new Date(new Date().getTime() - (-6 + new Date().getDay()) * (1000 * 60 * 60 * 24)), //这周最后一天的Date对象
    dataSource: [],
  };
  constructor(props) {
    super(props);
    // @ts-ignore
    this.raxCanvasDemo = createRef();
    this.lastWeek = this.lastWeek.bind(this);
    this.nextWeek = this.nextWeek.bind(this);
  }
  componentDidMount() {
    week = this.state.thisWeekBegin.toLocaleDateString().split('/').join('-');

    request({
      url: 'http://localhost:8888/todo/getHeat',
      method: 'GET',
      data: { week },
    }).then((response) => {
      this.setState({
        dataSource: response.data.data,
      }, () => {
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
      });
      console.log(this.state.dataSource);
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
          this.setState({
            dataSource: response.data.data,
          }, () => {
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
          });
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
          this.setState({
            dataSource: response.data.data,
          }, () => {
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
          });
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
            width: 750,
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
          <button onClick={this.lastWeek}>前一周</button>
          <button onClick={this.nextWeek}>后一周</button>
        </view>
      </view>
    );
  }
}

// @ts-ignore
// render(<CanvasSample />, document.getElementById('root'), { driver: DriverUniversal });
