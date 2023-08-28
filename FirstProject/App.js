import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, TextInput } from "react-native";
import Login from "./src/screens/login";
//import StyledText from "./src/components/StyledText";
//import StyledButton from "./src/componentes/StyledButton/ButtonStyle";

export default function App() {
const { height, width } = Dimensions.get('screen')

  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    width: 200,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: 'red'
  }
});

//<Image source={{ url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FReact_Native&psig=AOvVaw2Lkw3bLuj9Pmp8R25V13Ot&ust=1693319709052000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCPjd59LJ_4ADFQAAAAAdAAAAABAD', 
//      width: 100, height: 100}} />
//<TextInput style={style.input} placeholder="Name" placeholderTextColor='#000' />