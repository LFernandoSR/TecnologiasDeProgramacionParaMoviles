import { StyleSheet } from 'react-native';

export const LOGO_BUTTON_STYLES = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  image: {
    width: 20,
    height: 20,
  },
});