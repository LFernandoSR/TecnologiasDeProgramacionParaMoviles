import { useNavigation } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from "../screens/Home";
import Welcome from "../screens/Welcome";

export default function Tab() {
    return (
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Welcome" component={Welcome} />
      </Tab.Navigator>
    );
  }

