import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Person from './src/componentes/Person';
import { DATA } from './src/componentes/DataInfo/lista';
import { BACKGROUND_IMAGE } from './src/componentes/ImageInfo/info';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' backgroundColor='#fff' />
      <Image source={BACKGROUND_IMAGE} style={styles.image} />
      <View style={{ padding: 10, width: '100%', height: '100%' }}>
        <Text style={styles.title}>USUARIOS</Text>
        <FlatList
          data={DATA}
          renderItem={({ item: { nombre, apellido, image }, index }) => (
            <Person nombre={nombre} apellido={apellido} index={index} image={image} />
          )}
          ItemSeparatorComponent={
            <View style={{ height: 5, borderBottomWidth: 2, borderColor: 'white', marginBottom: 5, }} />
          }
          keyExtractor={({ id }) => id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    position: 'absolute',
    resizeMode: 'repeat',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
});