import View from 'rax-view';
import { createElement, useEffect, useState, useRef } from 'rax';
import { history } from 'rax-app';
// @ts-ignore
import back from '../../components/image/back.svg';
// @ts-ignore
import addImage from '../../components/image/add_event.svg';
import './index.css';
import request from 'universal-request';

export default function AddTodo() {
  const [newItem, setNewItem] = useState('');
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
      <view class="page-add-todo">
        <view class="add-todo">
          <input
            class="add-todo-input"
            placeholder="此处添加需要做的事项?"
            onChange={
              // @ts-ignore
              (e) => setNewItem(e.target.value) //输入的内容
              //添加事件请求
            }
          />
        </view>

        <view class="todo-footer">
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
              request({
                url: 'http://localhost:8888/todo/getHeat',
                method: 'GET',
                data: { newItem },
              }).then((res) => {
                history.push('/');
              });
            }}
          >
            添加
          </button>
        </view>
      </view>
    </View>
  );
}
