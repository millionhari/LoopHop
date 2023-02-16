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
const Stack = createNativeStackNavigator();
const Item = TabBarIOS.Item;

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
    <TabBarIOS>
      <Item
        title="Now Playing"
        onPress={() => {
          console.log('pressed');
        }}
        isTvSelectable={true}>
        <Video uri="https://i0.wp.com/www.mattvince.com/wp-content/uploads/2019/04/Lake-Hylia_thumb.jpg?fit=768%2C432&ssl=1" />
      </Item>
      <Item title="Animations">
        <Video uri="https://wallpaperaccess.com/full/42613.jpg" />
      </Item>
    </TabBarIOS>
  );
};
class App extends React.Component {
  state = {
    posts: [],
  };

  render() {
    return <TvApp />;
  }
}

export default App;
