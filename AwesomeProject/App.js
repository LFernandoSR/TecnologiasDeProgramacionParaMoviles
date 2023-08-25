import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import StyledText from "./src/components/StyledText";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <StyledText text="hola" />
      <StyledText text="hola" />
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
//cada componento siempre debe empezar con una letra mayuscula y usar camelcase si es mas de una palabra
//el view es como un div y el text como un parrafo
//style controla el estilo aunque ya viene con displayflex integrado el view
//la forma correcta de dar estilo es con StyleSheet
//export default solo exporta una cosa asi que es mejor exportar con export cont
//el styles se puede poner en un archivo styles.js aparte ./styles

