import { createElement, useState, useEffect } from 'rax';
import store from '@/store';
import View from 'rax-view'
import { history } from 'rax-app';
import userImage from '../../components/image/login-image.jpg'
import tomato from '../../components/image/tomato.png'

export default function () {
  const [userState, userDispatchers] = store.useModel('user');
  return (

      <View style={{height: '500rpx'}}>
          <div style={{textAlign:'center',height:'80px'}}>
            <img src={userImage} />
          </div>
          <div  style={{marginTop:'35%'}} >
            <button
            type='submit'
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
                userDispatchers.update(userState.isLogin);
                history.push('/');
              }}
            >
          登 出
        </button>
        </div>
        <div style={{marginTop:'20rpx'}} >
          <img src={tomato} alt="tomato"/>
        </div>
      </View>
  );
}
