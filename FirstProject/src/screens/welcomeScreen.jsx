import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Card from "../../src/componentes/card";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="notifications-outline" size={40} color="#3764c2" />
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
      <ScrollView
        style={{ marginBottom: 40 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Card
          isDarkBlue
          text="Start training"
          iconName={"hdd"}
          iconType={"AntDesign"}
        />
        <Card
          isDarkBlue={false}
          text="Start training"
          iconName={"hdd"}
          iconType={"AntDesign"}
        />
        <Card
          isDarkBlue
          text="Start training"
          iconName={"hdd"}
          iconType={"AntDesign"}
        />
        <Card
          isDarkBlue={false}
          text="Start training"
          iconName={"hdd"}
          iconType={"AntDesign"}
        />
      </ScrollView>
      <Text style={styles.textHeader}>What are your symptoms?</Text>
      <ScrollView
        style={styles.symptomsContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "#2263df",
            textAlign: "center",
          }}
        >
          I'm fine
        </Text>
      </ScrollView>
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
    fontSize: 25,
    fontWeight: "bold",
    color: "#495258",
  },
  symptomsContainer: {
    backgroundColor: "#c6ceff",
    width: 150,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    marginRight: 25,
  },
});