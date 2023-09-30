import React,  {useState, useEffect} from "react";
import { Text, View,  StyleSheet, Switch, ActivityIndicator, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ApiCardRM from "../componentes/ApiCardRM";

const Home= ({navigation}) => {
    const api2 = 'https://last-airbender-api.fly.dev/api/v1/characters?perPage=10&page=1'

    const navigation1 = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    const [characters1, setCharacters1] = useState([])
    
    const toggleSwitch = () => {
      setIsEnabled((previousState) => !previousState);
      fetchData(); 
    };

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const fetchData = async () => {
      try{
          setIsFetching(true)
          const resp1 = await fetch(api2)
          const data1 = await resp1.json()
          console.log(data1)
          setCharacters1(data1)
          await delay(5000);
      }catch (error) {
      console.log(error)
      }finally{
          setIsFetching(false)
      }
  }
    useEffect(() => {
        fetchData();
    },[])

    return (
        <View style={styles.container}>
            <View style={{flexDirection:"row"}}> 
                <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>Recharge</Text>
                <Switch
                    trackColor={{false: 'red', true: 'blue'}}
                    thumbColor={isEnabled ? 'green' : 'yellow'}
                    ios_backgroundColor="silver"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{transform: [{scaleX: 1}, {scaleY: 1}], marginBottom:50}}
                />
            </View>   

        { isFetching ? 
          (
            <View style={{flexDirection:"row"}}> 
                <ActivityIndicator size="large" color="white" />
                <Text style={{fontSize: 15, color: 'white', marginTop: 5}}>Loading...</Text>
            </View>          
          )  
        :
          (
            <FlatList 
                data = {characters1}
                renderItem={({ item }) => (
                    <ApiCardRM
                    name = {item.name}
                    affiliation = {item.affiliation}
                    image = {item.photoUrl}
                    enemies = {item.enemies}
                    allies = {item.allies}
                />
                )}
                ListEmptyComponent={
                    <View>
                    <Text style={{fontSize:25, color: 'silver'}}>Empty list</Text>
                    </View>
                }
            />
          ) 
        }       
        </View>
    )
}
export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10, 
        paddingTop: 5,
        backgroundColor: '#272b33', 
      },
  });