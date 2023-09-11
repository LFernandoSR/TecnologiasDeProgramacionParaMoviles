import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SALMON } from '../constants/colors';

function Welcome() {
  return (
    <View style={styles.container}>  

        <Text style={styles.textHeader}>Welcome!</Text>

        <Text style={styles.textHeader2}>Sign in or create a new account</Text>
        
        <Image
            style={styles.image1}
            source={{
                uri: "https://static.vecteezy.com/system/resources/previews/005/620/778/non_2x/flat-icon-of-hot-air-balloon-adventure-concept-vector.jpg",
              }}
        />

        <TouchableOpacity style={styles.botonSignIn}>
            <View>
                <Text style={{ color:'white', fontWeight: 'bold', fontSize: 16, }}>
                    Go to the Sign In 
                </Text>              
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonSignUp}>
            <View style={styles.botonSignUpIntern}>
                    <Text style={styles.noAccount}>
                        No account yet?
                    </Text>
                    <Text style={styles.signIn}>
                        Sign Up
                    </Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({   
    container:{
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 100,
    },
    textHeader:{
        fontSize: 39, 
        fontWeight: 'bold',
        marginBottom: 10,
    }, 
    textHeader2:{
        fontSize: 14, 
        fontWeight: 'bold',
        marginBottom: 60,
        color: 'silver',
        justifyContent: 'center'
    },
    image1:{
        width: 220,
        height: 330,
        marginBottom: 40,
    },   
    botonSignIn:{
        height: 55,
        width: '80%',
        backgroundColor: SALMON,
        alignItems: 'center',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
    },
    botonSignUp:{
        height: 50,
        width: '80%',
        alignItems: 'center',
        borderRadius: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'silver',
        marginBottom: 80,
    }, 
    botonSignUpIntern:{
        flex: 1,
        flexDirection: 'row',
    },
    signIn: {
        color:SALMON, 
        fontWeight: 'bold',
        fontSize: 15,
    },
    noAccount: {
        color:'black', 
        fontWeight: 'bold',
        fontSize: 15,
        marginRight: 10,
    },
})