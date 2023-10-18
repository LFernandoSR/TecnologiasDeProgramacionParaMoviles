import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

  
const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/welcomeImage.png')} style={styles.headerImage}></Image>
      <View style={styles.title}>
        <Text style={{fontSize: 32, color: "#090909", fontWeight: "bold",}}>Shopping with best</Text>
        <Text style={{fontSize: 32, color: "#090909", fontWeight: "bold",}}>e-commerce store</Text>
      </View>
      <View style={styles.subtitle}>
        <Text style={{color: "#868789", fontSize: 16}}>Find best shopping experience with</Text>
        <Text style={{color: "#868789", fontSize: 16}}>us by your favourite daily needs!</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 20,
            }}
          >
          Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  };
  
  export default Login;
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "column", 
      gap: 30,
      display: "flex",
      backgroundColor: "#fbfcfe"
    },
    loginButton: {
      backgroundColor: "#21b3b2",
      width: "90%",
      height: 60,
      justifyContent: "center",
      alignSelf: "center",
      borderRadius: 10,
      marginBottom: 35
    },
    title: {
      fontWeight: "bold",
      justifyContent: "center",
      alignItems: "center"
    },
    headerImage: {
      width: 355,
      height: 350,
      alignSelf: "center",
      marginTop: 90
    },
    subtitle: {
        justifyContent: "center",
        alignItems: "center",
    }
  });