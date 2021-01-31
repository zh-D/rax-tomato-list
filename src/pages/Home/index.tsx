import { createElement, useEffect, useState, useRef } from 'rax';
import View from 'rax-view';
// import Text from 'rax-text';
import TextInput from 'rax-textinput'
import store from '@/store';
import { history } from 'rax-app';
import homeImage from '../../components/image/home_background.png'
import menuImage from '../../components/image/home_menu.svg'
import bellImage from '../../components/image/bell.svg'
import addImage from '../../components/image/add.svg'
import loginImage from '../../components/image/login-image.jpg'
import tomato from '../../components/image/tomato.png'
import deleteIcon from '../../components/image/delete.svg'
import './index.css';



const styles = {
  Input: {
    border: '1px solid gray',
    borderRadius: '5px',
    width: '90%',
    float: 'right',
    margin: '5px 5%'
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
  }
}





export default function Home() {
  const [userState, userDispatchers] = store.useModel('user');
  useEffect(() => {
    // 在这里检查登录状态
  }, []);
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
  const [data, setdata] = useState(Data)
  const dataRef = useRef(data)
  dataRef.current=data

  function Item({detail}){
    const onTodoChange=(e) => {
      let D=data.map(todo => {
          if(todo.name ===e.target.value){
            return {
              ...todo,
              isFinish:e.target.checked
            }
          }else {
            return todo
          }
      });
      // console.log(e,e.target.value,e.target.checked,Data,D)
      setdata(D)
    }
    const deleteTodo=(e)=>{
      console.log(e.target.id)//事件id
      //请求
      
    }
    return (
      <View className="todo-items">
        {
          detail.isFinish? (
            <div className="todo-items-group"  onChange={onTodoChange} >
              <label  className="todo-item checked"  >
                <input 
                  type="checkbox" 
                  className="todo-item-checkbox"
                  value={detail.name}
                  checked={detail.isFinish}
                />
                <text  className="todo-item-text">
                  {detail.name}
                </text>
                <img 
                  id={detail.id}
                  src={deleteIcon} 
                  alt="delete" 
                  className="deleteButton" 
                  onClick={deleteTodo}
                />
              </label>
            </div>
          ):(
            <View className="todo-items-group"  onChange={onTodoChange}    >
              <label  className="todo-item"  >
                <input 
                  type="checkbox" 
                  className="todo-item-checkbox"
                  value={detail.name}
                  checked={detail.isFinish}
                />
                <text  className="todo-item-text">
                  {detail.name}
                </text>
                <img 
                  id={detail.id}
                  src={deleteIcon} 
                  alt="delete"  
                  className="deleteButton" 
                  onClick={deleteTodo}
                />
              </label>
            </View>
          )
        }
      </View>
    )
  }

  return (
    <View>
      {userState.isLogin ? (
        <View>
          <View>
            <div style={{backgroundColor:'rgb(255 248 248)'}} >
              <img src={menuImage} height={30} style={{margin:'5rpx 0 0 10rpx'}} />
              <img src={bellImage} height={30} style={{margin:'5rpx 10rpx 0 0',float: 'right'}}  />
            </div>
            <img src={homeImage} />
          </View>
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
            data.map(e=> {
              return (
                <Item detail={e} key={e.id} />
              )
            })
          }
          <View>
            <img 
            src={addImage}
             height={40} 
             style={{position: 'fixed',bottom:'12%',right:'5%'}} 
             onClick={()=>{
              history.push('/add');
             }} 
             />
          </View>
        </View>
        
      ) : (
        <View style={{height: '500rpx'}}>
          <div style={{textAlign:'center',height:'80px'}}>
            <img src={loginImage} />
          </div>
          <div  style={{marginTop:'35%'}} >
            <button
            type='submit'
              style={styles.Button}
              onClick={() => {
                history.push('/login');
              }}
            >
          登 录/注 册
        </button>
        </div>
        <div style={{marginTop:'20rpx'}} >
          <img src={tomato} alt="tomato"/>
        </div>
      </View>
      )}
    </View>
  );
}
