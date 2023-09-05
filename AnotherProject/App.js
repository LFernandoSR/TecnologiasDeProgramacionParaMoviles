import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar as ReactStatus, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
//safeareaview es como el statusbar pero para ios

export default function App() {
  return (
    //<SafeAreaView>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Ionicons name="notifications" size={24} color="black" />
      <StatusBar style="auto" />
    </View>
    //</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    //paddingTop: ReactStatus.currentHeight,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
