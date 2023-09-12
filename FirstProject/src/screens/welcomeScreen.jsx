import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Card from "../componentes/card";
import ArticleCard from "../componentes/articlecard";
import { CARDS } from "../constants/cards";
import { ARTICLE } from "../constants/article";
import { Entypo, Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titlecontainer}>
           <Text style={styles.titleText}>Discover</Text>
           <Text style={styles.subtitleText}>your products</Text>
        </View>      
        <Image
          style={styles.headerImage}
          source={{
            uri: "https://shmector.com/_ph/6/907397949.png",
          }}
        />
      </View>

      <View style={styles.price2}>
        <View style={styles.price}>
          <Text style={styles.number}> </Text>
          <TouchableOpacity>
            <Entypo name="magnifying-glass" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.number}>Divoom</Text>
        </View>
        <TouchableOpacity style={styles.icon2}>
          <Entypo name="share" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList 
        style={{ marginBottom: 10 }}
        horizontal={true}
        marginLeft={5}
        showsHorizontalScrollIndicator={false}
        data={ARTICLE}
        renderItem={({ item:  {text, emoji } }) => (             
          <TouchableOpacity>
            <ArticleCard
              text={text}
              emoji={emoji}
            />
          </TouchableOpacity>             
        )}
      /> 

      <Text style={styles.textHeader}>Popular Product</Text>

      <FlatList 
        style={{ marginBottom: 20 }}
        data={CARDS}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item:  { text1, text2, text3, image,} }) => (           
          <TouchableOpacity>
             <Card 
              text1={text1} 
              text2={text2} 
              text3={text3} 
              image={image}
            />
          </TouchableOpacity>
        )}
      />

      <View style={styles.lastBottomContainer}>
        <TouchableOpacity style={styles.buttonStyle1}>
          <Entypo name="home" size={30} color="white"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle2}>
          <FontAwesome5 name="shopping-bag" size={30} color="silver" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle2}>
          <Feather name="bell" size={30} color="silver" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle2}>
          <Ionicons name="person-outline" size={30} color="silver" />
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  buttonStyle1: {
    backgroundColor: "#2e2e2e",
    borderRadius: 10,
    width: 63,
    height: 63,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle2: {
    borderRadius: 10,
    width: 63,
    height: 63,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titlecontainer: {
    marginTop: 20,
    marginBottom: 20
  },
  icon2: {
    backgroundColor: '#fdb235',
    width: 54,
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 9,
    marginBottom: 10
  },
  number: {
    fontSize: 15
  },
  price: {
    flexDirection:'row',
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 10,
    width: 270,
    height: 54,
    alignItems: 'center',
    gap: 10
  },
  price2: {
    flexDirection:'row',
    alignItems: 'center',
    marginLeft: 10,
    gap: 10
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
    marginTop: 35
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2e2e2e",
  },
  subtitleText: {
    fontSize: 20,
    color: "#525252",
  },
  textHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#495258",
    marginBottom: 10,
    marginLeft: 10
  },
  lastBottomContainer:{
    flexDirection: "row",
    justifyContent: "space-around",
  }, 
});