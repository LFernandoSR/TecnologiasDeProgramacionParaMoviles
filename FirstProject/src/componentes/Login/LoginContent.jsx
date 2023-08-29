import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import StyledEmailInput from '../StyleCorreoIn';
import StyledPassInput from '../StylePasswordIn';
import StyledButton from '../StyleButton';
import StyledLogoButton from '../StyleLogo';

export default function LoginContent() {
  return (
    <View style={styles.container}>
      <StyledEmailInput />
      <StyledPassInput />
      <StyledButton />
      <View style={styles.containerTextLine}>
        <Text style={styles.textLine}>Or login with</Text>
      </View>
      <View style={styles.containerButtons}>
        <StyledLogoButton text={'Google'} />
        <StyledLogoButton text={'Facebook'} />
      </View>

      <Text>
        Don't have an account?{' '}
        <TouchableOpacity>
          <Text>Register</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
    paddingHorizontal: 25,
    paddingTop: 40,
    gap: 25,
  },
  textLine: {
    top: -10,
    position: 'absolute',
    marginHorizontal: 'auto',
    zIndex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  containerTextLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    alignItems: 'center',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});