import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StyleSheet } from "react-native";
import HomeScreen from "../screens/Home";
import LoginScreen from "../screens/Login";

const Stack = createStackNavigator();
const BottomTabNavigator = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>    
                <Stack.Navigator 
                    initialRouteName="HomeScreen"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#272b33',
                        },
                        headerTintColor:'#fff',
                        headerTitleStyle: {
                            color: 'silver',
                            fontWeight: 'bold',
                            fontSize: 20,
                        }, 
                    }}
                >
                    <Stack.Screen
                        name="Home" 
                        component={HomeScreen} 
                        options = {{
                            headerShown: true,
                            title: 'Home',
                            headerTitleAlign: "center",
                        }}
                     />
                    <Stack.Screen 
                        name="Login" 
                        component={LoginScreen} 
                        options = {{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
                
    </NavigationContainer>
    )
}
export default Router

const styles = StyleSheet.create({});