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
import Text from 'rax-text';
import { fetch } from '@/rapper';
import { Data } from './interface';

// const Data = [
//   {
//     _id: 1,
//     name: 'event1',
//     isFinish: false,
//   },
//   {
//     _id: 2,
//     name: 'event2',
//     isFinish: false,
//   },
//   {
//     _id: 3,
//     name: 'event3',
//     isFinish: true,
//   },
//   {
//     _id: 4,
//     name: 'event4',
//     isFinish: false,
//   },
// ];

export default function TodoList() {
  const [dataSource, setdataSource] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const res = await request({
        url: 'http://localhost:8888/todo/getList',
        method: 'GET',
      });
      setdataSource(res.data.data);
    };
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, []);

  const onTodoChange = async (item: Data): Promise<void> => {
    setIsLoading(true);
    const res = await request({
      url: 'http://localhost:8888/todo/finish',
      method: 'GET',
      data: { isFinish: String(item.isFinish), id: item._id },
    });
    console.log(res.data.data);
    setdataSource(res.data.data);
    setIsLoading(false);
  };

  const deleteTodo = async (item: Data): Promise<void> => {
    setIsLoading(true);
    const res = await request({
      url: 'http://localhost:8888/todo',
      method: 'DELETE',
      data: { _id: item._id },
    });
    console.log(res.data.data);
    setdataSource(res.data.data);
    setIsLoading(false);
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
      {isLoading ? (
        <View style={{ backgroundColor: 'pink', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: '#f00', fontSize: 30 }}>The Data is Loading ...</Text>
        </View>
      ) : dataSource ? (
        dataSource
          .sort((x: Data, y: Data) => (x.isFinish === y.isFinish ? 0 : x.isFinish ? -1 : 1))
          .map((item: Data) => {
            return (
              <Item
                key={item._id}
                item={item}
                onTodoChange={(item: Data): Promise<void> => onTodoChange(item)}
                deleteTodo={(item: Data): Promise<void> => deleteTodo(item)}
              />
            );
          })
      ) : null}
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
