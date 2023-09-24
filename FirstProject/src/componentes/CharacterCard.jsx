import { StyleSheet, Text, View, Image } from "react-native"
import { FontAwesome } from '@expo/vector-icons';

const CharacterCard = ({name, status, location, image, gender, species, first}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.picture} source={{uri: image}}/>
            <View style={styles.infoContainer}>
                <Text style={styles.textName}>{name}</Text>
                <View style={{flexDirection: "row"}}>
                    <FontAwesome 
                        name="circle" 
                        size={14} 
                        color= {status == 'Alive' ? '#55cc44' : status == 'Dead' ? '#d63d2e': 'silver'} 
                        style={{marginTop: 5}}
                    />
                    <Text style={styles.textStatus}>{status} - {species}</Text>
                </View>
                <Text style={{color: 'silver', fontWeight:"bold"}}>
                    Last known location: 
                </Text>
                <Text style={styles.textNormal} numberOfLines={3}>{location}</Text>
                <Text style={{color: 'silver', fontWeight:"bold", marginTop: 3,}}>
                    First seen in: 
                </Text>
                <Text style={styles.textNormal} numberOfLines={3}>{first}</Text>
                <Text style={{color: 'white'}}>
                    <Text style={{color:(gender=='Male' ? '#48C2F3': gender=='Female'?'pink':'silver')}}>
                        {gender}
                    </Text>
                </Text>
            </View>
        </View>
    )  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row", 
        backgroundColor: '#3c3e44',
        margin: 7,
        gap: 3,
        height: 180,
        borderRadius: 10,
        alignItems: 'center'
    }, 
    picture: {
        width: 140, 
        height: 180,
        borderRadius: 10
    },
    infoContainer:{
        padding: 6,
    }, 
    textName: {
        fontWeight: "bold",
        color: 'white',
        fontSize: 16
    },
    textStatus: {
        color: 'white',
        marginBottom: 3,
        marginLeft: 10,
        fontSize: 14
    }, 
    textNormal: {
        color: 'white', 
        marginBottom: 2, 
        marginTop: 2, 
        fontSize: 12,
    }
})

export default CharacterCard