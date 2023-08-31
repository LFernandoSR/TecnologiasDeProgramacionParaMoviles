import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Person = ({ nombre, apellido, index }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: index % 2 === 0 ? "blue" : "red",
      }}
    >
      <Text style={{ fontSize: 40 }}>{nombre}</Text>
      <Text style={{ fontSize: 20 }}>{apellido}</Text>
    </View>
  );
};

export default Person;

const styles = StyleSheet.create({});