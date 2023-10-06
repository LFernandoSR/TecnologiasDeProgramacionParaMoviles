import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import React, {useContext} from "react";
import ThemeContext from '../context/ThemeContext';

const Screen3 = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme === 'dark' ? '#0d0d0d' : 'white',
            alignItems: "center",
            padding: 20,
        }, 
        teclado: {
            marginTop: 15,
            marginBottom: 20,
        },
        tecladoFila: {
            flexDirection: "row", 
            marginBottom: 5,
        },
        tecla :{
            color: 'white', 
            borderWidth: 1,
            backgroundColor: theme === 'dark' ? '#1f1f1f' : 'silver',
            padding: 20, 
            borderRadius: 20,
            marginLeft: 5,
            marginRight: 5,
            width: 100,
            height: 80,
            textAlign: "center",
            fontSize: 20,
        }
    })
    return (
        <View style={styles.container}>
            <Image 
                style={{borderRadius: 50, width: 60, height: 60, borderWidth: 1, borderColor: 'white', marginBottom: 10,}}
                source={{uri: 'https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png'}}
            />
            <Text style={{fontSize: 20, color: theme === 'dark' ? 'white' : 'black', marginBottom: 5}}>Benjamin Parker</Text>
            <Text style={{fontSize: 18, color: theme === 'dark' ? '#575757' : 'black', marginBottom: 10}}>**** 3294</Text>

            <TextInput 
                style={{
                    color: theme === 'dark' ? 'silver' : 'black',
                    fontSize: 40
                }} 
                value="$340.00"
            />
            <View style={styles.teclado} >
                <View style={styles.tecladoFila}>
                    <TouchableOpacity><Text style={styles.tecla}>1</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.tecla}>2</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.tecla}>3</Text></TouchableOpacity>
                </View>
                <View style={styles.tecladoFila}>
                    <TouchableOpacity><Text style={styles.tecla}>4</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.tecla}>5</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.tecla}>6</Text></TouchableOpacity>
                </View>
                <View style={styles.tecladoFila}>
                    <TouchableOpacity><Text style={styles.tecla}>7</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.tecla}>8</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.tecla}>9</Text></TouchableOpacity>
                </View>
                <View style={styles.tecladoFila}>
                    <TouchableOpacity><Text style={styles.tecla}>&lt;</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.tecla}>0</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.tecla}>.</Text></TouchableOpacity>
                </View>
            </View>   

            <TouchableOpacity>
                <Text style={{
                    color: 'black', 
                    backgroundColor: theme === 'dark' ? '#edf893' : 'silver',
                    width: 350,
                    height: 50,
                    textAlign: "center",
                    padding: 10,
                    fontSize: 18,
                    fontWeight: "bold",
                    borderRadius: 30,
                }}>
                    Send
                </Text>
            </TouchableOpacity>

        </View>
    )
}
export default Screen3
