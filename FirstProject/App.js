import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View } from "react-native";
import Constants from "expo-constants";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider from "./src/context/authContext";
import Account from "./src/screens/Account";
import { useAuthContext } from "./src/hooks/useAuthContext";
import { useNavigation } from "@react-navigation/native";
import Welcome from "./src/screens/Welcome";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';

const Tab = createMaterialBottomTabNavigator();
function CustomDrawerContent(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView >
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
      <DrawerItem label="Sign out" onPress={() => navigation.navigate('Login')} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Drawer.Navigator 
            initialRouteName="Login"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
              drawerStyle: {
                backgroundColor: 'white',
                width: 250,
              },
              drawerLabelStyle: {
                color: 'blue'
              },
              headerTitle: 'Drawer',
              drawerIcon: ({item}) => (
                <Image source={require('./assets/home.png')} style={{width: 20, height: 20}} />
              ),
              drawerActiveTintColor: 'red', 
            }}
          >
            <Drawer.Screen 
              name="Food" 
              options={{
              }}
              component={Food} />
            <Drawer.Screen 
              name="Account" 
              options={{
              }}
              component={Account} />
            <Drawer.Screen 
              name="Login" 
              options={{
                headerShown: false
              }}
              component={Login} />
            <Drawer.Screen 
              name="Welcome" 
              options={{
                headerShown: false
              }}
              component={Welcome} />
          </Drawer.Navigator>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>      
    </AuthContextProvider>
  );
}

function Food() {
  return (
    <Tab.Navigator initialRouteName="Welcome"
    barStyle={{
      backgroundColor: '#21b3b2'
    }}
    activeColor="black"
    inactiveColor="white"
    //shifting={true}
    >
      <Tab.Screen 
        name="Home" 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        component={Home} 
      />
      
    </Tab.Navigator>
  );
}

const Layout = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <Stack.Screen name="Login" component={Login} />;
  }

  return (
    <>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});