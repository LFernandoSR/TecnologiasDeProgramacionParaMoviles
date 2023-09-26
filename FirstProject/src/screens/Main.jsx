import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from '../componentes/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Main = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character'
        );
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getApiData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        renderItem={({ item }, key) => {
          return (
            <TouchableOpacity 
              onPress={() => navigation.navigate('Character', { item })}
            >
              <Card info={item} key={key} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272B33',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});