import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Stories from "../componentes/stories";
import Chat from "../componentes/chats";
import { STORIES } from "../constants/stories";
import { CHAT } from "../constants/chats";
import { Entypo, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.headerImage}
          source={{
            uri: "https://shmector.com/_ph/6/907397949.png",
          }}
        />
        <View>
          <Text style={styles.titleText}>
            <Text style={{ color: "black" }}>Hey Alireza 👋</Text>
          </Text>    
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
        
      <Text style={styles.textHeader}>Stories</Text>

      <FlatList 
        style={{ marginBottom: 20 }}
        data={STORIES}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item:  { image, text, } }) => (           
          <TouchableOpacity>
             <Stories 
              image={image} 
              text={text} 
            />
          </TouchableOpacity>
        )}
      />

      <View style={styles.menu}>
        <TouchableOpacity style={{ backgroundColor: "white", fontSize: 10 }}> All </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: "gray", fontSize: 10 }}> Group </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: "gray", fontSize: 10 }}> Chats </TouchableOpacity>
      </View>

      <FlatList 
        style={{ marginBottom: 20 }}
        data={CHAT}
        showsVerticalScrollIndicator={false}
        renderItem={({ item:  { image, name, message, hour } }) => (
          <TouchableOpacity>
            <Chat
              image={image} 
              name={name} 
              message={message}
              hour={hour} 
            />
          </TouchableOpacity>
        )}
      />  

      <View style={styles.lastBottomContainer}>
        <TouchableOpacity>
          <Entypo name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="message-reply-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="calendar" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="home" size={30} color="black" />
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
    backgroundColor: 'white'
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
  },
  titleText: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 20,
  },
  textHeader: {
    fontSize: 15,
    fontWeight: "bold",
    color: "gray",
    marginBottom: 10,
  },
  menu: {
    paddingLeft: 20,
    borderRadius: 30,
    marginTop: 10,
    paddingBottom: 10,
    paddingRight: 25,
    backgroundColor: "gray"
  },
  lastBottomContainer:{
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    marginTop: 1,
  }, 
});