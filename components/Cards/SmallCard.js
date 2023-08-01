import React from 'react'
import {ImageBackground, View, Text, TouchableOpacity} from 'react-native';

const SmallCard = ({text,source}) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View
        
        style={{
          width: '100%',
          height: 100,
          marginVertical: 3,
          shadowColor: '#000',
          borderRadius: 4,
          shadowOffset: {
            width: 5,
            height: 5,
          },
          shadowOpacity: 0.25,
          elevation: 5,
          
        }}>
        <ImageBackground
          source={source}
          resizeMode="cover"
          
          style={{flex: 1, justifyContent: 'center'}}>
          <Text
            style={{
              flex: 1,
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
              fontFamily: 'cursive',
              textAlign: 'center',
              textAlignVertical: 'center',
              backgroundColor: 'rgba(0,0,0,0.6)',
            }}>
            {text}
          </Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

export default SmallCard
