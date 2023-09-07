import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Withdraw from './src/screens/Withdraw';
import  Constants  from 'expo-constants';
import { THEME } from './src/theme/color';

const NARANJA1 = THEME.COLORS.NARANJA1

export default function App() {
  return (
    <View style={styles.container}>
      <Withdraw />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NARANJA1,
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
