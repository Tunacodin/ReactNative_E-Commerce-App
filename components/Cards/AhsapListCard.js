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
      <SmallCard source={require('../../src/Images/set2.png')} text="Setler" />
      <SmallCard
        source={require('../../src/Images/siyahtepsi.png')}
        text="Tepsiler"
      />
      <SmallCard
        source={require('../../src/Images/dekor.png')}
        text="Dekorasyon"
      />

      <SmallCard source={require('../../src/Images/sunum.png')} text="Sunum" />
      <SmallCard
        source={require('../../src/Images/aksesuar.png')}
        text="Aksesuar"
      />
    </View>
  );
};

export default AhsapListCard;
