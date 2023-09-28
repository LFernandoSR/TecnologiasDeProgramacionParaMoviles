import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { Feather } from '@expo/vector-icons';


const Ticket = ({numbers, ticketNumber}) => {
    const renderItem = ({ item }) => (
        <View style={styles.number}>
          <Text style={{textAlign: "center", fontSize: 20, fontWeight:"bold"}}>{item}</Text>
        </View>
      );
    return (
        <View style={styles.container}> 
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 20,}}>
                <Text style={{fontSize: 20, color:'white'}}>Ticket{ticketNumber}</Text>
                <Feather name="refresh-ccw" size={24} color="white" />
            </View>

            <FlatList 
                horizontal={true}
                data = {numbers}
                renderItem={renderItem}
            /> 
        </View>      
    )
}
export default Ticket

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#046e48',
        width: '95%',
        height: 160,
        borderRadius: 20,
        padding: 15,
    },
    number: {
        backgroundColor: '#ffd73a',
        borderRadius: 60, 
        width: 60,
        height: 60, 
        margin: 5,
        alignItems: "center",
        justifyContent: "center",

    }


})