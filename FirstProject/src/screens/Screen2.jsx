import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from "react-native"
import { graph1 } from "../../assets"
import { TRANSACTIONS } from "../constants/contacts"
import CardTransaction from "../componentes/CardTransaction"
import React, {useContext} from "react";
import ThemeContext from '../context/ThemeContext';

const Screen2 = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme === 'dark' ? '#0d0d0d' : 'white',
            alignItems: "center",
            padding: 0,
        }, 
        bottomContainer: {
            backgroundColor: theme === 'dark' ? '#edf893' : 'silver',
            borderRadius: 20,
            marginTop: 5,
            width: '100%', 
            height: 300,
            paddingHorizontal: 10,
        },
    
    })
    return (
        <View style={styles.container}>
          
            <Text style={{fontSize: 15, color: theme === 'dark' ? '#757575' : 'black', marginBottom: 5}}>Total Balance</Text>
            <Text style={{fontSize: 30, color: theme === 'dark' ? 'white' : 'black', marginBottom: 10}}>32,751.86</Text>

            <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                <TouchableOpacity>
                    <Text style={{fontSize: 15, color: theme === 'dark' ? '#757575' : 'black', marginRight: 25}}>Day</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{fontSize: 15, color: theme === 'dark' ? '#757575' : 'black', marginRight: 25}}>Week</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{fontSize: 15, color: theme === 'dark' ? '#939a5f' : 'black', marginRight: 25}}>Month</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{fontSize: 15, color: theme === 'dark' ? '#757575' : 'black', marginRight: 25}}>Year</Text>
                </TouchableOpacity>  
            </View>
            <Image 
                style={{width: '100%'}}
                source={graph1}
            />

        <View style={styles.bottomContainer}>
            <Text style={{color: theme === 'dark' ? '#828a52' : 'black', marginBottom: 5, fontWeight:"bold", fontSize: 20, textAlign:"center"}}>
                _____
            </Text>
            <Text style={{color: 'black', marginBottom: 5, fontWeight:"bold", fontSize: 20}}>
                Transactions
            </Text>
            <FlatList 
                data={TRANSACTIONS}
                renderItem={({item: {name, date, amount} }) => (
                    <TouchableOpacity>
                             <CardTransaction
                                name={name}
                                date={date}
                                amount={amount}
                             />
                    </TouchableOpacity>
                )}
            />
        </View>
    
    </View>
    )
}
export default Screen2

