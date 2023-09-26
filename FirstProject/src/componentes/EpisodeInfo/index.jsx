import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CharacterInfo from '../CharacterInfo';

const EpisodeInfo = ({ url }) => {
  const [episodeInfo, setEpisodeInfo] = useState([]);

  const labelStyles = { fontSize: 20, width: 150, };

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setEpisodeInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    getApiData();
  }, []);

  return (
    <View style={styles.container}>
      <CharacterInfo
        label='episode'
        text={`#${episodeInfo.id}`}
        labelStyles={labelStyles}
      />
      <CharacterInfo
        label='name'
        text={episodeInfo.name}
        labelStyles={labelStyles}
      />
      <CharacterInfo
        label='air date'
        text={episodeInfo.air_date}
        labelStyles={labelStyles}
      />
    </View>
  );
};

export default EpisodeInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3c3e44',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
});