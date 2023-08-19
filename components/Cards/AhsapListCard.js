import React from 'react';
import {View} from 'react-native';
import SmallCard from './SmallCard';

const AhsapListCard = () => {
  return (
    <View
      style={{
        flex: 8,
        padding: 5,
        borderRadius: 10,
        marginBottom: 60,
      }}>
      <SmallCard
        source={require('../../src/Images/dekor.png')}
        text="Aydınlatma Ürünleri"
      />

      <SmallCard
        source={require('../../src/Images/sunum.png')}
        text="Hediyelikler"
      />
      <SmallCard
        source={require('../../src/Images/set2.png')}
        text="Ahsap Ürünler"
      />
      <SmallCard
        source={require('../../src/Images/aksesuar.png')}
        text="Sunum Ürünleri"
      />
      <SmallCard
        source={require('../../src/Images/siyahtepsi.png')}
        text="Masa Lambası"
      />
    </View>
  );
};

export default AhsapListCard;
