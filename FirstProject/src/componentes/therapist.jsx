import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { blue2, gray2 } from "../constants/colors";

const Therapist = ({name, job, imageName, rate }) =>{
    return (
        <View style={styles.Container}>
            <Image
                style={styles.image}
                source={{
                    uri: imageName,
                }}
            />       
            <View style={styles.TherapistInfo}>
                <Text style={styles.TherapistName}>{name}</Text>
                <Text style={styles.TherapistJob}>{job}</Text>
            </View>           
            <View style={{flexDirection:"row"}}>
                {rate > 3 ? (<AntDesign name='star' size={24} color={blue2} />) : 
                (<AntDesign name='staro' size={24} color={blue2} />)}
                <Text style={styles.grayText}>{rate}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({   
    Container: {
        backgroundColor: gray2,
        borderRadius: 20,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        margin: 5,
    },
    image: {
        width: 55,
        height: 55, 
        borderRadius: 50, 
    },
    TherapistName: {
        fontSize: 20,
        color: '#495258',
        fontWeight: "bold",
    },
    TherapistJob: {
        fontSize: 15,
    },
    grayText: {
        color: "#d4d4d7",
        fontWeight: "bold",
        marginTop: 5,
        fontSize: 15,
    },
})

export default Therapist