import React from 'react';
import {Image} from 'react-native';

export const Video = ({navigation, lastEventType, uri, position}) => {
  return (
    <>
      <Image
        source={require('../images/library.jpg')}
        style={{width: '100%', height: '100%'}}
      />
    </>
  );
};
