import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LOGO_BUTTON_STYLES } from '../../constants/ButtonStyles';

const StyledLogoButton = ({ text }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    switch (text) {
      case 'Facebook': {
        setImage(require('../../../assets/Facebook.png'));
        break;
      }
      case 'Google': {
        setImage(require('../../../assets/Google.png'));
        break;
      }
      default: {
        setImage(require('../../../assets/favicon.png'));
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
