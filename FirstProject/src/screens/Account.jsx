import { TextInput, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../hooks/useAuthContext";

const Account = () => {
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
      <View style={{marginTop: 35}}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.singData}>
          <View>
            <Text style={{color: "#b7b7b7", fontSize: 16}}>Alredy have an account?</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
            >
              <Text
                style={{
                  textDecorationLine: "underline",
                  color: "#21b3b2",
                  fontSize: 16,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.textData}>Name</Text>
        <TextInput
          placeholder="Enter your name"
          style={styles.inputData}
        />
      </View>
      <View style={styles.containerInput}>
        <Text style={styles.textData}>Email</Text>
        <TextInput
          placeholder="Enter your e-mail"
          style={styles.inputData}
        />
      </View>
      <View style={styles.containerInput}>
       <Text style={styles.textData}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          style={styles.inputData}
          secureTextEntry
        />
      <Text style={{color: "#21b3b2", alignSelf: "flex-end"}}>Forgot Password?</Text>
      </View>
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
          Sign Up
        </Text>
      </TouchableOpacity>
      <View style={styles.policyData}>
        <Text style={{color: "#b7b7b7", fontSize: 13}}>By signing up, you are agreeing to Our </Text>
        <Text style={{color: "#a9d8fa", fontSize: 13}}>Terms of Service </Text>
        <Text style={{color: "#b7b7b7", fontSize: 13}}>and </Text>
        <Text style={{color: "#a9d8fa", fontSize: 13}}>Pryvacy Policy</Text>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  singData: {
    flexDirection: "row",
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginHorizontal: 40,
  },
  policyData: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginHorizontal: 40,
  },
  container: {
    flexDirection: "column", 
    gap: 20,
    display: "flex",
  },
  loginButton: {
    backgroundColor: "#21b3b2",
    width: "80%",
    height: 60,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 30
  },
  inputData: {
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: "100%",
    borderColor: "#131313"
  },
  containerInput: {
    marginHorizontal: 40,
    marginBottom: 10
  },
  textData: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 2
  },
  title: {
    fontSize: 30,
    color: "#21b3b2",
    marginHorizontal: 40,
    fontWeight: "bold",
    marginBottom: 10
  },
  headerImage: {
    width: 395,
    height: 250
  }
});