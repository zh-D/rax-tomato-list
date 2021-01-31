import CanvasSample from '@/components/view/EchartTest';
import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import GroupHistograms from '../../components/View/GroupHistograms';
import styles from './index.module.css';
import EchartDate from '../../components/View/EchartDate';
import HeatMap from '../../components/View/HeatMap'


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
      <View style={{ textAlign: 'center', marginTop: 100 }}>
        <Text>月管理</Text>
        <EchartDate />
      </View>
    </View>
  );
}
