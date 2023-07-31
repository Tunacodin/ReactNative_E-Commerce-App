import React from 'react'
import { View,Image } from 'react-native'
import SmallCard from './SmallCard';



const MermerListCard = () => {
   const width = 100;
    const height = 100;
  const br = 10;
  const m = 5;
  const bg = 'white';
  
const smallImages = [
  {
    id: '1',
    image: require('../../src/Images/Tepsiler/mermer tek.jpg'),
  },
];
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
        <View
          style={{
            width: width,
            height: height,
            borderRadius: br,
            backgroundColor: bg,
            margin: m,
          }}>
          <Image source={smallImages.image}></Image>
        </View>
        <View
          style={{
            width: 200,
            height: 200,
            borderRadius: br,
            backgroundColor: bg,
            margin: m,
          }}>
          <Image source={smallImages.image}></Image>
        </View>
      </View>
    </View>
  );
}

export default MermerListCard
