import { RouterT10 } from './Router2';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

export const Layout = () => {

  const [isFetching, setIsFetching] = useState(false)
  const delay = ms => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
      const getUser = async () => {
        try {
          const currentSecureUser = await SecureStore.getItemAsync("user"); 
          setIsFetching(true)      
          console.log("Current secure user: "+ currentSecureUser);
          await delay(2000);
        } catch (error) {
          console.log(error);
        }finally{
          setIsFetching(false)
        }
      };
      getUser();
    }, []);

    return(

      <NavigationContainer>
        {isFetching ? (
                <View style={styles.loading}> 
                    <View style={{flexDirection:"row"}}> 
                        <ActivityIndicator size="large" color="black" />
                        <Text style={{fontSize: 15, color: 'black', marginTop: 5}}>Loading...</Text>
                    </View>
                </View>
            ):(
        <RouterT10 />
            )}
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  loading:{
    paddingLeft: 100,
    paddingTop: 100,
  },
});