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

// const GridFeed = () => {
//   const [posts, setPosts] = useState({});

//   useEffect(()=> {
//     fetch('https://www.reddit.com/r/pic/top.json?t=year')
//       .then(response => response.json())
//       .then(json => {
//         const posts = json.data.children.map(child => child.data);
//         setPosts(posts);
//       });
//   })

//   <ScrollView contentContainerStyle={styles.container}>
//     {posts.map(post => (
//       <View style={styles.tile} key={post.id}>
//         <TouchableHighlight
//           style={styles.highlight}
//           underlayColor="#a8dadc"
//           // We use onPress to open Modal and to set selected image url to state
//           onPress={() =>
//             this.setState({modalVisible: true, selectedImage: post.url})
//           }>
//           <ImageBackground
//             style={{width: '100%', height: '100%'}}
//             source={{uri: post.thumbnail}}
//             imageStyle={styles.background}
//           />
//         </TouchableHighlight>
//         <Text style={styles.title}>{post.title}</Text>
//       </View>
//     ))}
//     <Modal
//       animationType={'fade'}
//       transparent={true}
//       visible={this.state.modalVisible}
//       onRequestClose={() => this.setState({modalVisible: false})}>
//       {/*there is a bug in react native tv os: modal will not close properly, unless you wrap it's content into TouchableHighlight */}
//       <TouchableHighlight
//         activeOpacity={1}
//         onPress={() => this.setState({modalVisible: false})}>
//         <Image
//           source={{uri: this.state.selectedImage}}
//           style={{width: '100%', height: '100%'}}
//         />
//       </TouchableHighlight>
//     </Modal>
//   </ScrollView>;
// }

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
