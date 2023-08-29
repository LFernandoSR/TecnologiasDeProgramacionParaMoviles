import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LOGO_BUTTON_STYLES } from '../../constants/ButtonStyle';

const StyledLogoButton = ({ text }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    switch (text) {
      case 'Facebook': {
        //me falto la imagen
        break;
      }
      case 'Google': {
        //me falto la imagen
        break;
      }
      default: {
        //me falto la imagen
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