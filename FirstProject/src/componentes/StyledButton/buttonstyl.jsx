import React from 'react'
import { StyleSheet, Button, View, TouchableOpacity, Text } from "react-native";

const StyledButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer:{
    color: "#fff",
    fontSize: 20,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  buttonText:{
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
})

export default StyledButton