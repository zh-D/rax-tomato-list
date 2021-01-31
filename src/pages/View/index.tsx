import HeatMap from '@/components/View/HeatMap';
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import GroupHistograms from '../../components/View/GroupHistograms';
import styles from './index.module.css';

export default function Login() {
  return (
    <View className={styles.container}>
      <View style={{ textAlign: 'center' }}>
        <Text>日管理</Text>
        <GroupHistograms />
      </View>
      <View style={{ textAlign: 'center', marginTop: 100 }}>
        <Text>周管理</Text>
        <HeatMap />
      </View>
    </View>
  );
}
