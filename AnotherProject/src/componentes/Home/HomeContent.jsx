import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Person from '../Person';
import { DATA } from '../DataInfo/lista';
import React from 'react';

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Text style={styles.title}>
          My Assets
        </Text>
      </View>
      <View style={styles.container}>
      <View style={{ padding: 10, width: '100%', height: '100%' }}>
        <FlatList
          data={DATA}
          renderItem={({ item: { nombre, tipo, accion, precio, image }, index }) => (
            <Person
              nombre={nombre}
              tipo={tipo}
              accion={accion}
              precio={precio}
              index={index}
              image={image}
            />
          )}
          ItemSeparatorComponent={
            <View
              style={{
                height: 5,
                borderBottomWidth: 2,
                borderColor: 'white',
                marginBottom: 5,
              }}
            />
          }
          keyExtractor={({ id }) => id}
        />
      </View>
    </View>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    //alignItems: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    display: 'flex',
    paddingRight: 10,
  },
  title: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
    width: '75%',
    paddingLeft: 30,
    paddingTop: 10
  },
  image: {
    position: 'absolute',
    resizeMode: 'repeat',
    width: '100%',
    height: '100%',
  },
});