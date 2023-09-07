import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme/color';
import { Feather, MaterialIcons } from '@expo/vector-icons';


export default function WithdrawHeader() {
  return (
    <View style = {styles.container}>
        <View style={styles.container1}>
            <TouchableOpacity>
                <MaterialIcons name="keyboard-arrow-left" size={30} color="white" />
            </TouchableOpacity>
            <Text style = {styles.textoTitulo1}>
                 Withdraw Money
            </Text>
            <TouchableOpacity>
                <Feather name="star" size={24} color="white" />
            </TouchableOpacity>  
        </View>

        <View style = {styles.container2}>
            <Text>
                Exchange
            </Text>
        </View>
           
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: THEME.COLORS.NARANJA1,
        height: '70%',
        alignItems: 'center',
        
    },
    container1: {
    flexDirection: 'row',
    padding: 30, 
    paddingTop: 40,
    justifyContent: 'space-between',
    marginBottom: 20,
    },
    textoTitulo1: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginLeft: 60,
    marginRight: 60,
    },
    container2: {
    backgroundColor: 'white',
    opacity: 0.5,
    width:  '75%',
    alignItems: 'left',
    padding: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30, 

    }
});