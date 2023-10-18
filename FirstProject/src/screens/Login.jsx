import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin: onLogin } = useAuthContext();
  const numeros="0123456789";
  function tiene_numeros(data){
    for(i=0; i<data.length; i++){
        if (numeros.indexOf(data.charAt(i),0)!=-1){
          return true;
        }
    }
    return false;
  }

  const handleLogin = () => {
    try {
      const loginValue = onLogin(username, password);
      const num = tiene_numeros(username);
      if (username === "") {
        Alert.alert("Error", "El campo de usuario no puede ser vacio", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
      else if (password === "") {
        Alert.alert("Error", "El campo de contraseña no puede ser vacio", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
      else if (password.length > 4) {
        Alert.alert("Error", "La contraseña no puede exceder los 3 espacios", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
      else if (num === true) {
        Alert.alert("Error", "El usuario no debe tener numeros", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
      else if (username.length > 9) {
        Alert.alert("Error", "El usuario no puede exceder los 9 espacios", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
      else if (loginValue) {
        navigation.navigate("Food");
        setPassword("");
        setUsername("");
      } else {
        Alert.alert("Error", "Credenciales invalidas", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/tacos.png')} style={styles.headerImage}></Image>
      <Text style={styles.title}>Welcome!</Text>
      <View style={styles.containerInput}>
        <Text style={styles.textData}>Email</Text>
        <TextInput
          value={username}
          onChangeText={(e) => setUsername(e)}
          placeholder="Enter your e-mail"
          style={styles.inputData}
        />
      </View>
      <View style={styles.containerInput}>
      <Text style={styles.textData}>Password</Text>
        <TextInput
          value={password}
          onChangeText={(e) => setPassword(e)}
          placeholder="Enter your password"
          style={styles.inputData}
          secureTextEntry
        />
      <Text style={{color: "#21b3b2", alignSelf: "flex-end"}}>Forgot Password?</Text>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => handleLogin()}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 20,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <View style={styles.singData}>
        <View>
          <Text style={{color: "#b7b7b7", fontSize: 16}}>Dont have an Account?</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Account")}
          >
            <Text
              style={{
                textDecorationLine: "underline",
                color: "#21b3b2",
                fontSize: 16,
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  singData: {
    flexDirection: "row",
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20
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
    fontWeight: "bold"
  },
  headerImage: {
    width: 395,
    height: 250
  }
});