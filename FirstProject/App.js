import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import Constants from "expo-constants";
import WelcomeScreen from "./src/screens/welcomeScreen";

export default function App() {

  return (
    <View style={styles.container}>
      <WelcomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Constants.statusBarHeight,
  },
});