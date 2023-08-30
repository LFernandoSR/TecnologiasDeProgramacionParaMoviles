import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { BUTTON_STYLES } from '../../constants/ButtonStyles';

const StyledButton = () => {
  return (
    <View>
      <TouchableOpacity style={BUTTON_STYLES.button}>
        <Text style={BUTTON_STYLES.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StyledButton;

const styles = StyleSheet.create({});
