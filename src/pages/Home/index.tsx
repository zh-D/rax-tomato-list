import { createElement, useEffect, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import store from '@/store';
import { history } from 'rax-app';

import styles from './index.module.css';

export default function Home() {
  const [userState, userDispatchers] = store.useModel('user');
  useEffect(() => {
    // 在这里检查登录状态
  }, []);
  return (
    <View>
      {userState.isLogin ? (
        <View>我是首页</View>
      ) : (
        <button
          onClick={() => {
            history.push('/login');
          }}
        >
          去登录
        </button>
      )}
    </View>
  );
}
