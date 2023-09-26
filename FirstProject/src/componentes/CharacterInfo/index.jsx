import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CharacterInfo = ({ label, text, color, labelStyles, textStyles }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, labelStyles && labelStyles]}>{label}</Text>
      <Text style={[styles.text, color && { color }, textStyles && textStyles]}>
        {text}
      </Text>
    </View>
  );
};

export default CharacterInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5
  },
  label: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    fontVariant: ['small-caps'],
    width: 150,
  },
  text: {
    color: 'white',
    fontSize: 17,
    width: 200,
    textAlign: 'right',
  },
});