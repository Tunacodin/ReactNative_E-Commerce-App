import {Text, Pressable} from 'react-native';
import React from 'react';

const ButtonSecondary = ({text, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: '90%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'grey'}}>{text}</Text>
    </Pressable>
  );
};

export default ButtonSecondary;
