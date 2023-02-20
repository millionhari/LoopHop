import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import {images} from '../images/images';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 150,
    marginBottom: 150,
    // width: '90%',
  },
  tile: {
    flexBasis: '33.3%',
    height: 550,
    marginTop: 10,
    marginBottom: 20,
    padding: 25,
  },
  background: {
    borderColor: '#1d3557',
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  highlight: {
    borderRadius: 20,
  },
});

export const Animations = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    setPosts(images);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      automaticallyAdjustContentInsets={false}
      contentInset={{bottom: 175}}
      // contentInsetAdjustmentBehavior="automatic"
      // directionalLockEnabled={true}
      // horizontal={true}
      centerContent={true}
      automaticallyAdjustsScrollIndicatorInsets={false}>
      {Object.values(images).map(image => (
        <View style={styles.tile} key={image}>
          <TouchableOpacity
            activeOpacity={0.9}
            tvParallaxProperties={{
              enabled: true,
              magnification: 1.07,
              tiltAngle: -0.02,
              pressMagnification: 0.99,
            }}>
            <ImageBackground
              style={{width: '100%', height: '100%'}}
              source={image}></ImageBackground>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default Animations;
