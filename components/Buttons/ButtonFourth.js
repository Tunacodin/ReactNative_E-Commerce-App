import {Text, Pressable} from 'react-native';
import React from 'react';

const ButtonFourth = ({yazı, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: '#A076F9',
        width: '90%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white'}}>{yazı}</Text>
    </Pressable>
  );
};

export default ButtonFourth;
