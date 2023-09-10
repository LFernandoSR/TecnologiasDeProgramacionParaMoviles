import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gray1 } from "../constants/colors";

const SymptomCard = ({text, emoji}) => {
    return(
        <View style={styles.symptomsContainer}>
            <Text
                style={{
                    fontSize: 13,
                    fontWeight: "600",
                    color: "#2263df",
                    textAlign: "center",
                    margin: 10,
                }}
            >
            {emoji} {text}
            </Text>                      
        </View>
    );
}

const styles = StyleSheet.create({    
    symptomsContainer: {       
        backgroundColor: gray1,
        margin: 5,
        borderRadius: 10,
        fontSize: 5,
    },
})

export default SymptomCard