import React, {useContext} from "react";
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { View, StyleSheet, Text, Image } from "react-native";
import Screen3 from "../screens/Screen3";
import Screen2 from "../screens/Screen2";
import Screen1 from "../screens/Screen1";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ThemeContext from '../context/ThemeContext';

const Stack = createStackNavigator();
const BottomTabNavigator = createStackNavigator();

const Router1 = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);
    const handleToggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        toggleTheme(newTheme);
    };
    const navigation = useNavigation();

    const navigateToScreen1 = () => {
    navigation.navigate("Screen1");
  };
    
    return (   
                <Stack.Navigator 
                    initialRouteName="Screen1"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: theme === 'dark' ? 'black' : 'white',
                            height: 70,
                        },
                        headerTintColor:'#0d0d0d',
                        headerTitleStyle: {
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 15,
                        }, 
                        headerLeft: () => 
                        <TouchableOpacity onPress={navigateToScreen1}>
                            <View style={styles.botonUp}>
                                <MaterialCommunityIcons name="backspace-outline" size={24} color= {theme === 'dark' ? 'white' : 'black'} />
                            </View>
                        </TouchableOpacity>,
                        headerRight: () => 
                        <TouchableOpacity onPress={handleToggleTheme}>
                            <View style={styles.botonUp}>
                                 <MaterialCommunityIcons name="wechat" size={25} color={theme === 'dark' ? 'white' : 'black'} />
                            </View>
                        </TouchableOpacity>,
                    }}
                >
                      <Stack.Screen
                        name="Screen1" 
                        component={Screen1} 
                        options = {{
                            headerShown: true,
                            headerMode: 'screen',
                            title: '',
                            headerTintColor: 'white',
                            headerTitleAlign: "center",
                            headerLeft: () =>
                            <Image 
                                style={styles.botonUp}
                                source={{uri: 'https://i.pinimg.com/originals/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.png'}}
                            />
                        }}
                     />
                     <Stack.Screen
                        name="Screen2" 
                        component={Screen2} 
                        options = {{
                            headerShown: true,
                            headerMode: 'screen',
                            title: '',
                            headerTintColor: 'white',
                            headerTitleAlign: "center",
                            headerLeft: () => (
                                <TouchableOpacity onPress={navigateToScreen1}>
                                  <View style={styles.botonUp}>
                                    <MaterialCommunityIcons
                                      name="backspace-outline"
                                      size={24}
                                      color={theme === 'dark' ? 'white' : 'black'}
                                    />
                                  </View>
                                </TouchableOpacity>
                            ),
                        }}
                     />
                    <Stack.Screen
                        name="Screen3" 
                        component={Screen3} 
                        options = {{
                            headerShown: true,
                            headerMode: 'screen',
                            title: '',
                            headerTintColor: 'white',
                            headerTitleAlign: "center",
                            headerLeft: () => (
                                <TouchableOpacity onPress={navigateToScreen1}>
                                  <View style={styles.botonUp}>
                                    <MaterialCommunityIcons
                                      name="backspace-outline"
                                      size={24}
                                      color={theme === 'dark' ? 'white' : 'black'}
                                    />
                                  </View>
                                </TouchableOpacity>
                            ),
                        }}
                     />
                </Stack.Navigator>
            
    )
}
export default Router1

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