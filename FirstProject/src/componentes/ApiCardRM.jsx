import { StyleSheet, Text, View, Image } from "react-native"

const ApiCardRM = ({name, affiliation, image, enemies, allies}) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.picture}
                source={{uri: image}}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.textName}>{name}</Text>
                <Text style={{color: 'silver', fontWeight:"bold", marginTop: 10}}>
                    Reino: 
                </Text>
                <Text style={styles.textNormal}>{affiliation}</Text>
                <Text style={{color: 'silver', fontWeight:"bold"}}>
                    Enemigos: 
                </Text>
                <Text style={styles.textNormal}>{enemies}</Text>
                <Text style={{color: 'silver', fontWeight:"bold"}}>
                    Aliados: 
                </Text>
                <Text style={styles.textNormal}>{allies}</Text>             
            </View>
       </View>
    )  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row", 
        backgroundColor: '#3c3e44',
        margin: 5,
        borderRadius: 50,
        marginBottom: 10
    }, 
    scrollContainer: {
        paddingHorizontal: 5, 
    },
    picture: {
        width: 150, 
        height: 300,
        borderRadius: 10
    },
    infoContainer:{
        padding: 10, 
        borderRadius: 20,
        width: 'auto'    
    }, 
    textName: {
        fontWeight: "bold",
        color: 'white',
        fontSize: 18
    },
    textNormal: {
        color: 'white', 
        marginBottom: 10, 
        marginTop: 3, 
        gap: 5,
        fontSize: 15,
        width: 190
    }
})

export default ApiCardRM