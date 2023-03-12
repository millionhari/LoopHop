import React, {useState, useEffect, useRef} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Modal,
  Platform,
  useTVEventHandler,
  TabBarIOS,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Video} from './components/Video';
import {ImageExport} from './components/ImageExport';
import {Clock} from './components/Clock';
import {Animations} from './components/Animations';
import {images} from './images/images';
const Item = TabBarIOS.Item;
const DEFAULT_ANIMATION = images.library;

const TvApp = () => {
  const [loopable, setLoopable] = useState(DEFAULT_ANIMATION);
  const nowPlaying = useRef();

  // const myTVEventHandler = evt => {
  // setLastEventType(evt.eventType);
  // if (evt.eventType === "swipeRight") {
  //   navigation.navigate('forest', {title: 'forest'});
  // }
  // };
  // if (Platform.isTV) {
  //   useTVEventHandler(myTVEventHandler);
  // }

  return (
    <TabBarIOS showHideTransition={true}>
      <Item
        title="Now Playing"
        onPress={() => {
          console.log('pressed now playing');
        }}
        ref={nowPlaying}>
        <View>
          <Clock />
          <Video loopable={loopable} />
        </View>
      </Item>
      <Item title="Animations" showHideTransition={true}>
        <Animations setLoopable={setLoopable} nowPlaying={nowPlaying} />
      </Item>
    </TabBarIOS>
  );
};

class App extends React.Component {
  render() {
    return <TvApp />;
  }
}

export default App;
