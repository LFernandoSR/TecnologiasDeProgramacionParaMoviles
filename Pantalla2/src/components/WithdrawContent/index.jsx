import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from '../../theme/color';

const {NARANJA1, NARANJALUZ} = THEME.COLORS

export default function WithdrawContent() {
  return (
    <View style={styles.container}>

        <View style = {styles.container1}>
            <View style = {styles.container12}>
                <Text style = {styles.texto1}>
                    Current Wallet balance
                </Text>
                <Text style = {styles.textoBalance}>
                    $23,867
                </Text>
            </View>
            <View style = {styles.plus}>
                <TouchableOpacity>
                    <MaterialCommunityIcons 
                      name="plus-thick" 
                      size={30} 
                      style = {styles.plusIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>

        <View style = {styles.container2}>
            <Text style = {styles.texto1}>
                    Withdraw Amount
            </Text>
            <Text style = {styles.textoMonto}>
                   $19,29.<Text style = {{opacity: 0.2}}>00</Text>
            </Text>
        </View>

        <View style = {styles.container3}>
          <View style = {styles.filaNumeros}>
            <TouchableOpacity>
             <Text style = {styles.numero}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style = {styles.numero}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style = {styles.numero}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style = {styles.numero}>4</Text>
            </TouchableOpacity>
          </View>
          <View style = {styles.filaNumeros}>
            <TouchableOpacity>
             <Text style = {styles.numero}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style = {styles.numero}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style = {styles.numero}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style = {styles.numero}>8</Text>
            </TouchableOpacity>
          </View>
          <View style = {styles.filaNumeros}>
            <TouchableOpacity>
            <MaterialCommunityIcons 
              name="restart" 
              color="black" 
              style = {styles.numero}
            />
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style = {styles.numero}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style = {styles.numero}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Ionicons 
              name="ios-close"  
              color="black" 
              style = {styles.numero}
            />
            </TouchableOpacity>
          </View>
            
           
        </View>

        <View style = {{alignItems: 'center', padding: 10}}>
            <View style = {styles.container4}>
                <View style = {styles.flecha}>
                    <TouchableOpacity>
                    <Ionicons 
                    name="md-arrow-forward-outline" 
                    size={25} 
                    color={NARANJA1} 
                    />
                    </TouchableOpacity>
                </View>
                <Text style = {styles.texto4}>
                        Swipe to withdraw
                </Text>
            </View>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 20,
    flexDirection: 'column',
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 30,
  },
  container1: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 10,
  },
  container12: {
    flexDirection: 'column',
  },
  texto1: {
    opacity: 0.5,
    color: 'black',
    marginBottom: 10,
  },
  textoBalance: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25
  }, 
  plus: {
    backgroundColor: NARANJALUZ,
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: 'center',
    padding: 8,
  },
  plusIcon: {
    color: NARANJA1,
  },
  container2: {
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  textoMonto: {
    color: NARANJA1,
    fontWeight: 'bold',
    fontSize: 30
  },
  container3: {
    alignItems: 'center',
    margin: 20,
  },
  container4: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: NARANJA1,
    width: '80%',
    height: 60,
    borderRadius: 30,
    paddingTop: 1,
    justifyContent: 'center',
    marginBottom: 20,
  }, 
  texto4: {
    color: 'white',
    fontSize: 15, 
    marginRight: 20,
  },
  flecha: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 45,
    height: 45,
    padding: 9,
    marginRight: 30,
  },
  numero: {
    fontSize: 25,
    margin: 10,
    borderWidth: 1,
    borderColor: 'silver',
    padding: 5,
    borderRadius: 30,
    width: 50,
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  filaNumeros: {
    flexDirection: 'row',

  }
});