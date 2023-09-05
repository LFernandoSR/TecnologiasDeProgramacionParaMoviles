import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Text style={styles.title}>
          Wallet
        </Text>
        <Ionicons name="notifications" size={30} color="white" />
        <FontAwesome name="user-circle-o" size={35} color="black" />
        <Text style={styles.paragraph}>$23,867</Text>
        <Text style={styles.subtitle}>Wallet id: 2678900085</Text>
        <Feather style={styles.copy} name="copy" size={20} color="black" />
      </View>
    
      <View style={styles.botones}>
        <Ionicons name="arrow-down-circle" size={90} color="black" />
        <Ionicons name="arrow-up-circle" size={90} color="black" />
        <Ionicons name="reload-circle-sharp" size={90} color="black" />
        <Ionicons name="add-circle-sharp" size={90} color="black" />
      </View>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d56841',
    alignItems: 'center',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    display: 'flex',
    paddingTop: 30,
    paddingRight: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  copy: {
    paddingRight: 70,
    paddingTop: 10
  },
  botones: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 30,
    display: 'flex',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    width: '75%',
    paddingLeft: 10
  },
  paragraph: {
    color: '#FFFFFF',
    fontSize: 70,
    textAlign: 'center',
    width: '90%',
    alignSelf: 'flex-end',
    paddingTop: 50
  },
  subtitle: {
    color: '#fcbf9f',
    fontSize: 15,
    textAlign: 'right',
    width: '60%',
    paddingTop: 10,
  },
});