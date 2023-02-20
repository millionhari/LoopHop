import React from 'react';
import {Image, View, TouchableHighlight} from 'react-native';

export const ImageExport = ({navigation, lastEventType, uri, position}) => {
  return (
    <View>
      <TouchableHighlight>
        <Image source={require('../images/library.jpg')} />
      </TouchableHighlight>
    </View>
  );
};
