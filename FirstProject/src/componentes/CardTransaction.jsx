import { View, Text, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import React, {useContext} from "react";
import ThemeContext from '../context/ThemeContext';

const CardTransaction = ({name, date, amount}) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "row",
            width: '80%',
            height: 40, 
            backgroundColor: theme === 'dark' ? '#edf893' : 'silver',
            alignItems: "center",
            textAlign: "center", 
            justifyContent: "center",
            padding: 1,
            marginBottom: 15,
            justifyContent: "space-between",
        },
    })

    return (
        <View style = {styles.container}>
            <View style={{flexDirection:"row"}}>
                <View 
                style={{borderWidth: 1, 
                    borderColor: 'black', 
                    borderRadius: 30, 
                    backgroundColor: 'black', 
                    width: 40,
                    height: 40,
                    padding: 5,
                    alignItems: "center",
                    marginRight: 10,
                }}
                >
                    <Ionicons name="ios-download" size={24} color={theme === 'dark' ? '#edf893' : 'silver'} />
                </View>
                
                <View style={{width: 200}}>
                    <Text style={{color: theme === 'dark' ? 'black' : 'white', fontSize: 12,}}>{name}</Text>
                
                    <Text style={{color: theme === 'dark' ? '#969e64' : 'white', fontSize: 12}}>{date}</Text>
                    
                </View>

            </View>
            <Text style={{color:'black', fontSize: 15, fontWeight: "bold"}}>{amount}</Text>
        </View>
    )
}
export default CardTransaction
