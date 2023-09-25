import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login", { name: "Hola" })}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});