import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";

const Main = () => {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
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
    <View style={{ paddingTop: 50, paddingHorizontal: 10 }}>
      <Text style={{ textAlign: "center", fontSize: 50 }}>CHARACTERS</Text>
      <FlatList
        data={characters}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
              <Text>{item.gender}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});