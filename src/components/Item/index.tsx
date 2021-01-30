import { createElement } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';
import Text from 'rax-text';
import './index.module.css';

export default function({ detail }) {
  return (
    <View className="item-container">
      <View className="book-info">
        <Text className="item"  >{detail.name}</Text>
       
      </View>
    </View>
  );
}