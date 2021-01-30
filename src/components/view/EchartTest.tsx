import { createElement, Component, render, createRef } from 'rax';
import Canvas from 'rax-canvas';
import DriverUniversal from "driver-universal"
import echarts from '../../../node_modules/echarts'


class CanvasSample extends Component  {
  constructor(props) {
    super(props);
    this.raxCanvasDemo = createRef()

  }
  componentDidMount() {
    const id = this.raxCanvasDemo.current.props.id;
    console.log(id)
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById(id));
    // 绘制图表
    myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
  }

  render() {
    return (
        <Canvas
        style={{
          width: 750,
          height: 750,
        }}
        //@ts-ignore
        ref={this.raxCanvasDemo}
        id="main"
      />
    );
  }
}

//@ts-ignore
//render(<CanvasSample />, document.getElementById('root'), { driver: DriverUniversal });
