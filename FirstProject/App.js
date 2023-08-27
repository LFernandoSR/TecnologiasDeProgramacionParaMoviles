import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import StyledText from "./src/componentes/StyledText/textstyle";
import StyledButton from "./src/componentes/StyledButton/buttonstyl"; 

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <StyledText text="Texto y boton personalizado" />
      <StyledButton title="Personalizado" />
      <StyledText text="Texto personalizado boton normal" />
      <TouchableOpacity style={styles.button} onPress={() => console.log('hola')}>
        <Text style={styles.text}>Presionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 40,
  },
  button:{
    borderWidth: 3,
    padding: 2,
  }
});