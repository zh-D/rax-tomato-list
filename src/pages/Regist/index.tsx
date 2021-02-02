import { createElement, useState } from 'rax';
import View from 'rax-view';
// import Text from 'rax-text';
// import store from '@/store';
import { history } from 'rax-app';
import TextInput from 'rax-textinput';
//@ts-ignore
import back from '../../components/image/back.svg';
//@ts-ignore
import Image from '../../components/image/user_regist.svg';

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
    margin: '5px 5%',
    padding: '5px',
    border: '1px solid white',
    borderRadius: '5px',
    backgroundColor: '#f15858',
    color: 'white',
    fontSize: '15px',
  },
};

export default function Regist() {
  // const [userState, userDispatchers] = store.useModel('user');
  const [tel, settel] = useState('');
  const [password1, setpassword1] = useState('');
  const [password2, setpassword2] = useState('');
  // const [confirm, setconfirm] = useState('')
  return (
    <View style={{ heightL: '500px' }}>
      <div style={{ width: '100%', height: '5%', backgroundColor: '#f9f6f6' }}>
        <img
          src={back}
          height={30}
          width={30}
          onClick={() => {
            history.push('/login');
          }}
        />
      </div>
      <div>
        <div style={{ textAlign: 'center', height: '70px', margin: '30px 0' }}>
          <img src={Image} />
        </div>
        <TextInput style={styles.Input} placeholder="手机号/邮箱" onChange={(e) => settel(e.target.value)} />
        <TextInput
          style={styles.Input}
          placeholder="密码"
          password={true}
          onChange={(e) => setpassword1(e.target.value)}
        />
        <TextInput
          style={styles.Input}
          placeholder="确认密码"
          password={true}
          onChange={(e) => setpassword2(e.target.value)}
        />
        <br />
        <button
          type="submit"
          style={styles.Button}
          // onChange={()=>{console.log(tel,password1,password2,confirm)}}
          onClick={() => {
            if (password1 == password2) {
              alert('注册成功！');
              history.push('/login');
              //进行注册网络请求
              console.log(tel, password1, password2);
            } else {
              setpassword1('');
              setpassword2('');
              alert('密码不一致，请重新输入！');
              console.log(tel, password1, password2);
            }
            console.log(tel, password1, password2);
          }}
        >
          注 册
        </button>
      </div>
    </View>
  );
}
