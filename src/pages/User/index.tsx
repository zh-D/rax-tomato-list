import { createElement, useState, useEffect } from 'rax';
import store from '@/store';
import View from 'rax-view'
import { history } from 'rax-app';
import userImage from '../../components/image/login-image.jpg'
import tomato from '../../components/image/tomato.png'

export default function () {
  const Data = [
    {
      "id": 1,
      "name": "11111",
      "createDate": '2021/1/30',
      "isFinish": false,
      "priority": 1,
    },
    {
      "id": 2,
      "name": "22222",
      "createDate": '2021/1/30',
      "isFinish": true,
      "priority": 1,
    },
    {
      "id": 3,
      "name": "33333",
      "createDate": '2021/1/30',
      "isFinish": false,
      "priority": 1,
    },
    {
      "id": 4,
      "name": "44444",
      "createDate": '2021/1/30',
      "isFinish": false,
      "priority": 1,
    },
    {
      "id": 5,
      "name": "55555",
      "createDate": '2021/1/30',
      "isFinish": true,
      "priority": 1,
    }
  ];
  const [userState, userDispatchers] = store.useModel('user');
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('')
  const [priority, setPriority] = useState('')
  const [createDate, setCreateDate] = useState('')
  const [itemList, setItemList] = useState(Data);
  function add() {
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
    var text = {
      name,
      priority,
      createDate
    }
    console.log(text)
    Data.push(text);
    console.log(Data)
    setName('')
    setPriority('')
    setCreateDate('')
    setVisible(false)
    setItemList(Data)

  }
  function done(id) {
    var temp = Data;
    temp.forEach(item => {
      if (item.id === id) {
        item.isFinish = true;
      }
    })
    console.log(temp)
    setItemList(temp)
    console.log(itemList)
    //此处补充完成及重新请求的代码
  }

  function deleteItem(id) {
    console.log(id);
    var temp = Data;
    temp.forEach((item, index) => {
      if (item.id === id) {
        Data.splice(index, 1)
      }
    })
    setItemList(Data)
    console.log(itemList)
    //此处补充删除及重新请求的代码
  }
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

