import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  StatusBar as ReactStatus,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import WelcomeScreen from "./src/screens/welcomeScreen";

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,

  },
});