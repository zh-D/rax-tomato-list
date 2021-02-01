/* eslint-disable @iceworks/best-practices/no-http-url */
import { createElement, useEffect, useState, useRef } from 'rax';
import View from 'rax-view';
// @ts-ignore
import homeImage from '../image/home_background.png';
// @ts-ignore
import menuImage from '../image/home_menu.svg';
// @ts-ignore
import bellImage from '../image/bell.svg';
// @ts-ignore
import addImage from '../image/add.svg';
import { history } from 'rax-app';
import Item from './Item';
import request from 'universal-request';

const Data = [
  {
    _id: 1,
    name: 'event1',
    isFinish: false,
  },
  {
    _id: 2,
    name: 'event2',
    isFinish: false,
  },
  {
    _id: 3,
    name: 'event3',
    isFinish: true,
  },
  {
    _id: 4,
    name: 'event4',
    isFinish: false,
  },
];

export default function TodoList() {
  const [dataSource, setdataSource] = useState(Data);

  useEffect(() => {
    request({
      url: 'http://localhost:8888/todo/getList',
      method: 'GET',
    }).then((res) => {
      setdataSource(res.data.data);
    });
  }, []);

  const onTodoChange = (item) => {
    request({
      url: 'http://localhost:8888/todo/finish',
      method: 'GET',
      data: { isFinish: item.isFinish, id: item._id },
    }).then((res) => {
      console.log(res);
      setdataSource(res.data.data);
    });
  };

  const deleteTodo = (item) => {
    request({
      url: 'http://localhost:8888/todo',
      method: 'DELETE',
      data: { _id: item._id },
    }).then((res) => {
      setdataSource(res.data.data);
    });
  };
  return (
    <View>
      <View>
        <div style={{ backgroundColor: 'rgb(255 248 248)' }}>
          <img src={menuImage} height={30} style={{ margin: '5rpx 0 0 10rpx' }} />
          <img src={bellImage} height={30} style={{ margin: '5rpx 10rpx 0 0', float: 'right' }} />
        </div>
        <img src={homeImage} />
      </View>
      {dataSource
        ? dataSource.map((item) => {
          return (
            <Item
              key={item._id}
              item={item}
              onTodoChange={(item) => onTodoChange(item)}
              deleteTodo={(item) => deleteTodo(item)}
            />
          );
        })
        : null}
      <View>
        <img
          src={addImage}
          height={40}
          style={{ position: 'fixed', bottom: '12%', right: '5%' }}
          onClick={() => {
            history.push('/add');
          }}
        />
      </View>
    </View>
  );
}
