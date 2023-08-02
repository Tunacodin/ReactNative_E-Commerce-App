import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../../components/Logos/Header';
import MermerListCard from '../../../../components/Cards/MermerListCard';
import AhsapListCard from '../../../../components/Cards/AhsapListCard';
import SmallCard from '../../../../components/Cards/SmallCard';
import Carousel from '../../../../components/Carousel/Carousel';


const CategoryScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: 5,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#e91e63',
              margin: 5,
              paddingTop: 10,
              borderRadius: 10,
              padding: 5,
              elevation: 10,
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '900',
                color: '#fff',
                fontFamily: 'cursive',
                textAlign: 'center',
                letterSpacing: 1,
              }}>
              Çok Talep Edilenler
            </Text>
          </View>
          <View
            style={{
              flex: 3,
              borderColor: 'rgba(0,0,0,0.4)',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <View
              style={{
                borderWidth: 1,
                height: 200,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                shadowColor: 'black',
                backgroundColor: 'grey',
                shadowOpacity: 1,
                shadowRadius: 15,
                shadowOffset: {width: 8, height: 3},
                elevation: 20,
                marginBottom: 10,
              }}>
              <Carousel />
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '900',
                color: 'rgba(0,0,0,0.7)',
                marginVertical:15,
                fontFamily: 'cursive',
                textAlign: 'center',
                textDecorationLine: 'underline',
                letterSpacing: 1,
              }}>
              Fenne 1. Katalog
            </Text>
          </View>
          <MermerListCard />
          <View
            style={{
            marginVertical:15,
          }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '900',
                color: 'rgba(0,0,0,0.7)',
                fontFamily: 'cursive',
                textAlign: 'center',
                textDecorationLine: 'underline',
                letterSpacing: 1,
              }}>
              Fenne 2. Katalog
            </Text>
          </View>
          <AhsapListCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryScreen;
