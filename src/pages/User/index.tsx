import { createElement, useState, useEffect } from 'rax';
import store from '@/store';
import { createStore, history } from 'rax-app';
import ScrollView from 'rax-scrollview';
import Item from '../../components/Item';
import Text from 'rax-text';
import Modal from 'rax-modal';
import TextInput from "rax-textinput";
//import am-icon from "mini-ali-ui";
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
        "name":"11111",
        "createDate":'2021/1/30',
        "isFinish":false,
        "priority":1,
    },
    {
        "id":2,
        "name":"22222",
        "createDate":'2021/1/30',
        "isFinish":true,
        "priority":1,
    },
    {
        "id":3,
        "name":"33333",
        "createDate":'2021/1/30',
        "isFinish":false,
        "priority":1,
    },
    {
        "id":4,
        "name":"44444",
        "createDate":'2021/1/30',
        "isFinish":false,
        "priority":1,
    },
    {
        "id":5,
        "name":"55555",
        "createDate":'2021/1/30',
        "isFinish":true,
        "priority":1,
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
		str += d.getFullYear() + '/'; //获取当前年份 
		str += d.getMonth() + 1 + '/'; //获取当前月份（0——11） 
		str += d.getDate() + '/';
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
  function done(id){
    var temp=Data;
    temp.forEach(item=>{
      if (item.id===id){
        item.isFinish=true;
      }
    })
    console.log(temp)
    setItemList(temp)
    console.log(itemList)
    //此处补充完成及重新请求的代码
  }

  function deleteItem(id){
    console.log(id);
    var temp=Data;
    temp.forEach((item,index)=>{
      if (item.id===id){
       Data.splice(index,1)
      }
    })
    setItemList(Data)
    console.log(itemList)
    //此处补充删除及重新请求的代码
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
      <ScrollView 
      style={{
        height: '300rpx',
      }}
      >
      {itemList.map(item => {
        return (
          <view>
          {item.isFinish ? (
            <Text className="item"
              style={{textDecoration: 'line-through'}} 
                >{item.name}</Text>
            ) :( <Text className="item">{item.name}</Text>)}
         
          <button onClick={()=>done(item.id)} disabled={item.isFinish}>完成</button>
          <button  onClick={()=>deleteItem(item.id)}>删除</button>
          
        
          </view>
        )
          }
      )
        }
      
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
          onChange={e => {
            console.log("e:",e)
            setPriority(e.value);
          }}
        />
      </view>
        <button type={'submit'}  onClick={()=>add()}>添加</button>
       
    </Modal>
    </>
  );
}

