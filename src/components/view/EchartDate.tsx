/* eslint-disable @iceworks/best-practices/recommend-functional-component */
/* eslint-disable @iceworks/best-practices/no-http-url */
import { createElement, Component, createRef } from 'rax';
import request from 'universal-request';
import view from 'rax-view';

const echarts = require('echarts');

const heatmapData = [];

const lunarData = [];
const date = new Date();
let rangeDate;

function Maxdays(year, month) {
  const now = new Date(year, month, 0);
  const dayCount = now.getDate();
  return dayCount;
}

class EchartTest extends Component {
  state = {
    currentMonth: date.getMonth() + 1,
    currentYear: date.getFullYear(),
    dateList: [],
  };
  raxCanvasDemo: any;
  constructor(props) {
    super(props);
    this.raxCanvasDemo = createRef();
    this.lastMonth = this.lastMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
  }
  componentDidMount() {
    this.lastMonth();
  }

  lastMonth() {
    console.log('shanggeyue');
    const month = this.state.currentMonth;
    const year = this.state.currentYear;
    this.setState(
      {
        currentMonth: month === 1 ? 12 : month - 1,
        currentYear: month === 1 ? year - 1 : year,
      },
      () => {
        rangeDate = `${this.state.currentYear.toString() }-${ this.state.currentMonth.toString()}`;
        console.log('上个月', rangeDate);
        // const id = this.raxCanvasDemo.current.props.id;

        request({
          url: 'http://localhost:8888/todo/getCalendar',
          method: 'GET',
          data: { rangeDate },
        }).then((response) => {
          this.setState({
            dateList: response.data.data,
          }, () => {
            // 2.生成日期
            const days = Maxdays(this.state.currentYear.toString(), this.state.currentMonth.toString());
            const list = [];
            let item = '';
            for (var i = 1; i <= days; i++) {
              item = `${rangeDate }-${ i.toString()}`;
              // @ts-ignore
              list.push(item);
            }
            for (var i = 0; i < list.length; i++) {
              // @ts-ignore
              heatmapData.push([list[i], 0]);
              // @ts-ignore
              lunarData.push([list[i]]);
            }
            for (var i = 0; i < this.state.dateList.length; i++) {
              // @ts-ignore
              const date = new Date(this.state.dateList[i].endDate.replace(/-/, '/'));
              const index = date.getDate() - 1;
              heatmapData[index][1]++;
            }
            // @ts-ignore
            document.getElementById('main').removeAttribute('_echarts_instance_'); // 移除容器上的 _echarts_instance_

            // console.log(id)
            // 基于准备好的dom，初始化echarts实例
            const chartDom = document.getElementById('main') as HTMLElement;
            // console.log(chartDom);
            const myChart = echarts.init(chartDom);
            // 绘制图表
            myChart.setOption({
              // 指定配置项和数据

              // 提示框组件
              tooltip: {
                show: true,
                trigger: 'item',
                position: 'top',
                // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式。
                formatter(params) {
                  // console.log(params)
                  if (params.value.length > 1) return `打卡数: ${ params.value[1]}`;
                },
              },
              // 视觉映射组件
              visualMap: {
                show: false, // 是否显示 visualMap-continuous 组件。如果设置为 false，不会显示，但是数据映射的功能还存在
                min: 0,
                max: 10,
                // 视觉映射的『定义域』
                calculable: true, // 是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
                seriesIndex: [1], // 指定取哪个系列的数据
                orient: 'horizontal',
                left: 'center',
                bottom: 20,
                inRange: {
                  // 定义 在选中范围中 的视觉元素。
                  color: ['#FFFFFF', '#FF0000'],
                  opacity: 0.3,
                },
                controller: {
                  inRange: {
                    opacity: 0.5,
                  },
                },
              },

              calendar: [
                {
                  left: 'center', // calendar组件离容器左侧的距离
                  top: 'middle', // calendar组件离容器上侧的距离。
                  cellSize: [45, 45], // 日历每格框的大小，可设置单值 或数组 第一个元素是宽 第二个元素是高。
                  yearLabel: { show: true },
                  orient: 'vertical',
                  dayLabel: {
                    firstDay: 1,
                    nameMap: 'cn',
                    show: true,
                  },
                  monthLabel: {
                    show: true,
                  },
                  range: rangeDate,
                },
              ],
              // 系列（series）是指：一组数值以及他们映射成的图
              // 一个 系列 包含的要素至少有：一组数值、图表类型（series.type）、以及其他的关于这些数据如何映射成图的参数
              series: [
                // 散点图
                {
                  type: 'scatter',
                  coordinateSystem: 'calendar',
                  symbolSize: 1,
                  label: {
                    show: true,
                    formatter(params) {
                      const d = echarts.number.parseDate(params.value[0]);
                      return d.getDate();
                      // + '\n\n' + params.value[2] + '\n\n';
                    },
                    color: '#000',
                  },
                  data: lunarData,
                },

                // 热力图
                {
                  name: '打卡数',
                  type: 'heatmap',
                  coordinateSystem: 'calendar',
                  data: heatmapData,
                },
              ],
            });
          });
          // console.log(this.state.dateList);
        });
      },
    );
  }

