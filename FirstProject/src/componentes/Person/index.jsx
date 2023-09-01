import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const Person = ({ nombre, apellido, image }) => {
  const [show, setShow] = useState(true);

  const handleView = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <View>
          <Text style={{ fontSize: 40, fontWeight:600 }}>{nombre}</Text>
          <Text style={{ fontSize: 20, fontWeight:500 }}>{apellido}</Text>
        </View>
        <TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity>
        </TouchableOpacity>
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
    flexDirection: 'row',
    padding: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});