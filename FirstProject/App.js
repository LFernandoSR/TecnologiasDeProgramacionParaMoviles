import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";
import Screen3 from './src/screens/Screen3';

export default function App() {
  return (
    <View style={styles.container}>
      <Screen3 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 10,
  },
});