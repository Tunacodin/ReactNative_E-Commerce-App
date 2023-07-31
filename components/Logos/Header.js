import React from 'react'
import { View, Text } from 'react-native'


const Header = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5,
      }}>
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          fontWeight: 'bold',
          fontFamily: 'cursive',
        }}>
        Fenne Design
      </Text>
    </View>
  );
}

export default Header
