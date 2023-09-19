import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons'; 


const CustomButton = ({ text, onPress, light }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, light && styles.whiteButton]} >
      <Text style={{color: 'black'}}>{text}</Text>
      <AntDesign name="addfile" size={16} color="black" />
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    width: 100,
    alignItems: "center",
    borderColor: "black",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  whiteButton: {
    color: "black",
    borderColor: "black",
    
  },
});