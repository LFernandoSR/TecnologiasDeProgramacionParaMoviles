import { View, Text, StyleSheet, Image } from "react-native"
import { Entypo } from '@expo/vector-icons';


const CardContact = ({name, code, img}) => {
    return (
        <View style = {styles.container}>
            <View style={{flexDirection:"row"}}>
                <Image 
                    style={{width: 30, height: 30, borderRadius: 50, marginRight: 10,}}
                    source={{uri: img}}
                />
                <View style={{width: 100}}>
                    <Text style={{color:'white', fontSize: 10,}}>{name}</Text>
                    <Text style={{color:'#969e64', fontSize: 10}}>{code}</Text>
                </View>

            </View>
            <Entypo name="dots-three-vertical" size={20} color="white" />
        </View>
    )
}
export default CardContact

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '80%',
        height: 30, 
        backgroundColor: '#1f1f1f',
        alignItems: "center",
        textAlign: "center", 
        justifyContent: "center",
        padding: 5,
        margin: 5,
        justifyContent: "space-between",
    },
})