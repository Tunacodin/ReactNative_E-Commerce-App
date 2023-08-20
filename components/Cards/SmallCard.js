import React from 'react';
import {ImageBackground, View, Text, TouchableOpacity} from 'react-native';

const SmallCard = ({text, source}) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View
        style={{
          width: '100%',
          height: 100,
          marginVertical: 3,
          shadowColor: '#000',
          borderRadius: 4,
          shadowRadius: 2,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          elevation: 4,
          overflow: 'hidden',
        }}>
        <ImageBackground
          source={source}
          resizeMode="cover"
          style={{flex: 1, justifyContent: 'center'}}>
          <Text
            style={{
              flex: 1,
              color: 'white',
              fontSize: 20,
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
              textAlignVertical: 'center',
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}>
            {text}
          </Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default SmallCard;
