import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Card from "../componentes/card";
import SymptomCard from "../componentes/symptomCard";
import Therapist from "../componentes/therapist";
import { CARDS } from "../constants/cards";
import { Therapists } from "../constants/therapist";
import { SYMPTOMS } from "../constants/symptoms";
import { Entypo, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { gray1, blue2 } from "../constants/colors";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={40} color="#3764c2" />
        </TouchableOpacity>
          <Image
            style={styles.headerImage}
            source={{
              uri: "https://shmector.com/_ph/6/907397949.png",
            }}
          />
      </View>
      <Text style={styles.titleText}>
        <Text style={{ color: "#c1c0c4" }}>Hello,</Text>
        <Text style={{ color: "#2b3941" }}>Chris 👋</Text>
      </Text>      
      
        <FlatList 
          style={{ marginBottom: 20 }}
          data={CARDS}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item:  {isDarkBlue, text, iconName, iconType } }) => (           
            <TouchableOpacity>
               <Card 
                isDarkBlue={isDarkBlue} 
                text={text} 
                iconName={iconName}
                iconType={iconType} 
              />
            </TouchableOpacity>
          )}
        />

      <Text style={styles.textHeader}>What are your symptoms?</Text>

          <FlatList 
            style={{ marginBottom: 20 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={SYMPTOMS}
            renderItem={({ item:  {text, emoji } }) => (             
              <TouchableOpacity>
                <SymptomCard
                  text={text}
                  emoji={emoji}
                />
              </TouchableOpacity>             
            )}
          />       
      
      <Text style={styles.textHeader}> Popular Therapist </Text>

      <SafeAreaView style={styles.scrollContainerTherapists}  showsVerticalScrollIndicator={false}>
        <FlatList 
          style={{ marginBottom: 20 }}
          data={Therapists}
          showsVerticalScrollIndicator={false}
          renderItem={({ item:  {name, job, imageName, rate } }) => (
            <TouchableOpacity>
              <Therapist 
                name={name} 
                job={job} 
                imageName={imageName}
                rate={rate} 
              />
            </TouchableOpacity>
          )}
        />  
      </SafeAreaView>

      <View style={styles.lastBottomContainer}>
        <TouchableOpacity>
          <Entypo name="home" size={30} color={blue2} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="message-reply-outline" size={30} color="silver" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="calendar" size={30} color="silver" />
        </TouchableOpacity>
        <TouchableOpacity>
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
    paddingTop: 20,
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
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 20,
  },
  textHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#495258",
    marginBottom: 10,
  },
  symptomsContainer: {
    height: 60,
    paddingHorizontal: 1,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 25,
  },
  lastBottomContainer:{
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    marginTop: 1,
  }, 
  scrollContainerTherapists: {
    height: 180,
    borderBlockColor: gray1,
  }
});