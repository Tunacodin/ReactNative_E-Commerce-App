import React from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../../components/Logos/Header';
import MermerListCard from '../../../../components/Cards/MermerListCard';
import AhsapListCard from '../../../../components/Cards/AhsapListCard';
import SmallCard from '../../../../components/Cards/SmallCard';
import Carousel from '../../../../components/Carousel/Carousel';
import {useFonts} from 'react-native-google-fonts';

const {width} = Dimensions.get('window');
const CategoryScreen = () => {
  return (
    <SafeAreaView>
      <Header />

      <ScrollView>
        <View
          style={{
            padding: 5,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Poppins-MediumItalic',
              color: '#000',
              paddingLeft: 5,
            }}>
            Katalog
          </Text>
          <MermerListCard />
        </View>

        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: 'grey',
            margin: 5,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Poppins-MediumItalic',
              color: '#000',
            }}>
            Pek Yakında Üretimde
          </Text>
          <AhsapListCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryScreen;
