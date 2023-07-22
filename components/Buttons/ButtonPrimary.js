import { Text, Pressable} from 'react-native';
import React from 'react';

const ButtonPrimary = ({yazı,onPress}) => {
    return (
        <Pressable
        
      onPress={onPress}
      style={{
        backgroundColor: '#FE2F5C',
        width: '90%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
          }}>
        <Text style={{ color: 'white' }}>{yazı}</Text>
        
    </Pressable>
  );
};

export default ButtonPrimary;
