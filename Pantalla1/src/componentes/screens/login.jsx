import { Text, View, StyleSheet } from "react-native";
import HomeHeader from "../Home/HomeHeader";
import HomeContent from "../Home/HomeContent";

export default function Login() {
    return ( 
        <View style={styles.container}>
            <HomeHeader />
            <HomeContent />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#0C1C2C',        
        width: '100%',
        height: '100%',
    },
});