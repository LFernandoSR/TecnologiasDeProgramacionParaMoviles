import React from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Ionics } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Card from '../componentes/card'
const WelcomeSreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Ionics name="notifications-outline" size={24} color="#3764c2" />
                <Image
                    style={styles.headerImage}
                    source={{
                        url: ''
                    }}/>
            </View>
            <Text style={styles.titleText}>
                <Text style={{ color: '#c1c0c4' }}>Hello,</Text>
                <Text style={{ color: '#2b3941' }}>Chris</Text>
            </Text>
            <View style={styles.cardContainer}>
                <View style={styles.cardIconContainer}>
                    <AntDesign name="hdd" size={30} color="white" />
                </View>
                <Text style={styles.cardText}>Start Training</Text>
            </View>
            <ScrollView>
                <Card/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 25,
    },
    headerContainer: {
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    titleText:{
        fontsize: 35,
        fontWeight: 'bold',
        paddingTop: 15
    },
    cardContainer: {
        height: 200,
        width: 220,
        backgroundColor: '#e6ecff',
        borderRadius: 40,
        paddingHorizontal: 30,
        justifyContent: 'center',
        gap: 50
    },
    cardIconContainer: {
        backgroundColor: '#2362df',
        width: 50,
        padding: 5,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 50,
        height: 50,
    },
    cardText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '$48525e'
    }
})

export default WelcomeSreen