import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CardInfo from '../CardInfo';

const Card = ({ info }) => {
  const { name, status, species, image, location, episode, gender } = info;
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} resizeMode='cover' />
      <CardInfo
        name={name}
        status={status}
        species={species}
        location={location}
        episode={episode}
        gender={gender}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#3C3E44',
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 'auto',
    borderRadius: 10,
  },
});