import {Text, Pressable} from 'react-native';
import React from 'react';

const ButtonSecondary = ({yazı, onPress}) => {
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
      <Text style={{color: 'grey'}}>{yazı}</Text>
    </Pressable>
  );
};

export default ButtonSecondary;
