import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { INPUT_STYLES } from '../../constants/InputStyles';

export default function StyledEmailInput() {
  return (
    <View style={INPUT_STYLES.container}>
      <Text style={INPUT_STYLES.label}>Email</Text>
      <TextInput style={INPUT_STYLES.input} placeholder='Write your email here' />
    </View>
  );
}