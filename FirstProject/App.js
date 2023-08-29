import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, TextInput } from "react-native";
import Login from "./src/screens/login";

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
      <StatusBar style='auto' backgroundColor='#fff'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
