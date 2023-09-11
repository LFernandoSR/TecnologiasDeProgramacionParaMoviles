import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from "react-native";
import Constants from "expo-constants";
import {useState} from "react";

export default function App() {
  //const [state, setState] = useState({ name: 'eder', age: 23, asdasd: 123, asdasd: 0})
  const [inputValue, setInputValue] = useState('Default Value')

  //function sumValue() { setState(state + 1) }
  //<TouchableOpacity onPress={sumValue} style={{ borderWidth: 1}}> <Text>Change Value</Text> </TouchableOpacity>
  //<Text style={{ fontSize: 40}}>{JSON.stringify(state)}</Text>

  return (
    <View style={styles.container}>
      <TextInput value={inputValue} 
      onChangeText={(value) => setInputValue(value)}
      />
      <Text>{inputValue}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,

  },
});