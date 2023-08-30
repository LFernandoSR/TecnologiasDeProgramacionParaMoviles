import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginHeader from '../components/Login/LoginHeader';
import LoginContent from '../components/Login/LoginContent';

export default function Login() {
  return (
    <View style={styles.container}>
      <LoginHeader />
      <LoginContent />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#0C1C2C',        
        width: '100%',
        height: '100%',
    },
});
