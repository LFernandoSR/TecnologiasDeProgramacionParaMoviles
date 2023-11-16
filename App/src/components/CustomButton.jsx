import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

function CustomButton({ text, onPress }) {
  return (
    <TouchableOpacity
      style={{
        borderRadious: 5,
        width: 85,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFA420',
        borderRadius: 5,
        padding: 5,
      }}
      onPress={onPress}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
