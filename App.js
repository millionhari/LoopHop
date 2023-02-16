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
  Platform,
  useTVEventHandler,
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
const Stack = createNativeStackNavigator();

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

const Hylia = ({navigation, lastEventType}) => {
  // setTimeout(()=> {
  //   navigation.navigate('forest', {title: 'forest'});
  // }, 2000)
  if (lastEventType === 'swipeRight') {
    console.log('scrolling right');
    navigation.navigate('forest', {title: 'forest'});
  }
  return (
    <>
      <Text>{lastEventType}</Text>
      <Image
        source={{
          uri: 'https://i0.wp.com/www.mattvince.com/wp-content/uploads/2019/04/Lake-Hylia_thumb.jpg?fit=768%2C432&ssl=1',
        }}
        style={{width: '100%', height: '100%'}}
      />
    </>
  );
};

const Forest = ({navigation, lastEventType}) => {
  // setTimeout(() => {
  //   navigation.navigate('hylia', {title: 'hylifa'});
  // }, 2000);
  if (lastEventType === 'swipeLeft') {
    navigation.navigate('hylia', {title: 'hylia'});
  }
  return (
    <Image
      source={{
        uri: 'https://wallpaperaccess.com/full/42613.jpg',
      }}
      style={{width: '100%', height: '100%'}}
    />
  );
};

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
    <NavigationContainer>
      <Text>{lastEventType}</Text>
      <Stack.Navigator>
        <Stack.Screen
          name="hylia"
          options={{
            lastEventType: 'hello',
          }}>
          {props => <Hylia {...props} lastEventType={lastEventType} />}
        </Stack.Screen>
        <Stack.Screen
          name="forest"
          options={{
            lastEventType: 'hello',
          }}>
          {props => <Forest {...props} lastEventType={lastEventType} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
