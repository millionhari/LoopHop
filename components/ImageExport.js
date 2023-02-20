import React from 'react';
import {Image} from 'react-native';

export const ImageExport = ({navigation, lastEventType, uri, position}) => {
  return (
    <>
      <Image source={require('../images/library.jpg')} />
    </>
  );
};
