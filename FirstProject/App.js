import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";
import Router1 from './src/routes/router1';
import { NavigationContainer } from '@react-navigation/native';
import {ThemeProvider} from './src/context/ThemeContext';

export default function App() {
  return (
    <NavigationContainer>
    <ThemeProvider>
      <Router1/>
      <StatusBar style="auto" />
    </ThemeProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 10,
  },
});