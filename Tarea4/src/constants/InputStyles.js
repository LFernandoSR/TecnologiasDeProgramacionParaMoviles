import { StyleSheet } from 'react-native';

export const INPUT_STYLES = StyleSheet.create({
  label: {
    color: 'gray',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'absolute',
    left: 10,
    top: -8,
    backgroundColor: '#FFF',
    zIndex: 1,
  },
  input: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  container: {
    position: 'relative',
  },
});
