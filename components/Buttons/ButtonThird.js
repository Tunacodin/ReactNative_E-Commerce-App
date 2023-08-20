import {Text, Pressable} from 'react-native';
import React from 'react';

const ButtonThird = ({yazı, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        width: '90%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'darkblue',
      }}>
      <Text style={{color: 'darkblue'}}>{yazı}</Text>
    </Pressable>
  );
};

export default ButtonThird;
