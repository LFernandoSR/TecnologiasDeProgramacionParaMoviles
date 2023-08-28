import { Text, View } from "react-native";
import LoginHeader from "../componentes/Login/LoginHeader"
import LoginContent from "../componentes/Login/LoginContent"

export default function Login() {
    return ( 
        <View>
            <LoginHeader />
            <LoginContent/>
        </View>
    );
}