import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Login = ({ navigation, route }) => {
  const { name } = route.params;
  return (
    <View>
      <Text>Login</Text>
      <Text>{name}</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});