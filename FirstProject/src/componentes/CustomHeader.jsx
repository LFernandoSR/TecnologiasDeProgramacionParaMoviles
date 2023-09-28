import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { AntDesign } from '@expo/vector-icons'

const CustomHeader = ({title, subtitle }) => {
const navigation1 = useNavigation()
    return (
        <View style={{
            backgroundColor: "#ecdcc2",
            padding: 15,
            flexDirection: "column",
            alignContent: "space-between",
            justifyContent: "space-between",
            width: '100%'
        }}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}> 
                <AntDesign 
                        name="caretleft" 
                        size={26} 
                        color="white" 
                        onPress={() => navigation1.goBack()}
                />
                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.textTitle}> </Text>
            </View>
            <Text style={styles.textSubTitle}>{subtitle}</Text>
        </View>
    )
}
export default CustomHeader

const styles = StyleSheet.create({
    textTitle:{
        fontWeight: "bold", 
        fontSize: 20,
        textAlign: "center",
    },
    textSubTitle:{
        fontSize: 15,
        textAlign: "center",
    },
    
})