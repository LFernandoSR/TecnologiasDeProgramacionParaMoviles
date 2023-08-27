import React from 'react'
import { StyleSheet, Button, View } from "react-native";

const StyledButton = ({button}) => {
  return (
    <button style={styles.button}>
      {text}
    </button>
  )
}

const styles = StyleSheet.create({
  button:{
    color: "#fff",
    fontSize: 20,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  }
})

export default StyledButton