import 'react-native-gesture-handler';
import { StyleSheet, Image, View } from "react-native";
import Constants from "expo-constants";
import { Layout } from './src/routes/Router';
import AuthContextProvider from "./src/context/authContext";



export default function App() {
  return (
    <AuthContextProvider>
        <Layout/>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});