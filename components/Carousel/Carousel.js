import React from 'react'
import { Image,Dimensions, ScrollView,View, Pressable,TouchableOpacity } from 'react-native'



const {WIDTH} = Dimensions.get("window");
const Carousel = () => {


  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      style={{
        backgroundColor: 'black',

        height: 250,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
      }}>
      <TouchableOpacity
        onPress={() => console.log('pressed')}
        activeOpacity={0.6}
        delayPressIn={70}
        style={{
          WIDTH,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../src/Images/set2.png')}
          style={{
            width: 380,
            height: 200,
            resizeMode: 'cover',
          }}></Image>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        delayPressIn={70}
        style={{
          WIDTH,
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 2,
        }}>
        <Image
          source={require('../../src/Images/aksesuar.png')}
          style={{
            width: 400,
            height: 200,
            resizeMode: 'cover',
          }}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        delayPressIn={70}
        style={{
          WIDTH,
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 2,
        }}>
        <Image
          source={require('../../src/Images/siyahtepsi.png')}
          style={{
            width: 390,
            height: 200,
            resizeMode: 'cover',
          }}></Image>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Carousel


