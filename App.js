import React from 'react';
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

const Hylia = () => {
  return (
    <Image
      source={{
        uri: 'https://i0.wp.com/www.mattvince.com/wp-content/uploads/2019/04/Lake-Hylia_thumb.jpg?fit=768%2C432&ssl=1',
      }}
      style={{width: '100%', height: '100%'}}
    />
  );
};

const Forest = () => {
  return (
    <Image
      source={{
        uri: 'https://wallpaperaccess.com/full/42613.jpg',
      }}
      style={{width: '100%', height: '100%'}}
    />
  );
};
class App extends React.Component {
  state = {
    posts: [],
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="hylia"
            component={Hylia}
            options={{
              title: 'lake hylia',
            }}
            onPress={() => navigation.navigate('forest', {title: 'forest'})}
          />
          <Stack.Screen
            name="forest"
            component={Forest}
            options={{
              title: 'forest',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
