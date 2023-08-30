import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function LoginHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sign in to your{`\n`}Account
      </Text>
      <Text style={styles.paragraph}>Sign in to your Account</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0C1C2C',
    alignItems: 'center',
    width: '100%',
    
  },
  title: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingTop: 100,
    width: '90%',
  },
  paragraph: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'left',
    paddingTop: 10,
    paddingBottom: 30,
    width: '90%',
  },
});
