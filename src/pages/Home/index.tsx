import { createElement, useEffect, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import store from '@/store';
import { history } from 'rax-app';

import styles from './index.module.css';


const Data = [
  {
    "id": 1,
    "name": "event1",
    "isFinish": false,
  },
  {
    "id": 2,
    "name": "event2",
    "isFinish": false,
  },
  {
    "id": 3,
    "name": "event3",
    "isFinish": true,
  },
  {
    "id": 4,
    "name": "event4",
    "isFinish": false,
  },
]

function Item({detail}){
  return (
    <View>
      {
        detail.isFinish? (
          <Text   style={{textDecoration:'line-through'}}  >
            {detail.name}
          </Text>
        ):(
          <p  style={{fontWeight: 'bold'}} >
                {detail.name}
          </p>
        )
      }
    </View>
  )
}

export default function Home() {
  const [userState, userDispatchers] = store.useModel('user');
  useEffect(() => {
    // 在这里检查登录状态
  }, []);
  return (
    <View>
      {userState.isLogin ? (
        <View>
          {/* {Data.map(e => {
            return e.isFinish?
               (<div>
                <p key={e.id} style={{textDecoration:'line-through'}} >
                  {e.name}
                </p>
                </div>
              )
            : (
              <p key={e.id} style={{fontWeight: 'bold'}} >
                {e.name}
              </p>
            )
          })} */}
          {
            Data.map(e=> {
              return (
                <Item detail={e} key={e.id} />
              )
            })
          }
        </View>
        
      ) : (
        <button
          onClick={() => {
            history.push('/login');
          }}
        >
          登录
        </button>
      )}
    </View>
  );
}
