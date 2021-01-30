import { createElement, useState, useEffect } from 'rax';
import store from '@/store';
import { createStore, history } from 'rax-app';
import ScrollView from 'rax-scrollview';
import Item from '../../components/Item';
import Text from 'rax-text';
import Modal from 'rax-modal';
import TextInput from "rax-textinput";
import Image from 'rax-image';
import {useAPI,fetch} from '../../rapper';
//import styles from './index.module.css';


const styles = {
  root: {
    width: '750rpx',
    paddingTop: '20rpx'
  },
  container: {
    padding: '20rpx',
    borderStyle: "solid",
    borderColor: "#dddddd",
    borderWidth: '1rpx',
    marginLeft: '20rpx',
    marginRight: '20rpx',
    marginBottom: '10rpx'
  },
  default: {
    borderWidth: '1rpx',
    borderColor: "#0f0f0f",
    flex: 1
  },
  eventLabel: {
    margin: '3rpx',
    fontSize: '24rpx'
  },
  multiline: {
    borderWidth: '1rpx',
    borderColor: "#0f0f0f",
    flex: 1,
    fontSize: '26rpx',
    height: '100rpx',
    padding: '8rpx',
    marginBottom: '8rpx'
  },
  hashtag: {
    color: "blue",
    margin: '10rpx',
    fontWeight: "bold"
  }
};


export default function () {
   const Data=[
    {
        "id":1,
        "key":1,
        "name":"11111"
    },
    {
        "id":2,
        "key":2,
        "name":"22222"
    },
    {
        "id":3,
        "key":3,
        "name":"33333"
    },
    {
        "id":4,
        "key":4,
        "name":"44444"
    },
    {
        "id":5,
        "key":5,
        "name":"55555"
    }
        ];
  const [userState, userDispatchers] = store.useModel('user');
  const [visible, setVisible] = useState(false);
  const [name,setName]=useState('')
  const [priority,setPriority]=useState(null)
  const [createDate,setCreateDate]=useState('')
  const [itemList, setItemList] = useState(Data);
  function add(){
    var d = new Date();
		var str = '';
		str += d.getFullYear() + '年'; //获取当前年份 
		str += d.getMonth() + 1 + '月'; //获取当前月份（0——11） 
		str += d.getDate() + '日';
				// str += d.getHours() + '时';
				// str += d.getMinutes() + '分';
        // str += d.getSeconds() + '秒';
   
    setCreateDate(str)
    console.log(createDate)
    var text={
      name,
      priority,
      createDate
    }    
    console.log(text)
    Data.push(text);
    console.log(Data)
    setName('')
    setPriority(null)
    setCreateDate('')
    setVisible(false)
    setItemList(Data)

  }
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
      {/* <Image  
        mode="aspectFit"
        className="head-img"
        source={{
          uri:'../../picture/head.jpg'
        }}
        style={{
          height: '68rpx',
          width: '67rpx',
        }}
        /> */}
      <ScrollView className="item-list">
      {itemList.map(item => {
        return (
        <Item detail={item} />
        )
      })}
    </ScrollView>
    <button type="button" onClick={()=>{ setVisible(true)}}>
      添加
    </button>
    <Modal
      visible={visible}
      onHide={() => {
        console.log('hide');
      }}
      onShow={() => {
        console.log('show');
      }}
      onMaskClick={() => {
        setVisible(false);
      }}
      contentStyle={{
        position: 'absolute',
        top: '50rpx',
        width: '400rpx',
        left: '175rpx',
        height:'200rpx'
      }}
    >
      <view>
        <label>名称：</label>
      <TextInput
          multiline={true}
          numberOfLines={3}
          style={styles.multiline}
          // value={text.name}
          onChange={e => {
            setName(e.value);
          }}
        />
      </view>
      <view>
        <label>优先级</label>
      <TextInput
          style={styles.multiline}
          // value={this.state.text}
          onChangePriority={e => {
            setPriority(e.value);
          }}
        />
      </view>
        <button onClick={()=>add()}>添加</button>
       
    </Modal>
    </>
  );
}

