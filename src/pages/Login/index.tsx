import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
// import Text from 'rax-text';
import store from '@/store';
import { history } from 'rax-app';
import TextInput from 'rax-textinput';
//@ts-ignore
import loginImage from '../../components/image/user.svg';

const styles = {
  loginInput: {
    border: '1px solid gray',
    borderRadius: '5px',
    width: '90%',
    float: 'right',
    margin: '5px 5%',
  },
  loginButton: {
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

export default function Login() {
  const [userState, userDispatchers] = store.useModel('user');
  const [tel, settel] = useState('');
  const [password, setpassword] = useState('');

  return (
    <View style={{ heightL: '500rpx', backgroundImage: 'liner-gradient(lightpink,white)' }}>
      <div style={{ textAlign: 'center', height: '80px', margin: '30px 0' }}>
        <img src={loginImage} />
      </div>
      <TextInput
        style={styles.loginInput}
        placeholder="手机号/邮箱"
        value={tel}
        onChange={(e) => settel(e.target.value)}
      />
      <TextInput
        style={styles.loginInput}
        placeholder="密码"
        password={true}
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <br />
      <button
        type="submit"
        style={styles.loginButton}
        onClick={() => {
          userDispatchers.update(userState.isLogin);
          history.push('/');
          console.log(tel, password); //获取账号和密码
          //此处进行登陆的网络请求
        }}
      >
        登 录
      </button>
      <View style={{ display: 'inline' }}>
        <p
          style={{
            width: '30%',
            float: 'left',
            marginLeft: '7%',
            color: 'skyblue',
          }}
          onClick={() => {
            history.push('/forget');
          }}
        >
          忘记密码?
        </p>
        <p
          style={{
            width: '20%',
            float: 'right',
            color: 'skyblue',
          }}
          onClick={() => {
            history.push('/regist');
          }}
        >
          注册
        </p>
      </View>
    </View>
  );
}
