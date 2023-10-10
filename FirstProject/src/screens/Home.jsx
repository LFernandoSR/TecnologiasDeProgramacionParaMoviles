import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import Card from "../componentes/card";
import { CARDS } from "../constants/cards";
import { ARTICLE } from "../constants/article";
import ArticleCard from "../componentes/articleCard";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../hooks/useAuthContext";
import { Entypo } from '@expo/vector-icons';

const Home = () => {
  const navigation = useNavigation();
  const { handleLogOut: onLogOut } = useAuthContext();

  const handleLogOut = () => {
    try {
      onLogOut();
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{fontSize: 22, color: "#090909", fontWeight: "bold",}}>Store for fast food & etc.</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.number}> </Text>
        <TouchableOpacity>
          <Entypo name="magnifying-glass" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.number}>Burguers</Text>
        <TouchableOpacity style={{marginLeft: 130}}>
          <Entypo name="share" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList 
        style={{ marginBottom: 10, paddingLeft: 13}}
        horizontal={true}
        marginLeft={5}
        showsHorizontalScrollIndicator={false}
        data={ARTICLE}
        renderItem={({ item:  {text} }) => (             
          <TouchableOpacity>
            <ArticleCard
              text={text}
            />
          </TouchableOpacity>             
        )}
      /> 

      <FlatList 
        style={{ marginBottom: 20, paddingLeft: 13 }}
        data={CARDS}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item:  { text1, text2, image,} }) => (           
          <TouchableOpacity>
             <Card 
              text1={text1} 
              text2={text2} 
              image={image}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column", 
    gap: 20,
    display: "flex",
    backgroundColor: "white"
  },
  number: {
    fontSize: 15
  },
  price: {
    flexDirection:'row',
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 10,
    width: 350,
    height: 54,
    alignItems: 'center',
    alignSelf: 'center',
    gap: 20,
    backgroundColor: "#f1f7f7"
  },
  title: {
    fontWeight: "bold",
    justifyContent: "center",
    marginHorizontal: 25,
    marginTop: 20
  },
});