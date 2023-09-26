import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CharacterInfo from '../componentes/CharacterInfo';
import EpisodeInfo from '../componentes/EpisodeInfo';

const Character = ({ navigation, route }) => {
  const {
    item: { image, name, status, species, location, episode, gender },
  } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imcontainer}>
        <Image source={{ uri: image }} style={styles.image} resizeMode='cover' />
      </View>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <CharacterInfo label='name:' text={name} />
        <CharacterInfo label='specie:' text={species} />
        <CharacterInfo label='gender:' text={gender} />
        <CharacterInfo label='status:' text={status} color={ status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray'}/>
        <CharacterInfo label='last location:' text={location.name} />
        <CharacterInfo label='total episodes:' text={episode.length} />
        <Text style={[styles.text, { fontWeight: 'bold' }]}>
          List of episodes:
        </Text>
      </ScrollView>
      <FlatList
        data={episode}
        renderItem={({ item }, key) => {
          return <EpisodeInfo url={item} key={key} />;
        }}
        style={{ height: 250, paddingHorizontal: 10, paddingTop: 10 }}
      />
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272B33',
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginVertical: 20,
  },
  imcontainer:{
    justifyContent: 'center',
    alignItems: 'center'
  }
});