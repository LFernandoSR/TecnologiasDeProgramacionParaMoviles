import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';

export const AuthContext = createContext({
  user: "",
});

import React from "react";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const handleLogin = async (username, password) => {
    if (username === "Fernando" && password === "123") {
      await AsyncStorage.setItem('user', username);
      await SecureStore.setItemAsync("user", username);
      setUser(username);
      return true;
    }
    return false;
  };

  const handleLogOut = async () => {
    setUser("");
    await AsyncStorage.removeItem('user')
    await SecureStore.deleteItemAsync("user")
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const currentUser = await AsyncStorage.getItem("user");
        const currentSecureUser = await SecureStore.getItemAsync("user");       
        if (currentUser) {
          setUser(currentUser);
        }
        console.log("Current secure user: "+ currentSecureUser);
        console.log("Current user: "+currentUser)
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const values = {
    user,
    handleLogin,
    handleLogOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;