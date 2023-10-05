import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { View, StyleSheet, Text } from "react-native";
import Screen3 from "../screens/Screen3";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();
const BottomTabNavigator = createStackNavigator();

const RouterU2T9 = () => {
    return (
        <NavigationContainer>    
                <Stack.Navigator 
                    initialRouteName="Screen3"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#0d0d0d',
                            height: 70,
                        },
                        headerTintColor:'#0d0d0d',
                        headerTitleStyle: {
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 15,
                        }, 
                        headerLeft: () => 
                        <TouchableOpacity>
                            <View style={styles.botonUp}>
                                <MaterialCommunityIcons name="backspace-outline" size={24} color="white" />
                            </View>
                        </TouchableOpacity>,
                        headerRight: () => 
                        <TouchableOpacity>
                            <View style={styles.botonUp}>
                                 <MaterialCommunityIcons name="wechat" size={25} color="white" />
                            </View>
                        </TouchableOpacity>,
                    }}
                >
                    <Stack.Screen
                        name="Screen3" 
                        component={Screen3} 
                        options = {{
                            headerShown: true,
                            headerMode: 'screen',
                            title: 'Send',
                            headerTintColor: 'white',
                            headerTitleAlign: "center",
                        }}
                     />
                </Stack.Navigator>
                
    </NavigationContainer>
    )
}
export default RouterU2T9

const styles = StyleSheet.create({
    botonUp: {
        width: 45, 
        height: 45, 
        borderWidth: 0.5, 
        borderColor: 'silver', 
        borderRadius: 15,
        padding: 10, 
    }
});