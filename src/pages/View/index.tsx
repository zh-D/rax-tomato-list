import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import GroupHistograms from '../../components/view/GroupHistograms';
import styles from './index.module.css';
import EchartTest from '../../components/view/EchartTest';
import HeatMap from '../../components/view/HeatMap';

export default function Login() {
  return (
    <View className={styles.container}>
      <View style={{ textAlign: 'center' }}>
        <Text>日管理</Text>
        <GroupHistograms />
      </View>
      <View style={{ textAlign: 'center', marginTop: 50 }}>
        <Text>周管理</Text>
        <HeatMap />
      </View>
      <View style={{ textAlign: 'center', marginTop: 50 }}>
        <Text>月管理</Text>
        <EchartTest />
      </View>
    </View>
  );
}
