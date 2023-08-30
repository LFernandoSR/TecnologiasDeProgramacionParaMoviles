import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { INPUT_STYLES } from '../../constants/InputStyles';
import { REDIRECT_STYLES } from '../../constants/RedirectStyles';

const StyledPassInput = () => {
  return (
    <>
      <View style={INPUT_STYLES.container}>
        <Text style={INPUT_STYLES.label}>Password</Text>
        <TextInput
          style={INPUT_STYLES.input}
          placeholder='Write your password here'
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity>
        <Text style={[REDIRECT_STYLES.redirect, { textAlign: 'right' }]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default StyledPassInput;
