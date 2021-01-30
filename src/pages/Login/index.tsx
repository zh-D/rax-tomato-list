import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import store from '@/store';
import { history } from 'rax-app';

export default function Login() {
  const [userState, userDispatchers] = store.useModel('user');

  return (
    <>
      这是登录页
      <br />
      <button
        onClick={() => {
          userDispatchers.update(userState.isLogin);
          history.push('/');
        }}
      >
        登录
      </button>
    </>
  );
}
