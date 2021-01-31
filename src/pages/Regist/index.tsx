import { createElement } from 'rax';
import View from 'rax-view';
// import Text from 'rax-text';
// import store from '@/store';
import { history } from 'rax-app';
import TextInput from "rax-textinput";
import  back  from '../../components/image/back.svg'
import Image from '../../components/image/user_regist.svg'


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
    margin: '5px 5%',
    padding: '5px',
    border: '1px solid white',
    borderRadius: '5px',
    backgroundColor: '#f15858',
    color: 'white',
    fontSize: '15px',
  }
}


export default function Regist() {
  // const [userState, userDispatchers] = store.useModel('user');

  return (
    <View style={{heightL: '500px'}}>
        <div style={{width: '100%',height: '5%',backgroundColor:'#f9f6f6'}} >
          <img
            src={back}
            height={30}
            width={30}
            onClick={() => {
              history.push('/login');
            }}
          />
        </div>
        <div >
        <div style={{textAlign:'center',height:'70px',margin:'30px 0'}} >
          <img src={Image} />
        </div>
        <TextInput
          style={styles.Input}
          placeholder='手机号/邮箱'
        />
        <TextInput
          style={styles.Input}
          placeholder='密码'
          password={true}
        />
        <TextInput
          style={styles.Input}
          placeholder='再次确认密码'
          password={true}
        />
      <br />
      <button
      type='submit'
        style={styles.Button}
        onClick={() => {
          history.push('/login');
        }}
      >
        注 册
      </button>
        </div>
    </View>
  );
}
