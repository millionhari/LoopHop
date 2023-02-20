import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

const style = {
  container: {
    position: 'absolute',
    top: 0,
    left: 30,
    right: 0,
    bottom: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    zIndex: 4,
  },
  font: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
  },
};

export const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [showColon, setShowColon] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setShowColon(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  let colonTransparency;

  colonTransparency = showColon ? 'white' : 'transparent';

  return (
    <View style={style.container}>
      <Text style={style.font}>
        {formattedHours }
        <Text style={{color: colonTransparency}}>:</Text>
        {formattedMinutes + ' '}
        {amPm}
      </Text>
    </View>
  );
};
