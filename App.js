import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import iosText from './iosText';
import webText from './webText';

const CustomText = Platform.select({
  ios: () => iosText,
  web: () => webText,
})

export default function App() {
  return (
    <View style={styles.container}>
      <CustomText />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.select({
      android: 'red',
      ios: 'blue',
      web: 'green'
    }),
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
        paddingTop: 20,
      },
      android: {
        backgroundColor: 'red',
        padding: 20,
      },
      web: {
        backgroundColor: 'yellow',
        paddingTop: 20,
      },
    })
  },
  text: {
    color: Platform.OS === 'web' ? 'black': 'white',
  },
});