  nextMonth() {
    console.log('xiageyue');
    const month = this.state.currentMonth;
    const year = this.state.currentYear;
    this.setState(
      {
        currentMonth: month === 12 ? 1 : month + 1,
        currentYear: month === 12 ? year + 1 : year,
      },
      () => {
        rangeDate = `${this.state.currentYear.toString() }-${ this.state.currentMonth.toString()}`;
        console.log('上个月', rangeDate);

        request({
          url: 'http://localhost:8888/todo/getCalendar',
          method: 'GET',
          data: { rangeDate },
        }).then((response) => {
          this.setState({
            dateList: response.data.data,
          }, () => {
            // 2.生成日期
            const days = Maxdays(this.state.currentYear.toString(), this.state.currentMonth.toString());
            const list = [];
            let item = '';
            for (var i = 1; i <= days; i++) {
              item = `${rangeDate }-${ i.toString()}`;
              // @ts-ignore
              list.push(item);
            }
            for (var i = 0; i < list.length; i++) {
              // @ts-ignore
              heatmapData.push([list[i], 0]);
              // @ts-ignore
              lunarData.push([list[i]]);
            }
            for (var i = 0; i < this.state.dateList.length; i++) {
              // @ts-ignore
              const date = new Date(this.state.dateList[i].endDate.replace(/-/, '/'));
              const index = date.getDate() - 1;
              heatmapData[index][1]++;
            }
            // @ts-ignore
            document.getElementById('main').removeAttribute('_echarts_instance_'); // 移除容器上的 _echarts_instance_

            // console.log(id)
            // 基于准备好的dom，初始化echarts实例
            const chartDom = document.getElementById('main') as HTMLElement;
            console.log(chartDom);
            const myChart = echarts.init(chartDom);
            // 绘制图表
            myChart.setOption({
              // 指定配置项和数据

              // 提示框组件
              tooltip: {
                show: true,
                trigger: 'item',
                position: 'top',
                // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式。
                formatter(params) {
                  // console.log(params)
                  if (params.value.length > 1) return `打卡数: ${ params.value[1]}`;
                },
              },
              // 视觉映射组件
              visualMap: {
                show: false, // 是否显示 visualMap-continuous 组件。如果设置为 false，不会显示，但是数据映射的功能还存在
                min: 0,
                max: 10,
                // 视觉映射的『定义域』
                calculable: true, // 是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
                seriesIndex: [1], // 指定取哪个系列的数据
                orient: 'horizontal',
                left: 'center',
                bottom: 20,
                inRange: {
                  // 定义 在选中范围中 的视觉元素。
                  color: ['#FFFFFF', '#FF0000'],
                  opacity: 0.3,
                },
                controller: {
                  inRange: {
                    opacity: 0.5,
                  },
                },
              },

              calendar: [
                {
                  left: 'center', // calendar组件离容器左侧的距离
                  top: 'middle', // calendar组件离容器上侧的距离。
                  cellSize: [45, 45], // 日历每格框的大小，可设置单值 或数组 第一个元素是宽 第二个元素是高。
                  yearLabel: { show: true },
                  orient: 'vertical',
                  dayLabel: {
                    firstDay: 1,
                    nameMap: 'cn',
                    show: true,
                  },
                  monthLabel: {
                    show: true,
                  },
                  range: rangeDate,
                },
              ],
              // 系列（series）是指：一组数值以及他们映射成的图
              // 一个 系列 包含的要素至少有：一组数值、图表类型（series.type）、以及其他的关于这些数据如何映射成图的参数
              series: [
                // 散点图
                {
                  type: 'scatter',
                  coordinateSystem: 'calendar',
                  symbolSize: 1,
                  label: {
                    show: true,
                    formatter(params) {
                      const d = echarts.number.parseDate(params.value[0]);
                      return d.getDate();
                      // + '\n\n' + params.value[2] + '\n\n';
                    },
                    color: '#000',
                  },
                  data: lunarData,
                },

                // 热力图
                {
                  name: '打卡数',
                  type: 'heatmap',
                  coordinateSystem: 'calendar',
                  data: heatmapData,
                },
              ],
            });
          });
        });
      },
    );
  }

  render() {
    return (
      <view
        style={{
          height: 950,
          width: 750,
          position: 'relative',
        }}
      >
        <view
          style={{
            width: 750,
            height: 700,
            marginTop: 20,
          }}
          // @ts-ignore
          ref={this.raxCanvasDemo}
          id="main"
        />
        <view
          style={{
            position: 'absolute',
            top: 630,
            transform: 'translateX(-50%)',
          }}
        >
          <button onClick={this.lastMonth}>上月</button>
          <button onClick={this.nextMonth}>下月</button>
        </view>
      </view>
    );
  }
}

export { EchartTest as default };
