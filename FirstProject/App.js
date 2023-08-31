import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, TextInput, FlatList } from "react-native";
//import Login from "./src/screens/login";
import Person from "./src/componentes/Person";

export default function App() {
  const DATA = [
    {
      id: 1,
      nombre: "Fernando",
      apellido: "Sanchez",
    },
    {
      id: 2,
      nombre: "Fernando2",
      apellido: "Sanchez",
    },
    {
      id: 3,
      nombre: "Fernando3",
      apellido: "Sanchez",
    },
    {
      id: 4,
      nombre: "Fernando4",
      apellido: "Sanchez",
    },
    {
      id: 5,
      nombre: "Fernando5",
      apellido: "Sanchez",
    },
    {
      id: 6,
      nombre: "Fernando6",
      apellido: "Sanchez",
    },
    {
      id: 7,
      nombre: "Fernando7",
      apellido: "Sanchez",
    },
    {
      id: 8,
      nombre: "Fernando8",
      apellido: "Sanchez",
    },
    {
      id: 9,
      nombre: "Fernando9",
      apellido: "Sanchez",
    },
    {
      id: 10,
      nombre: "Fernando10",
      apellido: "Sanchez",
    },
  ];

  return (
    <View style={styles.container}>
      {/* <Login/> */}
      <StatusBar style="auto" backgroundColor="#fff" />
      {/* {DATA.map(user =>{
        <ScrollView key={user.id} style={{borderWidth: 1, borderColor: 'red'}}>
          <Text>{user.nombre}</Text>
          <Text>{user.apellido}</Text>
        </ScrollView>
      })} */}
      <FlatList
        data={DATA}
        renderItem={({ item: { nombre, apellido }, index }) => (
          <Person nombre={nombre} apellido={apellido} index={index} />
        )}
        ItemSeparatorComponent={<Text>Separador</Text>}
        keyExtractor={({ id }) => id}
      />
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
});
