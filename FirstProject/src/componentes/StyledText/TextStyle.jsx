import React from 'react'
import { StyleSheet, Text, View } from "react-native";

const StyledText = ({text}) => {
  return (
    <Text style={styles.text}>
      {text}
    </Text>
  )
}

const styles = StyleSheet.create({
  text:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: "center",
    textTransform: "uppercase",
    marginBottom: 5
  }
})

export default StyledText