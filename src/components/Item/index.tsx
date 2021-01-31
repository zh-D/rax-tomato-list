import { createElement } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';
import Text from 'rax-text';
import './index.module.css';

export default function({ detail }) {
  function done(detail){
    detail.isFinish=true;
    //此处补充完成及重新请求的代码
  }

  function deleteItem(id){
    console.log(id);
    //此处补充删除及重新请求的代码
  }
  return (
    
    <View className="item-container">
      <View className="item-info">
      {detail.isFinish ? (
      <Text className="item"
        style={{textDecoration: 'line-through'}} 
          >{detail.name}</Text>
      ) :( <Text className="item">{detail.name}</Text>)}
   
    <button onClick={()=>done(detail)} disabled={detail.isFinish}>完成</button>
    <button onClick={()=>deleteItem(detail.id)}>删除</button>
    </View>
    </View> 
    
  );
}