import React from "react"
import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { AntDesign } from '@expo/vector-icons'

const Header = () => {
    const navigation1 = useNavigation()
    return (
        <View style={{
            backgroundColor: "red",
            padding: 20,
            flexDirection: "row",
            gap: 20,
          }}>
            <AntDesign 
                name="caretleft" 
                size={24} 
                color="black" 
                onPress={() => navigation1.goBack()}
            />
            <Text>This is my header</Text>
        </View>
    )
}
export default Header