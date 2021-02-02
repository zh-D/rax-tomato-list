import { createElement, useEffect, useState, useRef } from 'rax';
import View from 'rax-view';
import store from '@/store';
import { history } from 'rax-app';

import TodoList from '../../components/Todolist';
// @ts-ignore
import loginImage from '../../components/image/login-image.jpg';
//@ts-ignore
import tomato from '../../components/image/tomato.png';

import './index.css';

const styles = {
  Input: {
    border: '1px solid gray',
    borderRadius: '5px',
    width: '90%',
    float: 'right',
    margin: '5px 5%',
  },
  Button: {
    width: '90%',
    margin: '50rpx 5%',
    padding: '5px',
    border: '1px solid white',
    borderRadius: '5px',
    backgroundColor: '#f15858',
    color: 'white',
    fontSize: '15px',
  },
};

export default function Home() {
  const [userState, userDispatchers] = store.useModel('user');

  return <View>{userState.isLogin ? <TodoList /> : <NotLoginYet />}</View>;
}

function NotLoginYet() {
  return (
    <View style={{ height: '500rpx' }}>
      <div style={{ textAlign: 'center', height: '80px' }}>
        <img src={loginImage} />
      </div>
      <div style={{ marginTop: '35%' }}>
        <button
          type="submit"
          style={styles.Button}
          onClick={() => {
            history.push('/login');
          }}
        >
          登 录/注 册
        </button>
      </div>
      <div style={{ marginTop: '20rpx' }}>
        <img src={tomato} alt="tomato" />
      </div>
    </View>
  );
}
