//* Librerias a instalar
//npx expo install expo-file-system
//npx expo install expo-sharing
//npx expo install expo-media-library
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Camara from './src/Components/Camara';
import Home from './src/Screens/Home';
import { useState } from 'react';
import VideoCamara from './src/components/VideoCamara';

export default function App() {
  const [camera, setCamera] = useState(false);
  const [video, setVideo] = useState(false);

  const handleCamera = () => {
    setCamera((prev) => !prev);
    setVideo(false);
  };

  const handleVideo = () => {
    setVideo((prev) => !prev);
    setCamera(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      {/* <Camara /> */}
      <Home setCamera={handleCamera} setVideo={handleVideo} />
      {camera && <Camara />}
      {video && <VideoCamara />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});