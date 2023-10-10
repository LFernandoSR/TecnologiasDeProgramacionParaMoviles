import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ArticleCard = ({text}) => {
    return(
        <View style={styles.articleContainer}>
            <Text
                style={{
                    fontSize: 14,
                    fontWeight: "600",
                    color: "white",
                    textAlign: "center",
                    margin: 15
                }}
            >
            {text}
            </Text>                      
        </View>              
    );
}

const styles = StyleSheet.create({    
    articleContainer: {       
        backgroundColor: "#21b3b2",
        margin: 5,
        borderRadius: 15,
    },
})

export default ArticleCard