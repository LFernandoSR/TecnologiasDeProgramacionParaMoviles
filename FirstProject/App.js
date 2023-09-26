import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Main from './src/screens/Main';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Character from './src/screens/Character';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <View style={styles.container}>
        <Stack.Navigator initialRouteName='List of Characters'>
          <Stack.Screen name='List of Characters' component={Main} />
          <Stack.Screen name='Character' component={Character} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272B33',
    paddingTop: Constants.statusBarHeight,
  },
});