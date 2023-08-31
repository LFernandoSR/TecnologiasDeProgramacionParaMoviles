import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LOGO_BUTTON_STYLES } from '../../constants/ButtonStyle';

const StyledLogoButton = ({ text }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    switch (text) {
      case 'Facebook': {
        setImage(require('../../../assets/google.png'));
        break;
      }
      case 'Google': {
        setImage(require('../../../assets/facebook.png'));
        break;
      }
      default: {
        break;
      }
    }
  }, [text]);

  return (
    <TouchableOpacity style={LOGO_BUTTON_STYLES.button}>
      <Image style={LOGO_BUTTON_STYLES.image} source={image} />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default StyledLogoButton;