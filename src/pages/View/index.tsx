import HeatMap from '@/components/View/HeatMap';
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import LineChart from '../../components/View/LineChart';
import styles from './index.module.css';

export default function Login() {
  return (
    <View className={styles.container}>
      <View style={{ textAlign: 'center' }}>
        <Text>日管理</Text>
        <LineChart />
      </View>
      <View>
        <Text style={{ textAlign: 'center', marginTop: 100 }}>周管理</Text>
        <HeatMap />
      </View>
    </View>
  );
}
