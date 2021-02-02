import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import GroupHistograms from '../../components/View/GroupHistograms';
import styles from './index.module.css';
import EchartDate from '../../components/View/EchartDate';
import HeatMap from '../../components/View/HeatMap';

export default function Login() {
  return (
    <View className={styles.container}>
      <View className={`${styles.top0} ${styles.chart}`}>
        <Text>日管理</Text>
        <GroupHistograms />
      </View>
      <View className={styles.chart}>
        <Text>周管理</Text>
        <HeatMap />
      </View>
      <View className={styles.chart}>
        <Text>月管理</Text>
        <EchartDate />
      </View>
    </View>
  );
}
