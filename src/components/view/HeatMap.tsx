import { createElement, Component, createRef } from 'rax';
import Canvas from 'rax-canvas';
import F2 from '@antv/f2';

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
  //@ts-ignore
  obj.name = item[0];
  //@ts-ignore
  obj.day = item[1];
  //@ts-ignore
  obj.sales = item[2];
  //@ts-ignore
  source.push(obj);
}

export default class HeatMap extends Component {
  constructor(props) {
    super(props);
    //@ts-ignore
    this.raxCanvasDemo = createRef();
  }
  componentDidMount() {
    //@ts-ignore
    const id = this.raxCanvasDemo.current.props.id;
    console.log(id);
    const chart = new F2.Chart({
      id,
      pixelRatio: window.devicePixelRatio,
    });
    chart.source(source, {
      name: {
        type: 'cat',
        values: ['3', '6', '9', '12', '15', '18', '21', '24'],
      },
      day: {
        type: 'cat',
        values: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'],
      },
    });

    chart
      .polygon()
      .position('name*day')
      .color('sales', '#BAE7FF-#1890FF-#0050B3')
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
    // .getContext();
    // context.fillStyle = 'red';
    // context.fillRect(0, 0, 100, 100);
  }

  render() {
    return (
      <Canvas
        catchtouchstart="touchStart"
        catchtouchend="touchEnd"
        style={{
          width: 750,
          height: 250,
        }}
        //@ts-ignore
        ref={this.raxCanvasDemo}
        id="canv2"
      />
    );
  }
}

// @ts-ignore
// render(<CanvasSample />, document.getElementById('root'), { driver: DriverUniversal });
