import { View, Text, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, {useContext} from "react";
import ThemeContext from '../context/ThemeContext';

const Card = ({iconName,  text}) => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        container: {
            width: 100,
            height: 100, 
            backgroundColor: theme === 'dark' ? '#1f1f1f' : 'gray',
            alignItems: "center",
            borderRadius: 30,
            textAlign: "center", 
            justifyContent: "center",
            padding: 20,
            marginRight:20,
        },
    })
    return (
        <View style = {styles.container}>
            <MaterialCommunityIcons name={iconName} size={24} color={theme === 'dark' ? 'white' : 'black'} />
            <Text style={{color: theme === 'dark' ? '#969e64' : 'black', fontSize: 13,}}>{text}</Text>
        </View>

    )
}
export default Card
