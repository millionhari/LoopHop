import React, {useState, useEffect} from 'react';
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
const Item = TabBarIOS.Item;

const TvApp = () => {
  const [lastEventType, setLastEventType] = useState('');

  const myTVEventHandler = evt => {
    setLastEventType(evt.eventType);
    // if (evt.eventType === "swipeRight") {
    //   navigation.navigate('forest', {title: 'forest'});
    // }
  };
  if (Platform.isTV) {
    useTVEventHandler(myTVEventHandler);
  }
  return (
    <TabBarIOS showHideTransition={true}>
      <Item
        title="Now Playing"
        onPress={() => {
          // console.log('pressed');
        }}
        isTvSelectable={true}>
        <Clock />
        <Video />
      </Item>
      <Item title="Animations">
        <Animations />
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
