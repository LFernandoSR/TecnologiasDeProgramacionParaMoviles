import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ArticleCard = ({text, emoji}) => {
    return(
        <View style={styles.articleContainer}>
            <Text
                style={{
                    fontSize: 14,
                    fontWeight: "600",
                    color: "#8c8c8c",
                    textAlign: "center",
                    margin: 15,
                }}
            >
            {text}{emoji} 
            </Text>                      
        </View>
    );
}

const styles = StyleSheet.create({    
    articleContainer: {       
        backgroundColor: "#ffffff",
        margin: 5,
        borderRadius: 10,
        fontSize: 5,
    },
})

export default ArticleCard