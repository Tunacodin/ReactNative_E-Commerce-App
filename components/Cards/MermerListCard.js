import React from 'react'
import { View,Image, TouchableOpacity, Pressable } from 'react-native'
import SmallCard from './SmallCard';



const MermerListCard = () => {
   const width = "31%";
    const height = "45%";
  const br = 10;
  const m = 5;
  const bg = 'white';
  
const smallImages = [
  {
    id: '1',
    image: require('../../src/Images/ev.jpg'),
  },
];
  
  const SmallCard=()=> {
    return (
      <View
        style={{
          width: width,
          height: height,
          borderRadius: br,
          backgroundColor: bg,
          margin: m,
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            borderRadius: br,
            backgroundColor: bg,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              borderRadius: 10,
            }}
            source={require('../../src/Images/ev.jpg')}
          />
        </View>
      </View>
    );
}

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FF9494',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.9,
        elevation: 5,
      }}>
      <View
        style={{
          flex: 1,
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
  
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
      </View>
    </View>
  );
}

export default MermerListCard
