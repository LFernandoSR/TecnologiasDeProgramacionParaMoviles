import React, { useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigation } from "@react-navigation/native";

const Logout = () => {
  const { user, handleLogOut } = useAuthContext()
  const navigation = useNavigation();
  useEffect(() => {
    handleLogOut();
  }, []);

  //return null;
  return (
    navigation.navigate("Welcome")
  );
};

export default Logout;