import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SALMON } from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';

function NewAccount() {
  return (
    <View style={styles.container}>  
        
        <TouchableOpacity>
            <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>

        <View  style={styles.headerContainer}>
            <Text style={styles.textHeader}>
                Create new account
            </Text>
            <Ionicons name="remove-outline" size={60} color={SALMON} />
        </View>     

        <View style={styles.inputContainer}>
            <Text style={styles.labelInput}>
                Full Name
            </Text>
            <TextInput style={styles.input} placeholder='Enter your name'/>
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.labelInput}>
                Email address
            </Text>
            <TextInput style={styles.input} placeholder='name@example.com' />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.labelInput}>
                Create password
            </Text>
            <TextInput secureTextEntry={true} style={styles.input} placeholder='Enter your password'/>
        </View>

        <TouchableOpacity style={styles.botonSignIn}>
            <View >   
                <Text style={styles.signIn}>
                    Sign In !
                </Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}

export default NewAccount;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 40,
    },
    headerContainer:{
        marginBottom: 40,
    },
    textHeader:{
        fontSize: 37, 
        fontWeight: 'bold',
        marginTop: 60,
    }, 
    input:{
        borderWidth: 1, 
        borderColor: 'silver',
        height: 40,
        width: '95%',
        borderRadius: 10,
        color: 'silver',
        padding: 5,
    },  
    botonSignIn:{
        height: 50,
        width: '96%',
        backgroundColor: SALMON,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        marginTop: 40,
    },
    labelInput:{
        color: 'silver', 
        fontSize: 15, 
    }, 
    inputContainer : {
        marginBottom: 20, 
        width: '100%',
    },
    signIn: {
        color:'white', 
        fontWeight: 'bold',
        fontSize: 16,
    },
})