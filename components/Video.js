import React from 'react';
import {Image} from 'react-native';

export const Video = ({loopable}) => {
  return (
    <>
      <Image
        source={loopable}
        style={{width: '100%', height: '100%'}}
      />
    </>
  );
};
