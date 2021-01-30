import { createElement, useState, useEffect } from 'rax';
import store from '@/store';
import { history } from 'rax-app';

export default function () {
  const [userState, userDispatchers] = store.useModel('user');
  return (
    <>
      我是用户页
      <button
        onClick={() => {
          userDispatchers.update(userState.isLogin);
          history.push('/');
        }}
      >
        登出
      </button>
    </>
  );
}
