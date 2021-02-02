/* eslint-disable @iceworks/best-practices/no-http-url */
import View from 'rax-view';
import { createElement, useEffect, useState, useRef } from 'rax';
import { history } from 'rax-app';
// @ts-ignore
import back from '../../components/image/back.svg';
// @ts-ignore
import addImage from '../../components/image/add_event.svg';
import './index.css';
import request from 'universal-request';
import { time } from 'echarts';

export default function AddTodo() {
  const [newItem, setNewItem] = useState('');
  const [timestamp, setTimestamp] = useState(0);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    console.log(newItem);
    if (timestamp && newItem) {
      console.log('lll');
      const fetchData = async (): Promise<void> => {
        try {
          await request({
            url: 'http://localhost:8888/todo',
            method: 'GET',
            data: { name: newItem },
          });
        } catch (error) {
          setIsError(true);
        }
      };
      fetchData();
      history.push('/');
    }
  }, [timestamp]);

  console.log(newItem);

  return (
    <View>
      <div style={{ width: '100%', height: '5%', backgroundColor: '#f9f6f6' }}>
        <img
          src={back}
          height={30}
          width={30}
          onClick={() => {
            history.push('/');
          }}
        />
      </div>
      <div style={{ textAlign: 'center', marginTop: '15%' }}>
        <img src={addImage} alt="add" height={50} />
      </div>
      <view className="page-add-todo">
        <view className="add-todo">
          <input
            className="add-todo-input"
            placeholder="此处添加需要做的事项?"
            onChange={
              // @ts-ignore
              (e) => setNewItem(e.target.value) // 输入的内容
              // 添加事件请求
            }
          />
        </view>

        <view className="todo-footer">
          <button
            style={{
              width: '90%',
              margin: '50rpx 5%',
              padding: '5px',
              border: '1px solid white',
              borderRadius: '5px',
              backgroundColor: '#f15858',
              color: 'white',
              fontSize: '15px',
            }}
            onClick={() => {
              setTimestamp(Date.now());
            }}
          >
            添加
          </button>
        </view>
      </view>
    </View>
  );
}
