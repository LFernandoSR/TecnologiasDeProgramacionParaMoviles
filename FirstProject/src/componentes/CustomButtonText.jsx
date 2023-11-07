import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const CustomButtonText = ({text, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container} >
                <Text style={{color: 'white', fontSize: 12}}>{text}</Text>
            </View>  
        </TouchableOpacity>
    )  
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1, 
        alignContent: "center", 
        justifyContent: "center",
        padding: 8, 
        borderColor: 'white', 
        borderRadius: 10,
    }
})

export default CustomButtonText