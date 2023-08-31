import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { THEME } from "../../componentes/theme/colors";
//import { facebookImage, googleImage } from "../../../assets";
import StyledLogoButton from '../StyleLogo';

export default function LoginConten() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} value="fernando.sanchez@gmail.com" />
        <TextInput style={styles.input} secureTextEntry={true} />
        <Text style={styles.text}>Forgot password?</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', gap : 20 }}>
        <View style={styles.line}></View>
        <Text style={{ fontWeight: 'bold' }}>Or login with</Text>
        <View style={styles.line}></View>
      </View>
      <View styles={{ flexDirection: 'row'}}>
        <StyledLogoButton text={'Google'} />
        <StyledLogoButton text={'Facebook'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  form: {
    gap: 20,
    marginBottom : 30,
    backgroundColor: '#fff'
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 60,
    borderColor: THEME.COLORS.GRAY,
    paddingHorizontal: 20,
    fontSize: 17,
    fontWeight: 'bold',
    backgroundColor: '#fff'
  },
  text: {
    color: THEME.COLORS.GREEN_DARK,
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 16
  },
  button: {
    backgroundColor: THEME.COLORS.GREEN_LIGTH,
    height: 60,
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: THEME.COLORS.DARK_BLUE
  },
  line: {
    borderBottomWidth: 1,
    flex: 1,
    borderColor: THEME.COLORS.GRAY,
    marginBottom: 8
  },
  image: {
    height: 20,
    width: 20
  },
})