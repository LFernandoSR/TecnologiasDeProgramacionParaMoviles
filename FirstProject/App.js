import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View,} from "react-native";
import Constants from "expo-constants";
import Characters from "./src/screens/Characters";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Characters />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
  },
});