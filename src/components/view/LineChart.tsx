import F2 from '@antv/f2';
import { createElement, useEffect, useState } from 'rax';
import createF2 from 'f2react';
import View from 'rax-view';
import { fetch } from '../../rapper';

interface Data {
  value: number;
  tag: number;
  name: string;
  id: number;
  createDate: string;
  // endData: string;
}
export default function LineChart() {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    fetch['GET/todo/getHeat'](
      {
        // 这里是请求参数
      },
      {
        // 第二参为可选配置
        // 请求头 content-type，默认是 'application/json'
        contentType: 'application/json',
      },
    ).then((res) => {
      // 使用返回值
      setData(res.data);
    });
  }, []);

  const Bar = createF2((chart) => {
    chart.interval().position('x*y');
    chart.render();
  });

  return <view>{JSON.stringify(data, null, 4)}</view>;
}
