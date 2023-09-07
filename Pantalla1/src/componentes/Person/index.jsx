import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const Person = ({ nombre, tipo, accion, precio, image }) => {
  const [show, setShow] = useState(true);

  const handleView = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
          <Text style={styles.arriba}>{nombre}</Text>
          <Text style={styles.tipo}>{tipo}</Text>
          <Text style={styles.abajo}>{accion}</Text>
          <Text style={styles.abajo}>{precio}</Text>
      </View>
    </View>
  );
};

export default Person;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center'
  },
  image: {
    width: 70,
    height: 70,
    
  },
  arriba:{
    fontSize: 17,
    fontWeight: '600',
  },
  tipo:{
    fontSize: 16,
  },
  abajo:{
    fontSize: 13,
    color: 'gray'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingLeft: 10
  },
  word: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
    //justifyContent: 'space-between',
  },
});