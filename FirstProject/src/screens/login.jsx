import { Text, View, StyleSheet } from "react-native";
import LoginHeader from "../componentes/Login/LoginHeader"
import LoginContent from "../componentes/Login/LoginContent"

export default function Login() {
    return ( 
        <View style={styles.container}>
            <LoginHeader />
            <LoginContent />
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