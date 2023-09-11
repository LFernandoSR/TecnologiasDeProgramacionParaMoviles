import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, StatusBar as ReactStatus,} from "react-native";
import Constants from "expo-constants";
import Welcome from "./src/screens/Welcome";
import WelcomeBack from "./src/screens/WelcomeBack";
import NewAccount from "./src/screens/NewAccount";

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NewAccount />
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