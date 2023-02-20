import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Modal,
  Image,
} from 'react-native';
import {images} from '../images/images';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1faee',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tile: {
    flexBasis: '20%',
    height: 370,
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
  },
  background: {
    borderColor: '#1d3557',
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export const Animations = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    setPosts(images);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.values(images).map(image => (
        <View style={styles.tile}>
          <TouchableHighlight style={styles.highlight}>
            <ImageBackground
              style={{width: '100%', height: '100%'}}
              source={image}
              imageStyle={styles.background}></ImageBackground>
          </TouchableHighlight>
        </View>
      ))}
    </ScrollView>
  );
};

export default Animations;
