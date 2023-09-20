import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = ({ text, onPress, light }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, light && styles.whiteButton]} >
      <Text style={{ fontSize: 14}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white"
  },
  whiteButton: {
    color: "white",
    borderColor: "white",
  },
});